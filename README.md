# Vacant - Modify VRCSDK

This is the source code for [Vacant - Modify VRCSDK](https://vacant-sdk.pages.dev/) website.

## Stack

- [SvelteKit](https://kit.svelte.dev/) - Frontend framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Svelte Icons Pack](https://github.com/leshak/svelte-icons-pack) - Icons
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting

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

## Adapter

This project uses [Cloudflare Pages](https://pages.cloudflare.com/) as hosting provider. You can use any other hosting provider, but you will need to change the adapter in `svelte.config.js` file. For more information, see [SvelteKit adapter docs](https://kit.svelte.dev/docs/adapters).

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-cloudflare';

export default {
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['<all>']
			}
		})
	}
};
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr />