<script>
  import { goto } from '$app/navigation';
  import "../css/base.css";

  const goBack = () => {
    goto("/");
  };
</script>

<div class="flex flex-col justify-center items-center h-screen">
  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center uppercase">
    404
  </h1>
  <p
    class="text-center text-lg md:text-xl lg:text-2xl font-semibold mt-2 max-w-4xl text-gray-light dark:text-gray-dark"
  >
    The page you are looking for does not exist.
  </p>
  <button
    class="bg-accent text-light-100 font-semibold py-2 px-4 rounded-md hover:-translate-y-1 transition-all duration-200 ease-in-out mt-4"
    on:click={goBack}
  >
    Go back to home
  </button>
</div>