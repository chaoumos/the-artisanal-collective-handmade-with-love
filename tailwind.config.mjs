/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'rustic-brown': '#A8794B',
        'light-beige': '#F5F5DC',
        'earthy-green': '#6B8E23'
      },
      fontFamily: {
        'serif-rustic': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      }
    },
  },
  plugins: [],
}