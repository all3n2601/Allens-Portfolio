<script lang="ts">
  import { projects, projectPreviewAlt } from '$lib/data/projects';
  import SectionHeader from './SectionHeader.svelte';
  import StackProviders from './StackProviders.svelte';

  const dataProjects = projects.filter((p) => p.caseStudy);
</script>

<section id="data-work">
  <div class="section-wrap">
    <SectionHeader num="01" title="Featured" accent="Data Work" />
    <div class="data-grid">
      {#each dataProjects as p, i (p.slug)}
        <article class="data-card reveal" id={p.slug}>
          <div class="data-card-top">
            <div class="proj-num">0{i + 1} · {p.category}</div>
            {#if p.logo}
              <img class="data-logo" src={p.logo} alt={p.logoAlt ?? ''} />
            {/if}
          </div>
          <h3 class="proj-name">{p.title}</h3>
          <p class="proj-desc">{p.summary}</p>
          <div class="proj-tech">
            {#each p.tags as tag}<span class="tech-chip">{tag}</span>{/each}
          </div>
          {#if p.caseStudy}
            <div class="case-study">
              <h4>Problem</h4><p>{p.caseStudy.problem}</p>
              <h4>Data sources</h4><p>{p.caseStudy.sources}</p>
              <h4>Pipeline architecture</h4>
              <ol class="pipeline" aria-label={`${p.title} pipeline stages`}>
                {#each p.caseStudy.architecture as stage}<li>{stage}</li>{/each}
              </ol>
              <h4>Data quality</h4><p>{p.caseStudy.quality}</p>
              <h4>Results</h4><p>{p.caseStudy.result}</p>
              {#if p.image}
                <figure class="proj-visual">
                  <img src={p.image} alt={projectPreviewAlt(p)} loading="lazy" decoding="async" />
                  <figcaption>{p.visualLabel}</figcaption>
                </figure>
              {/if}
              {#if p.caseStudy.next}<h4>What I’d improve</h4><p>{p.caseStudy.next}</p>{/if}
            </div>
          {/if}
          {#if p.stackIcons?.length}
            <StackProviders
              groups={[
                { label: 'Stack', icons: p.stackIcons.filter((icon) => icon.role !== 'data-source') },
                { label: 'Data sources', icons: p.stackIcons.filter((icon) => icon.role === 'data-source'), tone: 'source' }
              ]}
            />
          {/if}
          <div class="proj-footer">
            {#each p.links ?? [] as link}
              <a class="proj-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label} ↗</a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  .data-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: 1px solid var(--border);
  }

  .data-card {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    min-width: 0;
  }

  .data-card + .data-card {
    border-left: 1px solid var(--border);
  }

  .data-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .data-logo {
    height: 1.75rem;
    width: auto;
    max-width: 11rem;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }

  .data-card .proj-desc {
    flex: none;
  }

  .data-card .proj-name {
    font-size: 2rem;
  }

  .case-study h4 {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin: 1.2rem 0 0.5rem;
  }

  .case-study p {
    font-size: 0.85rem;
    line-height: 1.7;
    color: var(--ink2);
  }

  .case-study .proj-visual {
    margin-top: 1rem;
  }

  .pipeline {
    list-style: none;
    counter-reset: stage;
    display: grid;
    gap: 0.5rem;
  }

  .pipeline li {
    counter-increment: stage;
    font-family: var(--mono);
    font-size: 0.75rem;
    padding: 0.8rem;
    border: 1px solid var(--border);
    background: var(--paper2);
  }

  .pipeline li::before {
    content: counter(stage, decimal-leading-zero) ' → ';
    color: var(--red);
  }

  @media (max-width: 900px) {
    .data-grid {
      grid-template-columns: 1fr;
    }

    .data-card + .data-card {
      border-left: none;
      border-top: 1px solid var(--border);
    }

    .data-card {
      padding: 1.5rem;
    }
  }
</style>
