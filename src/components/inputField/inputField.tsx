import { FC } from 'react';
import { ColorKeys, SizeKeys } from '@style/style';
import styled from 'styled-components';

type InputSize = SizeKeys;
interface InputProps {
  size: InputSize;
  color?: ColorKeys;
  value: string;
  placeholder?: string;
  errorMessage?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}
interface InputActions {
  onChange?: (value: string) => void;
  onBlur?: () => void;
}
interface InputStyles {
  focusColor?: ColorKeys;
  size?: InputSize;
  icon?: React.JSX.Element;
  isIcon?: boolean;
  label?: string;
  isError?: boolean;
}
interface InputFieldProps extends InputProps, InputActions {}

const InputField: FC<InputFieldProps> = ({ size, isRequired }) => {
  return (
    <StyledInputArea>
      {/* 1. 라벨에 대한 영역 */}
      <StyledInputLabelArea>
        <StyledInputLabel size={size}></StyledInputLabel>
        {isRequired && <StyledInputRequiredLabel size={size} />}
      </StyledInputLabelArea>

      {/* 2. input 에 대한 영역 */}
    </StyledInputArea>
  );
};

const StyledInputArea = styled.div<Pick<InputStyles, 'size'>>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  font-size: ${({ theme, size }) => {
    return size ? theme.system.fontSize.text[size] : theme.system.fontSize.text.default;
  }};
`;

interface StyledInputLabelProps {
  size: SizeKeys;
  disabled?: boolean;
}
const StyledInputLabelArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const StyledInputLabel = styled.span<StyledInputLabelProps>`
  font-size: ${({ theme, size }) => {
    if (size === 'xs' || size === 'sm') {
      return theme.component.inputField.fontSize.text.xs;
    }
    return theme.component.inputField.fontSize.text.md;
  }};
  color: ${({ theme, disabled }) => {
    return disabled ? theme.system.color.common.disabled : theme.system.color.common.text;
  }};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.label};
`;
const StyledInputRequiredLabel = styled.span<Omit<StyledInputLabelProps, 'disabled'>>`
  font-size: ${({ theme, size }) => {
    if (size === 'xs' || size === 'sm') {
      return theme.component.inputField.fontSize.text.xs;
    }
    return theme.component.inputField.fontSize.text.md;
  }};
  color: ${({ theme }) => {
    return theme.system.color.common.caution;
  }};
  font-weight: ${({ theme }) => theme.component.inputField.fontWeight.label};
`;

const StyledInput = styled.input<InputStyles>``;
