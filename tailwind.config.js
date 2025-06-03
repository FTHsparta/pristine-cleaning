module.exports = {
    content: [
      "./index.html",
      "./contact.html",
      "./about.html",
      "./photos.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/photos.html"
    ],
    theme: {
      extend: {
        keyframes: {
          'fade-in-up': {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          }
        },
        animation: {
          'fade-in-up': 'fade-in-up 0.6s ease-out both',
        }
      }
    },
    plugins: [],
  }






