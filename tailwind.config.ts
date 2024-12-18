import type {Config} from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      // center: true,
      // padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        apple: ["AppleSDGothicNeo", "sans-serif"],
      },
      colors: {
        'dark-gray': '#1E272E',
        'chrome-yellow': '#FFA801', 
        'dark-periwinkle': '#575FCF',
        'free-speech-blue': '#3C40C6',
        'fresh-turquoise': '#34E7E4', 
        'good-night': '#485460', 
        'green-teal': '#05C46B',
        'highlighter-pink': '#EF5777',
        'hint-of-elusive-blue': '#D2DAE2',
        'jade-dust': '#00D8D6',
        'london-square': '#808E9B',
        'megaman': '#4BCFFA',
        'minty-green': '#0BE881',
        'narenji-orange': '#FFC048',
        'red-orange': '#FF3F34',
        'sizzling-red': '#F53B57',
        'spiro-disco-ball': '#0FBCC9',
        'sunset-orange': '#FF5E57',
        'vibrant-yellow': '#FFD32A',
        'yriel-yellow': '#FFDD59',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        // 'accordion-down': {
        //   from: {height: '0'},
        //   to: {height: 'var(--radix-accordion-content-height)'},
        // },
        // 'accordion-up': {
        //   from: {height: 'var(--radix-accordion-content-height)'},
        //   to: {height: '0'},
        // },
        'fade-in': {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        // 'accordion-down': 'accordion-down 0.2s ease-out',
        // 'accordion-up': 'accordion-up 0.2s ease-in-out',
        'fade-in': 'fade-in 1s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
