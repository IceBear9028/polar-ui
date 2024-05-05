import { FC } from 'react';
import Chip, { ChipProps } from '../chip.tsx';
import styled from 'styled-components';

const ChipExample: FC<ChipProps> = ({ onClick, onDelete = () => {}, colorTheme, name, variants, size, icon }) => {
  return (
    <Background>
      <Chip size={size} name={name} icon={icon} colorTheme={colorTheme} variants={variants} onClick={onClick} onDelete={onDelete} />
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

export default ChipExample;
