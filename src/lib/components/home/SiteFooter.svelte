<script lang="ts">
  import { site } from '$lib/data/site';
  import BrandMark from '$lib/components/BrandMark.svelte';
</script>

<footer>
  <div class="footer-brand-lockup">
    <BrandMark size={28} />
    <span class="footer-sig">{site.brandName}</span>
  </div>
  <span class="footer-note">{site.location} · © 2026</span>
</footer>

<style>
  footer {
    background: #0e1116;
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(244, 246, 248, 0.08);
  }

  .footer-brand-lockup {
    display: flex;
    align-items: center;
    gap: 0.65rem;
  }

  .footer-sig {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    color: rgba(244, 246, 248, 0.45);
  }

  .footer-note {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: rgba(244, 246, 248, 0.2);
    letter-spacing: 0.1em;
  }

  @media (max-width: 900px) {
    footer {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }
</style>
