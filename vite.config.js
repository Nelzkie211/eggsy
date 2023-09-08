import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import NoPage from "./src/pages/NoPage";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: process.env.NODE_ENV === "production" ? "/eggsy/" : "/",
  base: "/eggsy/", // Use your repository name as the base path
  build: {
    rollupOptions: {
      input: {
        main: process.env.NODE_ENV === "production" ? NoPage : "/index.html",
        // Add the route for the custom 404.html page
        404: "/404.html",
      },
    },
  },
});
