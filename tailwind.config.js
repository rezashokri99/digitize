module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      spacing: {
        '6px': '6px',
      },
      fontFamily: {
        sans: ["iranyekan"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
