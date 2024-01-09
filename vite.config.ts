import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    mode,
    server: {
      port: 3000
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: (tag) => ['appsBarForVue'].includes(tag)
          }
        }
      }),
      federation({
        name: 'jso',
        remotes: {
          components: {
            format: 'var',
            external: `${env.VITE_COMPONENTS_URL}/remoteEntry.js`
          }
        },
        shared: ['vue']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      target: 'esnext',
    }
  }
})
