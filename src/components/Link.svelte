<script>
  export let text;
  export let href;
  export let className;
</script>

<a {href} class={`${className} hover:underline`}>{text}</a>
