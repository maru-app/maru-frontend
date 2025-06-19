import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        dodamdodam: ['KCC-DodamdodamR', 'sans-serif'],
        pretendard: ['Pretendard Variable', 'Fluent Emoji Flat', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
} satisfies Config;
