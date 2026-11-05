<script lang="ts">
  import { honors } from '$lib/data/resume';
  import SectionHeader from './SectionHeader.svelte';

  function honorClass(cat: (typeof honors)[number]['category']) {
    if (cat === 'Hackathon') return 'cat-hack';
    if (cat === 'Publication') return 'cat-pub';
    return 'cat-pat';
  }
</script>

<section id="honors">
  <div class="section-wrap">
    <SectionHeader num="09" title="Honors &" accent="Publications" />

    <div class="honors-scroll">
    <table class="honors-table">
      <thead>
        <tr>
          <th style="width:36px;"></th>
          <th style="width:110px;">Category</th>
          <th>Title</th>
          <th>Venue / Detail</th>
        </tr>
      </thead>
      <tbody>
        {#each honors as h}
          <tr class="reveal">
            <td>{h.icon}</td>
            <td><span class="honor-cat {honorClass(h.category)}">{h.category}</span></td>
            <td>
              <span class="honor-title-text">{h.title}</span>
              <span class="honor-venue-text">{h.subtitle}</span>
            </td>
            <td style="font-family:var(--mono);font-size: 0.75rem;color:var(--ink3);">{h.venue}</td>
          </tr>
        {/each}
      </tbody>
    </table>
    </div>
  </div>
</section>

<style>
  #honors {
    background: var(--paper2);
  }

  .honors-scroll {
    overflow-x: auto;
  }

  .honors-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--border);
  }

  .honors-table thead tr {
    border-bottom: 2px solid var(--ink);
  }

  .honors-table th {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--ink4);
    padding: 0.8rem 1rem;
    text-align: left;
    background: var(--paper2);
  }

  .honors-table tbody tr {
    border-bottom: 1px solid var(--border);
    transition: background 0.15s;
  }

  .honors-table tbody tr:hover {
    background: var(--paper);
  }

  .honors-table td {
    padding: 1.1rem 1rem;
    font-size: 0.88rem;
    color: var(--ink2);
    vertical-align: middle;
  }

  .honors-table td:first-child {
    font-size: 1.2rem;
    width: 40px;
  }

  .honor-cat {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.2rem 0.55rem;
  }

  .cat-hack {
    background: var(--gold-pale);
    color: var(--gold);
  }

  .cat-pub {
    background: var(--blue-pale);
    color: var(--blue);
  }

  .cat-pat {
    background: var(--red-pale);
    color: var(--red);
  }

  .honor-title-text {
    font-weight: 600;
    color: var(--ink);
    display: block;
    margin-bottom: 0.15rem;
  }

  .honor-venue-text {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink4);
  }

  @media (max-width: 600px) {
    .honors-table {
      font-size: 0.82rem;
    }
  }
</style>
