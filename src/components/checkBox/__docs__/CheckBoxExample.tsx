import { FC } from 'react';
import { CheckBox, CheckBoxProps } from '../checkBox';
import styled from 'styled-components';

export const CheckBoxExample: FC<CheckBoxProps> = ({ ...props }) => {
  return (
    <Background>
      <CheckBox {...props} />
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border-radius: 20px;
  background: ${({ theme }) => theme.system.color.common.background};
`;
