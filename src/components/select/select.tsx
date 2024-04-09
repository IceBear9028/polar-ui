import { ColorKeys, SizeKeys, VariantKeys } from '@style/style';
import { FC } from 'react';
import styled from 'styled-components';

type SelectSize = SizeKeys;

interface SelectSettingProps {
  size: SelectSize;
  color: ColorKeys;
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
