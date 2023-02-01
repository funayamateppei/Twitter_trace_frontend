/* eslint-disable no-undef */
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // yarn devで自動的にブラウザ開く
  server: {
    open: true,
  },
  // パスエイリアスの設定
  // src以下を@で記載できる
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
    },
  },
  // emotionを使うときに必要な設定
  plugins: [react({jsxImportSource: '@emotion/react'})],
});
