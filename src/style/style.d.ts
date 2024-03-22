import 'styled-components';

// styled-component 의 DefaultTheme 을 재선언
// styled component 의 ThemeProvider 기능을 사용하기 위한 목적
declare module 'styled-components' {
  export interface DefaultTheme extends DesignToken {}
}

interface DesignToken {
  base: any;
  system: SystemToken;
  component: ComponentToken;
}

/** 시스템 전체 스타일 토큰을 가짐
 * StyledComponent 의 ThemeProvider 전체 스타일에 적용
 * */
interface SystemToken {
  padding: SystemPadding;
  fontSize: SystemFontSize;
  color: SystemColor;
}

/** 컴포넌트 계층 토큰 타입
 * 1. button : 버튼 컴포넌트의 토큰 타입을 지정
 */
interface ComponentToken {
  button: ComponentButton;
}

interface ComponentButtonColor {
  [Color in ColorKeys]: Variants;
}
interface ComponentButtonPadding extends SystemPadding {}
interface ComponentButtonFontSize extends SystemFontSize {}

interface ComponentButton {
  color: ComponentButtonColor;
  padding: ComponentButtonPadding;
  fontSize: ComponentButtonFontSize;
}

interface HeaderSize {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
}
type HeaderSizeKeys = keyof HeaderSize;

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
// type SizeKeys = 'xs' | 'sm' | 'md' | 'lg';
type SizeKeys = keyof Omit<Size, 'default'>;

interface Variants {
  filledContrast: string;
  filled: string;
  outlined: string;
}
type VariantKeys = keyof Variants;

interface Bolds {
  light: string;
  regular: string;
  sbold: string;
  bold: string;
  xbold: string;
}
type BoldKeys = keyof Bolds;

interface Colors {
  red: string;
  blue: string;
  gray: string;
  green: string;
  systemThemeColor: string;
}

type ColorKeys = keyof Colors;

type LightDarkKeys = 'dark' | 'light';
type componentKeys = 'input' | 'display';

type ButtonSize = keyof Omit<Size, 'default'>;

type ButtonVariants = keyof Variants;
type ButtonColorKeys = ColorKeys;

/** Padding 관련 스타일 지정
 */
interface Padding {
  horizon: string;
  vertical: string;
}

interface PaddingElement extends Size {
  default: Padding;
  xs: Padding;
  sm: Padding;
  md: Padding;
  lg: Padding;
  // [index: SizeKeys]: Padding;
}

interface SystemPadding {
  input: PaddingElement;
}

/** FontSIze 관련 스타일 지정
 */
interface SystemFontSize {
  header: HeaderSize;
  text: Size;
}

interface SystemThemeColors {
  common: DetailCommonColor;
  blue: SystemDetailColorTheme;
  red: SystemDetailColorTheme;
  gray: SystemDetailColorTheme;
  green: SystemDetailColorTheme;
}

interface SystemDetailColorTheme {
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

interface SystemColor extends SystemThemeColors {
  systemThemeColor: SystemDetailColorTheme;
}
