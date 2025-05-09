import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1080px",
      },
    },
    extend: {
      fontSize: {
        "heading-xl": ["4rem", { fontWeight: "700" }],
        "heading-lg": ["3rem", { fontWeight: "700" }],
        "heading-md": ["2rem", { fontWeight: "700" }],
        "heading-sm": ["1.5rem", { fontWeight: "700" }],
        "body-md": ["1.25rem", { fontWeight: "500" }],
        "body-sm": ["1rem", { fontWeight: "500" }],
        "footer-heading": ["1rem", { fontWeight: "700" }],
      },
      fontFamily: {
        sans: ["var(--font-satoshi)"],
      },
      inset: {
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gridline: "#2B2B2B",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "blur-fade-in": {
          "0%": {
            opacity: "0",
            filter: "blur(10px)",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            filter: "blur(0)",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "blur-fade-in": "blur-fade-in 0.8s ease-out forwards",
        "blur-fade-in-delay-1": "blur-fade-in 0.8s ease-out 0.1s forwards",
        "blur-fade-in-delay-2": "blur-fade-in 0.8s ease-out 0.2s forwards",
        "blur-fade-in-delay-3": "blur-fade-in 0.8s ease-out 0.3s forwards",
        "blur-fade-in-delay-4": "blur-fade-in 0.8s ease-out 0.4s forwards",
        "blur-fade-in-delay-5": "blur-fade-in 0.8s ease-out 0.5s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
