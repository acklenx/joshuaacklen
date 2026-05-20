/** @type {import('tailwindcss').Config} */
// Scans resume.html (markup AND the class strings inside its inline <script>)
// and emits only the utilities actually used into resume.css.
module.exports = {
  content: ['./resume.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};
