/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-color": "#033B4A",      // Navigation background color
        "nav-active": "#9DABAF",     // Active navigation link color
        "button-color": "#10847E",   // Button color (probably primary buttons)
        "logout-color": "#EE1B1B",   // Logout button color (red)
        "text-green": "#2DA95C",     // Text color for success or green texts
        "nav-white": "#FFFFFF",      // White color for text/icons in navigation
        "back-color": "#C2D1D6",     // Background color for the application
        "heading-color": "gray",     // General gray heading color
        "ad-color": "#026077",       // Color for ads or special sections
        "offer-active": "#D9D9D9",   // Active offer color (grayish)
        "black-heading": "#424242"   // Black heading color (dark gray)
      },
    },
  },
  plugins: [],
};
