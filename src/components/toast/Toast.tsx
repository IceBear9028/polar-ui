import styled from 'styled-components';
import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { CircleCheckIcon, CircleErrorIcon, CircleInfoIcon, CloseErrorIcon } from '../icon/icon.tsx';

export type ToastStatus = 'success' | 'error' | 'info';

/** Toast 컴포넌트 props 전용 interface
 */
export interface ToastComponentProps {
  // toastKey : 외부적으로 사용하지 않음.
  toastKey: string;
  status: ToastStatus;
  title?: string;
  description?: string;
  isCloseable?: boolean;
}

/** Toast 컴포넌트 컨트롤을 위한 useToast 에 전달하기 위한 interface
 */
export interface UseToastProps extends Omit<ToastComponentProps, 'toastKey'> {
  duration?: number;
}

/** Toast 컴포넌트가 유지되는 시간을
 * */
const DEFAULT_DURATION = 5000;

const Toast = ({ title, description, status, isCloseable, toastKey }: ToastComponentProps) => {
  const { _closeToast } = useToast();
  console.log(isCloseable);
  return (
    <StyledContainer>
      {/** icon 담는 부분 **/}
      {status === 'success' && <CircleCheckIcon />}
      {status === 'info' && <CircleInfoIcon />}
      {status === 'error' && <CircleErrorIcon />}
      {/** 정보를 담는 부분 **/}
      <StyledInfo>
        {/** 1. toast 의 제목, closeButton 배치 **/}
        <StyledInfoHead>
          {title ? title : status}
          {isCloseable && (
            <IconBtn onClick={() => _closeToast(toastKey)}>
              <CloseErrorIcon />
            </IconBtn>
          )}
        </StyledInfoHead>
        {/** 2. toast 의 내용 텍스트 배치 **/}
        {description && description}
      </StyledInfo>
    </StyledContainer>
  );
};

interface ToastStore {
  toastStore: Map<string, UseToastProps>;
}
interface ToastAction {
  toastClose: (toastKey: string) => void;
  toastAutoClose: (toastKey: string, time?: number) => void;
  toastOpen: (toastKey: string, toast: UseToastProps) => void;
}

// Toast 객체를 저장하는 Zustand 전역상태 선언
const useToastStore = create<ToastStore & ToastAction>((set) => ({
  toastStore: new Map(),
  toastOpen: (toastKey, toast: UseToastProps) =>
    set((state) => ({
      ...state,
      toastStore: new Map([...state.toastStore, [toastKey, toast]]),
    })),
  toastAutoClose: (toastKey, duration?) => {
    setTimeout(
      () => {
        set((state) => {
          const updateState = new Map([...state.toastStore]);
          updateState.delete(toastKey);
          return {
            ...state,
            toastStore: updateState,
          };
        });
      },
      duration ? duration : DEFAULT_DURATION,
    );
  },
  toastClose: (toastKey) =>
    set((state) => {
      const updateStore = new Map([...state.toastStore]);
      updateStore.delete(toastKey);
      return {
        ...state,
        toastStore: updateStore,
      };
    }),
}));

export function useToast() {
  const { toastClose, toastAutoClose, toastOpen } = useToastStore();

  function openToast(props: UseToastProps) {
    const newToastKey = nanoid();
    toastOpen(newToastKey, props);
    toastAutoClose(newToastKey, props.duration);
  }

  // 내부적으로만 사용
  function _closeToast(toastKey: string) {
    toastClose(toastKey);
  }

  return {
    openToast,
    _closeToast,
  };
}

export const _ToastProvide_ = () => {
  const { toastStore } = useToastStore();
  return (
    <StyledToastGroupContainer>
      {[...toastStore.keys()].map((toastKey) => (
        <Toast key={`toast-${toastKey}`} toastKey={toastKey} {...toastStore.get(toastKey)!} />
      ))}
    </StyledToastGroupContainer>
  );
};

const StyledToastGroupContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 10000;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 360px;
  min-height: 71px;
  padding: 16px 14px;
  background: ${({ theme }) => theme.surfaceLowest};
  box-shadow: 0 2px 10px 0 rgba(165, 165, 165, 0.5);
  border-radius: 6px;
  animation: toastIn 0.5s ease-in-out;

  @keyframes toastIn {
    0% {
      opacity: 0;
      transform: translateX(200px) scaleX(0.9) scaleY(0.9);
    }
    60% {
      transform: translateX(0) scaleX(0.98) scaleY(0.98);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 5px;
  flex: 1 0 0;

  // text 스타일
  font-size: ${({ theme }) => theme.system.fontSize.text.sm};
  font-weight: ${({ theme }) => theme.base.fontWeight.regular};
`;

const StyledInfoHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;

  // text 스타일
  font-size: ${({ theme }) => theme.system.fontSize.text.md};
  font-weight: ${({ theme }) => theme.base.fontWeight.bold};
`;

const IconBtn = styled.button`
  display: flex;
  background-color: transparent;
  cursor: pointer;
`;
