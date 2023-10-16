/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'black-sky':
          "url('/src/assets/Black Sky Galaxy Stars Desktop Wallpaper.png')",
        'blob-scene': "url('/src/assets/blob-scene-haikei.png')",
        'circle-scatter': "url('/src/assets/circle-scatter-haikei.png')",
        'layered-waves': "url('/src/assets/layered-waves-haikei (1).png')",
      }),
    },
  },
  plugins: [],
}
