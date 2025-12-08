import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    basex: 'https://www.decade.tw/decade.tw/dist/',
})
