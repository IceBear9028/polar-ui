import { ColorKeys, SizeKeys, VariantKeys } from '@style/style';
import { FC } from 'react';
import styled from 'styled-components';

type SelectSize = SizeKeys;

interface SelectSettingProps {
  size: SelectSize;
  color?: ColorKeys;
  variants: VariantKeys;
  label: string;
  value: string;
  placeholder?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
}

interface SelectActions {
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export interface SelectProps extends SelectSettingProps, SelectActions {}

const Select: FC<SelectProps> = ({ size = 'md', variants = 'outlined', ...props }) => {
  return (
    <StyledSelectContainer>
      <StyledLabelContainer>
        {props.label && (
          <StyledLabel size={size} variants={variants}>
            {props.label}
            {props.isRequired && <StyledRequiredLabel size={size} variants={variants} />}
          </StyledLabel>
        )}
      </StyledLabelContainer>
      <StyledSelectField size={size} variants={variants}></StyledSelectField>
    </StyledSelectContainer>
  );
};

export default Select;

interface SelectStyles
  extends Pick<SelectSettingProps, 'size' | 'color' | 'variants' | 'isRequired' | 'isReadOnly' | 'isDisabled' | 'isError'> {}

const StyledSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const StyledLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;

const StyledLabel = styled.span<Pick<SelectStyles, 'size' | 'variants' | 'isDisabled'>>`
  font-size: ${({ theme, size }) => {
    if (size === 'xs' || size === 'sm') {
      return theme.component.select.fontSize.text.xs;
    }
    return theme.component.select.fontSize.text.md;
  }};
  color: ${({ theme, isDisabled }) => {
    return isDisabled ? theme.system.color.common.disabled : theme.system.color.common.text;
  }};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.label};
  align-items: end;
`;

const StyledRequiredLabel = styled.span<Pick<SelectStyles, 'size' | 'variants'>>`
  font-size: ${({ theme, size }) => {
    if (size === 'xs' || size === 'sm') {
      return theme.component.select.fontSize.text.xs;
    }
    return theme.component.select.fontSize.text.md;
  }};
  color: ${({ theme }) => theme.system.color.common.caution};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.label};
  margin-left: 3px;
`;

const StyledSelectField = styled.select<SelectStyles>`
  width: 100%;
  padding: ${({ theme, size }) => {
    const { horizon, vertical } = theme.component.select.padding.input[size];
    return `${vertical} ${horizon}`;
  }};

  // 폰트 사이즈
  font-size: ${({ theme, size }) => {
    return size ? theme.component.select.fontSize.text.default : theme.component.select.fontSize.text[size];
  }};

  // border 설정
  border: 1px solid
    ${({ theme, isError, variants, color }) => {
      const { errorBorder, border } = color
        ? theme.component.inputField.color[color][variants]
        : theme.component.inputField.color.systemThemeColor[variants];
      return isError ? errorBorder : border;
    }};
  box-shadow: 0 0 0 1px
    ${({ theme, isError, variants, color }) => {
      const { errorBorder } = color
        ? theme.component.inputField.color[color][variants]
        : theme.component.inputField.color.systemThemeColor[variants];
      return isError ? errorBorder : 'rgb(0,0,0,0)';
    }}
    inset;

  background-color: ${({ theme, variants, color }) => {
    const colorToken = color ? theme.component.select.color[color] : theme.component.select.color.systemThemeColor;
    return colorToken[variants].background;
  }};

  color: ${({ theme, color, variants }) => {
    const colorToken = color ? theme.component.select.color[color] : theme.component.select.color.systemThemeColor;
    return colorToken[variants].text;
  }};

  border-radius: 5px;
  transition: all 100ms linear;

  appearance: none;

  &:focus-visible {
    border: 1px solid
      ${({ theme, isError, color }) => {
        const colorToken = color ? theme.component.select.color[color] : theme.component.select.color.systemThemeColor;
        return isError ? colorToken.outlined.errorBorder : colorToken.outlined.focusBorder;
      }};
    box-shadow: 0 0 0 1px
      ${({ theme, isError, color }) => {
        const colorToken = color ? theme.component.select.color[color] : theme.component.select.color.systemThemeColor;
        return isError ? colorToken.outlined.errorBorder : colorToken.outlined.focusBorder;
      }}
      inset;
  }
  &:read-only {
    opacity: 0.5;
    cursor: default;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${({ theme, color, variants }) => {
      const colorToken = color ? theme.component.select.color[color] : theme.component.select.color.systemThemeColor;
      return colorToken[variants].placeholder;
    }};
  }
`;
