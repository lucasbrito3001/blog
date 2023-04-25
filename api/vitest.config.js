import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      exclude: ['node_modules', '**/*.mock.ts']
    },
  },
})