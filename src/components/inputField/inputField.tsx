import { FC } from 'react';
import { ColorThemeKeys, SizeKeys, VariantKeys } from '@style/style';
import styled from 'styled-components';

type InputSize = SizeKeys;
interface InputProps {
  size: InputSize;
  colorTheme?: ColorThemeKeys;
  variants?: VariantKeys;
  label?: string;
  value: string;
  placeholder?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isError?: boolean;
}
interface InputActions {
  onChange?: (value: string) => void;
  onBlur?: () => void;
}
export interface InputFieldProps extends InputProps, InputActions {}

const InputField: FC<InputFieldProps> = ({
  size = 'md',
  variants = 'outlined',
  colorTheme,
  value,
  label,
  placeholder,
  errorMessage,
  onChange,
  onBlur,
  isRequired,
  isDisabled,
  isReadOnly,
  isError,
}) => {
  return (
    <StyledInputArea size={size}>
      {/* 1. 라벨에 대한 영역 */}
      <StyledInputLabelArea>
        <StyledInputLabel size={size} isDisabled={isDisabled}>
          {label}
          {isRequired && <StyledInputRequiredLabel size={size}>*</StyledInputRequiredLabel>}
        </StyledInputLabel>
        {isError && <StyledInputErrorLabel>{errorMessage}</StyledInputErrorLabel>}
      </StyledInputLabelArea>

      {/* 2. input 에 대한 영역 */}
      <StyledInput
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
        onBlur={onBlur}
        variants={variants}
        colorTheme={colorTheme}
        size={size}
        disabled={isDisabled}
        readOnly={isReadOnly}
        isError={isError}
      />
    </StyledInputArea>
  );
};

export default InputField;

/**
 * 0. Input 컨테이너
 */
interface InputStyles {
  colorTheme?: ColorThemeKeys;
  variants: VariantKeys;
  size: InputSize;
  placeholder?: string;
  label?: string;
  isError?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

const StyledInputArea = styled.div<Pick<InputStyles, 'size'>>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  font-size: ${({ theme, size }) => {
    return size ? theme.system.fontSize.text[size] : theme.system.fontSize.text.default;
  }};
`;

/**
 * A. 라벨
 * - required, disabled 에 대한 스타일 지정
 */
interface StyledInputLabelProps extends Pick<InputStyles, 'size' | 'isDisabled'> {}

const StyledInputLabelArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  width: 100%;
`;

const StyledInputLabel = styled.span<StyledInputLabelProps>`
  font-size: ${({ theme, size }) => {
    if (size === 'xs' || size === 'sm') {
      return theme.component.inputField.fontSize.text.xs;
    }
    return theme.component.inputField.fontSize.text.md;
  }};
  color: ${({ theme, isDisabled }) => {
    return isDisabled ? theme.system.color.common.disabled : theme.system.color.common.text;
  }};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.label};
  align-items: end;
`;

const StyledInputRequiredLabel = styled.span<Omit<StyledInputLabelProps, 'disabled'>>`
  font-size: ${({ theme, size }) => {
    if (size === 'xs' || size === 'sm') {
      return theme.component.inputField.fontSize.text.md;
    }
    return theme.component.inputField.fontSize.text.lg;
  }};
  color: ${({ theme }) => {
    return theme.system.color.common.caution;
  }};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.label};
  margin-left: 3px;
`;

const StyledInputErrorLabel = styled.span`
  font-size: ${({ theme }) => theme.system.fontSize.text.xs};
  font-weight: ${({ theme }) => theme.base.fontWeight.medium};
  color: ${({ theme }) => theme.system.color.common.error};
`;

/**
 * isError, isIcon, focusColor 같은 camelCase 문법을 쓰면
 * styled-component 속성값으로 사용하려는건지 구분을 못하면서 오류가 발생함
 * 해당 속성은 단순하게 styling 전달 prop 명시를 위해
 * shouldForwardProp 키워드를 통해 처리함
 */
const StyledInput = styled.input<InputStyles>`
  width: 100%;
  padding: ${({ theme, size }) => {
    const { horizon, vertical } = theme.component.inputField.padding.input[size];
    return `${vertical} ${horizon}`;
  }};
  background-color: ${({ theme, colorTheme, variants }) => {
    const colorToken = colorTheme ? theme.component.inputField.color[colorTheme] : theme.component.inputField.color.systemThemeColor;
    return colorToken[variants].background;
  }};
  color: ${({ theme, color, variants }) => {
    const colorToken = color ? theme.component.inputField.color[color] : theme.component.inputField.color.systemThemeColor;
    return colorToken[variants].text;
  }};

  // 폰트 사이즈
  font-size: ${({ theme, size }) => theme.component.inputField.fontSize.text[size]};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.text};

  border: 1px solid
    ${({ theme, isError, variants, colorTheme }) => {
      const { errorBorder, border } = colorTheme
        ? theme.component.inputField.color[colorTheme][variants]
        : theme.component.inputField.color.systemThemeColor[variants];
      return isError ? errorBorder : border;
    }};
  box-shadow: 0 0 0 1px
    ${({ theme, isError, variants, colorTheme }) => {
      const { errorBorder } = colorTheme
        ? theme.component.inputField.color[colorTheme][variants]
        : theme.component.inputField.color.systemThemeColor[variants];
      return isError ? errorBorder : 'rgb(0,0,0,0)';
    }}
    inset;

  border-radius: 5px;
  transition: all 100ms linear;

  &:focus-visible {
    border: 1px solid
      ${({ theme, isError, colorTheme }) => {
        const colorToken = colorTheme ? theme.component.inputField.color[colorTheme] : theme.component.inputField.color.systemThemeColor;
        return isError ? colorToken.outlined.errorBorder : colorToken.outlined.focusBorder;
      }};
    box-shadow: 0 0 0 1px
      ${({ theme, isError, colorTheme }) => {
        const colorToken = colorTheme ? theme.component.inputField.color[colorTheme] : theme.component.inputField.color.systemThemeColor;
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
    color: ${({ theme, colorTheme, variants }) => {
      const colorToken = colorTheme ? theme.component.inputField.color[colorTheme] : theme.component.inputField.color.systemThemeColor;
      return colorToken[variants].placeholder;
    }};
  }
`;
