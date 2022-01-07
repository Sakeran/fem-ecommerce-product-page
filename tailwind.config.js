module.exports = {
  content: ["src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    // Overrides
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    colors: {
      // Neutrals
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      gray: {
        100: "hsl(220, 14%, 13%)",
        400: "hsl(220, 9%, 45%)",
        700: "hsl(220, 14%, 75%)",
        900: "hsl(29, 25%, 92%)",
      },
      // Oranges
      orange: {
        500: "hsl(26, 100%, 55%)",
        700: "hsl(26, 100%, 71%)",
        900: "hsl(26, 100%, 94%)"
      }
    },

    // Extensions
    extend: {
      fontSize: {
        tiny: ["0.8125rem", "1"],
        sm: ["0.9375rem", "1.66"],
        base: ["1rem", "1.625"],
        "2.5xl": ["1.75rem", "1.15"],
        "4.5xl": ["2.75rem", "1.1"],
      },
      boxShadow: {
        cart: "0 20px 50px -20px hsla(220, 14%, 13%, 0.5)"
      }
    },
  },
  plugins: [],
};
