/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        linen: '#F1EEE8',
        parchment: '#EEE9DE',
        borderWarm: '#E4DFD5',
        borderStrong: '#D2CAB9',
        navy: {
          950: '#0B1730',
          900: '#10213F',
          800: '#172B52',
          700: '#223B6B',
        },
        ink: {
          DEFAULT: '#1B2433',
          muted: '#5B6577',
          soft: '#7A8394',
        },
        brass: {
          DEFAULT: '#B08D4C',
          light: '#C9A86A',
          ink: '#82632A',
          pale: '#F5EFE2',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', '"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 10px 30px -12px rgba(11, 23, 48, 0.08)',
        card: '0 4px 20px -4px rgba(11, 23, 48, 0.06)',
        elevated: '0 20px 50px -15px rgba(11, 23, 48, 0.16)',
      },
    },
  },
  plugins: [],
}
