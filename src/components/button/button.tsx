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

const ButtonVariants = {
  filledContrast: {
    background: '',
    color: '',
  },
  filled: {
    background: '',
    color: '',
  },
  outliend: {
    background: '',
    color: '',
  },
};

const Button: FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.text}</StyledButton>;
};

/** styled-component 의 ThemeProvide 를 이용한 테마 변경 사안 적용중
 */
const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  // size 에 관련된 스타일 지정
  font-size: ${({ theme, size }) => (size ? theme.fontSize.text[size] : theme.fontSize.text.default)};
  padding: ${({ theme, size }) => {
    const resultPadding = size ? theme.padding.input[size] : theme.padding.input.default;
    return `${resultPadding.vertical} ${resultPadding.horizon}`;
  }};

  // color 에 관련된 스타일 지정

  // variant 별 색상
  // filledContrast -> background : primaryColor, color : onPrimaryColor
  // filled -> background : primaryVariants, color : onPrimaryVariants
  // outlined -> background : none, border :

  background-color: ${({ theme, color, variants }) => (color ? theme.color[color].primary : theme.color.systemThemeColor.primary)};
  color: ${({ theme, color }) => (color ? theme.color[color].onPrimary : theme.color.systemThemeColor.onPrimary)};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
