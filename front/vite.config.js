import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    proxy: {
      '/send-email': {
        target: 'http://localhost:3000/send-email', // Assurez-vous que cela correspond à votre serveur backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/send-email/, ''),
      },
    },
  },
});