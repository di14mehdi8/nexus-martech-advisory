/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0A',
        ink: '#F2F2F2',
        muted: '#A4A7AE',
        card: '#111214',
        line: '#242830',
        accent: '#00A3FF'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(0, 163, 255, 0.35), 0 20px 60px rgba(0, 0, 0, 0.5)'
      },
      letterSpacing: {
        tightest: '-0.04em'
      }
    }
  },
  plugins: []
};
