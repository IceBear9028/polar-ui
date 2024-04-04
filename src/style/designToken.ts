import { ColorKeys, DesignToken, HeaderSizeKeys, SizeKeys } from './style';
import { systemToken } from './system.ts';
import { componentToken } from './component.ts';
import { baseToken } from './base.ts';

/** 전체 디자인 토큰을 담당하는 객체
 * 1. baseToken : style 요소에 직접적인 토큰
 * 2. system : baseToken 토큰에 의미를 부여(시멘틱 토큰이라고 불리기도 함)
 * 3. component : 컴포넌트에 직접적으로 연결되는 토큰
 */
export function designToken(
  theme: 'dark' | 'light' = 'light',
  colorTheme: ColorKeys = 'green',
  defaultSize: SizeKeys = 'md',
  defaultHeaderSize: HeaderSizeKeys = 'h3',
): DesignToken {
  return {
    base: baseToken,
    system: systemToken(theme, colorTheme, defaultSize, defaultHeaderSize),
    component: componentToken(systemToken(theme, colorTheme, defaultSize, defaultHeaderSize), baseToken),
  };
}
