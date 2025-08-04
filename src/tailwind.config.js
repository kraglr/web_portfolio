// tailwind.config.js
import flowbitePlugin from "flowbite/plugin";
export default {
    darkMode: 'class', // or 'media' if you prefer system preference
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],

    plugins: [flowbitePlugin],
    theme: {
        extend: {
            animation: {
                'bounce-in': 'bounceIn 0.6s ease-out',
            },
            keyframes: {
                bounceIn: {
                    '0%': {
                        transform: 'scale(0.9)',
                        opacity: '0',
                    },
                    '60%': {
                        transform: 'scale(1.05)',
                        opacity: '1',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
            },
        },
    },
};
