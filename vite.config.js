import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    plugins: [vue()],
    resolve: {
      alias: {
        '/@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000
    },
    define: { 'process.env': loadEnv(mode, process.cwd()) }

  })
