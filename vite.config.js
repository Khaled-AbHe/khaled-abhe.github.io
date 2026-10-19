import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "/" works for a user site (Khaled-AbHe.github.io).
// For a normal repo site, change it to "/repo-name/".
export default defineConfig({ plugins: [react()], base: "/" });
