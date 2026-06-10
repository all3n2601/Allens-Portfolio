<script lang="ts">
  import type { PageData } from './$types';
  import BrandMark from '$lib/components/BrandMark.svelte';
  import { site } from '$lib/data/site';

  let { data }: { data: PageData } = $props();

  const { app, detail, project } = data;

  function displayHost(url: string) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }
</script>

<svelte:head>
  <title>{app.name} • Shipped by Allen</title>
  <meta name="description" content={detail.lede} />
</svelte:head>

<nav class="detail-nav">
  <a class="nav-brand" href="/">
    <BrandMark size={34} />
    <span class="nav-brand-text">
      <span class="nav-brand-shipped">{site.brandShort}</span>
      <span class="nav-brand-by">{site.monogram} · {site.brandByline}</span>
    </span>
  </a>
  <div class="detail-nav-links">
    <a href="/#apps">All Apps</a>
    <a href="/#projects">Projects</a>
    <a href={`mailto:${site.email}`}>Contact</a>
  </div>
</nav>

<main class="detail-page">
  <section class="detail-hero">
    <div class="detail-hero-copy">
      <p class="detail-eyebrow">{detail.eyebrow}</p>
      <h1>{app.name}</h1>
      <p class="detail-headline">{detail.headline}</p>
      <p class="detail-lede">{detail.lede}</p>

      <div class="detail-actions">
        {#if app.plannedUrl}
          <a class="btn-filled" href={app.plannedUrl} target="_blank" rel="noreferrer">
            {displayHost(app.plannedUrl)}
          </a>
        {/if}
        {#if project}
          <a class="btn-ghost" href={`/#projects`}>Portfolio project</a>
        {/if}
      </div>
    </div>

    <aside class="detail-summary">
      <div class="summary-card">
        <div class="summary-top">
          <div class="summary-icon"><i class={app.icon}></i></div>
          <span class="summary-status">{app.status}</span>
        </div>
        <p class="summary-tagline">{app.tagline}</p>
        <p class="summary-note">{detail.statusNote}</p>
      </div>

      <div class="metrics-grid">
        {#each detail.metrics as metric}
          <div class="metric">
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
          </div>
        {/each}
      </div>
    </aside>
  </section>

  <section class="detail-section">
    <div class="ruled-header">
      <span class="section-num">01</span>
      <h2 class="section-heading">Product <em>Shape</em></h2>
    </div>

    <div class="detail-grid detail-grid-3">
      {#each detail.pillars as pillar}
        <article class="detail-card">
          <h3>{pillar.title}</h3>
          <p>{pillar.body}</p>
        </article>
      {/each}
    </div>
  </section>

  <section class="detail-section alt">
    <div class="ruled-header">
      <span class="section-num">02</span>
      <h2 class="section-heading">Release <em>Context</em></h2>
    </div>

    <div class="detail-grid detail-grid-2">
      {#each detail.surfaces as surface}
        <article class="detail-card">
          <h3>{surface.title}</h3>
          <ul>
            {#each surface.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <section class="detail-section">
    <div class="detail-body-grid">
      <article class="essay-card">
        <div class="ruled-header">
          <span class="section-num">03</span>
          <h2 class="section-heading">Why This <em>Page Exists</em></h2>
        </div>
        {#each detail.narrative as paragraph}
          <p>{paragraph}</p>
        {/each}
      </article>

      <aside class="stack-card">
        <div class="stack-head">{detail.stackLabel}</div>
        <div class="stack-list">
          {#each detail.stack as item}
            <span>{item}</span>
          {/each}
        </div>

        {#if project}
          <div class="project-context">
            <span>Linked project</span>
            <strong>{project.title}</strong>
            <p>{project.summary}</p>
          </div>
        {/if}
      </aside>
    </div>
  </section>

  <section class="detail-section alt">
    <div class="ruled-header">
      <span class="section-num">04</span>
      <h2 class="section-heading">Next <em>Release</em></h2>
    </div>

    <div class="next-steps">
      {#each detail.nextSteps as step, index}
        <div class="next-step">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <p>{step}</p>
        </div>
      {/each}
    </div>
  </section>
</main>

<style>
  :global(body) {
    background: var(--paper);
    color: var(--ink);
  }

  .detail-nav {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--border);
    background:
      linear-gradient(180deg, rgba(245, 242, 235, 0.96), rgba(245, 242, 235, 0.92));
    backdrop-filter: blur(12px);
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: inherit;
  }

  .nav-brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .nav-brand-shipped {
    font-family: var(--serif);
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  .nav-brand-by {
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--ink4);
    margin-top: 0.28rem;
  }

  .detail-nav-links {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  .detail-nav-links a {
    font-family: var(--mono);
    font-size: 0.68rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink3);
    text-decoration: none;
  }

  .detail-nav-links a:hover {
    color: var(--red);
  }

  .detail-page {
    min-height: 100vh;
  }

  .detail-hero,
  .detail-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
  }

  .detail-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(320px, 0.9fr);
    gap: 2rem;
    align-items: start;
  }

  .detail-eyebrow,
  .stack-head,
  .metric span,
  .next-step span {
    font-family: var(--mono);
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .detail-eyebrow {
    font-size: 0.7rem;
    color: var(--red);
    margin-bottom: 1rem;
  }

  h1 {
    font-family: var(--serif);
    font-size: clamp(3rem, 6vw, 5.6rem);
    line-height: 0.96;
    letter-spacing: -0.04em;
    margin: 0;
  }

  .detail-headline {
    max-width: 56rem;
    font-family: var(--serif);
    font-size: 1.55rem;
    line-height: 1.35;
    color: var(--ink2);
    margin: 1.25rem 0 1rem;
  }

  .detail-lede {
    max-width: 44rem;
    font-size: 1rem;
    color: var(--ink2);
    line-height: 1.8;
  }

  .detail-actions {
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

  .btn-filled,
  .btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 1rem;
    border: 1px solid var(--ink);
    text-decoration: none;
    font-family: var(--mono);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
  }

  .btn-filled {
    background: var(--ink);
    color: var(--paper);
  }

  .btn-filled:hover {
    background: var(--red);
    border-color: var(--red);
  }

  .btn-ghost {
    background: transparent;
    color: var(--ink);
  }

  .btn-ghost:hover {
    color: var(--red);
    border-color: var(--red);
  }

  .detail-summary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .summary-card,
  .detail-card,
  .essay-card,
  .stack-card,
  .next-step,
  .metric {
    border: 1px solid var(--border);
    background: var(--paper);
  }

  .summary-card {
    padding: 1.5rem;
  }

  .summary-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .summary-icon {
    width: 3rem;
    height: 3rem;
    display: grid;
    place-items: center;
    border: 1px solid var(--border);
    color: var(--red);
    font-size: 1.2rem;
  }

  .summary-status {
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.28rem 0.55rem;
    border: 1px solid var(--border);
    background: var(--paper2);
    color: var(--ink3);
  }

  .summary-tagline {
    font-family: var(--serif);
    font-size: 1.3rem;
    line-height: 1.45;
    color: var(--ink);
    margin-bottom: 0.8rem;
  }

  .summary-note {
    font-size: 0.92rem;
    color: var(--ink2);
    line-height: 1.7;
  }

  .metrics-grid,
  .detail-grid,
  .next-steps {
    display: grid;
    gap: 1rem;
  }

  .metrics-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .metric {
    padding: 1rem;
    min-height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.6rem;
  }

  .metric span {
    font-size: 0.62rem;
    color: var(--ink4);
  }

  .metric strong {
    font-family: var(--serif);
    font-size: 1.2rem;
    line-height: 1.2;
    color: var(--ink);
    font-weight: 700;
  }

  .detail-section.alt {
    background: var(--paper2);
    max-width: none;
  }

  .detail-section.alt > :global(*) {
    max-width: 1200px;
  }

  .ruled-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .ruled-header::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .section-num {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.14em;
    color: var(--ink4);
  }

  .section-heading {
    margin: 0;
    font-family: var(--serif);
    font-size: clamp(1.9rem, 4vw, 3rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .section-heading em {
    font-style: italic;
    color: var(--ink4);
  }

  .detail-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .detail-grid-2,
  .next-steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .detail-card {
    padding: 1.5rem;
  }

  .detail-card h3,
  .stack-card strong {
    font-family: var(--serif);
    font-size: 1.35rem;
    line-height: 1.2;
    margin: 0 0 0.75rem;
    color: var(--ink);
  }

  .detail-card p,
  .essay-card p,
  .project-context p {
    font-size: 0.94rem;
    line-height: 1.8;
    color: var(--ink2);
  }

  .detail-card ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 0;
    margin: 0;
  }

  .detail-card li {
    position: relative;
    padding-left: 1rem;
    font-size: 0.92rem;
    line-height: 1.7;
    color: var(--ink2);
  }

  .detail-card li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: var(--red);
  }

  .detail-body-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
    gap: 1rem;
  }

  .essay-card,
  .stack-card {
    padding: 1.5rem;
  }

  .essay-card :global(.ruled-header) {
    margin-bottom: 1.5rem;
  }

  .essay-card p + p {
    margin-top: 1rem;
  }

  .stack-head {
    font-size: 0.62rem;
    color: var(--red);
    margin-bottom: 1rem;
  }

  .stack-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin-bottom: 1.5rem;
  }

  .stack-list span {
    border: 1px solid var(--border);
    background: var(--paper2);
    padding: 0.28rem 0.6rem;
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--ink3);
  }

  .project-context {
    padding-top: 1.2rem;
    border-top: 1px solid var(--border);
  }

  .project-context span {
    display: block;
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink4);
    margin-bottom: 0.55rem;
  }

  .next-step {
    padding: 1.2rem;
  }

  .next-step span {
    display: block;
    font-size: 0.62rem;
    color: var(--red);
    margin-bottom: 0.75rem;
  }

  .next-step p {
    font-family: var(--serif);
    font-size: 1.18rem;
    line-height: 1.45;
    color: var(--ink);
  }

  @media (max-width: 960px) {
    .detail-hero,
    .detail-body-grid,
    .detail-grid-3,
    .detail-grid-2,
    .next-steps {
      grid-template-columns: 1fr;
    }

    .detail-nav {
      padding: 1rem 1.25rem;
      align-items: flex-start;
      flex-direction: column;
    }

    .detail-hero,
    .detail-section {
      padding: 3rem 1.25rem;
    }
  }
</style>
