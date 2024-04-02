import { FC } from 'react';
import { InputFieldProps, InputStyles, SizeKeys } from '@style/style';
import styled from 'styled-components';

const InputField: FC<InputFieldProps> = () => {
  return;
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

const StyledInputLabelArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

interface StyledInputLabelProps {
  size: SizeKeys;
}
const StyledInputLabel = styled.span<StyledInputLabelProps>``;

const StyledInput = styled.input<InputStyles>``;
