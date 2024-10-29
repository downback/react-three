import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  root: "./", // Ensures Vite looks at the root for index.html
  publicDir: "public",
})
