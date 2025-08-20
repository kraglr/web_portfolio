import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs';
import viteCompression from "vite-plugin-compression";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),// Gzip compression
  viteCompression({
    verbose: true, // Print compression results in the console
    disable: false,
    threshold: 10240, // Compress files larger than 10kb
    algorithm: "gzip",
    ext: ".gz",
  }),
  // Brotli compression
  viteCompression({
    verbose: true,
    disable: false,
    threshold: 10240, // Compress files larger than 10kb
    algorithm: "brotliCompress",
    ext: ".br",
  }),],
  server: {

    https: {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    host: 'kierteq.local',
    port: 5174,
  },
  optimizeDeps: {

    include: ['react-pdf/dist/esm/entry.js', 'pdfjs-dist'],

    // exclude: ['react-pdf'],
  },
})
