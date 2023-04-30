<script>
  import { browser } from "$app/environment";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import Sun from "svelte-icons-pack/fa/FaSolidSun";
  import Moon from "svelte-icons-pack/fa/FaSolidMoon";

  let darkMode;

  const toggleDarkMode = () => {
    darkMode = !darkMode;
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  if (browser) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      darkMode = true;
      document.documentElement.classList.add("dark");
    } else {
      darkMode = false;
      document.documentElement.classList.remove("dark");
    }
  }
</script>

<button
  class="
  p-2 rounded-md
  bg-accent text-light-100
  hover:scale-105
  transition-all duration-200 ease-in-out
  "
  on:click={toggleDarkMode}
>
  <Icon size="20" src={darkMode ? Sun : Moon} color="currentColor" />
</button>
