// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 🔑 THE FIX: Use './' to enable relative pathing for GitHub Pages subdirectories
  base: './',
});