/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF8A01',
        dark: '#545F71'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

