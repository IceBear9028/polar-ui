import styled from 'styled-components';
import { ColorKeys, SizeKeys, VariantKeys } from '@style/style';

import ChipCloseIconSvg from '../../assets/icon/chipCloseButton.svg?react';

interface IconProps {
  size?: SizeKeys;
  color?: ColorKeys;
}

/** StyledIcon
 * Icon 컴포넌트 구현 시 Base 로 사용
 * 개선점 : 컴포넌트 내부에 랜더링 되는 경우와 단독으로 랜더링 되는 경우를 탐지해서 작동하게끔 props 적용이 필요
 */
const StyledIcon = styled.svg<IconProps>`
  /* 색상 변경 */
  & path {
    fill: ${({ theme, color }) => {
      return color ? theme.component.icon.color[color] : theme.component.icon.color.systemThemeColor;
    }};
  }

  /* width, height 지정*/
  width: ${({ theme, size }) => {
    return size ? theme.component.icon.size[size] : theme.component.icon.size.default;
  }};
  height: ${({ theme, size }) => {
    return size ? theme.component.icon.size[size] : theme.component.icon.size.default;
  }};
`;

export const ChipCloseIcon = styled(StyledIcon).attrs({ as: ChipCloseIconSvg })``;
