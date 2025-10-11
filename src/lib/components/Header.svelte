<script>
  let { y = $bindable() } = $props();
  
  let mobileMenuOpen = $state(false);

  const tabs = [
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header
  class="sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid backdrop-blur-sm {y > 0
    ? ' py-4 bg-slate-950/90 border-violet-950'
    : ' py-6 bg-transparent border-transparent'}"
>
  <h1 class="font-medium">
    <b class="font-bold poppins text-white">M A Allen Febi</b>
  </h1>
  
  <!-- Desktop Navigation -->
  <div class="hidden sm:flex items-center gap-4">
    {#each tabs as tab}
      <a
        href={tab.link}
        class="duration-200 hover:text-violet-400 text-white"
        onclick={closeMobileMenu}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
    <a 
      href="#contact"
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-400 text-slate-950 hover:bg-violet-500 transition-colors duration-200"
    >
      <div
        class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-200"
      ></div>
      <h4 class="relative z-9">Get in touch</h4>
    </a>
  </div>
  
  <!-- Mobile Menu Button -->
  <button
    class="sm:hidden text-white text-xl p-2"
    onclick={toggleMobileMenu}
    aria-label="Toggle mobile menu"
  >
    <i class="fa {mobileMenuOpen ? 'fa-times' : 'fa-bars'}"></i>
  </button>
</header>

<!-- Mobile Navigation Menu -->
{#if mobileMenuOpen}
  <div class="fixed inset-0 z-[9] bg-slate-950/95 backdrop-blur-sm sm:hidden">
    <div class="flex flex-col items-center justify-center h-full gap-8">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="text-2xl text-white hover:text-violet-400 transition-colors duration-200"
          onclick={closeMobileMenu}
        >
          {tab.name}
        </a>
      {/each}
      <a 
        href="#contact"
        class="blueShadow relative overflow-hidden px-8 py-3 group rounded-full bg-violet-400 text-slate-950 hover:bg-violet-500 transition-colors duration-200 text-lg"
        onclick={closeMobileMenu}
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-200"
        ></div>
        <span class="relative z-9">Get in touch</span>
      </a>
    </div>
  </div>
{/if}
