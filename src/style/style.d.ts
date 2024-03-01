interface Padding {
  horizon: string;
  vertical: string;
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
