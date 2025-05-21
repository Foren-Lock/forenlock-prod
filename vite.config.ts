import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    server: {
      host: "localhost", // more common than "::" (IPv6)
      port: 8080,
    },
    plugins: [
      react(),
      ...(isDev ? [componentTagger()] : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
