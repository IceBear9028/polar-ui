import styled from 'styled-components';
import { SizeKeys } from '@style/style';
import { FC } from 'react';

interface CheckBoxProps {
  size: SizeKeys;
  text?: string;
}

export const CheckBox: FC<CheckBoxProps> = ({ ...props }) => {
  return <StyledCheckboxContainer>{props.text && <StyledText size={props.size}>{props.size}</StyledText>}</StyledCheckboxContainer>;
};

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledText = styled.p<Pick<CheckBoxProps, 'size'>>`
  font-size: ${({ theme, size }) => {
    return size ? theme.system.fontSize.text[size] : theme.system.fontSize.text.md;
  }};
`;
