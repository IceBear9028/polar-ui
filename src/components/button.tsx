import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonStyles {
  size: ButtonSize;
  color: ButtonColorKeys;
  variants: ButtonVariants;
}
interface ButtonTypes {
  text: string;
  icon: React.JSX.Element;
}
interface ButtonActions {
  onClick: () => void;
}

interface ButtonProps extends ButtonStyles, ButtonTypes, ButtonActions {}

/** styled-component 의 ThemeProvide 를 이용한 테마 변경 사안 적용중
 */
const styledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.onPrimaryColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button: FC<ButtonProps> = (props) => {};
