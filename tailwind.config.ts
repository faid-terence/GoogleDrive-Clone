import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'google-drive-gray': '#f5f5f5',
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
