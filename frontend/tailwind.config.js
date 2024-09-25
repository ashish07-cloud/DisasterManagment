/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        colors: {
          'dark-gray': '#545454',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
