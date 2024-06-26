import 'styled-components';

// styled-component 의 DefaultTheme 을 재선언
// styled component 의 ThemeProvider 기능을 사용하기 위한 목적
declare module 'styled-components' {
  export interface DefaultTheme extends DesignToken {}
}

interface DesignToken {
  base: BaseToken;
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
 * 2. chip : chip 컴포넌트의 토큰 타입을 지정
 */
interface ComponentToken {
  button: ComponentButton;
  chip: ComponentChip;
  icon: ComponentIcon;
  inputField: ComponentInput;
  select: ComponentInput;
}

/** 0. Component 토큰에서 공통적으로 사용하는 타입 지정
 */
type ComponentCommonColor = {
  [Color in ColorKeys]: {
    [Variant in keyof Variants]: {
      color: string;
      border: string;
      background: string;
    };
  };
};

/** 1. Component 토큰에서 Button 타입
 */
interface ComponentButton {
  color: ComponentCommonColor;
  padding: ComponentButtonPadding;
  fontSize: ComponentButtonFontSize;
  fontWeight: ComponentButtonFontWeight;
}
type ComponentButtonPadding = SystemPadding & {};
type ComponentButtonFontSize = SystemFontSize & {};
type ComponentButtonFontWeight = number;

/** 2. Component 토큰에서 Chip 타입
 */
interface ComponentChip {
  color: ComponentCommonColor;
  padding: ComponentChipPadding;
  fontSize: ComponentChipFontSize;
  fontWeight: ComponentChipFontWeight;
}

type ComponentChipPadding = {
  sm: Padding;
  md: Padding;
};
type ComponentChipFontSize = SystemFontSize & {};
type ComponentChipFontWeight = number;

/** 3. Component 토큰에서 Icon 타입
 */
interface ComponentIcon {
  color: ComponentCommonColor;
  size: ComponentIconSize;
}

type ComponentIconSize = CommonSize & {};

/** 4. Component 토큰에서 inputField 타입
 */
type ComponentInputColor = {
  [Color in ColorKeys]: {
    [Variant in keyof Variants]: {
      text: string;
      placeholder: string;
      border: string;
      focusBorder: string;
      errorBorder: string;
      background: string;
    };
  };
};
interface ComponentInput {
  color: ComponentInputColor;
  padding: ComponentInputPadding;
  fontSize: ComponentInputFontSize;
  fontWeight: ComponentInputFontWeight;
}

type ComponentInputPadding = SystemPadding & {};
type ComponentInputFontSize = SystemFontSize & {};
type ComponentInputFontWeight = {
  label: number;
  text: number;
};

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
interface CommonSize {
  default: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
}
// type SizeKeys = 'xs' | 'sm' | 'md' | 'lg';
type SizeKeys = keyof Omit<CommonSize, 'default'>;

interface Variants {
  filledContrast: string;
  filled: string;
  outlined: string;
}
type VariantKeys = keyof Variants;

interface CommonBolds {
  light: string;
  regular: string;
  sbold: string;
  bold: string;
  xbold: string;
}
type BoldKeys = keyof CommonBolds;

export interface ColorThemes {
  red: string;
  blue: string;
  gray: string;
  green: string;
  systemThemeColor: string;
}

type ColorThemeKeys = keyof Omit<ColorThemes, 'systemThemeColor'>;

type SystemColorKeys = {
  [theme in ColorThemeKeys]: { [P in theme]: keyof SystemDetailColorTheme };
}[keyof ColorThemeKeys];

/**  ColorKeys
 * 두가지 방법으로 입력 가능
 * 1. ColorThemes : 'red', 'blue', 'gray', 'green'
 * - 입력 시 색상 테마의 primaryColor 로 자동매칭
 * 2. ColorTheme + SystemToken : {'red' : 'primary'} | {'red' : 'onPrimary'} | ...
 * - 색상 테마와 systemToken 의 조합을 이용하여 좀더 세세한 토큰 지정 가능
 */
type ColorKeys = ColorThemeKeys | SystemColorKeys;

type LightDarkKeys = 'dark' | 'light';
type componentKeys = 'input' | 'display';

type ButtonSize = keyof Omit<CommonSize, 'default'>;

type ButtonVariants = keyof Variants;
type ButtonColorKeys = ColorThemeKeys;

/** Padding 관련 스타일 지정
 */
interface Padding {
  horizon: string;
  vertical: string;
}

interface SystemPadding {
  input: {
    xs: Padding;
    sm: Padding;
    md: Padding;
    lg: Padding;
    default?: Padding;
  };
}

/** FontSIze 관련 스타일 지정
 */
interface SystemFontSize {
  header: HeaderSize;
  text: CommonSize;
  icon: CommonSize;
}

interface SystemColor extends SystemThemeColors {
  systemThemeColor: SystemDetailColorTheme;
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
  primaryVariant: string;
  onPrimaryVariant: string;
  secondary: string;
  onSecondary: string;
  secondaryVariant: string;
  onSecondaryVariant: string;
}

interface DetailCommonColor {
  // 배경 관련 색상
  background: string;
  surfaceLowest: string;
  surfaceLow: string;
  surfaceHigh: string;
  surfaceHighest: string;
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

  // text 색상
  text: string;
  textNegative: string;
  textLowest: string;
  textLow: string;
  textHigh: string;
  textHighest: string;

  // 기타 요소
  outlined: string;
  outlinedVariant: string;
}

interface BaseToken {
  palette: {
    [index: string]: string;
  };
  padding: BasePadding;
  fontSize: BaseFontSize;
  fontWeight: BaseFontWeight;
  border: BaseBorder;
}

interface BaseFontSize {
  header: {
    [headerSize in HeaderSizeKeys]: string;
  };
  icon: {
    [TextSize in keyof Omit<CommonSize, 'default'>]: string;
  };
  text: {
    [TextSize in keyof Omit<CommonSize, 'default'>]: string;
  };
}

interface BaseFontWeight {
  light: number;
  regular: number;
  medium: number;
  sbold: number;
  bold: number;
  xbold: number;
}

interface BasePadding {
  padding100: string;
  padding200: string;
  padding300: string;
  padding400: string;
  padding500: string;
  padding600: string;
  padding700: string;
  padding800: string;
  padding900: string;
}

interface BaseBorder {
  border100: string;
  border200: string;
}
