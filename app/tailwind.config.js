module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Nunito','Poppins','system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      courier: ['Courier Prime'],
    },
    extend: {
      colors: {
        'yukon-gold': {
          default: '#7D6607',
          100: '#F5D75B',
          200: '#F3CB2B',
          300: '#DEB40D',
          400: '#AE8D0A',
          500: '#7D6607',
          600: '#4D3F04',
          700: '#1D1702',
          800: '#000000',
          900: '#000000',
        },

        'crown-of-thorns': {
          default: '#792820',
          100: '#DF8E86',
          200: '#D4685E',
          300: '#C94236',
          400: '#A1352B',
          500: '#792820',
          600: '#511A15',
          700: '#280D0B',
          800: '#000000',
          900: '#000000',
        },

        jewel: {
          default: '#186839',
          100: '#6EDE9C',
          200: '#44D580',
          300: '#2ABB67',
          400: '#219150',
          500: '#186839',
          600: '#0E3E22',
          700: '#05150B',
          800: '#000000',
          900: '#000000',
        },

        blumine: {
          default: '#1B5074',
          100: '#7BB8E0',
          200: '#51A1D6',
          300: '#2F8AC6',
          400: '#256D9D',
          500: '#1B5074',
          600: '#11344A',
          700: '#081721',
          800: '#000000',
          900: '#000000',
        },

        clubhouse: {
          default: '#151617',
          button1: '#5476AA',
          button2: '#B12112',
          orange: '#E9BC3E',
        },
      },
      maxWidth: (theme) => ({
        'screen-xl': theme('screens.xl'),
      }),
    },
  },
  variants: {},
  plugins: [],
};
