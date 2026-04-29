/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      colors: {
        base: '#0A0A0A',
        elevated: '#111111',
        subtle: '#1A1A1A',
        surface: '#1E1E1E',
        edge: {
          DEFAULT: '#2A2A2A',
          strong: '#3A3A3A',
        },
        primary: '#F0EDE8',
        secondary: '#A09A90',
        muted: '#6B6560',
        accent: {
          DEFAULT: '#C4A265',
          hover: '#D4B275',
        },
        error: '#E5534B',
        success: '#57AB5A',
      },
      maxWidth: {
        container: '75rem',
      },
    },
  },
  plugins: [],
}
