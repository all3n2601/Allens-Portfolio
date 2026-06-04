<script>
  import { site } from '$lib/data/site';
  const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-white/5 bg-slate-950/40 backdrop-blur">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
    <div class="text-center sm:text-left">
      <div class="text-sm text-white/70">© {year} {site.fullName}</div>
      <div class="text-xs text-white/50 mt-1">Built with SvelteKit + Tailwind.</div>
    </div>

    <div class="flex items-center gap-2">
      {#each site.socials as social}
        <a
          href={social.href}
          target={social.href.startsWith('http') ? '_blank' : undefined}
          rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
          class="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 transition"
          aria-label={social.label}
        >
          <i class="{social.icon} text-lg"></i>
        </a>
      {/each}
    </div>
  </div>
</footer>
