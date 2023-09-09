import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NoPage from "./src/pages/NoPage";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.NODE_ENV === "production" ? "/eggsy/" : "/",
  base: "/eggsy", // Use your repository name as the base path
});
