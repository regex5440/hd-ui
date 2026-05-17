import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "unplugin-dts/vite";
import { EsLinter, linterPlugin } from "vite-plugin-linter";
import tsConfigPaths from "vite-tsconfig-paths";
import * as packageJson from "./package.json";
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    react(),
    linterPlugin({
      include: ["./src/**/*.{ts,tsx}"],
      linters: [
        new EsLinter({
          configEnv,
          buildOptions: { overrideConfigFile: ".eslintrc.cjs" },
          serveOptions: { overrideConfigFile: ".eslintrc.cjs" },
        }),
      ],
    }),
    dts({
      include: ["src/components/"],
    }),
  ],
  build: {
    outDir: "build",
    lib: {
      entry: resolve("src", "components/index.tsx"),
      name: "hd-ui",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
  server: {
    port: 8080,
  },
}));
