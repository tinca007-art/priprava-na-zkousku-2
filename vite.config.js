// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Odkomentuj řádek s cestou k požadovanému cvičení.
// Aktivní (nezakomentovaný) smí být vždy jen jeden řádek "root:".

export default defineConfig({

  plugins: [react()],

  // === Exercises ===

  // root: './01-array-methods',
  // root: './02-spread-operator',
  // root: './03-rest-operator',
  // root: './04-class',
  // root: './05-react',

})
