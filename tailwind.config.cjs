/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cosmos: {
          950: '#07040f',
          900: '#0f0821',
          850: '#150c2e',
          800: '#1d103f',
          accent: '#a855f7',
          neon: '#c084fc',
          cyan: '#38bdf8',
          gold: '#fbbf24'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      }
    },
  },
  plugins: [],
};
