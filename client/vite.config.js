import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@swc/helpers/_/_class_private_field_get', '@swc/helpers/_/_class_private_field_init', '@swc/helpers/_/_class_private_field_set']
  }
})
