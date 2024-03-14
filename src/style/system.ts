import { base } from './base';
import { SystemColor, SystemPadding } from '@style/style';

const padding: SystemPadding = {
  input: {
    xs: {
      horizon: base.padding.padding600,
      vertical: base.padding.padding300,
    },
    sm: {
      horizon: base.padding.padding700,
      vertical: base.padding.padding400,
    },
    md: {
      horizon: base.padding.padding800,
      vertical: base.padding.padding500,
    },
    lg: {
      horizon: base.padding.padding900,
      vertical: base.padding.padding600,
    },
  },
};

export const lightTheme: SystemColor = {
  common: {
    background: base.palette.backgroundLight,
    surface: base.palette.white,
    surfaceVariant: base.palette.gray200Soft,
    outlined: base.palette.gray300Soft,
    outlinedVariant: base.palette.gray300Bright,
    elementLow: base.palette.gray25Bright,
    element: base.palette.gray50Bright,
    elementHigh: base.palette.gray150Bright,
    elementHighest: base.palette.gray200Bright,
    text: base.palette.black,
    error: base.palette.redA200Bright,
    onError: base.palette.white,
    caution: base.palette.orangeA100Bright,
    onCaution: base.palette.white,
    info: base.palette.blueA100Bright,
    success: base.palette.green300Bright,
    disabled: 'rgb(255, 255, 255 / 0.5)',
  },
  blue: {
    primary: base.palette.blue300Bright,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.blue50Bright,
    onPrimaryVariant: base.palette.blue400Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.blue300Bright,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.blue50Bright,
    onSecondaryVariant: base.palette.blue400Bright,
  },
  red: {
    primary: base.palette.red300Bright,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.red50Bright,
    onPrimaryVariant: base.palette.redA200Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.red300Bright,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.red50Bright,
    onSecondaryVariant: base.palette.redA200Bright,
  },
  gray: {
    primary: base.palette.gray500Bright,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.gray150Bright,
    onPrimaryVariant: base.palette.black,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.gray500Bright,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.gray150Bright,
    onSecondaryVariant: base.palette.black,
  },
  green: {
    primary: base.palette.green300Bright,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.green50Bright,
    onPrimaryVariant: base.palette.green400Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.green300Bright,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.green50Bright,
    onSecondaryVariant: base.palette.green400Bright,
  },
};

export const darkTheme: SystemColor = {
  common: {
    background: base.palette.backgroundDark,
    surface: base.palette.gray600Bright,
    surfaceVariant: base.palette.gray600Soft,
    outlined: base.palette.gray500Soft,
    outlinedVariant: base.palette.gray300Soft,
    elementLow: base.palette.gray600Bright,
    element: base.palette.gray500Bright,
    elementHigh: base.palette.gray400Bright,
    elementHighest: base.palette.gray300Bright,
    text: base.palette.white,
    error: base.palette.redA200Soft,
    onError: base.palette.white,
    caution: base.palette.orangeA100Soft,
    onCaution: base.palette.white,
    info: base.palette.blue400Soft,
    success: base.palette.greenA200Soft,
    disabled: 'rgb(0, 0, 0 / 0.5)',
  },
  blue: {
    primary: base.palette.blue300Soft,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.blue700Soft,
    onPrimaryVariant: base.palette.blue200Soft,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.blue300Soft,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.blue700Soft,
    onSecondaryVariant: base.palette.blue200Soft,
  },
  red: {
    primary: base.palette.red300Soft,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.red500Soft,
    onPrimaryVariant: base.palette.red100Bright,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.red300Soft,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.red500Soft,
    onSecondaryVariant: base.palette.red100Bright,
  },
  gray: {
    primary: base.palette.white,
    onPrimary: base.palette.black,
    primaryVariant: base.palette.gray500Bright,
    onPrimaryVariant: base.palette.white,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.white,
    onSecondary: base.palette.black,
    secondaryVariant: base.palette.gray500Bright,
    onSecondaryVariant: base.palette.white,
  },
  green: {
    primary: base.palette.green300Soft,
    onPrimary: base.palette.white,
    primaryVariant: base.palette.green600Soft,
    onPrimaryVariant: base.palette.green200Soft,

    // 2023.02.29 기준 secondary 색상이 완벽히 지정안됨. 임시로 primary 와 같은 색상 지정
    secondary: base.palette.green300Soft,
    onSecondary: base.palette.white,
    secondaryVariant: base.palette.green600Soft,
    onSecondaryVariant: base.palette.green200Soft,
  },
};

export const system = {
  padding,
  color: {
    light: lightTheme,
    dark: darkTheme,
  },
};
