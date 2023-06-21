/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      dark: '#1d0027',
      primary: '#770DB2',
      white: '#ffffff',
      tile: '#F8EDFF',
    },
    extend: {
      backgroundImage: {
        'purple-radial': 'radial-gradient(174.55% 369.22% at 72.04% -17.65%, #DB00FF 1.04%, #3300FF 100%)',
        'tile-gradient': `
          linear-gradient(0deg, #F8EDFF, #F8EDFF),
          linear-gradient(59.19deg, rgba(255, 255, 255, 0) -0.53%, rgba(255, 255, 255, 0.189424) 16.17%, rgba(255, 255, 255, 0.637975) 55.71%, rgba(255, 255, 255, 0) 87.97%),
          linear-gradient(0deg, #FFFFFF, #FFFFFF)
        `,
      },
      borderRadius: {
        'tile': '10px',
        'tile-inner': '8px',
        'panel': '16px',
        'panel-inner': '14px',
      },
      boxShadow: {
        'tile-inner': `
          0px 10px 10.7px 0px rgba(193, 49, 236, 0.03),
          0px 1px 1.4px 0px rgba(193, 49, 236, 0.04),
          0px 1.4px 2.8px 0px rgba(193, 49, 236, 0.05),
          0px 2.7px 5.4px 0px rgba(193, 49, 236, 0.07),
          0px 4.5px 10px 0px rgba(193, 49, 236, 0.08),
          0px 7px 17px 0px rgba(193, 49, 236, 0.11),
          0px 1px 2px 0px rgba(123, 0, 143, 0.3)
        `,
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
  safelist: [
    'rounded',
    'rounded-tile',
    'rounded-tile-inner',
    'rounded-panel',
    'rounded-panel-inner',
    'rounded-full',
    'after:rounded',
    'after:rounded-tile',
    'after:rounded-tile-inner',
    'after:rounded-panel',
    'after:rounded-panel-inner',
    'after:rounded-full',
  ],
  plugins: [],
}
