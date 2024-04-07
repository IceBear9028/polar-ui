import {
  BaseToken,
  ColorKeys,
  ComponentCommonColor,
  ComponentInputFieldColor,
  ComponentToken,
  SystemColor,
  SystemFontSize,
  SystemPadding,
  SystemToken,
} from '@style/style';

/** 0. 공통 스타일 지정함수
 * variant 별 스타일 지정
 * fontSize 는 모든 컴포넌트에서 공통
 **/

function CommonColor(systemColor: SystemColor): ComponentCommonColor {
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
      background: 'transparent',
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
      outlined: outlinedColor('gray'),
      filledContrast: filledContrastColor('gray'),
      filled: filledColor('gray'),
    },
  };
}

function CommonFontSize(fontStyle: SystemFontSize) {
  return {
    ...fontStyle,
  };
}

/** 1. Button 스타일
 * */

function ButtonPadding(systemTokenPadding: SystemPadding) {
  return {
    ...systemTokenPadding,
  };
}

/** 2. Chip 컴포넌트 토큰
 * 알림1 : Chip 에 대한 padding 속성의 System 토큰이 적용되지 않은 상태
 * 알림2 : 추후 Chip 에 대한 padding 속성 지정시 수정 필요
 */
function ChipPadding(baseToken: BaseToken) {
  return {
    md: {
      horizon: baseToken.padding.padding700,
      vertical: baseToken.padding.padding300,
    },
    sm: {
      horizon: baseToken.padding.padding600,
      vertical: baseToken.padding.padding200,
    },
  };
}

/** 3. InputField 에 대한 ComponentPadding
 */
function InputFieldPadding(systemTokenPadding: SystemPadding) {
  return {
    ...systemTokenPadding,
  };
}

function InputFieldColor(systemColor: SystemColor): ComponentInputFieldColor {
  function filledContrastColor(color: ColorKeys) {
    return {
      text: systemColor.common.text,
      placeholder: systemColor.common.outlinedVariant,
      border: systemColor.common.outlinedVariant,
      focusBorder: systemColor[color].primary,
      errorBorder: systemColor.common.error,
      background: systemColor.common.elementLow,
    };
  }
  function filledColor(color: ColorKeys) {
    return {
      text: systemColor.common.text,
      placeholder: systemColor.common.outlinedVariant,
      border: systemColor.common.outlinedVariant,
      focusBorder: systemColor[color].primary,
      errorBorder: systemColor.common.error,
      background: systemColor.common.elementLow,
    };
  }
  function outlinedColor(color: ColorKeys) {
    return {
      text: systemColor.common.text,
      placeholder: systemColor.common.outlinedVariant,
      border: systemColor.common.outlinedVariant,
      focusBorder: systemColor[color].primary,
      errorBorder: systemColor.common.error,
      background: systemColor.common.elementLow,
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
      outlined: outlinedColor('gray'),
      filledContrast: filledContrastColor('gray'),
      filled: filledColor('gray'),
    },
  };
}

export function componentToken(systemToken: SystemToken, baseToken: BaseToken): ComponentToken {
  return {
    button: {
      color: CommonColor(systemToken.color),
      padding: ButtonPadding(systemToken.padding),
      fontSize: CommonFontSize(systemToken.fontSize),
      fontWeight: baseToken.fontWeight.medium,
    },
    chip: {
      color: CommonColor(systemToken.color),
      padding: ChipPadding(baseToken),
      fontSize: CommonFontSize(systemToken.fontSize),
      fontWeight: baseToken.fontWeight.medium,
    },
    icon: {
      color: CommonColor(systemToken.color),
      size: systemToken.fontSize.icon,
    },
    inputField: {
      color: InputFieldColor(systemToken.color),
      padding: InputFieldPadding(systemToken.padding),
      fontSize: CommonFontSize(systemToken.fontSize),
      fontWeight: {
        label: baseToken.fontWeight.regular,
        text: baseToken.fontWeight.light,
      },
    },
  };
}
