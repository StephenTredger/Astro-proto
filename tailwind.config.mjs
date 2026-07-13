/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#F4F6F3',
        accent: '#4AAC07',
        'accent-dark': '#3A8A06',
        charcoal: '#1D211C',
        border: '#C6CCC4',
        muted: '#5A625A',
        surface: '#FFFFFF',
        'brand-red': '#C41E3A',
      },
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
      },
      maxWidth: {
        desktop: '1440px',
      },
      spacing: {
        sm: '48px',
        md: '60px',
        lg: '72px',
      },
      screens: {
        mobile: '390px',
      },
    },
  },
  plugins: [],
};
