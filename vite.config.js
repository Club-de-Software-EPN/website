// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        teams: resolve(__dirname, 'equipos.html'),
        proyect: resolve(__dirname, 'proyect.html'),
        register: resolve(__dirname, 'indexRegister.html'),
      }
    }
  }
})
