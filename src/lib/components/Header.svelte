<script>
  let { y = $bindable() } = $props();
  import { site } from '$lib/data/site';
  
  let mobileMenuOpen = $state(false);

  const tabs = [
    { name: 'Projects', link: '#projects' },
    { name: 'Skills', link: '#skills' },
    { name: 'About', link: '#about' },
    { name: 'Contact', link: '#contact' }
  ];
  
  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }
  
  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header
  class="sticky top-0 z-[50] border-b border-white/5 backdrop-blur-xl duration-200 {y > 4
    ? 'bg-slate-950/70 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]'
    : 'bg-transparent'}"
>
  <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
    <a href="#top" class="flex items-center gap-3 text-white">
      <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/10 border border-white/10">
        <i class="fa-solid fa-code text-violet-200"></i>
      </span>
      <div class="leading-tight">
        <div class="font-semibold poppins">{site.fullName}</div>
        <div class="text-xs text-white/60">{site.role}</div>
      </div>
    </a>
  
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-1 py-1">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="rounded-xl px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          onclick={closeMobileMenu}
        >
          {tab.name}
        </a>
      {/each}
    </nav>

    <div class="hidden md:flex items-center gap-3">
      <a
        href={site.resumePath}
        download
        class="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
      >
        <span class="flex items-center gap-2">
          <i class="fa-solid fa-download text-xs"></i>
          Resume
        </span>
      </a>
      <a
        href="#contact"
        class="blueShadow rounded-xl bg-violet-400 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-violet-500 transition"
      >
        Let’s talk
      </a>
    </div>
  
    <!-- Mobile Menu Button -->
    <button
      class="md:hidden text-white/90 text-xl p-2 rounded-xl hover:bg-white/10 transition"
      onclick={toggleMobileMenu}
      aria-label="Toggle mobile menu"
    >
      <i class="fa {mobileMenuOpen ? 'fa-times' : 'fa-bars'}"></i>
    </button>
  </div>
</header>

<!-- Mobile Navigation Menu -->
{#if mobileMenuOpen}
  <div class="fixed inset-0 z-[49] bg-slate-950/85 backdrop-blur-xl md:hidden">
    <div class="flex flex-col items-center justify-center h-full gap-6 px-6">
      {#each tabs as tab}
        <a
          href={tab.link}
          class="text-2xl text-white/90 hover:text-white transition"
          onclick={closeMobileMenu}
        >
          {tab.name}
        </a>
      {/each}
      <a 
        href={site.resumePath}
        download
        class="w-full max-w-xs rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center text-white/90 hover:bg-white/10 transition"
        onclick={closeMobileMenu}
      >
        <span class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-download text-sm"></i>
          Resume
        </span>
      </a>
      <a 
        href="#contact"
        class="blueShadow w-full max-w-xs rounded-xl bg-violet-400 px-6 py-3 text-center text-slate-950 font-medium hover:bg-violet-500 transition"
        onclick={closeMobileMenu}
      >
        Let’s talk
      </a>
    </div>
  </div>
{/if}
