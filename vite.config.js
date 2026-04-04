import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Voxel-Tycoon01/',
  server: { port: 3000 },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
