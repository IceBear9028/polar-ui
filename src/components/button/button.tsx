import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonColorKeys, ButtonSize, ButtonVariants } from '@style/style';

interface ButtonStyles {
  size: ButtonSize;
  color?: ButtonColorKeys;
  variants?: ButtonVariants;
}
interface ButtonTypes {
  text: string;
  icon?: React.JSX.Element;
}
interface ButtonActions {
  onClick: () => void;
}

interface ButtonProps extends ButtonStyles, ButtonTypes, ButtonActions {}

/** styled-component 의 ThemeProvide 를 이용한 테마 변경 사안 적용중
 */
const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme, color }) => (color ? theme[color].primary : theme.green.primary)};
  color: ${({ theme, color }) => (color ? theme[color].onPrimary : theme.green.onPrimary)};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;
