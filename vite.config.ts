// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    // Mobile-friendly defaults
    host: '0.0.0.0',
    port: 3000,
  },
  build: {
    rollupOptions: {
      // Ensure single page app fallback for Vercel
      output: {
        manualChunks: undefined,
      },
    },
  },
});
