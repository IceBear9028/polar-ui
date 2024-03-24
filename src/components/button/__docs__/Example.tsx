import { FC } from 'react';
import Button, { ButtonProps } from '../button.tsx';
import styled from 'styled-components';

const Example: FC<ButtonProps> = ({ onClick, size, text, color, variants }) => {
  return (
    <Background>
      <Button size={size} text={text} onClick={onClick} color={color} variants={variants} />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border-radius: 20px;
  background: ${({ theme }) => theme.system.color.common.background};
`;

export default Example;
