import type { Config } from 'tailwindcss';

export default {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        hahmlet: ['Hahmlet', 'serif'],
        pretendard: ['Fluent Emoji Color', 'Pretendard Variable', 'sans-serif']
      }
    }
  },
  plugins: []
} satisfies Config;
