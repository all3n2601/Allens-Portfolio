<script lang="ts">
  import { site } from '$lib/data/site';
  import BrandMark from '$lib/components/BrandMark.svelte';
  import PixelPortrait from '$lib/components/PixelPortrait.svelte';

  const heroStats = [
    { num: '256M', label: 'Feedback Rows · SharkNinja' },
    { num: '12+', label: 'Survey Formats Standardized' },
    { num: '2,722', label: 'Records · TransitForge Run' },
    { num: '18', label: 'TransitForge Tests' }
  ] as const;
</script>

<section id="hero">
  <div class="hero-left">
    <div class="hero-mark reveal">
      <BrandMark size={52} variant="full" />
    </div>
    <p class="hero-label">{site.monogram} · {site.brandName} · {site.role}</p>
    <h1 class="hero-name">
      {site.firstName}<br />
      <em>{site.lastName}.</em>
    </h1>
    <p class="hero-desc">
      I build <strong>reliable data pipelines and analytics</strong> — from SQL transformations in
      <strong>Snowflake and dbt</strong> to lakehouse workflows with <strong>Airflow and PySpark</strong>.
      M.S. Computer Science student at <strong>Northeastern University</strong>, with applied AI and analytics experience at <strong>SharkNinja</strong>.
    </p>
    <div class="hero-btns">
      <a class="btn-filled" href="#data-work">Explore Data Work</a>
      <a class="btn-ghost" href={site.resumePath} download>Download Resume ↓</a>
      <a class="btn-ghost" href="#contact">Say Hello</a>
    </div>
  </div>

  <div class="hero-right">
    <PixelPortrait />
    <div class="hero-right-content">
      <div class="hero-stat-row">
        {#each heroStats as s}
          <div class="hstat">
            <div class="hstat-num">{s.num}</div>
            <div class="hstat-label">{s.label}</div>
          </div>
        {/each}
      </div>
      <div class="hero-availability">
        <span class="avail-dot"></span>
        Seeking Data Engineer / Data Analyst roles · Jan 2027 co-ops &amp; Dec 2027 full-time
      </div>
    </div>
  </div>
</section>

<style>
  #hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 64px;
  }

  .hero-left {
    padding: 6rem 3rem 4rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid var(--border);
  }

  .hero-right {
    padding: 6rem 2.5rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: var(--paper2);
    position: relative;
    overflow: hidden;
  }

  .hero-right::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(900px 700px at 80% 20%, rgba(11, 110, 106, 0.07), transparent 60%),
      radial-gradient(800px 600px at 25% 80%, rgba(26, 58, 92, 0.06), transparent 55%),
      linear-gradient(to top, rgba(244, 246, 248, 0.6), rgba(244, 246, 248, 0) 55%);
    pointer-events: none;
    z-index: 0;
  }

  .hero-label {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--red);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }

  .hero-mark {
    margin-bottom: 1.75rem;
    width: fit-content;
  }

  .hero-name {
    font-family: var(--serif);
    font-weight: 900;
    font-size: clamp(3rem, 7vw, 6rem);
    line-height: 1;
    color: var(--ink);
    letter-spacing: -0.02em;
  }

  .hero-name em {
    font-style: italic;
    color: var(--red);
  }

  .hero-desc {
    font-size: 1rem;
    color: var(--ink2);
    margin-top: 2rem;
    max-width: 420px;
    line-height: 1.75;
  }

  .hero-desc strong {
    color: var(--ink);
    font-weight: 600;
  }

  .hero-btns {
    display: flex;
    gap: 1rem;
    margin-top: 2.5rem;
    flex-wrap: wrap;
  }

  .btn-filled {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    background: var(--ink);
    color: var(--paper);
    padding: 0.65rem 1.6rem;
    text-decoration: none;
    transition: background 0.2s;
  }

  .btn-filled:hover {
    background: var(--red);
  }

  .btn-ghost {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    border: 1px solid var(--border);
    color: var(--ink2);
    padding: 0.65rem 1.6rem;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s;
  }

  .btn-ghost:hover {
    border-color: var(--ink);
    color: var(--ink);
  }

  .hero-right-content {
    position: relative;
    z-index: 1;
    animation: rise 0.5s 0.45s ease both;
  }

  .hero-stat-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
    margin-bottom: 2rem;
    overflow: hidden;
  }

  .hstat {
    background: var(--paper);
    padding: 1.2rem;
  }

  .hstat-num {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--ink);
    line-height: 1;
  }

  .hstat-label {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink3);
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 0.3rem;
  }

  .hero-availability {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink3);
    letter-spacing: 0.08em;
    padding: 0.8rem 1rem;
    background: var(--paper);
    border: 1px solid var(--border);
  }

  .avail-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #2ea04d;
    flex-shrink: 0;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.7);
    }
  }

  .hero-left > * {
    animation: rise 0.5s ease both;
  }

  .hero-label {
    animation-delay: 0.05s;
  }

  .hero-name {
    animation-delay: 0.15s;
  }

  .hero-desc {
    animation-delay: 0.25s;
  }

  .hero-btns {
    animation-delay: 0.35s;
  }

  @media (max-width: 900px) {
    #hero {
      grid-template-columns: 1fr;
    }

    .hero-right {
      display: none;
    }

    .hero-left {
      padding: 6rem 1.5rem 4rem;
      border-right: none;
    }
  }
</style>
