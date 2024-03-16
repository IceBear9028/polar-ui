/** storybook 의 styled-component 적용방법
 * link : https://storybook.js.org/recipes/styled-components
 */
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

// (styled-component 전용) 내가 설정한 글로벌 스타일, 테마 import
import { ThemeProvider } from 'styled-components';
import PolarGlobalStyle from '../src/style/polarGlobalStyle';
import { darkTheme, lightTheme, systemDarkColor, systemLightColor } from '../src/style/system';

import { usePolarThemeStore } from '../src/themeStatus/polarThemeStore';

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
  (Story) => {
    const { colorTheme, darkTheme } = usePolarThemeStore();
    return (
      <ThemeProvider theme={darkTheme === 'light' ? systemLightColor(colorTheme) : systemDarkColor(colorTheme)}>
        <Story />
      </ThemeProvider>
    );
  },
  // withThemeFromJSXProvider({
  //   themes: {
  //     light: systemLightColor(),
  //     dark: darkTheme,
  //   },
  //   defaultTheme: 'light',
  //   Provider: ThemeProvider,
  //   PolarGlobalStyle,
  // }),
];

export default preview;
