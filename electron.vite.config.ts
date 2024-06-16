import path,{ resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@client': path.resolve(__dirname, 'src/renderer/src/client')
      }
    },
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: 'src/renderer/assets/img/usuario.png',
            dest: 'assets/img'
          }
        ]
      })
    ]
  }
})
