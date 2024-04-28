import styled from 'styled-components';
import { _ToastProvide_, ToastComponentProps, useToast, UseToastProps } from '../Toast';
import { Button } from '../../button';
import { FC } from 'react';

const ToastExample: FC<Omit<ToastComponentProps & UseToastProps, 'toastKey'>> = ({
  status = 'success',
  description,
  title,
  isCloseable,
  duration,
}) => {
  const { openToast } = useToast();
  return (
    <Background>
      <_ToastProvide_ />
      <Button
        size={'sm'}
        text={'toast 활성화'}
        onClick={() => openToast({ title, status: status, isCloseable: isCloseable, description: description, duration })}
      />
    </Background>
  );
};

export default ToastExample;

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => {
    return theme.system.color.common.background;
  }};
`;
