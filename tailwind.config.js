/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
      colors: {
        primary: "#0E315A",
      },

      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateY(150px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out forwards",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      const containerMax = {
        ".containerMax": {
          maxWidth: "1500px", // Set your desired max-width
          // padding: "1rem", // Set your desired padding
          marginLeft: "auto",
          marginRight: "auto",
        },
      };

       addComponents(containerMax);
    },
  ],
};
