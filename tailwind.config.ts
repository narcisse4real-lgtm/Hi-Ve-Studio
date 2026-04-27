import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        // Hi-Ve palette
        ivoire: "#F8F4ED",
        creme: "#F1EBDF",
        sable: "#E2D8C6",
        miel: {
          DEFAULT: "#B8732C",
          clair: "#D4954A",
        },
        sauge: "#7A8B6F",
        encre: "#1A1814",
        "gris-chaud": "#6B645A",
        "gris-clair": "#9B9389",

        // Atelier Morel palette
        morel: {
          bg: "#F5F0E8",
          text: "#2B1F14",
          accent: "#A8482C",
          surface: "#EDE3D2",
        },

        // Cabinet Lyria palette
        lyria: {
          bg: "#FFFFFF",
          text: "#1B2B3F",
          accent: "#5C7A99",
          surface: "#F5F2EC",
        },

        // Maison Aveline palette
        aveline: {
          bg: "#F9F2EC",
          text: "#3A2A24",
          accent: "#C8956D",
          surface: "#F0E4DA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        // Demo-specific fonts
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        tenor: ["var(--font-tenor)", "Georgia", "serif"],
        italiana: ["var(--font-italiana)", "Georgia", "serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      borderWidth: {
        hairline: "0.5px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
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
        marquee: "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
