<script>
  import LinkTo from "./LinkTo.svelte";

  export let to;
  export let className;
</script>

<LinkTo
  {to}
  className={`text-dark-100 dark:text-light-100 hover:text-dark-200 dark:hover:text-light-200 ${className}`}
>
  <slot />
</LinkTo>
