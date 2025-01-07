import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
 
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            h1: { color: '#0d3b66' },
            h2: { color: '#0d3b66' },
            h3: { color: '#0d3b66' },
            h4: { color: '#0d3b66' },
            h5: { color: '#0d3b66' },            
            img: {
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            },
            p: {
              color: '#0d3b66',
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.6'),
            },
            li: {
              color: '#0d3b66',
            },
            strong: {
              color: '#0d3b66',
            }
          },
        },
      }),
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "rgb(13, 59, 102)",
        darkOrange: "#f95738",
        'primary-blue': "#0d3b66",
        'secondary-blue': "#0d3b66",
        'primary-orange': "#f95738",
        'secondary-orange': "#f95738",
        'primary-shadow': "#00000033",
        'bg-white': "#ffffffe6",
      },
      lineHeight: {
        extra: '2.25',
      },
      backgroundImage: {
        argyle: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23ee964b' fill-opacity='0.11'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      keyframes: {
        pulsateColor: {
          '0%': {
            backgroundColor: 'primary-orange',
            outlineColor: 'primary-orange',
          },
          '50%': {
            backgroundColor: '#f48c42',
            outlineColor: 'primary-orange',
          },
          '100%': {
            backgroundColor: 'secondary-orange',
            outlineColor: 'secondary-orange',
          }
        }
      },
      animation: {
        pulsate: 'pulsateColor 12s infinite',
      },
      screens: {
        projectsMid: '790px',
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;
