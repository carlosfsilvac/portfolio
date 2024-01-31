import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#35eb9a",
        secondary: "#4fb2bc",
      },
    },
  },
};
