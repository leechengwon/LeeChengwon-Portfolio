/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      primary: "#eb2f06",
      secondary: "#f39c12",
      tertiary: "#ffc312",
      brown: "#8e4901",
    },
    //반응형 최소 최대 값을 정의합니다.
    screens: {
      sm: { min: "320px", max: "650px" },
      md: { min: "650px", max: "1023px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
