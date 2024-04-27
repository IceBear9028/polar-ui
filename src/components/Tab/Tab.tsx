import React, { MouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

/** Tab 사용방법
 * 1. Tab 을 감싸기 위한 Container 컴포넌트 하나 생성
 * 2. Container 내부에 <Tab>, <TabPage> 를 조합
 * @example
 * const Container = () => {
 *   ...
 *   return(
 *     <Tab>
 *       <TabPage name="Test1" component={<AnotherComp1 />} />
 *       <TabPage name="Test2" component={<AnotherComp2 />} />
 *       ...
 *     <Tab>
 *   )
 * }
 */

interface TabProps {
  children: ReactElement<typeof TabPage> | ReactElement<typeof TabPage>[];
  isTabPadding?: boolean;
  width?: number | 'auto';
  height?: number | 'auto';
}

interface TabPageProps {
  name: string;
  component: ReactElement;
}

interface TabButtonProps {
  focus: boolean;
  tabName: string;
  onClick: () => void;
}

/** Tab
 * @param {isTabPadding}, (isTabPadding : boolean) true 시 padding 스타일 수정
 * @param {width} - (width : 'auto' | number) auto 시 가장 바깥 Container 의 길이
 * @param {height} - (height : 'auto' | number) auto 시 가장 바깥 Container 의 길이를 받음
 */
export const Tab = ({ children, width, height, isTabPadding }: TabProps) => {
  const tabNames = React.Children.map(children, (child) => child.props.name);
  const tabFocusInfoArray = tabNames.map((name, index) =>
    index === 0 ? { tabName: name, focus: true, id: index } : { tabName: name, focus: false, id: index },
  );
  const [focusStatusArray, setFocusTab] = useState<typeof tabFocusInfoArray>(tabFocusInfoArray);
  const [focusTabId, setFocusTabId] = useState<number>(0);

  function tabToggle(clickedTabIndex: number) {
    setFocusTab((prev) => {
      const updateTabArr = prev.map((prevTabStatus) => {
        const { id: prevTabIndex } = prevTabStatus;
        return prevTabIndex === clickedTabIndex ? { ...prevTabStatus, focus: true } : { ...prevTabStatus, focus: false };
      });
      return updateTabArr;
    });
    setFocusTabId(() => clickedTabIndex);
  }

  return (
    <StyledTabContainer width={width} height={height}>
      <StyledTabButtonGroups isTabPadding={isTabPadding}>
        {focusStatusArray.map((tabStatus, index) => {
          const { tabName, focus, id } = tabStatus;
          return <TabButton key={`tab-${index}`} focus={focus} tabName={tabName} onClick={() => tabToggle(id)} />;
        })}
      </StyledTabButtonGroups>
      {React.Children.toArray(children)[focusTabId]}
    </StyledTabContainer>
  );
};

export const TabPage = (props: TabPageProps) => {
  return <StyledTabPageContainer>{props.component}</StyledTabPageContainer>;
};

const TabButton = (props: TabButtonProps) => {
  const tabRef = useRef<HTMLDivElement>(null);

  function handleClick(event: MouseEvent<HTMLElement>) {
    /** 1. document 페이지(Viewport) 기준 좌표( 영점 : 왼쪽 가장자리 )
     */
    const x = event.pageX;
    const y = event.pageY;

    /** 2. document 와 요소 간 기준 좌표( 영점 : 왼쪽 가장자리 )
     */
    const TabButtonTop = event.currentTarget.offsetTop;
    const TabButtonLeft = event.currentTarget.offsetLeft;

    /** 3. Tab 버튼 영역 내에서 클릭 이벤트 발생 지점 좌표( 영점 : Tab 버튼 왼쪽 가장자리 )
     */
    const xInside = x - TabButtonLeft;
    const yInside = y - TabButtonTop;

    const circle = document.createElement('span');
    circle.classList.add('tab-button-circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    event.currentTarget.appendChild(circle);

    setTimeout(() => circle.remove(), 800);
  }

  useEffect(() => {
    if (tabRef?.current !== null) {
      tabRef.current.addEventListener('click', handleClick as any);
    }
  }, [tabRef]);

  return (
    <StyledTabButton ref={tabRef} focus={props.focus} onClick={props.onClick}>
      {props.tabName}
    </StyledTabButton>
  );
};

const StyledTabContainer = styled.div<Pick<TabProps, 'width' | 'height'>>`
  display: flex;
  flex-direction: column;
  ${({ width }) => {
    return width ? `width : ${width}px;` : `align-self : stretch;`;
  }}
  ${({ height }) => {
    return height ? `height : ${height}px` : ``;
  }}
`;

const StyledTabButtonGroups = styled.div<Pick<TabProps, 'isTabPadding'>>`
  display: flex;
  flex-direction: row;
  align-self: stretch;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.base.palette.gray300Soft};
  padding: ${({ isTabPadding }) => (isTabPadding ? `0 20px` : 'none')};
`;

const StyledTabPageContainer = styled.div`
  display: flex;
  flex: 1 0 0;
  align-self: stretch;
  overflow: auto;
`;

const StyledTabButton = styled.div<Pick<TabButtonProps, 'focus'>>`
  /* Container 에 대한 스타일 지정 */
  box-sizing: border-box;
  align-items: center;
  height: 64px;
  padding: 20px 0;
  text-align: center;
  border-radius: 4px 4px 0 0;
  border-bottom: ${({ theme, focus }) => {
    const { primary: borderColor } = theme.system.color.systemThemeColor;
    return focus ? `3px solid ${borderColor}` : `none`;
  }};
  cursor: pointer;

  /* Text 에 대한 스타일 지정 */
  color: ${({ theme, focus }) => {
    const { text, textHigh } = theme.system.color.common;
    return focus ? text : textHigh;
  }};
  font-size: ${({ theme }) => theme.system.fontSize.text.lg};
  font-weight: ${({ theme, focus }) => {
    return focus ? theme.base.fontWeight.sbold : theme.base.fontWeight.regular;
  }};

  &:hover {
    color: ${({ theme }) => theme.system.color.common.text};
  }

  /* 클릭 effect 에 대한 스타일 지정 */
  position: relative;
  overflow: hidden;
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
  & > .tab-button-circle {
    position: absolute;
    background-color: rgba(220, 220, 220, 0.5);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.8s ease-out;
  }
`;
