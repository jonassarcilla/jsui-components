import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
    environment: 'jsdom',
    exclude: [
      ...configDefaults.exclude,
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
      './src/config/**',
      './storybook-static/**',
    ],
    coverage: {
      reportsDirectory: './tests/unit/coverage',
      include: ['src/**'],
      exclude: [
        'coverage/**',
        'storybook-static/**',
        '**/*{.,-}stories.?(c|m)[jt]s?(x)',
      ],
    },
    reporters: ['html', 'json'],
    outputFile: {
      json: './tests/unit/json/test-results.json',
      html: './tests/unit/html/test-results.json',
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ['**/*.stories.ts', '**/*.test.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'jsui-components-react',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
});
