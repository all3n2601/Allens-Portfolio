<script lang="ts">
  import { shippedApps } from '$lib/data/shipped-apps';
  import SectionHeader from './SectionHeader.svelte';

  type App = (typeof shippedApps)[number];

  function appStatusClass(status: App['status']) {
    if (status === 'Live') return 'app-status-live';
    if (status === 'Beta') return 'app-status-beta';
    return 'app-status-soon';
  }

  function appPrimaryHref(app: App) {
    return app.detailHref ?? app.url ?? app.plannedUrl ?? null;
  }

  function displayHost(url: string) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }
</script>

<section id="apps">
  <div class="section-wrap">
    <SectionHeader num="03" title="Shipped" accent="Apps" />

    <p class="apps-intro reveal">
      Products I’ve shipped or am actively building — live sites, public betas, and open-source repos.
    </p>

    <div class="apps-grid">
      {#each shippedApps as app (app.slug)}
        <article class="app-card reveal {app.url ? 'is-live' : 'is-soon'}">
          <div class="app-card-top">
            <div class="app-icon" class:has-logo={Boolean(app.logo)} aria-hidden="true">
              {#if app.logo}
                <img src={app.logo} alt="" />
              {:else}
                <i class={app.icon}></i>
              {/if}
            </div>
            <span class="app-status {appStatusClass(app.status)}">{app.status}</span>
          </div>

          <h3 class="app-name">
            {#if appPrimaryHref(app)}
              <a
                class="app-name-link"
                href={appPrimaryHref(app) ?? undefined}
                target={app.detailHref ? undefined : '_blank'}
                rel={app.detailHref ? undefined : 'noreferrer'}
              >
                {app.name}
              </a>
            {:else}
              {app.name}
            {/if}
          </h3>
          <p class="app-tagline">{app.tagline}</p>

          <div class="app-platforms">
            {#each app.platforms as platform}
              <span class="app-platform">{platform}</span>
            {/each}
          </div>

          <div class="app-footer">
            {#if app.url}
              <a class="app-link" href={app.url} target="_blank" rel="noreferrer">
                {displayHost(app.url)} ↗
              </a>
            {:else if app.plannedUrl}
              <span class="app-planned">{displayHost(app.plannedUrl)}</span>
            {/if}
            {#if app.githubUrl}
              <a class="app-case-study" href={app.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
            {/if}
            {#if app.detailHref}
              <a class="app-case-study" href={app.detailHref}>Open details</a>
            {:else if app.projectSlug}
              <a class="app-case-study" href={`#${app.projectSlug}`}>View project</a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<style>
  #apps {
    background: var(--paper);
  }

  .apps-intro {
    max-width: 640px;
    font-size: 0.95rem;
    color: var(--ink2);
    line-height: 1.75;
    margin: -1.5rem 0 2.5rem;
  }

  .apps-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    border: 1px solid var(--border);
  }

  .app-card:nth-child(2n) {
    border-right: none;
  }

  .app-card:nth-last-child(-n + 2) {
    border-bottom: none;
  }

  .app-card {
    background: var(--paper);
    padding: 2rem;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    transition: background 0.2s;
    min-height: 260px;
  }

  .app-card.is-live:hover {
    background: var(--paper2);
  }

  .app-card.is-soon {
    background: var(--paper2);
  }

  .app-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .app-icon {
    width: 3.25rem;
    height: 3.25rem;
    display: grid;
    place-items: center;
    border: 1px solid var(--border);
    background: var(--paper);
    color: var(--accent);
    font-size: 1.1rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  .app-icon.has-logo {
    border: none;
    background: transparent;
  }

  .app-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .app-status {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.25rem 0.55rem;
    border: 1px solid var(--border);
    white-space: nowrap;
  }

  .app-status-live {
    background: #e8f5ec;
    color: #1f6b38;
    border-color: rgba(31, 107, 56, 0.25);
  }

  .app-status-beta {
    background: var(--gold-pale);
    color: var(--gold);
    border-color: rgba(160, 124, 42, 0.25);
  }

  .app-status-soon {
    background: var(--paper);
    color: var(--ink3);
  }

  .app-name {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 1.45rem;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .app-name-link {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s;
  }

  .app-name-link:hover {
    color: var(--red);
  }

  .app-tagline {
    font-size: 0.88rem;
    color: var(--ink2);
    line-height: 1.65;
    flex: 1;
  }

  .app-platforms {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .app-platform {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
    border: 1px solid var(--border);
    color: var(--ink3);
    background: var(--paper);
  }

  .app-card.is-soon .app-platform {
    background: var(--paper);
  }

  .app-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--border);
    margin-top: auto;
    flex-wrap: wrap;
  }

  .app-link {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--blue);
    text-decoration: none;
    transition: color 0.2s;
  }

  .app-link:hover {
    color: var(--red);
  }

  .app-planned {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    color: var(--ink4);
  }

  .app-case-study {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink3);
    text-decoration: none;
    margin-left: auto;
  }

  .app-case-study:hover {
    color: var(--red);
  }

  @media (max-width: 900px) {
    .apps-grid {
      grid-template-columns: 1fr;
    }

    .app-card {
      border-right: none;
    }

    .app-card:nth-child(2n) {
      border-right: none;
    }

    .app-card:nth-last-child(-n + 2) {
      border-bottom: 1px solid var(--border);
    }

    .app-card:last-child {
      border-bottom: none;
    }
  }
</style>
