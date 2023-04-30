export default {
    mode: 'jit',
    darkMode: 'class',
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            light: {
                100: '#f6f8fa',
                50: '#ffffff',
            },
            dark: {
                100: '#0c0c0c',
                50: '#1a1a1a',
            },
            gray: {
                light: '#686363',
                dark: '#a8a3a3',
            },
            accent: '#6B46C1',
        },
    },
    plugins: []
};