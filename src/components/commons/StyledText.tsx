import { CommonBolds, ColorKeys, CommonSize } from '@style/style';

/** color 는 추후에 palette 토큰 값도 허용될 수 있게 변경해야 할 것(2024.03.14)
 */
interface TextProps {
  size?: CommonSize;
  bold?: CommonBolds;
  color?: ColorKeys;
}
