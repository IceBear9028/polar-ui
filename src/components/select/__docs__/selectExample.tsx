import { FC } from 'react';
import Select, { SelectProps } from '../select';
import styled from 'styled-components';

const SelectExample: FC<SelectProps> = (props) => {
  return (
    <Background>
      <Select {...props} />
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

export default SelectExample;
