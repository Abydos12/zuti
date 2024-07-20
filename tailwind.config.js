/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      listStyleType: {
        square: "square",
        diamond: "diamond",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
