/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: ["./public/**/*.html", "./src/**/*.js", "./src/**/*.css", "./index.html"],
  
  theme: {
    extend: {
      fontFamily: {
        "porsche": ["Orbitron", "sans-serif"], // Tambahkan font Orbitron sebagai font-porsche
        "teko": ["Teko", "sans-serif"], // Tambahkan font Teko sebagai font-teko
        "gt": ["Knewave", "sans-serif"], // Tambahkan font Knewave sebagai font-knewave
        "gt3": ["Permanent Marker", "serif"],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInFromBottom: {
          '0%': { transform: 'translateY(50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        slideInBottom: 'slideInFromBottom 1s ease-out forwards',
        zoomIn: 'zoomIn 1.2s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', // Default bayangan
        },
        '.text-shadow-md': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)', // Medium bayangan
        },
        '.text-shadow-lg': {
          textShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)', // Large bayangan
        },
        '.text-shadow-none': {
          textShadow: 'none', // Menghapus bayangan
        },
      });
    },
  ],
};
