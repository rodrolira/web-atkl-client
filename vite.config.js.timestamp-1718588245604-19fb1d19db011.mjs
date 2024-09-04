// vite.config.js
import { defineConfig } from 'file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/vite/dist/node/index.js'
import react from 'file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/@vitejs/plugin-react-swc/index.mjs'
import flowbite from 'file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/flowbite/plugin.js'
import autoprefixer from 'file:///home/rodrolira/app/vite-projects/web-atkl/client/node_modules/autoprefixer/lib/autoprefixer.js'
const __vite_injected_original_dirname = '/home/rodrolira/app/vite-projects/web-atkl/client'
const vite_config_default = defineConfig({
  plugins: [react(), flowbite()],
  define: {
    'process.env': process.env
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer()
        // Agrega autoprefixer a tus plugins de PostCSS
      ]
    }
  },
  server: {
    proxy: {
      // Proxy todas las solicitudes que comiencen con '/auth' al servidor Express en el puerto 9000
      '/auth': ' http://localhost:4000'
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: '',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      input: {
        main: (__vite_injected_original_dirname, './index.html')
      }
    }
  }
})
export {
  vite_config_default as default
}
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yb2Ryb2xpcmEvYXBwL3ZpdGUtcHJvamVjdHMvd2ViLWF0a2wvY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yb2Ryb2xpcmEvYXBwL3ZpdGUtcHJvamVjdHMvd2ViLWF0a2wvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3JvZHJvbGlyYS9hcHAvdml0ZS1wcm9qZWN0cy93ZWItYXRrbC9jbGllbnQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0LXN3YydcbmltcG9ydCBmbG93Yml0ZSBmcm9tICdmbG93Yml0ZS9wbHVnaW4nXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcicgLy8gSW1wb3J0YSBhdXRvcHJlZml4ZXJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBmbG93Yml0ZSgpXSxcbiAgZGVmaW5lOiB7XG4gICAgJ3Byb2Nlc3MuZW52JzogcHJvY2Vzcy5lbnZcbiAgfSxcbiAgY3NzOiB7XG4gICAgcG9zdGNzczoge1xuICAgICAgcGx1Z2luczogW1xuICAgICAgICBhdXRvcHJlZml4ZXIoKSAvLyBBZ3JlZ2EgYXV0b3ByZWZpeGVyIGEgdHVzIHBsdWdpbnMgZGUgUG9zdENTU1xuICAgICAgXVxuICAgIH1cbiAgfSxcblxuICBzZXJ2ZXI6IHtcbiAgICBwcm94eToge1xuICAgICAgLy8gUHJveHkgdG9kYXMgbGFzIHNvbGljaXR1ZGVzIHF1ZSBjb21pZW5jZW4gY29uICcvYXV0aCcgYWwgc2Vydmlkb3IgRXhwcmVzcyBlbiBlbCBwdWVydG8gOTAwMFxuICAgICAgJy9hdXRoJzogJyBodHRwOi8vbG9jYWxob3N0OjQwMDAnXG4gICAgfVxuICB9LFxuXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gICAgYXNzZXRzRGlyOiAnJyxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDoge1xuICAgICAgICBtYWluOiAoX19kaXJuYW1lLCAnLi9pbmRleC5odG1sJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsb0JBQW9CO0FBQ2xXLE9BQU8sV0FBVztBQUNsQixPQUFPLGNBQWM7QUFDckIsT0FBTyxrQkFBa0I7QUFIekIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7QUFBQSxFQUM3QixRQUFRO0FBQUEsSUFDTixlQUFlLFFBQVE7QUFBQSxFQUN6QjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsYUFBYTtBQUFBO0FBQUEsTUFDZjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUE7QUFBQSxNQUVMLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBRUEsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsT0FBTztBQUFBLFFBQ0wsT0FBTyxrQ0FBVztBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
