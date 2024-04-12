/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spotify: ['Spotify', 'sans'],
        SpotifyLight : ['SpotifyLight'],
        SpotifyLighter : ['SpotifyLighter'],
      },
      colors: {
        'dark-green' : '#1e3932',
        'green' : '#008248',
        'light-green' : '#d4e9e2',
        'lighter-green' : '#f1f8f6',
        'mud' : '#f3f1e7',
      },
    },
  },
  plugins: [],
}