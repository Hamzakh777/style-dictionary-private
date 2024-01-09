import type { Config } from 'tailwindcss'

const config: Config = {
  presets: [
    require("../../build/web/brand-1/tailwind.config")
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
  },
  plugins: [],
}
export default config
