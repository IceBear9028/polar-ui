import 'styled-components';

// styled-component 의 DefaultTheme 을 재선언
// styled component 의 ThemeProvider 기능을 사용하기 위한 목적
declare module 'styled-components' {
  export interface DefaultTheme extends SystemStyle {}
}

type HeaderSizeKeys = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface HeaderSize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
}

type SizeKeys = 'xs' | 'sm' | 'md' | 'lg';

/** size : text 가 포함되어있는 컴포넌트들의 크기 모임
 * default : 컴포넌트의 크기를 지정하지 않았을 때의 시스템이 지정한 기본크기
 */
interface Size {
  default?: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface Variants {
  filledContrast: string;
  filled: string;
  outlined: string;
}

interface Bolds {
  light: string;
  regular: string;
  sbold: string;
  bold: string;
  xbold: string;
}

type ColorKeys = 'red' | 'blue' | 'green' | 'gray';
type LightDarkKeys = 'dark' | 'light';

interface ButtonSize extends Size {}
interface ButtonVariants extends Variants {}
type ButtonColorKeys = ColorKeys;

/** Padding 관련 스타일 지정
 */
interface Padding {
  horizon: string;
  vertical: string;
}

interface PaddingElement {
  default?: Padding;
  [index: SizeKeys]: Padding;
}

interface SystemPadding {
  [index: string]: PaddingElement;
}

/** FontSIze 관련 스타일 지정
 */
interface SystemFontSize {
  header: HeaderSize;
  text: Size;
}

interface ThemeColors {
  common: DetailCommonColor;
  blue: DetailColorTheme;
  red: DetailColorTheme;
  gray: DetailColorTheme;
  green: DetailColorTheme;
}

interface DetailColorTheme {
  primary: string;
  onPrimary: string;
  primaryVariant: stirng;
  onPrimaryVariant: string;
  secondary: string;
  onSecondary: string;
  secondaryVariant: string;
  onSecondaryVariant: string;
}

interface DetailCommonColor {
  // 배경 관련 색상
  background: string;
  surface: string;
  surfaceVariant: string;
  element: string;
  elementHigh: string;
  elementHighest: string;
  elementLow: string;

  // 상태 관련 색상
  error: string;
  onError: string;
  caution: string;
  onCaution: string;
  info: string;
  success: string;
  disabled: string;

  // 기타 요소
  outlined: string;
  outlinedVariant: string;
  text: string;
}

interface SystemColor extends ThemeColors {
  systemThemeColor: DetailColorTheme;
}

/** 시스템 전체 스타일 토큰을 가짐
 * StyledComponent 의 ThemeProvider 전체 스타일에 적용
 * */
interface SystemStyle {
  padding: SystemPadding;
  fontSize: SystemFontSize;
  color: SystemColor;
}
