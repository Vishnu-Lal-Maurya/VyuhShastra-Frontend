import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the desired port
    host: '0.0.0.0', // Ensure the server is accessible externally
    proxy: {
      '/server': {
        target: 'http://server:5000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/server/, ''),
      },
    },
  },
});
