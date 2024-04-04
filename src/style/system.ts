import { baseToken } from './base.ts';
import { ColorKeys, SizeKeys, SystemColor, SystemPadding, SystemToken, SystemThemeColors, HeaderSizeKeys } from './style';

const padding: SystemPadding = {
  input: {
    xs: {
      horizon: baseToken.padding.padding600,
      vertical: baseToken.padding.padding300,
    },
    sm: {
      horizon: baseToken.padding.padding700,
      vertical: baseToken.padding.padding400,
    },
    md: {
      horizon: baseToken.padding.padding800,
      vertical: baseToken.padding.padding500,
    },
    lg: {
      horizon: baseToken.padding.padding900,
      vertical: baseToken.padding.padding600,
    },
  },
};

// 전체 시스템의 default 패딩 값을 지정하는 함수
export function systemPadding(size: SizeKeys) {
  const componentNames = Object.keys(padding);
  let paddingObj: SystemPadding = {};
  for (let comp of componentNames) {
    paddingObj[comp] = { ...padding[comp], default: padding[comp][size] };
  }
  return paddingObj;
}

/** B. fontSize
 */
export function systemHeaderSize(size: HeaderSizeKeys) {
  return {
    ...baseToken.fontSize.header,
    default: baseToken.fontSize.header[size],
  };
}
export function systemTextFont(size: SizeKeys) {
  return {
    ...baseToken.fontSize.text,
    default: baseToken.fontSize.text[size],
  };
}
export function systemIconSize(size: SizeKeys) {
  return {
    ...baseToken.fontSize.icon,
    default: baseToken.fontSize.icon[size],
  };
}

export const lightTheme: SystemThemeColors = {
  common: {
    background: baseToken.palette.backgroundLight,
    surface: baseToken.palette.white,
    surfaceVariant: baseToken.palette.gray200Soft,
    outlined: baseToken.palette.gray300Soft,
    outlinedVariant: baseToken.palette.gray300Bright,
    elementLow: baseToken.palette.gray25Bright,
    element: baseToken.palette.gray50Bright,
    elementHigh: baseToken.palette.gray150Bright,
    elementHighest: baseToken.palette.gray200Bright,
    text: baseToken.palette.black,
    error: baseToken.palette.redA200Bright,
    onError: baseToken.palette.white,
    caution: baseToken.palette.orangeA100Bright,
    onCaution: baseToken.palette.white,
    info: baseToken.palette.blueA100Bright,
    success: baseToken.palette.green300Bright,
    disabled: 'rgb(255, 255, 255 / 0.5)',
  },
  blue: {
    primary: baseToken.palette.blue300Bright,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.blue50Bright,
    onPrimaryVariant: baseToken.palette.blue400Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.blue300Bright,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.blue50Bright,
    onSecondaryVariant: baseToken.palette.blue400Bright,
  },
  red: {
    primary: baseToken.palette.red300Bright,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.red50Bright,
    onPrimaryVariant: baseToken.palette.redA200Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.red300Bright,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.red50Bright,
    onSecondaryVariant: baseToken.palette.redA200Bright,
  },
  gray: {
    primary: baseToken.palette.gray500Bright,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.gray150Bright,
    onPrimaryVariant: baseToken.palette.black,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.gray500Bright,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.gray150Bright,
    onSecondaryVariant: baseToken.palette.black,
  },
  green: {
    primary: baseToken.palette.green300Bright,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.green50Bright,
    onPrimaryVariant: baseToken.palette.green400Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.green300Bright,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.green50Bright,
    onSecondaryVariant: baseToken.palette.green400Bright,
  },
};

export const darkTheme: SystemThemeColors = {
  common: {
    background: baseToken.palette.backgroundDark,
    surface: baseToken.palette.gray600Bright,
    surfaceVariant: baseToken.palette.gray600Soft,
    outlined: baseToken.palette.gray500Soft,
    outlinedVariant: baseToken.palette.gray300Soft,
    elementLow: baseToken.palette.gray600Bright,
    element: baseToken.palette.gray500Bright,
    elementHigh: baseToken.palette.gray400Bright,
    elementHighest: baseToken.palette.gray300Bright,
    text: baseToken.palette.white,
    error: baseToken.palette.redA200Soft,
    onError: baseToken.palette.white,
    caution: baseToken.palette.orangeA100Soft,
    onCaution: baseToken.palette.white,
    info: baseToken.palette.blue400Soft,
    success: baseToken.palette.greenA200Soft,
    disabled: 'rgb(0, 0, 0 / 0.5)',
  },
  blue: {
    primary: baseToken.palette.blue300Soft,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.blue700Soft,
    onPrimaryVariant: baseToken.palette.blue200Soft,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.blue300Soft,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.blue700Soft,
    onSecondaryVariant: baseToken.palette.blue200Soft,
  },
  red: {
    primary: baseToken.palette.red300Soft,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.red500Soft,
    onPrimaryVariant: baseToken.palette.red100Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.red300Soft,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.red500Soft,
    onSecondaryVariant: baseToken.palette.red100Bright,
  },
  gray: {
    primary: baseToken.palette.white,
    onPrimary: baseToken.palette.black,
    primaryVariant: baseToken.palette.gray500Bright,
    onPrimaryVariant: baseToken.palette.white,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.white,
    onSecondary: baseToken.palette.black,
    secondaryVariant: baseToken.palette.gray500Bright,
    onSecondaryVariant: baseToken.palette.white,
  },
  green: {
    primary: baseToken.palette.green300Soft,
    onPrimary: baseToken.palette.white,
    primaryVariant: baseToken.palette.green600Soft,
    onPrimaryVariant: baseToken.palette.green200Soft,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: baseToken.palette.green300Soft,
    onSecondary: baseToken.palette.white,
    secondaryVariant: baseToken.palette.green600Soft,
    onSecondaryVariant: baseToken.palette.green200Soft,
  },
};

// 변경시 컴포넌트 기본 테마 색상을 재지정
// systemThemeColor : 시스템 전체 테마 색상.
export function systemDarkColor(color: ColorKeys): SystemColor {
  return {
    ...darkTheme,
    systemThemeColor: {
      ...darkTheme[color],
    },
  };
}

// 변경시 컴포넌트 기본 테마 색상을 재지정
// systemThemeColor : 시스템 전체 테마 색상.
export function systemLightColor(color: ColorKeys): SystemColor {
  return {
    ...lightTheme,
    systemThemeColor: {
      ...lightTheme[color],
    },
  };
}

export function systemToken(theme: 'dark' | 'light', colorTheme: ColorKeys, size: SizeKeys, headerSize: HeaderSizeKeys): SystemToken {
  const systemColor = theme === 'light' ? systemLightColor(colorTheme) : systemDarkColor(colorTheme);
  const systemPaddings = systemPadding(size);
  const systemFontSize = {
    header: systemHeaderSize(headerSize),
    text: systemTextFont(size),
    icon: systemIconSize(size),
  };
  return {
    padding: systemPaddings,
    color: systemColor,
    fontSize: systemFontSize,
  };
}
