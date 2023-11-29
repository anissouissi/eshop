module.exports = {
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'dark',
      {
        eshop: {
          primary: '#e6e6e6',
          secondary: '#07689F',
          accent: '#0988d0',
          neutral: '#05486e',
          'base-100': '#ffffff',
          info: '#17a5f5',
          success: '#6ee7b7',
          warning: '#fdba74',
          error: '#f87171',
        },
      },
    ],
  },
};
