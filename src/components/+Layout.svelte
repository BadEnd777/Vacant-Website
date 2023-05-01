<script>
  import "../css/base.css"; // Global CSS

  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import BackToTop from "./BackToTop.svelte";

  const title = "Vacant - Modify VRCSDK";
  const description =
    "Vacant is a modify version of the VRCSDK by VRChat. The purpose of this mod is to make it easier to create mods for VRChat. The mod is also published for using and sharing with the community.";
  const origin = "https://vacant-sdk.pages.dev";
  const image = `${origin}/images/vacant.png`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="image" content={image} />
  <meta property="og:url" content={origin} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<div
  id="top"
  class="min-h-screen bg-light-100 dark:bg-dark-100 text-dark-100 dark:text-light-100 overflow-hidden transition-all duration-200 ease-in-out"
>
  <Header />
  <slot />
  <Footer />
  <BackToTop />
</div>
