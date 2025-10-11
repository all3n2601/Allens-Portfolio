<script>
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let y = $state(0);
  let innerHeight = $state(0);
  let innerWidth = $state(0);

  function goTop() {
    document.body.scrollIntoView();
  }
</script>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen" style="z-index: 1;">
  <div
    class="fixed bottom-0 w-full duration-200 p-10 flex z-[10] {y > 0 ? 'opacity-full pointer-events-auto' : 'pointer-events-none opacity-0'}"
  >
    <button
      onclick={goTop}
      class="ml-auto rounded-full bg-white text-violet-400 px-3 sm:px-4 hover:bg-violet-400 hover:text-white cursor-pointer transition-colors duration-200"
    >
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i>
    </button>
  </div>
  <Header {y} />
  <slot />
  <Footer />
</div>
