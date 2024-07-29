import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontSize: {
                '12xl': '11rem',
            },
            backgroundImage: {
                'gradient-to-text':
                    'linear-gradient(to right, #024344, #008B8D)',
            },
            display: {
                hide: 'none',
            },
            colors: {
                'light-blue': '#29AFB1',
            },
            textFillColor: (theme: any) => theme('colors.transparent'), // щоб встановити прозорий колір тексту
        },
    },
    plugins: [
        function ({ addUtilities }: any) {
            addUtilities({
                '.bg-clip-text': {
                    '-webkit-background-clip': 'text',
                },
                '.text-transparent': {
                    '-webkit-text-fill-color': 'transparent',
                },
            });
        },
    ],
};
export default config;
