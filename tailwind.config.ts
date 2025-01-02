import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'nav-beige': '#f7f3ed',
        social: {
          linkedin: '#0077b5',
          gmail: '#EA4335'
        },
        status: {
          success: '#22c55e' // green-500 rengi
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
