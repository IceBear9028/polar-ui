import React, { FC } from 'react';
import styled from 'styled-components';
import { ButtonColorKeys, ButtonSize, ButtonVariants, ColorKeys } from '@style/style';

export interface ButtonProps {
  size: ButtonSize;
  color?: ButtonColorKeys;
  variants?: ButtonVariants;
  text: string;
  icon?: React.JSX.Element;
  onClick: () => void;
}

interface StyledButtonProps extends Omit<ButtonProps, 'onClick' | 'variants'> {
  variants: ButtonVariants;
}

const Button: FC<ButtonProps> = ({ variants = 'filledContrast', ...props }) => {
  return (
    <StyledButton variants={variants} {...props}>
      {props.text}
    </StyledButton>
  );
};

/** styled-component 의 ThemeProvide 를 이용한 테마 변경 사안 적용중
 */
const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  // size 에 관련된 스타일 지정
  font-size: ${({ theme, size }) => {
    return size ? theme.component.button.fontSize.text[size] : theme.component.button.fontSize.text.default;
  }};
  font-weight: ${({ theme }) => theme.component.button.fontWeight};
  padding: ${({ theme, size }) => {
    const resultPadding = size ? theme.component.button.padding.input[size] : theme.component.button.padding.input.default;
    return `${resultPadding.vertical} ${resultPadding.horizon}`;
  }};

  background-color: ${({ theme, color, variants }) => {
    const colorKey: ColorKeys = color ? color : 'systemThemeColor';
    return theme.component.button.color[colorKey][variants].background;
  }};
  color: ${({ theme, color, variants }) => {
    const colorKey: ColorKeys = color ? color : 'systemThemeColor';
    return theme.component.button.color[colorKey][variants].color;
  }};
  box-shadow: 0 0 0 2px
    ${({ theme, color, variants }) => {
      const colorKey: ColorKeys = color ? color : 'systemThemeColor';
      return theme.component.button.color[colorKey][variants].border;
    }};

  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
