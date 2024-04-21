import styled from 'styled-components';
import { Tab, TabPage } from '../Tab';

const TabExample = () => {
  return (
    <Background>
      <Tab>
        <TabPage name={'test1'} component={<div></div>} />
        <TabPage name={'test2'} component={<div></div>} />
      </Tab>
    </Background>
  );
};

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => {
    return theme.system.color.common.background;
  }};
`;

export default TabExample;
