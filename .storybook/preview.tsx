/** storybook 의 styled-component 적용방법
 * link : https://storybook.js.org/recipes/styled-components
 */
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

// (styled-component 전용) 내가 설정한 글로벌 스타일, 테마 import
import { ThemeProvider } from 'styled-components';
import PolarGlobalStyle from '../src/style/common/polarGlobalStyle';
import { designToken } from '../src/style/designToken';

const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: designToken('light'),
      dark: designToken('dark'),
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: PolarGlobalStyle,
  }),
];

const preview: Preview = {
  decorators,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
};

export default preview;
