/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        monodark: {
          950: '#000000',
          900: '#050505',
          850: '#0A0A0A',
          800: '#121212',
          700: '#1A1A1A',
          600: '#282828',
          muted: '#8E8E8E',
          border: 'rgba(255, 255, 255, 0.12)',
          borderHover: 'rgba(255, 255, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widestx: '0.25em',
        widest2x: '0.35em',
        widest3x: '0.5em',
      },
    },
  },
  plugins: [],
};
