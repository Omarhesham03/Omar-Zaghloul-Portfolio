/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#111114',
        surface:      '#1C1C21',
        accent:       '#A8DD07',
        text:         '#F0F0EE',
        'text-muted': '#9a9a9f',
        border:       '#26262c',
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body:    ['"DM Mono"', 'monospace'],
        arabic:  ['"IBM Plex Arabic"', '"Syne"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
