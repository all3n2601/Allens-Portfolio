<script lang="ts">
  import { site } from '$lib/data/site';
  import BrandMark from '$lib/components/BrandMark.svelte';

  let menuOpen = $state(false);
  const closeMenu = () => (menuOpen = false);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && closeMenu()} />

<nav aria-label="Primary">
  <a class="nav-brand" href="#hero" onclick={closeMenu}>
    <BrandMark size={36} />
    <span class="nav-brand-text">
      <span class="nav-brand-shipped">{site.brandShort}</span>
      <span class="nav-brand-by">{site.role}</span>
    </span>
  </a>
  <ul class="nav-links" id="nav-menu" class:open={menuOpen}>
    <li><a href="#data-work" onclick={closeMenu}>Data Work</a></li>
    <li><a href="#ai-work" onclick={closeMenu}>AI Work</a></li>
    <li><a href="#skills" onclick={closeMenu}>Skills</a></li>
    <li><a href="#about" onclick={closeMenu}>About</a></li>
    <li><a href="#experience" onclick={closeMenu}>Experience</a></li>
    <li><a href="#projects" onclick={closeMenu}>Projects</a></li>
    <li><a href="#contact" onclick={closeMenu}>Contact</a></li>
    <li class="nav-menu-resume"><a href={site.resumePath} download onclick={closeMenu}>Resume ↓</a></li>
  </ul>
  <a class="nav-cta" href={site.resumePath} download>Resume ↓</a>
  <button
    type="button"
    class="nav-toggle"
    aria-expanded={menuOpen}
    aria-controls="nav-menu"
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    onclick={() => (menuOpen = !menuOpen)}
  >
    <span class="nav-toggle-bars" aria-hidden="true"></span>
  </button>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--paper);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2.5rem;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: inherit;
  }

  .nav-brand-text {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
  }

  .nav-brand-shipped {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--ink);
    letter-spacing: -0.01em;
  }

  .nav-brand-by {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--ink3);
    margin-top: 0.15rem;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink3);
    text-decoration: none;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .nav-links a:hover {
    color: var(--red);
  }

  .nav-cta {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--paper);
    background: var(--ink);
    padding: 0.5rem 1.2rem;
    text-decoration: none;
    transition: background 0.2s;
  }

  .nav-cta:hover {
    background: var(--red);
  }

  .nav-toggle,
  .nav-menu-resume {
    display: none;
  }

  .nav-toggle {
    width: 44px;
    height: 44px;
    margin-left: 0.5rem;
    background: transparent;
    border: 1px solid var(--border);
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }

  .nav-toggle-bars,
  .nav-toggle-bars::before,
  .nav-toggle-bars::after {
    display: block;
    width: 18px;
    height: 2px;
    background: var(--ink);
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .nav-toggle-bars {
    position: relative;
  }

  .nav-toggle-bars::before,
  .nav-toggle-bars::after {
    content: '';
    position: absolute;
    left: 0;
  }

  .nav-toggle-bars::before {
    top: -6px;
  }

  .nav-toggle-bars::after {
    top: 6px;
  }

  .nav-toggle[aria-expanded='true'] .nav-toggle-bars {
    background: transparent;
  }

  .nav-toggle[aria-expanded='true'] .nav-toggle-bars::before {
    transform: translateY(6px) rotate(45deg);
  }

  .nav-toggle[aria-expanded='true'] .nav-toggle-bars::after {
    transform: translateY(-6px) rotate(-45deg);
  }

  @media (max-width: 900px) {
    nav {
      padding: 1rem 1.5rem;
    }

    .nav-toggle {
      display: inline-flex;
    }

    .nav-cta {
      display: none;
    }

    .nav-links {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 0;
      padding: 0.5rem 1.5rem 1rem;
      background: var(--paper);
      border-bottom: 1px solid var(--border);
    }

    .nav-links.open {
      display: flex;
    }

    .nav-links li + li {
      border-top: 1px solid var(--border);
    }

    .nav-links a {
      display: flex;
      align-items: center;
      min-height: 48px;
    }

    .nav-menu-resume {
      display: list-item;
    }
  }

  @media (max-width: 600px) {
    .nav-brand {
      gap: 0.5rem;
    }

    .nav-brand-by {
      max-width: 120px;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
    }
  }
</style>
