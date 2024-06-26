import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xxsl': '320px',
        'xxsm': '375px',
        'xsm': '420px',
        'xmd': '500px',
        'slg': '870px',
        'sxlg':'950px',
        'xslg': '1100px',
        'xlg': '1250px',
        'xxlg': '1350px'
      },
    },
  },
  plugins: [],
};
export default config;
