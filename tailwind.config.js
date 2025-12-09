/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // YEH HAI TUMHARA CONTROL ROOM
      colors: {
        // 1. Backgrounds
        'void': '#050505',       // Deepest Black (Main BG)
        'surface': '#121212',    // Slightly lighter (Cards/Sections)
        
        // 2. The Molten Theme (Change this to change site vibe)
        'lava': {
          DEFAULT: '#FF5722',    // Main Orange (Buttons, Highlights)
          glow: '#FF9800',       // Lighter Orange (Glows, Gradients)
          dim: '#BF360C',        // Darker Orange (Shadows)
        },

        // 3. Typography
        'ash': '#E0E0E0',        // Primary Text (Not pure white)
        'smoke': '#9E9E9E',      // Secondary Text
      },
      fontFamily: {
        // Hum Google Fonts use karenge
        'cinematic': ['"Clash Display"', 'sans-serif'], // Headings ke liye
        'body': ['"Inter"', 'sans-serif'],              // Paragraphs ke liye
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'lava-gradient': 'linear-gradient(to right, #FF5722, #FF9800)',
      }
    },
  },
  plugins: [],
}