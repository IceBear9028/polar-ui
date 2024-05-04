import React, { FC, createContext, ReactNode, useContext } from 'react';
import { ColorKeys, SizeKeys } from '@style/style';
import { CheckBoxIcon } from '../icon/icon.tsx';
import styled from 'styled-components';

interface CheckBoxCommon {
  size?: SizeKeys;
  color?: ColorKeys;
  name?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

interface CheckBoxGroupProps extends CheckBoxCommon {
  value: string[] | number[];
  onChange?: (input: string[] | number[]) => void;
  direction?: 'row' | 'column';
  children?: ReactNode;
}

export interface CheckBoxProps extends CheckBoxCommon {
  isChecked: boolean;
  onChange?: (input: boolean) => void;
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
 *
 @example - 1. 여러개 사용
 const Container = () => {
  const [checkStatus, setCheckStatus] = useState<string[]>([]);
  function checkEvent(value : string[]){
    setCheckStatus(() => value);
  }
  ...
  return(
    <CheckBoxGroup onChange={checkEvent} >
      <CheckBox name="Test1" value={'안녕하세요'}/>
      <CheckBox name="Test1" value={'안녕하세요'}/>
        ...
    <CheckBoxGroup>
  )
}

 @example - 2. 단일 사용
  const Container = () => {
    const [checkStatus, setCheckStatus] = useState<boolean>(false);
    function checkEvent(event){
      setCheckStatus(() => event.target.checked)
    }
    ...
    return(
      <div>
        <CheckBox name="Test1" isChecked={checkStatus} onChange={checkEvent}/>
      <div>
    )}
*/

const CheckBoxContext = createContext<CheckBoxGroupProps>({
  value: [],
});

export const CheckBoxGroup: FC<CheckBoxGroupProps> = (props) => {
  return (
    <CheckBoxContext.Provider value={props}>
      <StyledCheckBoxGroup direction={props.direction}>{props.children}</StyledCheckBoxGroup>
    </CheckBoxContext.Provider>
  );
};

export const CheckBox: FC<CheckBoxProps> = ({ ...props }) => {
  // 추후 옵션 추가할 것
  const { size } = useContext(CheckBoxContext);
  const checkBoxSize = props.size ? props.size : size && size;

  // 단일 checkbox 에 대한 상태를 업데이트 하는 함수
  function clickCheckBoxEvent(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange && props.onChange(e.target.checked);
  }

  return (
    <StyledCheckboxContainer>
      <StyledCheckBox type="checkbox" isChecked={props.isChecked} onChange={clickCheckBoxEvent} />
      <StyledCheckBoxIconContainer size={checkBoxSize} isChecked={props.isChecked} color={props.color}>
        {props.isChecked && <CheckBoxIcon size={checkBoxSize} />}
      </StyledCheckBoxIconContainer>
      {props.name && <StyledText size={props.size}>{props.name}</StyledText>}
    </StyledCheckboxContainer>
  );
};

const StyledCheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const StyledCheckBoxGroup = styled.div<Pick<CheckBoxGroupProps, 'direction'>>`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  gap: 12px;
`;

const StyledCheckBox = styled.input<Omit<CheckBoxProps, 'onChange'>>`
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

const StyledCheckBoxIconContainer = styled.span<Omit<CheckBoxProps, 'onChange'>>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  user-select: none;
  transition: all 250ms linear;

  border: ${({ isChecked }) => (isChecked ? 'none' : '2px solid #C0C6CA')};
  border-radius: 3px;
  background: ${({ theme, color, isChecked }) => {
    if (isChecked) {
      return color ? theme.system.color[color].primary : theme.system.color.systemThemeColor.primary;
    }
  }};
  width: ${({ theme, size }) => {
    return size ? theme.base.fontSize.icon[size] : 'md';
  }};
  height: ${({ theme, size }) => {
    return size ? theme.base.fontSize.icon[size] : 'md';
  }};
`;

const StyledText = styled.span<Pick<CheckBoxGroupProps, 'size'>>`
  user-select: none;
  margin-left: 5px;
  font-size: ${({ theme, size }) => {
    return size ? theme.system.fontSize.text[size] : theme.system.fontSize.text.md;
  }};
  font-weight: ${({ theme }) => theme.base.fontWeight.regular};
  color: ${({ theme }) => theme.system.color.common.text};
`;
