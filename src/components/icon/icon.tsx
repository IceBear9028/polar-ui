import styled from 'styled-components';
import { ColorKeys, SizeKeys } from '../../style/style';
import { getSystemThemeColorToken } from '../../style/common/getToken.ts';

import ChipCloseIconSvg from '../../assets/icon/chipCloseButton.svg?react';
import SelectArrowIconSvg from '../../assets/icon/selectDownArrowIcon.svg?react';
import CircleInfoIconSvg from '../../assets/icon/circleInfo.svg?react';
import CircleCheckIconSvg from '../../assets/icon/circleCheck.svg?react';
import CircleErrorIconSvg from '../../assets/icon/circleError.svg?react';
import CloseErrorIconSvg from '../../assets/icon/chipCloseButton.svg?react';
import CheckBoxIconSvg from '../../assets/icon/checkBoxIcon.svg?react';

interface IconProps {
  size?: SizeKeys;
  colorKey?: ColorKeys;
}

/** StyledIcon
 * Icon 컴포넌트 구현 시 Base 로 사용
 * 개선점 : 컴포넌트 내부에 랜더링 되는 경우와 단독으로 랜더링 되는 경우를 탐지해서 작동하게끔 props 적용이 필요
 */
const StyledIcon = styled.svg<IconProps>`
  /* 색상 변경 */
  & path {
    fill: ${({ theme, colorKey }) => {
      return colorKey && getSystemThemeColorToken(theme, colorKey);
      // return color ? theme.component.icon.color[color] : theme.component.icon.color.systemThemeColor;
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

const StyledToastIcon = styled.svg``;
const StyledToastCloseIcon = styled.svg`
  /* 색상 변경 */
  & path {
    fill: ${({ theme }) => {
      return theme.component.icon.color.gray;
    }};
  }
`;

export const ChipCloseIcon = styled(StyledIcon).attrs({ as: ChipCloseIconSvg })``;
export const SelectArrowIcon = styled(StyledIcon).attrs({ as: SelectArrowIconSvg })``;
export const CheckBoxIcon = styled(StyledIcon).attrs({ as: CheckBoxIconSvg })``;

/** Toast 컴포넌트 전용으로 사용하는 아이콘
 */
export const CircleInfoIcon = styled(StyledToastIcon).attrs({ as: CircleInfoIconSvg })``;
export const CircleCheckIcon = styled(StyledToastIcon).attrs({ as: CircleCheckIconSvg })``;
export const CircleErrorIcon = styled(StyledToastIcon).attrs({ as: CircleErrorIconSvg })``;
export const CloseErrorIcon = styled(StyledToastCloseIcon).attrs({ as: CloseErrorIconSvg })``;
