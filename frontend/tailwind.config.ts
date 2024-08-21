import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bright-green': '#00C65E',
        'light-grey': '#f7f7f7',
        'light-grey-2': '#dadcdc',
        'medium-grey-2': '#efefef',
        'dark-grey': '#363a45',
        'dark-grey-opacity': '#363a45',
        'light-orange': '#ffb762',
        'bright-orange': '#f89358',
        'light-green': '#ccefdb',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
