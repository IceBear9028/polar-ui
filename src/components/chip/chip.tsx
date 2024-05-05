import React, { FC } from 'react';
import styled from 'styled-components';
import { ColorThemeKeys, CommonSize, VariantKeys } from '@style/style';
import { ChipCloseIcon } from '../icon/icon.tsx';

export interface ChipProps {
  colorTheme?: ColorThemeKeys;
  variants?: VariantKeys;
  name: string;
  icon: React.JSX.Element;
  size?: keyof Omit<CommonSize, 'default' | 'xs' | 'lg'>;
  onDelete?: () => void;
  onClick?: () => void;
}

interface StyledChipProps extends Pick<ChipProps, 'colorTheme' | 'variants' | 'size'> {
  size: keyof Omit<CommonSize, 'default' | 'xs' | 'lg'>;
  variant: VariantKeys;
}

const Chip: FC<ChipProps> = ({ variants = 'filledContrast', size = 'md', colorTheme, name, onDelete }) => {
  return (
    <ChipContainer colorTheme={colorTheme} variant={variants} size={size}>
      {name}
      {onDelete && (
        <IconBtn onClick={onDelete}>
          <ChipCloseIcon colorKey={colorTheme && { [colorTheme]: 'onPrimary' }} size={size} />
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

  background: ${({ theme, colorTheme, variant }) => {
    const colorKey = colorTheme ? colorTheme : 'systemThemeColor';
    return theme.component.chip.color[colorKey][variant].background;
  }};
  color: ${({ theme, colorTheme, variant }) => {
    const colorKey = colorTheme ? colorTheme : 'systemThemeColor';
    return theme.component.chip.color[colorKey][variant].color;
  }};
  box-shadow: 0 0 0 2px
    ${({ theme, colorTheme, variant }) => {
      const colorKey = colorTheme ? colorTheme : 'systemThemeColor';
      return theme.component.button.color[colorKey][variant].border;
    }};
`;

const IconBtn = styled.button`
  display: flex;
  background-color: transparent;
  cursor: pointer;
`;

export default Chip;
