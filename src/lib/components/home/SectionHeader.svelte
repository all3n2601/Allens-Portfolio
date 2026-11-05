<script lang="ts">
  let { num, title, accent }: { num: string; title: string; accent: string } = $props();
</script>

<div class="ruled-header">
  <span class="section-num">{num}</span>
  <h2 class="section-heading">{title} <em>{accent}</em></h2>
</div>

<style>
  .ruled-header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 3.5rem;
  }

  .ruled-header::after {
    content: '';
    height: 1px;
    background: var(--border);
  }

  .section-num {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink4);
    letter-spacing: 0.2em;
  }

  .section-heading {
    font-family: var(--serif);
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3.2rem);
    color: var(--ink);
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .section-heading em {
    font-style: italic;
    color: var(--red);
  }

  @media (max-width: 600px) {
    .ruled-header {
      grid-template-columns: auto minmax(0, 1fr);
      gap: 1rem;
    }

    .section-heading {
      font-size: clamp(1.7rem, 7vw, 2.2rem);
    }
  }
</style>
