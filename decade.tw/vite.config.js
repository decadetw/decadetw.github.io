import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        preserveSymlinks: true,
    },
    server: {
        disableHostCheck: true,
        port: 8888,
        open: false,
        host: "0.0.0.0",
        allowedHosts:['xmax.local','localhost','xmax'],
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`, // For entry points
                chunkFileNames: `assets/[name].js`, // For code-split chunks
                assetFileNames: `assets/[name].[ext]` // For assets like CSS, images, etc.
            }
        }
    },
    base: 'https://www.decade.tw/decade.tw/dist/',
})
