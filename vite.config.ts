import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'polar-ui', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  // svgr() : svg 파일불러오기 기능
  plugins: [dts(), svgr()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  resolve: {
    alias: [
      { find: '@assets', replacement: './src/assets' },
      { find: '@components', replacement: './src/components' },
      { find: '@styles', replacement: './src/styles' },
      { find: '@utils', replacement: './src/utils' },
      { find: '@', replacement: './src' },
    ],
  },
});
