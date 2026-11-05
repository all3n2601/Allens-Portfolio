<script lang="ts">
  import { experiences } from '$lib/data/resume';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="experience">
  <div class="section-wrap">
    <SectionHeader num="06" title="Work" accent="Experience" />

    {#each experiences as exp}
      <div class="exp-entry reveal">
        <div class="exp-aside">
          <div class="exp-period">{exp.period}</div>
          {#if exp.logos?.length}
            <div class="exp-logos">
              {#each exp.logos as logo}
                <img class="exp-logo" src={logo.src} alt={logo.alt} />
              {/each}
            </div>
          {:else if exp.logo}
            <img class="exp-logo" src={exp.logo} alt={exp.logoAlt ?? ''} />
          {/if}
          {#if exp.current}
            <div class="exp-now">Current</div>
          {/if}
        </div>
        <div class="exp-main">
          <div class="exp-title">{exp.role}</div>
          <div class="exp-org">{exp.org}</div>
          <ul class="exp-pts">
            {#each exp.bullets as b}
              <li>{b}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  #experience {
    background: var(--paper2);
  }

  .exp-entry {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 3rem;
    padding: 3rem 0;
    border-bottom: 1px solid var(--border);
  }

  .exp-entry:last-child {
    border-bottom: none;
  }

  .exp-aside {
    padding-top: 0.4rem;
  }

  .exp-main {
    display: grid;
    gap: 1.2rem;
  }

  .exp-period {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink4);
    letter-spacing: 0.08em;
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }

  .exp-logos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
    margin-bottom: 0.85rem;
  }

  .exp-logo {
    height: 1.5rem;
    width: auto;
    max-width: 100%;
    object-fit: contain;
    object-position: left center;
    display: block;
  }

  .exp-logos .exp-logo:last-child {
    height: 1.85rem;
  }

  .exp-now {
    display: inline-block;
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    background: var(--accent);
    color: white;
    padding: 0.15rem 0.5rem;
  }

  .exp-title {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin-bottom: 0.3rem;
  }

  .exp-org {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }

  .exp-pts {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .exp-pts li {
    font-size: 0.9rem;
    color: var(--ink2);
    line-height: 1.7;
    display: flex;
    gap: 0.8rem;
  }

  .exp-pts li::before {
    content: '—';
    color: var(--ink4);
    flex-shrink: 0;
    margin-top: 0.02em;
  }

  @media (max-width: 600px) {
    .exp-entry {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
