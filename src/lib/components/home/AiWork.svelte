<script lang="ts">
  import { aiProjects } from '$lib/data/ai-work';
  import SectionHeader from './SectionHeader.svelte';
  import StackProviders from './StackProviders.svelte';
</script>

<section id="ai-work">
  <div class="section-wrap">
    <SectionHeader num="02" title="Applied" accent="AI" />

    <div class="ai-intro reveal">
      <p class="ai-lede">Data is my focus. In this era, that means knowing AI too.</p>
      <p class="ai-body">
        Models are only as good as the data and contracts around them, so I build AI systems the way I build
        pipelines: <strong>typed contracts</strong>, <strong>deterministic checks</strong>, and
        <strong>evidence you can audit</strong>. Here are two projects where agents and LLMs do the reasoning and the
        data layer keeps them honest.
      </p>
    </div>

    <div class="ai-grid">
      {#each aiProjects as p, i (p.slug)}
        <article class="ai-card reveal" id={p.slug}>
          <div class="proj-num">0{i + 1} · {p.kicker}</div>
          <h3 class="proj-name">{p.title}</h3>
          <p class="proj-desc">{p.tagline}</p>
          {#if p.principle}
            <p class="ai-principle">“{p.principle}”</p>
          {/if}

          <div>
            <h4 class="ai-label">What I built</h4>
            <ul class="ai-built">
              {#each p.built as item}<li>{item}</li>{/each}
            </ul>
          </div>

          <div class="ai-data">
            <h4 class="ai-label">Data angle</h4>
            <p>{p.dataAngle}</p>
          </div>

          <div class="proj-tech">
            {#each p.tags as tag}<span class="tech-chip">{tag}</span>{/each}
          </div>

          <StackProviders groups={p.stack} />

          <div class="proj-footer">
            <a class="proj-link" href={p.repo} target="_blank" rel="noreferrer">Code ↗</a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  #ai-work {
    background: var(--paper2);
  }

  .ai-intro {
    display: grid;
    grid-template-columns: 5fr 6fr;
    gap: 3rem;
    align-items: start;
    margin-bottom: 3rem;
  }

  .ai-lede {
    font-family: var(--serif);
    font-style: italic;
    font-size: clamp(1.4rem, 2.6vw, 1.9rem);
    line-height: 1.25;
    color: var(--ink);
  }

  .ai-body {
    font-size: 0.95rem;
    line-height: 1.75;
    color: var(--ink2);
  }

  .ai-body strong {
    color: var(--ink);
    font-weight: 600;
  }

  .ai-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid var(--border);
    background: var(--paper);
  }

  .ai-card {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    min-width: 0;
  }

  .ai-card + .ai-card {
    border-left: 1px solid var(--border);
  }

  .ai-card .proj-desc {
    flex: none;
  }

  .ai-principle {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.05rem;
    color: var(--accent);
    padding-left: 1rem;
    border-left: 2px solid var(--accent);
  }

  .ai-label {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 0.6rem;
  }

  .ai-built {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .ai-built li {
    position: relative;
    padding-left: 1.1rem;
    font-size: 0.85rem;
    line-height: 1.65;
    color: var(--ink2);
  }

  .ai-built li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--ink4);
    font-family: var(--mono);
    font-size: 0.75rem;
  }

  .ai-data {
    padding: 1rem;
    background: var(--accent-pale);
    border: 1px solid var(--border);
  }

  .ai-data p {
    font-size: 0.85rem;
    line-height: 1.65;
    color: var(--ink2);
  }

  @media (max-width: 900px) {
    .ai-intro {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .ai-grid {
      grid-template-columns: 1fr;
    }

    .ai-card + .ai-card {
      border-left: none;
      border-top: 1px solid var(--border);
    }
  }

  @media (max-width: 600px) {
    .ai-card {
      padding: 1.5rem;
    }
  }
</style>
