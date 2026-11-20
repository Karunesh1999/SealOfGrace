/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
          container: "hsl(var(--primary-container))",
          'container-foreground': "hsl(var(--primary-container-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          container: "hsl(var(--secondary-container))",
          'container-foreground': "hsl(var(--secondary-container-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
          container: "hsl(var(--tertiary-container))",
          'container-foreground': "hsl(var(--tertiary-container-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        cta: {
          DEFAULT: "hsl(var(--cta))",
          foreground: "hsl(var(--cta-foreground))",
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
        'gold-soft': {
          DEFAULT: "hsl(var(--gold-soft))",
          foreground: "hsl(var(--gold-soft-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        // Semantic compatibility aliases
        surface: "hsl(var(--card))",
        'on-surface': "hsl(var(--card-foreground))",
        'on-surface-variant': "hsl(var(--muted-foreground))",
        'surface-container': "hsl(var(--muted))",
        'surface-container-low': "hsl(var(--accent))",
        'surface-container-high': "hsl(var(--border))",
        outline: "hsl(var(--border))",
        'outline-variant': "hsl(var(--border) / 0.6)",
        'on-primary': "hsl(var(--primary-foreground))",
        'on-secondary': "hsl(var(--secondary-foreground))",
        'on-tertiary': "hsl(var(--tertiary-foreground))",
        'on-cta': "hsl(var(--cta-foreground))",
        'on-primary-container': "hsl(var(--primary-container-foreground))",
        'on-secondary-container': "hsl(var(--secondary-container-foreground))",
        'on-tertiary-container': "hsl(var(--tertiary-container-foreground))",
      },
      borderRadius: {
        'sm': 'calc(var(--radius) - 4px)',
        'DEFAULT': 'var(--radius)',
        'md': 'calc(var(--radius) + 2px)',
        'lg': 'calc(var(--radius) + 6px)',
        'xl': '24px',
        'full': '9999px',
      },
      spacing: {
        'gutter-xs': '4px',
        'gutter-sm': '8px',
        'gutter-md': '12px',
        'gutter-lg': '16px',
        'gutter-xl': '24px',
        'section': '32px',
        'page-margin': '16px',
      },
      fontFamily: {
        'display': ['"Halant"', 'serif', 'sans-serif'],
        'headline': ['"Halant"', 'serif', 'sans-serif'],
        'title': ['"Sora"', 'sans-serif'],
        'body': ['"Sora"', 'sans-serif'],
        'label': ['"Sora"', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['40px', { lineHeight: '46px', letterSpacing: '-0.5px', fontWeight: '700' }],
        'display-lg-mobile': ['28px', { lineHeight: '34px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'headline-lg': ['34px', { lineHeight: '40px', letterSpacing: '-0.25px', fontWeight: '700' }],
        'headline-lg-mobile': ['24px', { lineHeight: '30px', letterSpacing: '-0.2px', fontWeight: '700' }],
        'headline-md': ['20px', { lineHeight: '26px', letterSpacing: '0px', fontWeight: '700' }],
        'title-md': ['17px', { lineHeight: '23px', letterSpacing: '0px', fontWeight: '600' }],
        'title-sm': ['15px', { lineHeight: '20px', letterSpacing: '0px', fontWeight: '600' }],
        'body-md': ['14px', { lineHeight: '22px', letterSpacing: '0px', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '18px', letterSpacing: '0.1px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.2px', fontWeight: '600' }],
        'label-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.4px', fontWeight: '600' }],
      },
      boxShadow: {
        'mobile-card': '0 2px 10px rgba(0, 20, 72, 0.06)',
        'bottom-nav': '0 -4px 16px rgba(0, 20, 72, 0.12)',
        'modal': '0 10px 30px rgba(0, 20, 72, 0.25)',
      }
    },
  },
  plugins: [],
}
