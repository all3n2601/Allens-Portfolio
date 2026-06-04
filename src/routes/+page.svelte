<script lang="ts">
  import { onMount } from 'svelte';
  import { site } from '$lib/data/site';
  import { projects } from '$lib/data/projects';
  import { shippedApps } from '$lib/data/shipped-apps';
  import { skillSections } from '$lib/data/skills';
  import { education, experiences, honors } from '$lib/data/resume';

  const heroStats = [
    { num: '3+', label: 'Years Building' },
    { num: '5', label: 'Products Shipped' },
    { num: '3×', label: 'Hackathon Podiums' },
    { num: '2', label: 'Research Outputs' }
  ] as const;

  const featured = projects.find((p) => p.slug === 'hifive') ?? projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p.slug !== featured?.slug);

  function honorClass(cat: (typeof honors)[number]['category']) {
    if (cat === 'Hackathon') return 'cat-hack';
    if (cat === 'Publication') return 'cat-pub';
    return 'cat-pat';
  }

  function projectAward(slug: string) {
    if (slug === 'collabcore') return { text: '🏆 Hackathon Winner', cls: 'award-gold' };
    if (slug === 'navx') return { text: '🥈 2nd / 72 Teams', cls: 'award-silver' };
    if (slug === 'hifive') return { text: '🏆 JailBreak Edu · SharkNinja', cls: 'award-gold' };
    return null;
  }

  function githubPreviewUrl(repo?: string) {
    if (!repo) return null;
    const normalized = repo.replace(/^https?:\/\/github\.com\//, '').replace(/\/+$/, '');
    if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(normalized)) return null;
    return `https://opengraph.githubassets.com/1/${normalized}`;
  }

  function appStatusClass(status: (typeof shippedApps)[number]['status']) {
    if (status === 'Live') return 'app-status-live';
    if (status === 'Beta') return 'app-status-beta';
    return 'app-status-soon';
  }

  function displayHost(url: string) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add('visible');
        }
      },
      { threshold: 0.08 }
    );

    const els = Array.from(document.querySelectorAll('.reveal'));
    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  });
</script>

<!-- NAV -->
<nav>
  <a class="nav-wordmark" href="#hero">Shipped by {site.firstName}</a>
  <ul class="nav-links">
    <li><a href="#apps">Apps</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a class="nav-cta" href={`mailto:${site.email}`}>Hire Me</a>
</nav>

