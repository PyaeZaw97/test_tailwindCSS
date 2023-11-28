/*eslint-env node*/
exports= {
    theme: {  
    content: ["./src/**/*.{html,js}"],  
      extend: {},
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: {
            transform: 'rotate(360deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
    variants: {},
    plugins: [],
  }