import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 5173,
    hmr: {
      clientPort: 80,  // if your ngrok URL is https://...
      protocol: 'ws',  // or 'ws' if using http tunnel on port 80
    }
  }
})
