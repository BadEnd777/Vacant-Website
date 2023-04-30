export default {
    mode: 'jit',
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            light: {
                100: '#edf2f4',
                50: '#d9dee4',
            },
            dark: {
                100: '#0c0c0c',
                50: '#1a1a1a',
            },
            gray: {
                light: '#686363',
                dark: '#777777',
            },
            accent: '#ff6600',
        },
    },
    plugins: []
};