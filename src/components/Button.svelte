<script>
  export let text;
  export let href;
  export let className;
</script>

<a
  {href}
  target="_blank"
  class={`
  bg-accent text-light-100 font-semibold py-2 px-4 rounded-md hover:-translate-y-1
  transition-all duration-200 ease-in-out
  ${className}
  `}
>
  {text}
</a>
