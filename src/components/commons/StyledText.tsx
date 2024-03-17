import styled from 'styled-components';
import { Bolds, ColorKeys, Size } from '@style/style';

/** color 는 추후에 palette 토큰 값도 허용될 수 있게 변경해야 할 것(2024.03.14)
 */
interface TextProps {
  size?: Size;
  bold?: Bolds;
  color?: ColorKeys;
}