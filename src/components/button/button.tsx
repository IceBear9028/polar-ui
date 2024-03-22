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

const Button: FC<ButtonProps> = ({ variants = 'filledContrast', ...props }) => {
  return (
    <StyledButton variants={variants} {...props}>
      {props.text}
    </StyledButton>
  );
};

/** styled-component 의 ThemeProvide 를 이용한 테마 변경 사안 적용중
 */
const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  // size 에 관련된 스타일 지정
  font-size: ${({ theme, size }) => (size ? theme.component.button.fontSize.text[size] : theme.component.button.fontSize.text.default)};
  padding: ${({ theme, size }) => {
    const resultPadding = size ? theme.component.button.padding.input[size] : theme.component.button.padding.input.default;
    return `${resultPadding.vertical} ${resultPadding.horizon}`;
  }};

  // color 에 관련된 스타일 지정

  // variant 별 색상
  // filledContrast -> background : primaryColor, color : onPrimaryColor
  // filled -> background : primaryVariants, color : onPrimaryVariants
  // outlined -> background : none, border :

  background-color: ${({ theme, color, variants }) =>
    theme.component.button.color[color ? color : 'systemThemeColor'][variants].background};
  color: ${({ theme, color, variants }) => theme.component.button.color[color ? color : 'systemThemeColor'][variants].color};
  box-shadow: 0 0 0 2px ${({ theme, color, variants }) => theme.component.button.color[color ? color : 'systemThemeColor'][variants].border};

  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
