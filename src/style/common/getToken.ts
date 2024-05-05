import { ColorKeys, ColorThemeKeys, ColorThemes, DesignToken, SystemDetailColorTheme } from '@style/style';

/** System 색상 토큰을 반환하는 함수
 * 주의 : StyledComponent 내의 함수에서만 사용해야 함
 * @params{theme} , StyledComponent 의 GlobalTheme 객체
 * @params{colorKey} , ColorKeys 객체 혹은 string
 * @return : hex 코드 return
 * */
export function getSystemThemeColorToken(theme: DesignToken, colorKey?: ColorKeys): string {
  const { color } = theme.system;

  // 1. color 설정값을 입력하지 않은 경우 -> 기본테마.primary 반환
  if (!colorKey) {
    return color.systemThemeColor.primary;
  }
  // 2. color 설정값이 ColorThemeKeys 인 경우 -> ColorThemeKeys.primary 반환
  if (typeof colorKey === 'string') {
    return color[colorKey as keyof ColorThemes].primary;
  }
  const themeColor = Object.keys(colorKey)[0] as ColorThemeKeys;
  const systemColorToken = Object.values(colorKey)[0] as keyof SystemDetailColorTheme;
  return color[themeColor][systemColorToken];
}
