<script lang="ts">
  import type { Project } from '$lib/data/projects';

  let { project } = $props<{ project: Project }>();
</script>

<article class="group h-full">
  <div class="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
    <div class="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div class="relative flex items-start justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-slate-950/30 text-white">
          <i class={project.icon}></i>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-white/95 leading-snug">{project.title}</h3>
          <div class="mt-1 flex items-center gap-2 text-xs text-white/55">
            <span class="rounded-full border border-white/10 bg-white/5 px-2 py-1">{project.category}</span>
            <span class="rounded-full border border-white/10 bg-white/5 px-2 py-1">{project.status}</span>
            {#if project.featured}
              <span class="rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-violet-200">Featured</span>
            {/if}
          </div>
        </div>
      </div>
    </div>

    <p class="relative mt-4 text-white/65 leading-relaxed">
      {project.summary}
    </p>

    {#if project.highlights?.length}
      <ul class="relative mt-4 space-y-2">
        {#each project.highlights as h}
          <li class="flex items-start gap-2 text-sm text-white/70">
            <span class="mt-1 h-1.5 w-1.5 rounded-full bg-violet-300/70"></span>
            <span>{h}</span>
          </li>
        {/each}
      </ul>
    {/if}

    <div class="relative mt-5 flex flex-wrap gap-2">
      {#each project.tags.slice(0, 6) as tag}
        <span class="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-white/70">
          {tag}
        </span>
      {/each}
      {#if project.tags.length > 6}
        <span class="rounded-full border border-white/10 bg-slate-950/30 px-3 py-1 text-xs text-white/50">
          +{project.tags.length - 6} more
        </span>
      {/if}
    </div>

    {#if project.links?.length}
      <div class="relative mt-6 flex flex-wrap gap-2">
        {#each project.links as link}
          <a
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            class="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <i class="{link.icon} text-sm"></i>
            {link.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</article>
