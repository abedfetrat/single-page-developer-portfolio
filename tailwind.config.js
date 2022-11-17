/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1174px"
    },
    colors: {
      transparent: 'hsla(0, 0%, 0%, 0)',
      black: '#151515',
      white: '#FFFFFF',
      green: '#4EE1A0',
      red: '#FF6F5B',
      grey: '#D9D9D9',
      'dark-grey': '#242424',
    },
    fontSize: {
      base: ['16px', {lineHeight: '26px'}],
      md: ['18px', {lineHeight: '28px'}],
      lg: ['24px', {lineHeight: '32px'}],
      xl: ['40px', {lineHeight: '40px', letterSpacing: '-1.14px'}],
      '2xl': ['48px', {lineHeight: '56px', letterSpacing: '-1.5px'}],
      '3xl': ['72px', {lineHeight: '72px', letterSpacing: '-2.05px'}],
      '4xl': ['88px', {lineHeight: '88px', letterSpacing: '-2.5px'}],
    },
    fontFamily: {
      primary: 'Space Grotesk, sans-serif'
    },
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
}