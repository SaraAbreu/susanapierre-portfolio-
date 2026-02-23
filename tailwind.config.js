/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Negro mate profundo para el fondo
        'obsidian': '#0A0A0A', 
        // Oro viejo: Elegante, no brillante
        'old-gold': '#B2945B', 
        // Plata vieja: Para textos secundarios y bordes técnicos
        'antique-silver': '#848482', 
        // Verde esmeralda oscuro: Para estados de "Sistema Operativo"
        'deep-emerald': '#065F46', 
      },
      fontFamily: {
        // Fuente monoespaciada para reforzar el look de código/terminal
        'mono': ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
