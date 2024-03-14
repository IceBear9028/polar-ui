/** storybook 의 styled-component 적용방법
 * link : https://storybook.js.org/recipes/styled-components
 */
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

// (styled-component 전용) 내가 설정한 글로벌 스타일, 테마 import
import { ThemeProvider } from 'styled-components';
import PolarGlobalStyle from '../src/style/polarGlobalStyle';
import { darkTheme, lightTheme } from '../src/style/system';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    PolarGlobalStyle,
  }),
];

export default preview;
