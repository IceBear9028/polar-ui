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

export interface ButtonProps extends ButtonStyles, ButtonTypes, ButtonActions {}

/** styled-component 의 ThemeProvide 를 이용한 테마 변경 사안 적용중
 */
const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  // size 에 관련된 스타일 지정
  font-size: ${({ theme, size }) => (size ? theme.fontSize.text.default : theme.fontSize.text[size])};
  padding: ${({ theme, size }) => {
    const resultPadding = size ? theme.padding.input[size] : theme.padding.input.default;
    return `${resultPadding.vertical} ${resultPadding.horizon}`;
  }};

  // color 에 관련된 스타일 지정
  background-color: ${({ theme, color }) => (color ? theme.color[color].primary : theme.color.systemThemeColor.primary)};
  color: ${({ theme, color }) => (color ? theme.color[color].onPrimary : theme.color.systemThemeColor.onPrimary)};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

export default Button;
