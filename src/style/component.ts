/** 1. Button 스타일
 * */
import { ColorKeys, SystemColor, SystemStyle } from '@style/style';

function ButtonColor(systemColor: SystemColor) {
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

export function componentStyle(systemStyle: SystemStyle) {
  return {
    button: {
      color: ButtonColor(systemStyle.color),
      padding: '여기에 사이즈별로 패딩사이즈 작성할 것',
      fontSize: '여기에 사이즈별로 폰트 사이즈 적용할 것',
    },
  };
}
