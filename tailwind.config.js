/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 15s linear infinite',
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif']
      }

    },
  },
  plugins: [
  ],
}

