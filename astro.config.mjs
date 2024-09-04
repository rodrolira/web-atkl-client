import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

// Configuración de Astro

// https://astro.build/config
export default defineConfig({
  integrations: [react() // Debe ser una función llamada que devuelve un objeto
  ]
})
