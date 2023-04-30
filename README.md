# Vacant - Modify VRCSDK

This is the source code for [Vacant - Modify VRCSDK](https://vacant-sdk.pages.dev/) website.

## Stack

- [Svelte](https://svelte.dev/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Svelte Icons Pack](https://github.com/leshak/svelte-icons-pack) - Icons

## Project structure

```bash
.                               # Root
├── src                         # Source code
│   ├── components              # Svelte components
│   ├── css                     # CSS files
│   ├── data                    # Data files
│   ├── lib                     # Assets and libraries
│   ├── routes                  # Svelte routes
│   │   ├── +error.svelte       # Error page
│   │   ├── +page.js            # Page options
│   │   └── +page.svelte        # Page template
│   └── app.html                # HTML template
├── static                      # Static files
├── .gitignore                  # Git ignore
├── package.json                # NPM package
├── postcss.config.js           # PostCSS config
├── README.md                   # This file
├── svelte.config.js            # Svelte config
├── tailwind.config.js          # Tailwind config
└── vite.config.js              # Vite config
```

## Development

```bash
# install dependencies
npm install

# serve with hot reload at localhost:5173
npm run dev

# build for production
npm run build
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr />