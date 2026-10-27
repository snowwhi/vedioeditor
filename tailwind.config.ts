// tailwind.config.ts
import { defineConfig } from 'tailwindcss/helpers';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // follow system preference
  theme: {
    extend: {
      colors: {
        // custom colors can be added here
      },
    },
  },
  plugins: [],
});
