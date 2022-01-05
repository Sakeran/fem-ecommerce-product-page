module.exports = {
  content: ["src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    // Overrides
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
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
    },
  },
  plugins: [],
};
