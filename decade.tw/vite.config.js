import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
// https://vite.dev/config/
export default defineConfig(({ command, mode }) =>{
    const isDev = mode === 'development';

    return {
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
            outDir: '../docs',
            rollupOptions: {
                output: {
                    entryFileNames: `assets/[name].js`, // For entry points
                    chunkFileNames: `assets/[name].js`, // For code-split chunks
                    assetFileNames: `assets/[name].[ext]` // For assets like CSS, images, etc.
                },
                output2: {
                    // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
                    sanitizeFileName(name) {
                        const match = DRIVE_LETTER_REGEX.exec(name);
                        const driveLetter = match ? match[0] : "";
                        // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
                        // Otherwise, avoid them because they can refer to NTFS alternate data streams.
                        return (
                            driveLetter +
                            name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
                        );
                    },
                },
            }
        },
        base: isDev?'':'https://www.decade.tw/decade.tw/dist/',
    };
})
