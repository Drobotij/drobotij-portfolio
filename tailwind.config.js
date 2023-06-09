/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#B01C22",
        "secondary": "#63667E",
        "black-t":"#292D32",
        "grisesito": "#AEC9D1"
      }
    },
  },
  plugins: [],
}
