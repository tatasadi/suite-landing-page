import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: "hsl(219, 43%, 16%)",
        "dark-gray": "hsl(218, 20%, 36%)",
        cream: "hsl(30, 33%, 93%)",
        "cream-white": "hsl(30, 29%, 97%)",
        purple: "hsl(264, 100%, 69%)",
        pink: "hsl(292, 76%, 54%)",
        orange: "hsl(31, 100%, 65%)",
      },
      backgroundImage: {
        "purple-orange-gradient":
          "linear-gradient(135deg, #A060FF 0%, #CB30E3 49.21%, #FFA84E 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
