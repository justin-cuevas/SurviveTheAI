module.exports = {
  content: [
    './src/pages/**/*.{astro,js,jsx,ts,tsx}',
    './src/components/**/*.{astro,js,jsx,ts,tsx}',
    './src/layouts/**/*.{astro,js,jsx,ts,tsx}',
    './src/styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#ed8311',
          light: '#f9a94a',
          dark: '#b25e00',
        },
      },
    },
  },
  plugins: [],
};
