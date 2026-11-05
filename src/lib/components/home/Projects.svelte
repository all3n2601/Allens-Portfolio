<script lang="ts">
  import { projects, projectPreviewAlt, projectPreviewSrc } from '$lib/data/projects';
  import SectionHeader from './SectionHeader.svelte';

  const supportingSlugs = ['food-alert', 'collabcore', 'restaurant-pos', 'respulse', 'arrival', 'navx'];
  const rest = supportingSlugs.flatMap((slug) => projects.filter((p) => p.slug === slug && p.image && p.links?.length));

  function projectAward(slug: string) {
    if (slug === 'collabcore') return { text: '🏆 Hackathon Winner', cls: 'award-gold' };
    if (slug === 'navx') return { text: '🥈 2nd / 72 Teams', cls: 'award-silver' };
    if (slug === 'hifive') return { text: '🏆 JailBreak Edu · SharkNinja', cls: 'award-gold' };
    return null;
  }
</script>

<section id="projects">
  <div class="section-wrap">
    <SectionHeader num="07" title="Selected" accent="Projects" />

    <div class="projects-masonry">
      {#each rest as p, i (p.slug)}
        <article class="proj-card reveal" id={p.slug}>
          {#if projectAward(p.slug)}
            <div class="proj-award {projectAward(p.slug)?.cls}">{projectAward(p.slug)?.text}</div>
          {/if}
          <div class="proj-num">{String(i + 1).padStart(2, '0')}</div>
          <div class="proj-name">{p.title}</div>
          <div class="proj-subtitle">{p.highlights?.[0] ?? p.category}</div>
          {#if projectPreviewSrc(p)}
            <figure class="proj-visual">
              <img
                class:contain={p.imageFit === 'contain'}
                src={projectPreviewSrc(p) ?? undefined}
                alt={projectPreviewAlt(p)}
                loading="lazy"
                decoding="async"
              />
              {#if p.visualLabel}<figcaption>{p.visualLabel}</figcaption>{/if}
            </figure>
          {:else if p.visualNote}
            <div class="proj-visual-note">
              <span>{p.visualLabel}</span>
              <p>{p.visualNote}</p>
            </div>
          {/if}
          <p class="proj-desc">{p.summary}</p>
          <div class="proj-tech">
            {#each p.tags as t}
              <span class="tech-chip">{t}</span>
            {/each}
          </div>
          <div class="proj-footer">
            {#if p.links?.length}
              {#each p.links as l}
                <a class="proj-link" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel={l.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {l.label} ↗
                </a>
              {/each}
            {:else}
              <span class="proj-link">NDA — Portfolio ref only</span>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  #projects {
    background: var(--paper);
  }

  .projects-masonry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--border);
  }

  .proj-card {
    background: var(--paper);
    padding: 2rem;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: background 0.2s;
    position: relative;
  }

  .proj-card:hover {
    background: var(--paper2);
  }

  .proj-card:nth-child(3n) {
    border-right: none;
  }

  .proj-card:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  .proj-award {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
  }

  .award-gold {
    background: var(--gold-pale);
    color: var(--gold);
    border: 1px solid rgba(160, 124, 42, 0.25);
  }

  .award-silver {
    background: var(--blue-pale);
    color: var(--blue);
    border: 1px solid rgba(29, 58, 110, 0.2);
  }

  .award-bronze {
    background: var(--accent-pale);
    color: var(--accent);
    border: 1px solid rgba(11, 110, 106, 0.22);
  }

  .proj-subtitle {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .proj-visual-note {
    min-height: 10rem;
    padding: 1.4rem;
    border: 1px solid var(--border);
    background: var(--paper2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.55rem;
  }

  .proj-visual-note span {
    color: var(--red);
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .proj-visual-note p {
    margin: 0;
    color: var(--ink3);
    font-size: 0.78rem;
    line-height: 1.55;
  }

  @media (max-width: 900px) {
    .projects-masonry {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .projects-masonry {
      grid-template-columns: 1fr;
    }
  }
</style>
