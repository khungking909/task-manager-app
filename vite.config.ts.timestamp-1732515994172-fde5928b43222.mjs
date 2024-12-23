// vite.config.ts
import react from "file:///D:/truonghd/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/truonghd/node_modules/vite/dist/node/index.js";
import checker from "file:///D:/truonghd/node_modules/vite-plugin-checker/dist/esm/main.js";
import dts from "file:///D:/truonghd/node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "file:///D:/truonghd/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_dirname = "D:\\truonghd";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true
    }),
    !!process.env.DEV && checker({
      typescript: true,
      eslint: { lintCommand: "eslint 'src/**/*.ts' 'src/**/*.tsx'", useFlatConfig: true }
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index"
    },
    sourcemap: true,
    assetsDir: "./src/assets",
    copyPublicDir: false,
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        main: path.resolve(__vite_injected_original_dirname, "src/index.ts"),
        theme: path.resolve(__vite_injected_original_dirname, "src/styles/_theme.scss")
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        },
        preserveModules: false,
        manualChunks: void 0
      }
    }
  },
  css: {
    modules: {
      localsConvention: "camelCase"
      // Optional: Use camelCase for class names
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.prepare.ts",
    coverage: {
      reportsDirectory: "./tests/unit/coverage",
      provider: "istanbul"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx0cnVvbmdoZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcdHJ1b25naGRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3RydW9uZ2hkL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5cclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICAgIHRzY29uZmlnUGF0aDogJy4vdHNjb25maWcuYXBwLmpzb24nLFxyXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZSxcclxuICAgIH0pLFxyXG4gICAgISFwcm9jZXNzLmVudi5ERVYgJiZcclxuICAgICAgY2hlY2tlcih7XHJcbiAgICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcclxuICAgICAgICBlc2xpbnQ6IHsgbGludENvbW1hbmQ6IFwiZXNsaW50ICdzcmMvKiovKi50cycgJ3NyYy8qKi8qLnRzeCdcIiwgdXNlRmxhdENvbmZpZzogdHJ1ZSB9LFxyXG4gICAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcclxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcclxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICB9LFxyXG4gICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgYXNzZXRzRGlyOiAnLi9zcmMvYXNzZXRzJyxcclxuICAgIGNvcHlQdWJsaWNEaXI6IGZhbHNlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBtYWluOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXHJcbiAgICAgICAgdGhlbWU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc3R5bGVzL190aGVtZS5zY3NzJyksXHJcbiAgICAgIH0sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHJlYWN0OiAnUmVhY3QnLFxyXG4gICAgICAgICAgJ3JlYWN0LWRvbSc6ICdSZWFjdERPTScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVzZXJ2ZU1vZHVsZXM6IGZhbHNlLFxyXG4gICAgICAgIG1hbnVhbENodW5rczogdW5kZWZpbmVkLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgbW9kdWxlczoge1xyXG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJywgLy8gT3B0aW9uYWw6IFVzZSBjYW1lbENhc2UgZm9yIGNsYXNzIG5hbWVzXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGVzdDoge1xyXG4gICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXHJcbiAgICBzZXR1cEZpbGVzOiAnLi92aXRlc3QucHJlcGFyZS50cycsXHJcbiAgICBjb3ZlcmFnZToge1xyXG4gICAgICByZXBvcnRzRGlyZWN0b3J5OiAnLi90ZXN0cy91bml0L2NvdmVyYWdlJyxcclxuICAgICAgcHJvdmlkZXI6ICdpc3RhbmJ1bCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sbUJBQW1CO0FBUDFCLElBQU0sbUNBQW1DO0FBVXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLElBQUk7QUFBQSxNQUNGLGtCQUFrQjtBQUFBLE1BQ2xCLGNBQWM7QUFBQSxNQUNkLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQSxJQUNELENBQUMsQ0FBQyxRQUFRLElBQUksT0FDWixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRLEVBQUUsYUFBYSx1Q0FBdUMsZUFBZSxLQUFLO0FBQUEsSUFDcEYsQ0FBQztBQUFBLEVBQ0w7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGNBQWM7QUFBQSxNQUM3QyxTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxJQUNmLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLFdBQVc7QUFBQSxNQUMvQixPQUFPO0FBQUEsUUFDTCxNQUFNLEtBQUssUUFBUSxrQ0FBVyxjQUFjO0FBQUEsUUFDNUMsT0FBTyxLQUFLLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsTUFDekQ7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLE9BQU87QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQSxpQkFBaUI7QUFBQSxRQUNqQixjQUFjO0FBQUEsTUFDaEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1Asa0JBQWtCO0FBQUE7QUFBQSxJQUNwQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLFlBQVk7QUFBQSxJQUNaLFVBQVU7QUFBQSxNQUNSLGtCQUFrQjtBQUFBLE1BQ2xCLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
