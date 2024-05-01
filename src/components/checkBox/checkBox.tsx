import styled from 'styled-components';
import { ColorKeys, SizeKeys } from '@style/style';
import { FC } from 'react';

interface CheckBoxProps {
  size: SizeKeys;
  text?: string;
}

/** Checkbox props 확인
 * name : string;
 * value : string[] | number[];
 * isChecked : boolean - 단일 checkbox 사용 시 적용됨
 * color : ColorKeys
 * size : SizeKeys
 * isDisabled : boolean
 * isRequired : boolean
 * isReadOnly : boolean
 * onChange : (input : boolean | string[] | number[]) => void
 @example - 1. 여러개 사용
 const Container = () => {
  ...
  return(
    <CheckBoxGroup value={} >
      <CheckBox name="Test1" value={'안녕하세요'}/>
      <CheckBox name="Test1" value={'안녕하세요'}/>
      ...
    <CheckBoxGroup>
 )}

 @example - 2. 단일 사용
  const Container = () => {
  ...
  return(
    <div>
      <CheckBox name="Test1" value={'안녕하세요'} onChange={}/>
    <div>
  )}
*/

export const CheckBox: FC<CheckBoxProps> = ({ ...props }) => {
  return (
    <StyledCheckboxContainer>
      <StyledCheckBox>
        {props.}
      </StyledCheckBox>
      {props.text && <StyledText size={props.size}>{props.size}</StyledText>}
    </StyledCheckboxContainer>
  );
};

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


export interface CheckBoxStyles {
  color?: ColorKeys;
  size?: SizeKeys;
  label: string;
}

const StyledCheckBox = styled.input<CheckBoxStyles>`
  position: absolute;
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  white-space: nowrap;
  clip: rect(0px, 0px, 0px, 0px);
  overflow: hidden;
`;

const StyledText = styled.span<Pick<CheckBoxProps, 'size'>>`
  user-select: none;
  margin-left: 5px;
  font-size: ${({ theme, size }) => {
    return size ? theme.system.fontSize.text[size] : theme.system.fontSize.text.md;
  }};
  font-weight: ${({ theme }) => theme.base.fontWeight.regular};
`;
