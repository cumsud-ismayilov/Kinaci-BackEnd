/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Dark mode'u class ilə idarə etmək üçün
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Sənin bütün komponent fayllarını Tailwind tarasın
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Məsələn, öz əsas rəngin
        secondary: "#2563EB",
        danger: "#DC2626",
      },
      spacing: {
        18: "4.5rem",
        72: "18rem",
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
};
