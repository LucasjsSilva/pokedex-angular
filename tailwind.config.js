/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '100px',
        'sm': '380px',
        'md': '575px',
        'lg': '992px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        grass: 'var(--color-grass)',
        fire: 'var(--color-fire)',
        water: 'var(--color-water)',
        electric: 'var(--color-electric)',
        ice: 'var(--color-ice)',
        ground: 'var(--color-ground)',
        flying: 'var(--color-flying)',
        poison: 'var(--color-poison)',
        fighting: 'var(--color-fighting)',
        psychic: 'var(--color-psychic)',
        dark: 'var(--color-dark)',
        rock: 'var(--color-rock)',
        bug: 'var(--color-bug)',
        ghost: 'var(--color-ghost)',
        steel: 'var(--color-steel)',
        dragon: 'var(--color-dragon)',
        fairy: 'var(--color-fairy)',
      },
    },
  },
  plugins: [],
}

