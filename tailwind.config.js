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
        colors: {
          blue: {
            50: '#eef8ff',
            100: '#d9f2ff',
            200: '#bfeaff',
            300: '#9be3ff',
            400: '#6fd4ff',
            500: '#40c4ff',
            600: '#2ab0e6',
            700: '#1d84b3',
            800: '#13607f',
            900: '#0a3a4a',
          }
        },
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






