import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorKeys, CommonSize, VariantKeys } from '@style/style';
import { ChipCloseIcon } from '../icon/icon.tsx';

export interface ChipProps {
  color?: ColorKeys;
  variants?: VariantKeys;
  name: string;
  icon: React.JSX.Element;
  size?: keyof Omit<CommonSize, 'default' | 'xs' | 'lg'>;
  onDelete?: () => void;
  onClick?: () => void;
}

interface StyledChipProps extends Pick<ChipProps, 'color' | 'variants' | 'size'> {
  size: keyof Omit<CommonSize, 'default' | 'xs' | 'lg'>;
  variant: VariantKeys;
}

const Chip: FC<ChipProps> = ({ variants = 'filledContrast', size = 'md', color, name, onDelete }) => {
  return (
    <ChipContainer color={color} variant={variants} size={size}>
      {name}
      {onDelete && (
        <IconBtn onClick={onDelete}>
          <ChipCloseIcon color={color} size={size} />
        </IconBtn>
      )}
    </ChipContainer>
  );
};

const ChipContainer = styled.div<StyledChipProps>`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  border-radius: 20px;

  font-size: ${({ theme, size }) => {
    return size ? theme.component.chip.fontSize.text[size] : theme.component.chip.fontSize.text.default;
  }};
  font-weight: ${({ theme }) => theme.component.chip.fontWeight};
  padding: ${({ theme, size }) => {
    const resultPadding = theme.component.chip.padding[size];
    return `${resultPadding.vertical} ${resultPadding.horizon}`;
  }};

  background: ${({ theme, color, variant }) => {
    const colorKey = color ? color : 'systemThemeColor';
    return theme.component.chip.color[colorKey][variant].background;
  }};
  color: ${({ theme, color, variant }) => {
    const colorKey = color ? color : 'systemThemeColor';
    return theme.component.chip.color[colorKey][variant].color;
  }};
  box-shadow: 0 0 0 2px
    ${({ theme, color, variant }) => {
      const colorKey: ColorKeys = color ? color : 'systemThemeColor';
      return theme.component.button.color[colorKey][variant].border;
    }};
`;

const IconBtn = styled.button`
  display: flex;
  background-color: transparent;
  cursor: pointer;
`;

export default Chip;
