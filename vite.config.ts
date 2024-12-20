import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Beans",
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@Styles': '/src/styles',
      '@Img': '/src/assets',
      lodash: 'lodash', // Убираем path.resolve, просто указываем имя пакета
    }
  },
  build: {
    outDir: 'dist', // Убедитесь, что сборка идёт в папку dist
  },
});
