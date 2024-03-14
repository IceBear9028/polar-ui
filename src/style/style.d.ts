import 'styled-components';

// styled-component 의 DefaultTheme 을 재선언
// styled component 의 ThemeProvider 기능을 사용하기 위한 목적
declare module 'styled-components' {
  export interface DefaultTheme extends SystemColor {}
}

interface Size {
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

interface Padding {
  horizon: string;
  vertical: string;
}

interface PaddingElement {
  [index: Size]: Padding;
}

interface SystemPadding {
  [index: string]: PaddingElement;
}

interface SystemColor {
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
