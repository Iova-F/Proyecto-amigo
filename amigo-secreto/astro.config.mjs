// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'; // Importa la integración de React

// Configuración de Astro con la integración de React
export default defineConfig({
  integrations: [react()],
});
