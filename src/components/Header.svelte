<script>
  import { NAVITEMS } from "../data/navItems.js";
  import Logo from "../lib/images/vacant.png";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import LinkTo from "./LinkTo.svelte";
  import NavLink from "./NavLink.svelte";
  import NavLinkBtn from "./NavLinkBtn.svelte";
  import DarkModeToggle from "./DarkModeToggle.svelte";

  import Github from "svelte-icons-pack/fa/FaBrandsGithub";

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const closeMenu = () => {
    isMenuOpen = false;
  };
</script>

<header
  class="
  bg-light-100/50 dark:bg-dark-100/50 text-dark-100 dark:text-light-100
  border-b-2 border-light-50 dark:border-dark-50
  backdrop-blur-md transition-colors duration-200 ease-in-out
  fixed top-0 left-0 right-0 z-50
  "
>
  <div class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <LinkTo to="top" className="flex items-center">
          <img src={Logo} alt="Vacant" class="w-8 h-8 mr-2 dark:invert" />
          <span class="text-xl font-bold">Vacant</span>
        </LinkTo>
      </div>
      <div class="flex items-center">
        <DarkModeToggle />
        <a
          href="https://github.com/BadEnd777/Vacant-Website"
          target="_blank"
          class="text-dark-100 dark:text-light-100 ml-4"
        >
          <Icon
            src={Github}
            size="28"
            color="currentColor"
            className="hover:scale-110 transition-transform duration-200 ease-in-out"
          />
        </a>
        <div class="hidden lg:flex items-center">
          {#each NAVITEMS as navItem}
            <NavLink to={navItem.hash} className="ml-4">{navItem.title}</NavLink>
          {/each}
          <a
            href="/vacant.unitypackage"
            class="ml-4 text-dark-100 dark:text-light-100 hover:text-dark-200 dark:hover:text-light-200"
            >Download</a
          >
        </div>
        <div class="flex lg:hidden items-center relative">
          <button
            class="
            ml-4 py-2 px-4 rounded-md
            bg-dark-100 dark:bg-light-100 text-light-100 dark:text-dark-100
            hover:bg-dark-50 dark:hover:bg-light-50 hover:scale-105 transition-transform duration-200 ease-in-out"
            on:click={toggleMenu}
          >
            <p class="text-sm font-semibold">Menu</p>
          </button>
          <div
            class={`
            flex flex-col w-60 rounded-md p-1
            absolute top-12 right-0
            bg-light-100 dark:bg-dark-100 text-dark-100 dark:text-light-100
            border-2 border-light-50 dark:border-dark-50
            transition-all duration-200 ease-in-out
            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {#each NAVITEMS as navItem}
              <NavLinkBtn to={navItem.hash} onClick={closeMenu}>{navItem.title}</NavLinkBtn>
            {/each}
            <a
              href="/vacant.unitypackage"
              class="p-2 transition-colors duration-200 rounded-md ease-in-out hover:bg-light-50 dark:hover:bg-dark-50"
              on:click={closeMenu}
              >Download</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
