/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    css: false,
    coverage: {
      provider: 'c8',
      all: true,
      reporter: 'text',
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/tests/**',
        '**/cypress/**',
        '**/interfaces/**',
        '**/.{idea,git,cache,output,temp}/**',
        '**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*',
        '**/*.d.ts',
        '**/.{eslint,mocha,prettier}rc.{js,cjs,yml}',
        'src/main.tsx',
      ],
    },
  },
});
