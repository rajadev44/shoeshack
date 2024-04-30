import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@/components": "/src/components",
      "@/pages": "/src/pages",
      "@/lib": "/src/lib",
      "@/features": "/src/features",
    },
  }
})
