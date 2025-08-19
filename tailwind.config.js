module.exports = {
  theme: {
    extend: {
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        carousel: "carousel 30s linear infinite",
      },
    },
  },
};
