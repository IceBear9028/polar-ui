import { BaseFontWeight } from '@style/style';

const palette = {
  backgroundDark: '#000000',
  backgroundLight: '#fafafa',
  black: '#000000',
  blue100Bright: '#b7d6f2',
  blue100Soft: '#d2e1ef',
  blue200Bright: '#72b0ea',
  blue200Soft: '#95c1ea',
  blue300Bright: '#3290e7',
  blue300Soft: '#569fe2',
  blue400Bright: '#1077d6',
  blue400Soft: '#2a7ecc',
  blue50Bright: '#e4f0fb',
  blue50Soft: '#e9f0f6',
  blue500Bright: '#075dac',
  blue500Soft: '#1364ae',
  blue600Bright: '#064681',
  blue600Soft: '#064681',
  blue700Bright: '#04325d',
  blue700Soft: '#0e375d',
  blueA100Bright: '#175ce0',
  blueA100Soft: '#3b73df',
  blueA200Bright: '#2229bf',
  blueA200Soft: '#3238c2',
  blueA300Bright: '#141879',
  blueA300Soft: '#1c1f78',
  gray100Bright: '#ebedef',
  gray100Soft: '#eef0f2',
  gray150Bright: '#dee3e5',
  gray150Soft: '#dbe0e1',
  gray200Bright: '#c0c6ca',
  gray200Soft: '#cfd1d2',
  gray25Bright: '#fdfdfd',
  gray25Soft: '#fbfbfb',
  gray300Bright: '#8a949b',
  gray300Soft: '#9ca2a7',
  gray400Bright: '#5c6469',
  gray400Soft: '#686e73',
  gray50Bright: '#f7f7f7',
  gray50Soft: '#f6f7f7',
  gray500Bright: '#282a2c',
  gray500Soft: '#393c3f',
  gray600Bright: '#1d1f21',
  gray600Soft: '#2e2e2e',
  gray700Bright: '#101113',
  gray700Soft: '#1a1a1a',
  grayA100Bright: '#c1cbcd',
  grayA100Soft: '#cbd4d6',
  grayA200Bright: '#9da4a6',
  grayA200Soft: '#a7adaf',
  grayA300Bright: '#757a7b',
  grayA300Soft: '#818484',
  green100Bright: '#b8f2ce',
  green100Soft: '#c1efd2',
  green200Bright: '#6ed795',
  green200Soft: '#82d6a1',
  green300Bright: '#2cc465',
  green300Soft: '#46c073',
  green400Bright: '#099c40',
  green400Soft: '#2b9b55',
  green50Bright: '#e2f9ea',
  green50Soft: '#e6f7ec',
  green500Bright: '#02772e',
  green500Soft: '#1f723e',
  green600Bright: '#03471c',
  green600Soft: '#094720',
  green700Bright: '#023113',
  green700Soft: '#062e15',
  greenA100Bright: '#2fe82b',
  greenA100Soft: '#51e04e',
  greenA200Bright: '#1ece3a',
  greenA200Soft: '#43cb59',
  greenA300Bright: '#249c37',
  greenA300Soft: '#3e994d',
  orange100Bright: '#ffdab8',
  orange100Soft: '#f8e0c9',
  orange200Bright: '#eea460',
  orange200Soft: '#eaaf79',
  orange300Bright: '#d37219',
  orange300Soft: '#d07827',
  orange400Bright: '#ab5403',
  orange400Soft: '#a85b14',
  orange50Bright: '#fff1e3',
  orange50Soft: '#fbf1e9',
  orange500Bright: '#7d3c00',
  orange500Soft: '#7c4410',
  orange600Bright: '#5c310a',
  orange600Soft: '#5c310a',
  orange700Bright: '#321a05',
  orange700Soft: '#321a05',
  orangeA100Bright: '#ee7d14',
  orangeA100Soft: '#ea8426',
  orangeA200Bright: '#c36915',
  orangeA200Soft: '#ca7527',
  orangeA300Bright: '#8e4e13',
  orangeA300Soft: '#904e10',
  purple100Bright: '#f1d4f8',
  purple100Soft: '#f2dff6',
  purple200Bright: '#d999e9',
  purple200Soft: '#e0aaed',
  purple300Bright: '#cf5bec',
  purple300Soft: '#ce72e4',
  purple400Bright: '#ac1cd0',
  purple400Soft: '#b232d2',
  purple50Bright: '#faeffd',
  purple50Soft: '#f9f1fb',
  purple500Bright: '#750890',
  purple500Soft: '#7c1595',
  purple600Bright: '#4e0460',
  purple600Soft: '#541862',
  purple700Bright: '#31033d',
  purple700Soft: '#300d3a',
  purpleA100Bright: '#c114ea',
  purpleA100Soft: '#b018d5',
  purpleA200Bright: '#9c12bd',
  purpleA200Soft: '#841f99',
  purpleA300Bright: '#66117b',
  purpleA300Soft: '#551066',
  red100Bright: '#ffd9d4',
  red100Soft: '#fce7e4',
  red200Bright: '#eb877a',
  red200Soft: '#e89d92',
  red300Bright: '#c43e2c',
  red300Soft: '#c34f3f',
  red400Bright: '#9a2212',
  red400Soft: '#9c3527',
  red50Bright: '#fff2f0',
  red50Soft: '#fef7f6',
  red500Bright: '#670e02',
  red500Soft: '#632118',
  red600Bright: '#4b0b02',
  red600Soft: '#4b1912',
  red700Bright: '#2c0701',
  red700Soft: '#2a0f0b',
  redA100Bright: '#f32d12',
  redA100Soft: '#ec432c',
  redA200Bright: '#c52611',
  redA200Soft: '#c33724',
  redA300Bright: '#901b0b',
  redA300Soft: '#992717',
  surfaceDark: '#151515',
  white: '#ffffff',
};

const padding = {
  padding100: '2px',
  padding200: '4px',
  padding300: '6px',
  padding400: '8px',
  padding500: '10px',
  padding600: '12px',
  padding700: '14px',
  padding800: '16px',
  padding900: '18px',
};

const border = {
  border100: '1px',
  border200: '2px',
};

const fontSize = {
  header: {
    h5: '24px',
    h4: '32px',
    h3: '36px',
    h2: '48px',
    h1: '56px',
  },
  icon: {
    xs: '13px',
    sm: '16px',
    md: '18px',
    lg: '20px',
  },
  text: {
    xs: '11px',
    sm: '13px',
    md: '15px',
    lg: '17px',
  },
};

const fontWeight: BaseFontWeight = {
  light: 200,
  regular: 400,
  medium: 500,
  sbold: 600,
  bold: 700,
  xbold: 800,
};

export const baseToken = {
  palette,
  padding,
  fontSize,
  fontWeight,
  border,
};
