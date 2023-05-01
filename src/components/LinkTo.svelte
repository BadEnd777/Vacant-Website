<script>
  export let to;
  export let className;
  export let onClick = null;

  const ScrollTo = (e) => {
    e.preventDefault();
    const link = e.currentTarget;
    const id = new URL(link.href).hash.replace("#", "");
    const element = document.getElementById(id);
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });

    if (!onClick) return;
    onClick();
  };
</script>

<a href={`#${to}`} class={className} on:click={ScrollTo}>
  <slot />
</a>
