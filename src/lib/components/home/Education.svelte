<script lang="ts">
  import { education } from '$lib/data/resume';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="education">
  <div class="section-wrap">
    <SectionHeader num="08" title="Academic" accent="Background" />

    <div class="edu-two-col">
      {#each education as e}
        <div class="edu-block reveal">
          <div class="edu-top">
            <div class="edu-type">{e.type}</div>
            {#if e.logo}
              <img class="edu-logo" src={e.logo} alt={e.logoAlt ?? ''} />
            {/if}
          </div>
          <div class="edu-degree">{e.degree}</div>
          <div class="edu-school">{e.school}</div>
          <div class="edu-period">{e.period}</div>
          {#if e.gpaBadge}
            <span class="edu-gpa-badge">{e.gpaBadge}</span>
          {/if}
          <div class="edu-courses">{e.courses}</div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #education {
    background: var(--paper);
  }

  .edu-two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid var(--border);
  }

  .edu-block {
    padding: 2.5rem;
    border-right: 1px solid var(--border);
    transition: background 0.2s;
  }

  .edu-block:last-child {
    border-right: none;
  }

  .edu-block:hover {
    background: var(--paper2);
  }

  .edu-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.8rem;
  }

  .edu-type {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .edu-logo {
    height: 1.35rem;
    width: auto;
    max-width: 10rem;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }

  .edu-degree {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--ink);
    line-height: 1.1;
    letter-spacing: -0.01em;
    margin-bottom: 0.5rem;
  }

  .edu-school {
    font-size: 0.88rem;
    color: var(--ink2);
    margin-bottom: 0.3rem;
  }

  .edu-period {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink4);
    margin-bottom: 1.2rem;
  }

  .edu-gpa-badge {
    display: inline-block;
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    background: var(--gold-pale);
    color: var(--gold);
    border: 1px solid rgba(160, 124, 42, 0.3);
    padding: 0.25rem 0.7rem;
    margin-bottom: 1rem;
  }

  .edu-courses {
    font-size: 0.82rem;
    color: var(--ink3);
    line-height: 1.75;
  }

  @media (max-width: 900px) {
    .edu-two-col {
      grid-template-columns: 1fr;
    }
  }
</style>
