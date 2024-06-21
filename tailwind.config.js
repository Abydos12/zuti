/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    listStyleType: {
      diamond: "diamond",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
