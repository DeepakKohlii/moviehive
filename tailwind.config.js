/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your React files
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAECF1",
        green: "#DCE9C4",
        secondary: "#191919",
        accent: "#5064CB",
        dark: "#191919",
        light: "#FFFFFF",
      },
      fontFamily: {
        // sans: ["Inter", "Helvetica", "Arial", "sans-serif"], // Default sans-serif font
        // serif: ["Georgia", "Cambria", "Times New Roman", "serif"], // Custom serif font
        mono: ["Major Mono Display"],
        manrope: ["Manrope"],
      },
      fontSize: {
        xs: "0.75rem", // Custom small font size
        sm: "0.875rem", // Custom small font size
        base: "1rem", // Base font size
        lg: "1.125rem", // Large font size
        xl: "1.25rem", // Extra large font size
        "2xl": "1.5rem", // 2x large font size
        "3xl": "1.875rem", // 3x large font size
        "4xl": "2.25rem", // 4x large font size
        "5xl": "3rem", // 5x large font size
        "6xl": "3.75rem", // 6x large font size
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
