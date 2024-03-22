import { DesignToken, SizeKeys } from './style';
import { systemStyle } from './system.ts';
import { componentStyle } from './component.ts';
import { baseToken } from './base.ts';

/** 전체 디자인 토큰을 담당하는 객체
 * 1. baseToken : style 요소에 직접적인 토큰
 * 2. system : baseToken 토큰에 의미를 부여(시멘틱 토큰이라고 불리기도 함)
 * 3. component : 컴포넌트에 직접적으로 연결되는 토큰
 */
export function designToken(theme: 'dark' | 'light' = 'light', size: SizeKeys = 'md'): DesignToken {
  return {
    base: baseToken,
    system: systemStyle(theme, size),
    component: componentStyle(systemStyle(theme, size)),
  };
}
