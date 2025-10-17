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
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'slide-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
      },
      animation: {
        // 'accordion-down': 'accordion-down 0.2s ease-out',
        // 'accordion-up': 'accordion-up 0.2s ease-in-out',
        'fade-in': 'fade-in 1s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-down': 'fade-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'fade-up-delay-1': 'fade-up 0.6s ease-out 0.1s both',
        'fade-up-delay-2': 'fade-up 0.6s ease-out 0.2s both',
        'fade-up-delay-3': 'fade-up 0.6s ease-out 0.3s both',
        'fade-up-delay-4': 'fade-up 0.6s ease-out 0.4s both',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
