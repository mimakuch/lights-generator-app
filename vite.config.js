import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

// Just checking something...
export default defineConfig({
  base: "/lights-generator-app",
  plugins: [react()],
});
