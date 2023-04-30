<script>
  import { onMount } from "svelte";
  import LinkTo from "./LinkTo.svelte";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import ArrowUp from "svelte-icons-pack/fa/FaSolidChevronUp";

  let show;

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    show = top > 100;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });
</script>

<LinkTo
  to="top"
  className={`fixed bottom-10 right-10 z-50
bg-accent text-light-100
rounded-full p-2 hover:-translate-y-2
transition-all duration-200 ease-in-out
${show ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
>
  <Icon src={ArrowUp} size="28" color="currentColor" />
</LinkTo>
