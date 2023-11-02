/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '7.12px': '7.12px',
      },
      colors: {
        "primary": "#24D86F"

      },
      backgroundColor: {
        'custom-blue': 'rgba(13, 82, 135, 1)',
      },
      fontFamily: {
        "fsinlitimes": ["Seymour One", "sams-serif"]
      },
      textColor: {
        'custom-blue': 'rgba(13, 82, 135, 1)',
      },
    },
  },
  plugins: [],
}

/* USAR font-fsinlitimes */