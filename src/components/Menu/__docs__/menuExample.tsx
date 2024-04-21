import { Menu, MenuItem, useMenuController } from '../Menu';
import { Button } from '../../button';
import styled from 'styled-components';

const MenuExample = () => {
  const [isOpen, buttonRef, openMenu] = useMenuController();
  return (
    <Background>
      <Menu isOpen={isOpen} menuButton={<Button ref={buttonRef} size={'md'} text={'menu'} onClick={openMenu} />}>
        <MenuItem onClick={() => {}} menuName={'test1'} />
        <MenuItem onClick={() => {}} menuName={'test1'} />
        <MenuItem onClick={() => {}} menuName={'test1'} />
      </Menu>
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

export default MenuExample;
