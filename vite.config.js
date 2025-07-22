import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/haben_etsay_portfolio/', // <-- add this line
  plugins: [react()]
})
