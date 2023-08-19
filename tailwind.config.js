// cSpell:ignore tailwindcss
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#fffffe',
                secondary: '#ff5470',
                button: '#ff8e3c',
                textButton: '#0d0d0d',
                paragraph: '#2a2a2a',
                stroke: '#0d0d0d',
                cardBg: '#eff0f3',
                shadow: 'rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px',
            },
            keyframes: {
                moves: {
                    '33%': { top: '0.5rem' },
                    '66%': { top: '1rem' },
                    '100%': { top: '0.5rem' },
                },
            },
        },
    },
    plugins: [],
};
