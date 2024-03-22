import { ColorKeys, ComponentButtonColor, SystemColor, SystemFontSize, SystemPadding, SystemToken } from '@style/style';

/** 0. 공통 스타일 지정함수
 * variant 별 스타일 지정
 * input 은
 **/

/** 1. Button 스타일
 * */
function ButtonColor(systemColor: SystemColor): ComponentButtonColor {
  function filledContrastColor(color: ColorKeys) {
    return {
      background: systemColor[color].primary,
      color: systemColor[color].onPrimary,
      border: `none`,
    };
  }
  function filledColor(color: ColorKeys) {
    return {
      background: systemColor[color].primaryVariant,
      color: systemColor[color].onPrimaryVariant,
      border: `none`,
    };
  }
  function outlinedColor(color: ColorKeys) {
    return {
      background: 'none',
      color: systemColor[color].primary,
      border: systemColor[color].primary,
    };
  }
  return {
    systemThemeColor: {
      filledContrast: filledContrastColor('systemThemeColor'),
      filled: filledColor('systemThemeColor'),
      outlined: outlinedColor('systemThemeColor'),
    },
    green: {
      filledContrast: filledContrastColor('green'),
      filled: filledColor('green'),
      outlined: outlinedColor('green'),
    },
    red: {
      filledContrast: filledContrastColor('red'),
      filled: filledColor('red'),
      outlined: outlinedColor('red'),
    },
    blue: {
      filledContrast: filledContrastColor('blue'),
      filled: filledColor('blue'),
      outlined: outlinedColor('blue'),
    },
    gray: {
      filledContrast: filledContrastColor('gray'),
      filled: filledColor('gray'),
      outlined: outlinedColor('gray'),
    },
  };
}

function ButtonPadding(systemStyle: SystemPadding) {
  return {
    ...systemStyle,
  };
}

function ButtonFontSize(fontStyle: SystemFontSize) {
  return {
    ...fontStyle,
  };
}

export function componentStyle(systemStyle: SystemToken) {
  return {
    button: {
      color: ButtonColor(systemStyle.color),
      padding: ButtonPadding(systemStyle.padding),
      fontSize: ButtonFontSize(systemStyle.fontSize),
    },
  };
}
