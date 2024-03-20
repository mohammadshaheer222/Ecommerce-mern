/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('../src/assets/bgecom.png')",
        "bannerOffer": "url('../src/assets/banneroffer.png')"
      },
    },
  },
  plugins: [],
};
