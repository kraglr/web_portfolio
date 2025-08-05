import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {

    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    host: 'kierteq.local',
    port: 5174,
  },
  optimizeDeps: {
    // Explicitly include react-pdf so Vite processes it from the start.
    include: ['react-pdf/dist/esm/entry.js', 'pdfjs-dist'],
    // You might also need to exclude it if it's causing issues,
    // but including is usually the solution for a timeout.
    // exclude: ['react-pdf'],
  },
})
