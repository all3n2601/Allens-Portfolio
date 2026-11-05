<script lang="ts">
  import { skillSections } from '$lib/data/skills';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="skills">
  <div class="section-wrap">
    <SectionHeader num="05" title="Technical" accent="Skills" />

    <div class="skills-magazine">
      {#each skillSections as section}
        <div class="skill-col reveal">
          <div class="skill-col-head">{section.title}</div>
          <div class="skill-pill-list">
            {#each section.skills as s}
              <span class="skill-pill">{s}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  #skills {
    background: var(--paper);
  }

  .skills-magazine {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--border);
  }

  .skill-col {
    padding: 2rem;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .skill-col:first-child {
    grid-column: 1 / -1;
    border-right: none;
  }

  .skill-col:nth-child(3n + 1) {
    border-right: none;
  }

  .skill-col:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  .skill-col-head {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--ink);
    margin-bottom: 1rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid var(--ink);
  }

  .skill-pill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .skill-pill {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: var(--ink2);
    border: 1px solid var(--border);
    padding: 0.25rem 0.65rem;
    background: var(--paper);
    transition: all 0.15s;
  }

  .skill-pill:hover {
    background: var(--ink);
    color: var(--paper);
    border-color: var(--ink);
  }

  @media (max-width: 900px) {
    .skills-magazine {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 600px) {
    .skills-magazine {
      grid-template-columns: 1fr;
    }
  }
</style>
