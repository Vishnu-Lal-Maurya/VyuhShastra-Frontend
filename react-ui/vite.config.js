import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables from a `.env` file
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Set the desired port
    host: '0.0.0.0', // Ensure the server is accessible externally
    proxy: {
      '/backend': {
        target: process.env.BACKEND_URL || 'http://0.0.0.0:5000', // Read from environment variable or use default
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/backend/, ''),
      },
    },
  },
});
