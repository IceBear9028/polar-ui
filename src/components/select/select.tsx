import { ColorKeys, SizeKeys, VariantKeys } from '@style/style';
import { FC } from 'react';
import styled from 'styled-components';
import { SelectArrowIcon } from '../icon/icon.tsx';

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
  isError?: boolean;
  option: Option[];
}

interface Option {
  name: string;
  value: string | number;
}

interface SelectActions {
  onChange?: (value: string) => void;
  onBlur?: () => void;
}

export interface SelectProps extends SelectSettingProps, SelectActions {}

const Select: FC<SelectProps> = ({ size = 'md', variants = 'outlined', option, ...props }) => {
  return (
    <StyledSelectContainer>
      <StyledLabelContainer>
        {props.label && (
          <StyledLabel size={size} variants={variants}>
            {props.label}
            {props.isRequired && (
              <StyledRequiredLabel size={size} variants={variants}>
                *
              </StyledRequiredLabel>
            )}
          </StyledLabel>
        )}
        {props.isError && <StyledInputErrorLabel>{props.errorMessage}</StyledInputErrorLabel>}
      </StyledLabelContainer>
      <StyledSelectFieldContainer>
        <StyledSelectField
          size={size}
          variants={variants}
          color={props.color}
          placeholder={props.placeholder}
          isDisabled={props.isDisabled}
          isError={props.isError}
          isRequired={props.isRequired}
        >
          {option &&
            option.map((item, index) => (
              <option key={`${index}-${item.name}`} value={item.value}>
                {item.name}
              </option>
            ))}
        </StyledSelectField>
        <StyledIconContainer>
          <SelectArrowIcon size={size} />
        </StyledIconContainer>
      </StyledSelectFieldContainer>
    </StyledSelectContainer>
  );
};

export default Select;

interface SelectStyles
  extends Pick<SelectSettingProps, 'size' | 'color' | 'variants' | 'placeholder' | 'isRequired' | 'isDisabled' | 'isError'> {}

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

const StyledInputErrorLabel = styled.span`
  font-size: ${({ theme }) => theme.system.fontSize.text.xs};
  font-weight: ${({ theme }) => theme.base.fontWeight.medium};
  color: ${({ theme }) => theme.system.color.common.error};
`;

const StyledSelectFieldContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledIconContainer = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  right: 14px; /* 오른쪽에서 10px 떨어진 위치 */
  top: 50%; /* 중앙 정렬 */
  transform: translateY(-50%); /* Y축 기준 중앙 정렬 */
  pointer-events: none; /* SVG 아이콘 클릭 방지 */
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
        ? theme.component.select.color[color][variants]
        : theme.component.select.color.systemThemeColor[variants];
      return isError ? errorBorder : border;
    }};
  box-shadow: 0 0 0 1px
    ${({ theme, isError, variants, color }) => {
      const { errorBorder } = color
        ? theme.component.select.color[color][variants]
        : theme.component.select.color.systemThemeColor[variants];
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

  // 브라우저가 자동으로 적용하는 외형 제거
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
