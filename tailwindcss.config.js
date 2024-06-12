module.exports = {
  content: [
    "./src/render/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
