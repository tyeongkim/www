import { resolve } from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

const currentPath = new URL('.', import.meta.url).pathname;

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    vanillaExtractPlugin(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': resolve(currentPath, './src'),
    },
  },
  clearScreen: false,
});
