// Updated tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",        // Scan app directory
      "./components/**/*.{js,ts,jsx,tsx}", // Scan components
      "./contexts/**/*.{js,ts,jsx,tsx}",   // Include contexts if needed
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }