/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#770DB2',
      white: '#ffffff',
    },
    extend: {
      backgroundImage: {
        'purple-radial': 'radial-gradient(174.55% 369.22% at 72.04% -17.65%, #DB00FF 1.04%, #3300FF 100%)',
      },
      fontFamily: {
        'poppins': 'var(--font-poppins)',
      },
      inset: {
        'border-primary': '-2px',
        'border-secondary': '-1px',
      },
      animation: {
        button: 'button 1s ease-in-out infinite',
      },
      keyframes: {
        button: {
          '0%': {
            'background-position': '0 0',
          },
          '50%': {
            'background-position': '400% 0',
          },
          '100%': {
            'background-position': '0 0',
          },
        },
      },
      margin: {
        'border-primary': '2px',
        'border-secondary': '1px',
      },
      zIndex: {
        'under': '-1',
      },
    },
  },
  plugins: [],
}
