import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        // RAZ Brand Colors
        raz: {
          white: "hsl(var(--raz-white))",
          black: "hsl(var(--raz-black))",
          red: "hsl(var(--raz-red))",
          blue: "hsl(var(--raz-blue))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        'druk': ['Druk Wide', 'Poppins', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-hybrid': 'var(--gradient-hybrid)',
        'gradient-indica': 'var(--gradient-indica)',
        'gradient-sativa': 'var(--gradient-sativa)',
        'gradient-thcp': 'var(--gradient-thcp)',
        'gradient-thca': 'var(--gradient-thca)',
        'gradient-15g': 'var(--gradient-15g)',
        'gradient-glass': 'var(--gradient-glass)',
        'gradient-holographic': 'var(--gradient-holographic)',
        'gradient-holographic-dark': 'var(--gradient-holographic-dark)',
      },
      boxShadow: {
        'neon': 'var(--shadow-neon)',
        'red-glow': 'var(--shadow-red-glow)',
        'deep': 'var(--shadow-deep)',
        'glass': 'var(--shadow-glass)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slow': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" },
        },
        "scroll-x": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "neon-pulse": {
          "0%": {
            textShadow: "0 0 5px hsl(var(--raz-blue)), 0 0 10px hsl(var(--raz-blue)), 0 0 15px hsl(var(--raz-blue)), 0 0 20px hsl(var(--raz-blue))"
          },
          "100%": {
            textShadow: "0 0 2px hsl(var(--raz-blue)), 0 0 5px hsl(var(--raz-blue)), 0 0 8px hsl(var(--raz-blue)), 0 0 12px hsl(var(--raz-blue))"
          }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "scroll-x": "scroll-x 30s linear infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite alternate",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
