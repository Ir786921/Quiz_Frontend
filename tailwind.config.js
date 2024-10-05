/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  prefix: 'tw-',
  theme: {
   
    extend: {},
  },
  corePlugins: {
    preflight: false,
},
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}