import styled from 'styled-components';
import { Tab, TabPage } from '../Tab';
import { useState } from 'react';
import { InputField } from '../../inputField';

const TestPage = () => {
  const [status, setStatus] = useState<string>('');
  function changeEvent(value: string) {
    setStatus(() => value);
  }
  return (
    <StyledContainer>
      <InputField size={'md'} value={status} onChange={changeEvent} />
    </StyledContainer>
  );
};

const TabExample = () => {
  return (
    <Background>
      <Tab width={600} height={800}>
        <TabPage name={'test1'} component={<div></div>} />
        <TabPage name={'test2'} component={<TestPage />} />
        <TabPage name={'test2'} component={<TestPage />} />
      </Tab>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => {
    return theme.system.color.common.background;
  }};
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default TabExample;
