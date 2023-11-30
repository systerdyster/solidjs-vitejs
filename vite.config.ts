// vite.config.ts
import { defineConfig, loadEnv, type UserConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';


export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    const shortEnvMode = (mode === 'production') ? 'prod' : 'dev';

    console.log(`Build version ${env?.VERSION ?? 'local'} for ${shortEnvMode}`);

    const config: UserConfig = {
        plugins: [
            tsconfigPaths(),
            solidPlugin(),
            eslint({ include: ['**/*.ts', '**/*.tsx'] }),
            stylelint(),
        ],
        
        define: {
            __VERSION__: JSON.stringify(env?.VERSION ?? 'local'),
            __ENV__: JSON.stringify(shortEnvMode)
        },

        build: {
            outDir: 'www',
            cssCodeSplit: false
        },

        server: (() => command === 'serve' ? 
            {
                open: true,
                port: 3000,
            } : undefined
        )(),

        preview: {
            port: 3000
        }
    };
    return config;
})