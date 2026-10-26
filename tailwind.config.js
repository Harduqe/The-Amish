/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FBF8F1',
          100: '#F6F1E6',
          200: '#EDE5D2',
        },
        sage: {
          300: '#A7B89A',
          400: '#8A9E7B',
          500: '#6F8460',
          600: '#586B4A',
          700: '#46543A',
        },
        slateblue: {
          400: '#6B83A0',
          500: '#4F647F',
          600: '#3D5066',
        },
        bark: {
          700: '#3E3328',
          800: '#2E261E',
          900: '#221C16',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