<!-- HERO -->
<section id="hero">
  <div class="hero-left">
    <p class="hero-label">{site.role} · {site.location}</p>
    <h1 class="hero-name">
      {site.firstName}<br />
      <em>{site.lastName}.</em>
    </h1>
    <p class="hero-desc">
      Product studio and portfolio for apps I ship to production — from
      <strong>backend infrastructure and AI pipelines</strong> to <strong>mobile experiences</strong>.
      Graduate student at <strong>Northeastern University</strong>, incoming at <strong>SharkNinja</strong> (Summer 2026).
    </p>
    <div class="hero-btns">
      <a class="btn-filled" href="#apps">Shipped Apps</a>
      <a class="btn-ghost" href="#projects">View Work</a>
      <a class="btn-ghost" href="#contact">Say Hello</a>
    </div>
  </div>

  <div class="hero-right">
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
        Available for Summer 2026 internships &amp; co-ops
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- SHIPPED APPS -->
<section id="apps">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">01</span>
      <h2 class="section-heading">Shipped <em>Apps</em></h2>
    </div>

    <p class="apps-intro reveal">
      Products shipping under <strong>shippedbyallen.com</strong> — each on its own subdomain, deployed independently.
    </p>

    <div class="apps-grid">
      {#each shippedApps as app (app.slug)}
        <article class="app-card reveal {app.url ? 'is-live' : 'is-soon'}">
          <div class="app-card-top">
            <div class="app-icon" aria-hidden="true">
              <i class={app.icon}></i>
            </div>
            <span class="app-status {appStatusClass(app.status)}">{app.status}</span>
          </div>

          <h3 class="app-name">{app.name}</h3>
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
            {#if app.projectSlug}
              <a class="app-case-study" href="#projects">Case study</a>
            {/if}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- ABOUT -->
<section id="about">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">02</span>
      <h2 class="section-heading">About <em>Me</em></h2>
    </div>

    <div class="about-layout">
      <div class="about-body">
        <p class="about-pull">
          "I care about systems that work in production — not just demos. Fast APIs, clean data models, and code that the next person can actually read."
        </p>
        <p>
          I'm a <strong>Computer Science graduate student at Northeastern University</strong> (GPA 3.66/4.0) with experience spanning full-stack web, native
          mobile (Flutter/iOS/Android), and ML-adjacent pipelines. My background combines academic rigour with hands-on production engineering.
        </p>
        <p>
          Currently a <strong>Graduate Research Assistant</strong> on the Food ALERT project, building donation lifecycle infrastructure and automated fraud
          detection deployed at <a href="https://foodalertgo.com" target="_blank" rel="noreferrer" style="color:var(--red);">foodalertgo.com</a>. This summer I'm
          at <strong>SharkNinja</strong> building VoC intelligence tooling after winning <strong>SharkNinja JailBreak Edu</strong>.
        </p>
        <p>
          Before Northeastern, I spent a year as a <strong>Software Engineer at Siga Infotech</strong> shipping a production POS system for UK restaurant chains,
          and interned at <strong>IIT Guwahati</strong> building a P2P solar energy trading platform.
        </p>
      </div>

      <div>
        <table class="fact-table">
          <tbody>
            <tr><td>Location</td><td>{site.location}</td></tr>
            <tr><td>Degree</td><td>M.S. Computer Science, Northeastern</td></tr>
            <tr><td>Email</td><td><a href={`mailto:${site.email}`}>{site.email}</a></td></tr>
            <tr><td>Phone</td><td><a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a></td></tr>
            <tr><td>GitHub</td><td><a href="https://github.com/all3n2601" target="_blank" rel="noreferrer">github.com/all3n2601</a></td></tr>
            <tr><td>LinkedIn</td><td><a href="https://www.linkedin.com/in/allen-febi/" target="_blank" rel="noreferrer">in/allen-febi</a></td></tr>
            <tr><td>Site</td><td><a href={site.domain} target="_blank" rel="noreferrer">shippedbyallen.com</a></td></tr>
            <tr><td>Live</td><td><a href="https://foodalertgo.com" target="_blank" rel="noreferrer">foodalertgo.com</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- SKILLS -->
<section id="skills">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">03</span>
      <h2 class="section-heading">Technical <em>Skills</em></h2>
    </div>

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

<div class="sep"></div>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">04</span>
      <h2 class="section-heading">Work <em>Experience</em></h2>
    </div>

    {#each experiences as exp}
      <div class="exp-entry reveal">
        <div class="exp-aside">
          <div class="exp-period">{exp.period}</div>
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

<div class="sep"></div>

<!-- PROJECTS -->
<section id="projects">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">05</span>
      <h2 class="section-heading">Selected <em>Projects</em></h2>
    </div>

    <div class="projects-masonry">
      {#if featured}
        <div class="proj-card featured reveal">
          <span class="proj-award award-gold">🏆 SharkNinja JailBreak Edu</span>
          <div class="proj-num">05</div>
          <div class="proj-name">{featured.title}</div>
          <div class="proj-subtitle">VoC Intelligence Platform · SharkNinja</div>
          {#if githubPreviewUrl(featured.githubRepo)}
            <img
              class="proj-preview featured-preview"
              src={githubPreviewUrl(featured.githubRepo)}
              alt={`${featured.title} GitHub preview`}
              loading="lazy"
              decoding="async"
            />
          {/if}
          <p class="proj-desc">{featured.summary}</p>
          <div class="proj-tech">
            {#each featured.tags as t}
              <span class="tech-chip">{t}</span>
            {/each}
          </div>
          <div class="proj-footer">
            <span class="proj-link">NDA — Portfolio ref only</span>
          </div>
        </div>
      {/if}

      {#each rest as p, i (p.slug)}
        <div class="proj-card reveal">
          {#if projectAward(p.slug)}
            <div class="proj-award {projectAward(p.slug)?.cls}">{projectAward(p.slug)?.text}</div>
          {/if}
          <div class="proj-num">{String(i + 1).padStart(2, '0')}</div>
          <div class="proj-name">{p.title}</div>
          <div class="proj-subtitle">{p.highlights?.[0] ?? p.category}</div>
          {#if githubPreviewUrl(p.githubRepo)}
            <img
              class="proj-preview"
              src={githubPreviewUrl(p.githubRepo)}
              alt={`${p.title} GitHub preview`}
              loading="lazy"
              decoding="async"
            />
          {/if}
          <p class="proj-desc">{p.summary}</p>
          <div class="proj-tech">
            {#each p.tags as t}
              <span class="tech-chip">{t}</span>
            {/each}
          </div>
          <div class="proj-footer">
            {#if p.links?.length}
              {#each p.links as l}
                <a class="proj-link" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel={l.href.startsWith('http') ? 'noreferrer' : undefined}>
                  {l.label} ↗
                </a>
              {/each}
            {:else}
              <span class="proj-link">NDA — Portfolio ref only</span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- EDUCATION -->
<section id="education">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">06</span>
      <h2 class="section-heading">Academic <em>Background</em></h2>
    </div>

    <div class="edu-two-col">
      {#each education as e}
        <div class="edu-block reveal">
          <div class="edu-type">{e.type}</div>
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

<div class="sep"></div>

<!-- HONORS -->
<section id="honors">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">07</span>
      <h2 class="section-heading">Honors &amp; <em>Publications</em></h2>
    </div>

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
            <td style="font-family:var(--mono);font-size:0.7rem;color:var(--ink3);">{h.venue}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" style="padding:0;">
  <div class="contact-wrap">
    <div class="contact-grid">
      <div>
        <h2 class="contact-headline">
          Let's<br />Make<br /><em>Something.</em>
        </h2>
        <p class="contact-sub">
          Open to SWE co-ops (Jan 2027), full-time roles (Dec 2027), and interesting side projects. Best reached by email.
        </p>
      </div>

      <ul class="contact-list">
        <li class="contact-item">
          <a href={`mailto:${site.email}`}>
            <div class="ci-left"><span class="ci-type">Email</span><span class="ci-val">{site.email}</span></div>
            <span class="ci-arrow">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href="https://www.linkedin.com/in/allen-febi/" target="_blank" rel="noreferrer">
            <div class="ci-left"><span class="ci-type">LinkedIn</span><span class="ci-val">linkedin.com/in/allen-febi</span></div>
            <span class="ci-arrow">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href="https://github.com/all3n2601" target="_blank" rel="noreferrer">
            <div class="ci-left"><span class="ci-type">GitHub</span><span class="ci-val">github.com/all3n2601</span></div>
            <span class="ci-arrow">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href={site.domain} target="_blank" rel="noreferrer">
            <div class="ci-left"><span class="ci-type">Site</span><span class="ci-val">shippedbyallen.com</span></div>
            <span class="ci-arrow">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href={`tel:${site.phoneE164}`}>
            <div class="ci-left"><span class="ci-type">Phone</span><span class="ci-val">{site.phoneDisplay}</span></div>
            <span class="ci-arrow">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

<footer>
  <span class="footer-sig">{site.fullName}</span>
  <span class="footer-note">{site.location} · © 2026</span>
</footer>

<style>
  /* ── NAV ── */
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

  .nav-wordmark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1.1rem;
    color: var(--ink);
    text-decoration: none;
    letter-spacing: 0.01em;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    font-family: var(--mono);
    font-size: 0.7rem;
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
    font-size: 0.7rem;
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

  /* ── HERO ── */
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
    background:
      radial-gradient(900px 700px at 80% 20%, rgba(193, 57, 29, 0.06), transparent 60%),
      radial-gradient(800px 600px at 25% 80%, rgba(29, 58, 110, 0.06), transparent 55%),
      linear-gradient(to top, rgba(245, 242, 235, 0.55), rgba(245, 242, 235, 0) 55%);
    pointer-events: none;
    z-index: 0;
  }

  .hero-right::before {
    content: '';
    position: absolute;
    top: -2rem;
    right: -1rem;
    width: clamp(320px, 42vw, 560px);
    height: clamp(320px, 42vw, 560px);
    background-image: url('/images/allen-portrait-duotone.webp');
    background-size: cover;
    background-position: center;
    border-radius: 999px;
    opacity: 0.18;
    filter: contrast(1.08) saturate(0.6);
    mix-blend-mode: multiply;
    pointer-events: none;
    user-select: none;
    transform: rotate(-6deg);
  }

  .hero-label {
    font-family: var(--mono);
    font-size: 0.68rem;
    color: var(--red);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
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
    font-size: 0.7rem;
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
    font-size: 0.7rem;
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
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(26, 23, 18, 0.08), 0 2px 0 rgba(26, 23, 18, 0.05);
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
    font-size: 0.62rem;
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
    font-size: 0.7rem;
    color: var(--ink3);
    letter-spacing: 0.08em;
    padding: 0.8rem 1rem;
    background: var(--paper);
    border: 1px solid var(--border);
    border-radius: 14px;
    box-shadow: 0 18px 45px rgba(26, 23, 18, 0.06), 0 2px 0 rgba(26, 23, 18, 0.04);
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

  /* ── SECTION WRAPPER ── */
  .section-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2.5rem;
  }

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
    font-size: 0.62rem;
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

  /* ── SHIPPED APPS ── */
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

  .apps-intro strong {
    color: var(--ink);
    font-weight: 600;
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
    width: 2.75rem;
    height: 2.75rem;
    display: grid;
    place-items: center;
    border: 1px solid var(--border);
    background: var(--paper);
    color: var(--red);
    font-size: 1.1rem;
  }

  .app-status {
    font-family: var(--mono);
    font-size: 0.58rem;
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
    font-size: 0.58rem;
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
    font-size: 0.65rem;
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
    font-size: 0.65rem;
    letter-spacing: 0.06em;
    color: var(--ink4);
  }

  .app-case-study {
    font-family: var(--mono);
    font-size: 0.62rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--ink3);
    text-decoration: none;
    margin-left: auto;
  }

  .app-case-study:hover {
    color: var(--red);
  }

  /* ── ABOUT ── */
  #about {
    background: var(--paper2);
  }

  .about-layout {
    display: grid;
    grid-template-columns: 5fr 4fr;
    gap: 5rem;
    align-items: start;
  }

  .about-pull {
    font-family: var(--serif);
    font-size: 1.45rem;
    font-style: italic;
    color: var(--ink2);
    line-height: 1.55;
    border-left: 3px solid var(--red);
    padding-left: 1.5rem;
    margin-bottom: 2rem;
  }

  .about-body p {
    font-size: 0.95rem;
    color: var(--ink2);
    line-height: 1.8;
    margin-bottom: 1.1rem;
  }

  .about-body strong {
    color: var(--ink);
    font-weight: 600;
  }

  .fact-table {
    width: 100%;
    border-collapse: collapse;
  }

  .fact-table tr {
    border-bottom: 1px solid var(--border);
  }

  .fact-table td {
    padding: 0.8rem 0;
    vertical-align: top;
    font-size: 0.88rem;
  }

  .fact-table td:first-child {
    font-family: var(--mono);
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--ink4);
    width: 90px;
    padding-right: 1rem;
    padding-top: 0.95rem;
  }

  .fact-table td:last-child {
    color: var(--ink2);
  }

  .fact-table a {
    color: var(--blue);
    text-decoration: none;
  }

  .fact-table a:hover {
    text-decoration: underline;
  }

  /* ── SKILLS ── */
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
  .skill-col:nth-child(3n) {
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
    font-size: 0.68rem;
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

  /* ── EXPERIENCE ── */
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

  .exp-period {
    font-family: var(--mono);
    font-size: 0.68rem;
    color: var(--ink4);
    letter-spacing: 0.08em;
    line-height: 1.7;
    margin-bottom: 0.8rem;
  }

  .exp-now {
    display: inline-block;
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    background: var(--red);
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
    font-size: 0.7rem;
    color: var(--red);
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

  /* ── PROJECTS ── */
  #projects {
    background: var(--paper);
  }

  .projects-masonry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    border: 1px solid var(--border);
  }

  .proj-card {
    background: var(--paper);
    padding: 2rem;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: background 0.2s;
    position: relative;
  }

  .proj-card:hover {
    background: var(--paper2);
  }
  .proj-card:nth-child(3n) {
    border-right: none;
  }
  .proj-card:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  .proj-card.featured {
    grid-column: span 2;
    background: var(--ink);
    color: var(--paper);
  }
  .proj-card.featured:hover {
    background: #2a2720;
  }

  .proj-num {
    font-family: var(--mono);
    font-size: 0.6rem;
    color: var(--ink4);
    letter-spacing: 0.15em;
  }

  .proj-card.featured .proj-num {
    color: rgba(245, 242, 235, 0.35);
  }

  .proj-award {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.2rem 0.6rem;
  }

  .award-gold {
    background: var(--gold-pale);
    color: var(--gold);
    border: 1px solid rgba(160, 124, 42, 0.25);
  }

  .award-silver {
    background: var(--blue-pale);
    color: var(--blue);
    border: 1px solid rgba(29, 58, 110, 0.2);
  }

  .award-bronze {
    background: var(--red-pale);
    color: var(--red);
    border: 1px solid rgba(193, 57, 29, 0.2);
  }

  .proj-name {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .proj-card.featured .proj-name {
    color: var(--paper);
    font-size: 2rem;
  }

  .proj-subtitle {
    font-family: var(--mono);
    font-size: 0.68rem;
    color: var(--ink3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .proj-card.featured .proj-subtitle {
    color: rgba(245, 242, 235, 0.5);
  }

  .proj-desc {
    font-size: 0.85rem;
    color: var(--ink2);
    line-height: 1.7;
    flex: 1;
  }

  .proj-card.featured .proj-desc {
    color: rgba(245, 242, 235, 0.7);
    font-size: 0.95rem;
  }

  .proj-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .proj-preview {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    border: 1px solid var(--border);
    background: var(--paper2);
  }

  .proj-preview.featured-preview {
    border-color: rgba(245, 242, 235, 0.18);
    background: rgba(245, 242, 235, 0.06);
  }

  .tech-chip {
    font-family: var(--mono);
    font-size: 0.6rem;
    letter-spacing: 0.06em;
    padding: 0.2rem 0.55rem;
    border: 1px solid var(--border);
    color: var(--ink3);
    background: var(--paper2);
  }

  .proj-card.featured .tech-chip {
    border-color: rgba(245, 242, 235, 0.2);
    color: rgba(245, 242, 235, 0.5);
    background: rgba(245, 242, 235, 0.07);
  }

  .proj-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.8rem;
    border-top: 1px solid var(--border);
    margin-top: auto;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .proj-card.featured .proj-footer {
    border-color: rgba(245, 242, 235, 0.15);
  }

  .proj-link {
    font-family: var(--mono);
    font-size: 0.65rem;
    color: var(--ink3);
    text-decoration: none;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .proj-link:hover {
    color: var(--red);
  }
  .proj-card.featured .proj-link {
    color: rgba(245, 242, 235, 0.4);
  }
  .proj-card.featured .proj-link:hover {
    color: var(--paper);
  }

  /* ── EDUCATION ── */
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

  .edu-type {
    font-family: var(--mono);
    font-size: 0.62rem;
    color: var(--red);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 0.8rem;
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
    font-size: 0.68rem;
    color: var(--ink4);
    margin-bottom: 1.2rem;
  }

  .edu-gpa-badge {
    display: inline-block;
    font-family: var(--mono);
    font-size: 0.68rem;
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

  /* ── HONORS ── */
  #honors {
    background: var(--paper2);
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
    font-size: 0.62rem;
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
    font-size: 0.62rem;
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
    font-size: 0.68rem;
    color: var(--ink4);
  }

  /* ── CONTACT ── */
  #contact {
    background: var(--ink);
    color: var(--paper);
  }

  .contact-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 6rem 2.5rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    align-items: start;
  }

  .contact-headline {
    font-family: var(--serif);
    font-weight: 900;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--paper);
  }

  .contact-headline em {
    font-style: italic;
    color: rgba(245, 242, 235, 0.35);
  }

  .contact-sub {
    font-size: 0.95rem;
    color: rgba(245, 242, 235, 0.55);
    margin-top: 1.5rem;
    line-height: 1.7;
  }

  .contact-list {
    list-style: none;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.1rem 0;
    border-bottom: 1px solid rgba(245, 242, 235, 0.1);
  }

  .contact-item a {
    display: contents;
    text-decoration: none;
    color: inherit;
  }

  .ci-left {
    display: flex;
    align-items: baseline;
    gap: 1.2rem;
  }

  .ci-type {
    font-family: var(--mono);
    font-size: 0.62rem;
    color: rgba(245, 242, 235, 0.25);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    width: 65px;
    flex-shrink: 0;
  }

  .ci-val {
    font-size: 0.9rem;
    color: rgba(245, 242, 235, 0.75);
    transition: color 0.2s;
  }

  .contact-item:hover .ci-val {
    color: var(--paper);
  }

  .ci-arrow {
    font-size: 1rem;
    color: rgba(245, 242, 235, 0.2);
    transition: color 0.2s, transform 0.2s;
  }

  .contact-item:hover .ci-arrow {
    transform: translate(3px, -3px);
    color: var(--paper);
  }

  /* ── FOOTER ── */
  footer {
    background: #0d0c0a;
    padding: 1.5rem 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(245, 242, 235, 0.08);
  }

  .footer-sig {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    color: rgba(245, 242, 235, 0.3);
  }

  .footer-note {
    font-family: var(--mono);
    font-size: 0.62rem;
    color: rgba(245, 242, 235, 0.2);
    letter-spacing: 0.1em;
  }

  /* ── ANIMATIONS ── */
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

  /* ── RESPONSIVE ── */
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
    .about-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
    .skills-magazine {
      grid-template-columns: 1fr 1fr;
    }
    .projects-masonry {
      grid-template-columns: 1fr 1fr;
    }
    .proj-card.featured {
      grid-column: span 2;
    }
    .edu-two-col {
      grid-template-columns: 1fr;
    }
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .section-wrap {
      padding: 4rem 1.5rem;
    }
    nav {
      padding: 1rem 1.5rem;
    }
    .nav-links {
      display: none;
    }
    .contact-wrap {
      padding: 4rem 1.5rem;
    }
    footer {
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    .skills-magazine {
      grid-template-columns: 1fr;
    }
    .projects-masonry {
      grid-template-columns: 1fr;
    }
    .proj-card.featured {
      grid-column: span 1;
    }
    .honors-table {
      font-size: 0.82rem;
    }
    .exp-entry {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
