/// <reference types="vitest" />

import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import "vitest/config"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    globals: true,
    include: ['test/**/*.test.{ts,tsx}']
  },
} as UserConfig)
