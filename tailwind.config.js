/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'rgb(var(--brand))',
        fg: 'rgb(var(--fg))',
        muted: 'rgb(var(--muted))',
        surface: 'rgb(var(--surface))',
        'surface-2': 'rgb(var(--surface-2))',
        ok: 'rgb(var(--ok))',
        warn: 'rgb(var(--warn))',
        err: 'rgb(var(--err))',
        border: 'rgb(var(--border))',
      },
      borderRadius: {
        xl: 'var(--radius)',
      },
      boxShadow: {
        card: 'var(--shadow)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
