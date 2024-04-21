import styled from 'styled-components';
import { FC, ReactNode, RefObject, useEffect, useRef, useState } from 'react';

/** Menu 사용방법
 * 1. 특정 컴포넌트에 useMenuController 커스텀 훅 호출
 * 2. <Menu>, <MenuElement> 로 메뉴 구성할 것
 * 3. useMenuController 의 isOpen, buttonRef, openMenu 을 <Menu> 에 전달
 * -- 예시는 MenuOrganism.tsx 파일에서 확인 --
 */

export interface MenuItemProps {
  onClick: () => void;
  menuName: string;
}

export interface MenuProps {
  isOpen: boolean;
  menuButton: ReactNode;
  children: ReactNode;
}

/** Menu 를 컨트롤하기 위한 커스텀 훅
 * 1. isOpen : boolean - Menu 를 on&off 하기 위한 상태
 * 2. buttonRef : RefObject<HTMLButtonElement> - MenuButton 과 Menu 연결시 사용, MenuButton 에 ref 전달 필수
 * 3. openMenu : () => void - Menu 활성화 시 사용, MenuButton 의 onClick 에 전달
 * */
export function useMenuController(): [boolean, RefObject<HTMLButtonElement>, () => void] {
  const [isOpen, setOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  function handleClick(event: any) {
    /** 클릭한 요소가 MenuButton 와 다른 요소일 경우 Menu 를 비활성화
     */
    if (buttonRef?.current !== null && !buttonRef.current.contains(event.target)) {
      setOpen((prev) => !prev);
    }
  }
  useEffect(() => {
    /** 상황 1. Menu 컴포넌트 활성화
     * - Menu 가 활성화 된 경우 전체 페이지 스크롤 비활성화 & window 에 클릭 이벤트 추가
     */
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('click', handleClick);
    }

    /** 상황 2. Menu 컴포넌트 비활성화
     * - 다시 페이지 스크롤 활성화 & 컴포넌트 언마운트 때 window 에 추가한 이벤트 제거(메모리 누수 방지)
     */
    return () => {
      document.body.style.overflow = 'scroll';
      window.removeEventListener('click', handleClick);
    };
  }, [isOpen]);

  function openMenu() {
    setOpen((prev) => !prev);
  }

  return [isOpen, buttonRef, openMenu];
}

export const Menu: FC<MenuProps> = ({ isOpen, children, menuButton }) => {
  return (
    <StyledMenuContainer>
      {menuButton}
      {isOpen && <StyledMenuGroup>{children}</StyledMenuGroup>}
    </StyledMenuContainer>
  );
};

export const MenuItem: FC<MenuItemProps> = (props) => {
  return <StyledMenuItem onClick={props.onClick}>{props.menuName}</StyledMenuItem>;
};

const StyledMenuContainer = styled.div`
  display: flex;
  position: relative;
`;

const StyledMenuGroup = styled.div`
  position: absolute;
  top: 0;
  left: calc(100% + 12px);
  flex-direction: column;
  padding: 6px 0;
  border-radius: 4px;
  background: ${({ theme }) => theme.system.color.common.surfaceHighest};
`;

const StyledMenuItem = styled.li`
  display: flex;
  min-width: 180px;
  padding: 6px 0 6px 10px;
  align-items: center;
  gap: 10px;

  font-size: ${({ theme }) => theme.system.fontSize.text.sm};
  color: ${({ theme }) => theme.system.color.common.textNegative};

  &:hover {
    background: ${({ theme }) => theme.system.color.systemThemeColor.primary};
  }
`;
