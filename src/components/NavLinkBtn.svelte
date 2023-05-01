<script>
  import LinkTo from "./LinkTo.svelte";

  export let to;
  export let onClick;
</script>

<LinkTo
  {to}
  className="p-2 transition-colors duration-200 rounded-md ease-in-out hover:bg-light-50 dark:hover:bg-dark-50"
  onClick={onClick}
>
  <slot />
</LinkTo>
