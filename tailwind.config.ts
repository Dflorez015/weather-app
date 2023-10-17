import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsla(var(--color-primary) / 1.0)',
        'secondary': 'hsla(var(--color-secondary) / 1.0)',
      },
      width: {
        'aside-menu': 'var(--menu-width)'
      },
      textColor: {
        'primary' : 'hsla(var(--text-color-primary) / 1.0)',
        'secondary' : 'hsla(var(--text-color-secondary) / 1.0)',
      }
    },
  },
  plugins: [],
}
export default config
