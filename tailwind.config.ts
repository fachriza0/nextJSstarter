import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center:true,
      padding: {
        DEFAULT: 'item',
        md:'1.5rem',
        lg:'2rem'
      }
    }
  },
  plugins: [],
} satisfies Config;
