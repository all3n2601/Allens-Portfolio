<script lang="ts">
  import { onMount } from 'svelte';
  import { site } from '$lib/data/site';
  import { projects } from '$lib/data/projects';
  import { shippedApps } from '$lib/data/shipped-apps';
  import { skillSections } from '$lib/data/skills';
  import { education, experiences, honors } from '$lib/data/resume';
  import BrandMark from '$lib/components/BrandMark.svelte';
  import PixelPortrait from '$lib/components/PixelPortrait.svelte';

  const heroStats = [
    { num: '256M', label: 'Feedback Rows · SharkNinja' },
    { num: '12+', label: 'Survey Formats Standardized' },
    { num: '2,722', label: 'Records · TransitForge Run' },
    { num: '18', label: 'TransitForge Tests' }
  ] as const;

  const dataProjects = projects.filter((p) => p.caseStudy);
  const supportingSlugs = ['food-alert', 'collabcore', 'restaurant-pos', 'respulse', 'arrival', 'navx'];
  const rest = supportingSlugs.flatMap((slug) => projects.filter((p) => p.slug === slug && p.image && p.links?.length));
  const showcaseApps = shippedApps;

  let menuOpen = $state(false);
  const closeMenu = () => (menuOpen = false);

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

  function projectPreviewSrc(project: (typeof projects)[number]) {
    return project.image ?? githubPreviewUrl(project.githubRepo);
  }

  function projectPreviewAlt(project: (typeof projects)[number]) {
    return project.imageAlt ?? `${project.title} project preview`;
  }

  function appStatusClass(status: (typeof shippedApps)[number]['status']) {
    if (status === 'Live') return 'app-status-live';
    if (status === 'Beta') return 'app-status-beta';
    return 'app-status-soon';
  }

  function appPrimaryHref(app: (typeof shippedApps)[number]) {
    return app.detailHref ?? app.url ?? app.plannedUrl ?? null;
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

<svelte:head>
  <title>Shipped by Allen — Allen Febi | Data Engineering &amp; Analytics</title>
  <meta name="description" content="Allen Febi’s data engineering and analytics portfolio: Snowflake, dbt, SQL, Airflow, PySpark, data quality, and production lakehouse pipelines." />
  <meta name="keywords" content="Data Engineer, Data Analyst, SQL, T-SQL, Snowflake, dbt, Airflow, PySpark, Spark, Apache Iceberg, Parquet, ETL, ELT, Data Modeling, Analytics, Northeastern University" />
  <link rel="canonical" href="https://shippedbyallen.com/" />

  <meta property="og:title" content="Allen Febi — Data Engineering &amp; Analytics" />
  <meta property="og:description" content="Snowflake/dbt consumer analytics and Airflow/PySpark lakehouse pipelines, with production data quality experience at SharkNinja." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://shippedbyallen.com/" />
  <meta property="og:image" content="https://shippedbyallen.com/og-card.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Allen Febi — Data Engineering &amp; Analytics, Shipped by Allen" />
  <meta property="og:site_name" content="Shipped by Allen" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Allen Febi — Data Engineering &amp; Analytics" />
  <meta name="twitter:description" content="Northeastern M.S. CS student focused on data engineering and analytics. SQL, Snowflake, dbt, Airflow, and PySpark." />
  <meta name="twitter:image" content="https://shippedbyallen.com/og-card.png" />
</svelte:head>

<a class="skip-link" href="#main">Skip to main content</a>

<!-- NAV -->
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

<main id="main">
<!-- HERO -->
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

<div class="sep"></div>

<!-- DATA WORK -->
<section id="data-work">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">01</span>
      <h2 class="section-heading">Featured <em>Data Work</em></h2>
    </div>
    <div class="data-grid">
      {#each dataProjects as p, i (p.slug)}
        <article class="data-card reveal" id={p.slug}>
          <div class="data-card-top">
            <div class="proj-num">0{i + 1} · {p.category}</div>
            {#if p.logo}
              <img class="data-logo" src={p.logo} alt={p.logoAlt ?? ''} />
            {/if}
          </div>
          <h3 class="proj-name">{p.title}</h3>
          <p class="proj-desc">{p.summary}</p>
          <div class="proj-tech">
            {#each p.tags as tag}<span class="tech-chip">{tag}</span>{/each}
          </div>
          {#if p.caseStudy}
            <div class="case-study">
              <h4>Problem</h4><p>{p.caseStudy.problem}</p>
              <h4>Data sources</h4><p>{p.caseStudy.sources}</p>
              <h4>Pipeline architecture</h4>
              <ol class="pipeline" aria-label={`${p.title} pipeline stages`}>
                {#each p.caseStudy.architecture as stage}<li>{stage}</li>{/each}
              </ol>
              <h4>Data quality</h4><p>{p.caseStudy.quality}</p>
              <h4>Results</h4><p>{p.caseStudy.result}</p>
              {#if p.image}
                <figure class="proj-visual">
                  <img src={p.image} alt={projectPreviewAlt(p)} loading="lazy" decoding="async" />
                  <figcaption>{p.visualLabel}</figcaption>
                </figure>
              {/if}
              {#if p.caseStudy.next}<h4>What I’d improve</h4><p>{p.caseStudy.next}</p>{/if}
            </div>
          {/if}
          {#if p.stackIcons?.length}
            {@const stackTools = p.stackIcons.filter((icon) => icon.role !== 'data-source')}
            {@const dataSources = p.stackIcons.filter((icon) => icon.role === 'data-source')}
            <div class="stack-providers">
              {#if stackTools.length}
                <div class="stack-providers-group">
                  <div class="stack-providers-label">Stack</div>
                  <ul class="stack-providers-list">
                    {#each stackTools as icon}
                      <li class="stack-provider" title={icon.name}>
                        <img src={icon.src} alt="" aria-hidden="true" />
                        <span class="stack-provider-name">{icon.name}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
              {#if dataSources.length}
                <div class="stack-providers-group">
                  <div class="stack-providers-label">Data sources</div>
                  <ul class="stack-providers-list">
                    {#each dataSources as icon}
                      <li class="stack-provider is-source" title={icon.name}>
                        <img src={icon.src} alt="" aria-hidden="true" />
                        <span class="stack-provider-name">{icon.name}</span>
                      </li>
                    {/each}
                  </ul>
                </div>
              {/if}
            </div>
          {/if}
          <div class="proj-footer">
            {#each p.links ?? [] as link}
              <a class="proj-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>{link.label} ↗</a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- SHIPPED APPS -->
<section id="apps">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">02</span>
      <h2 class="section-heading">Shipped <em>Apps</em></h2>
    </div>

    <p class="apps-intro reveal">
      Products I’ve shipped or am actively building — live sites, public betas, and open-source repos.
    </p>

    <div class="apps-grid">
      {#each showcaseApps as app (app.slug)}
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

<div class="sep"></div>

<!-- ABOUT -->
<section id="about">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">03</span>
      <h2 class="section-heading">About <em>Me</em></h2>
    </div>

    <div class="about-layout">
      <div class="about-body">
        <p class="about-pull">
          "Reliable analytics starts with complete data, clear models, and pipelines you can explain."
        </p>
        <p>
          I'm a <strong>Computer Science graduate student at Northeastern University</strong> focused on <strong>data engineering and analytics</strong>.
          My work spans SQL transformations, data modeling, data quality, and production pipelines, backed by hands-on software engineering experience.
        </p>
        <p>
          Currently a <strong>Graduate Research Assistant</strong> on the Food ALERT project, leading application, data, and AWS production infrastructure
          deployed at <a href="https://foodalertgo.com" target="_blank" rel="noreferrer" style="color:var(--red);">foodalertgo.com</a>. At <strong>SharkNinja</strong>,
          I built consumer-intelligence data pipelines and analytics automation after earning the internship through <strong>SharkNinja JailBreak Edu</strong>.
        </p>
        <p>
          Before Northeastern, I worked as a <strong>part-time Software Engineer at Siga Infotech</strong> shipping a production POS system for UK restaurant chains,
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
      <span class="section-num">04</span>
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
      <span class="section-num">05</span>
      <h2 class="section-heading">Work <em>Experience</em></h2>
    </div>

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

<div class="sep"></div>

<!-- PROJECTS -->
<section id="projects">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">06</span>
      <h2 class="section-heading">Selected <em>Projects</em></h2>
    </div>

    <div class="projects-masonry">
      {#each rest as p, i (p.slug)}
        <article class="proj-card reveal" id={p.slug}>
          {#if projectAward(p.slug)}
            <div class="proj-award {projectAward(p.slug)?.cls}">{projectAward(p.slug)?.text}</div>
          {/if}
          <div class="proj-num">{String(i + 1).padStart(2, '0')}</div>
          <div class="proj-name">{p.title}</div>
          <div class="proj-subtitle">{p.highlights?.[0] ?? p.category}</div>
          {#if projectPreviewSrc(p)}
            <figure class="proj-visual">
              <img
                class:contain={p.imageFit === 'contain'}
                src={projectPreviewSrc(p) ?? undefined}
                alt={projectPreviewAlt(p)}
                loading="lazy"
                decoding="async"
              />
              {#if p.visualLabel}<figcaption>{p.visualLabel}</figcaption>{/if}
            </figure>
          {:else if p.visualNote}
            <div class="proj-visual-note">
              <span>{p.visualLabel}</span>
              <p>{p.visualNote}</p>
            </div>
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
        </article>
      {/each}
    </div>
  </div>
</section>

<div class="sep"></div>

<!-- EDUCATION -->
<section id="education">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">07</span>
      <h2 class="section-heading">Academic <em>Background</em></h2>
    </div>

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

<div class="sep"></div>

<!-- HONORS -->
<section id="honors">
  <div class="section-wrap">
    <div class="ruled-header">
      <span class="section-num">08</span>
      <h2 class="section-heading">Honors &amp; <em>Publications</em></h2>
    </div>

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

<!-- CONTACT -->
<section id="contact" style="padding:0;">
  <div class="contact-wrap">
    <div class="contact-grid">
      <div>
        <h2 class="contact-headline">
          Let's<br />Make<br /><em>Something.</em>
        </h2>
        <p class="contact-sub">
          Seeking Data Engineer and Data Analyst co-ops in Jan 2027 and full-time roles in Dec 2027. Let’s talk about pipelines, data quality, and analytics. Best reached by email.
        </p>
      </div>

      <ul class="contact-list">
        <li class="contact-item">
          <a href={site.resumePath} download>
            <div class="ci-left"><span class="ci-type">Resume</span><span class="ci-val">Download resume (PDF)</span></div>
            <span class="ci-arrow" aria-hidden="true">↓</span>
          </a>
        </li>
        <li class="contact-item">
          <a href={`mailto:${site.email}`}>
            <div class="ci-left"><span class="ci-type">Email</span><span class="ci-val">{site.email}</span></div>
            <span class="ci-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href="https://www.linkedin.com/in/allen-febi/" target="_blank" rel="noreferrer">
            <div class="ci-left"><span class="ci-type">LinkedIn</span><span class="ci-val">linkedin.com/in/allen-febi</span></div>
            <span class="ci-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href="https://github.com/all3n2601" target="_blank" rel="noreferrer">
            <div class="ci-left"><span class="ci-type">GitHub</span><span class="ci-val">github.com/all3n2601</span></div>
            <span class="ci-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href={site.domain} target="_blank" rel="noreferrer">
            <div class="ci-left"><span class="ci-type">Site</span><span class="ci-val">shippedbyallen.com</span></div>
            <span class="ci-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
        <li class="contact-item">
          <a href={`tel:${site.phoneE164}`}>
            <div class="ci-left"><span class="ci-type">Phone</span><span class="ci-val">{site.phoneDisplay}</span></div>
            <span class="ci-arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="footer-brand-lockup">
    <BrandMark size={28} />
    <span class="footer-sig">{site.brandName}</span>
  </div>
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

  .nav-toggle-bars::before { top: -6px; }
  .nav-toggle-bars::after { top: 6px; }

  .nav-toggle[aria-expanded='true'] .nav-toggle-bars { background: transparent; }
  .nav-toggle[aria-expanded='true'] .nav-toggle-bars::before { transform: translateY(6px) rotate(45deg); }
  .nav-toggle[aria-expanded='true'] .nav-toggle-bars::after { transform: translateY(-6px) rotate(-45deg); }

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
      radial-gradient(900px 700px at 80% 20%, rgba(11, 110, 106, 0.07), transparent 60%),
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
    font-size: 0.75rem;
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
  .skill-col:first-child { grid-column: 1 / -1; border-right: none; }
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

  /* ── DATA WORK ── */
  .data-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border: 1px solid var(--border); }
  .data-card { padding: 2rem; display: flex; flex-direction: column; gap: 1.2rem; min-width: 0; }
  .data-card + .data-card { border-left: 1px solid var(--border); }
  .data-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  .data-logo {
    height: 1.75rem;
    width: auto;
    max-width: 11rem;
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }
  .data-card .proj-desc { flex: none; }
  .data-card .proj-name { font-size: 2rem; }
  .case-study h4 { font-family: var(--mono); font-size: 0.75rem; color: var(--accent); text-transform: uppercase; letter-spacing: 0.08em; margin: 1.2rem 0 0.5rem; }
  .case-study p { font-size: 0.85rem; line-height: 1.7; color: var(--ink2); }

  .stack-providers {
    margin-top: 0.5rem;
    padding-top: 1.25rem;
    border-top: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  .stack-providers-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .stack-providers-label {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .stack-providers-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
  }

  .stack-provider {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    min-width: 7.5rem;
    padding: 1rem 1.15rem;
    border: 1px solid var(--border);
    background: var(--paper);
    font-family: var(--mono);
    letter-spacing: 0.02em;
    text-align: center;
  }

  .stack-provider img {
    width: clamp(2.1rem, 2.4vw, 2.75rem);
    height: clamp(2.1rem, 2.4vw, 2.75rem);
    object-fit: contain;
    display: block;
    flex-shrink: 0;
  }

  .stack-provider-name {
    font-size: clamp(0.82rem, 0.95vw, 0.95rem);
    font-weight: 700;
    color: var(--ink);
  }

  .stack-provider.is-source {
    background: var(--accent-pale);
    border-color: rgba(11, 110, 106, 0.22);
  }
  .case-study .proj-visual { margin-top: 1rem; }
  .pipeline { list-style: none; counter-reset: stage; display: grid; gap: 0.5rem; }
  .pipeline li { counter-increment: stage; font-family: var(--mono); font-size: 0.75rem; padding: 0.8rem; border: 1px solid var(--border); background: var(--paper2); }
  .pipeline li::before { content: counter(stage, decimal-leading-zero) ' → '; color: var(--red); }
  @media (max-width: 900px) {
    .data-grid { grid-template-columns: 1fr; }
    .data-card + .data-card { border-left: none; border-top: 1px solid var(--border); }
    .data-card { padding: 1.5rem; }
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

  .proj-num {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink4);
    letter-spacing: 0.15em;
  }

  .proj-award {
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    font-family: var(--mono);
    font-size: 0.75rem;
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
    background: var(--accent-pale);
    color: var(--accent);
    border: 1px solid rgba(11, 110, 106, 0.22);
  }

  .proj-name {
    font-family: var(--serif);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--ink);
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  .proj-subtitle {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink3);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .proj-desc {
    font-size: 0.85rem;
    color: var(--ink2);
    line-height: 1.7;
    flex: 1;
  }

  .proj-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }

  .proj-visual {
    margin: 0;
    border: 1px solid var(--border);
    background: var(--paper2);
  }

  .proj-visual img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }

  .proj-visual img.contain {
    object-fit: contain;
    padding: 1.4rem;
  }

  .proj-visual figcaption {
    padding: 0.45rem 0.65rem;
    border-top: 1px solid var(--border);
    color: var(--ink3);
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .proj-visual-note {
    min-height: 10rem;
    padding: 1.4rem;
    border: 1px solid var(--border);
    background: var(--paper2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.55rem;
  }

  .proj-visual-note span {
    color: var(--red);
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .proj-visual-note p {
    margin: 0;
    color: var(--ink3);
    font-size: 0.78rem;
    line-height: 1.55;
  }

  .tech-chip {
    font-family: var(--mono);
    font-size: 0.75rem;
    letter-spacing: 0.06em;
    padding: 0.2rem 0.55rem;
    border: 1px solid var(--border);
    color: var(--ink3);
    background: var(--paper2);
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

  .proj-link {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--ink3);
    text-decoration: none;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .proj-link:hover {
    color: var(--red);
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

  /* ── HONORS ── */
  #honors {
    background: var(--paper2);
  }

  .honors-scroll { overflow-x: auto; }

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
    color: rgba(244, 246, 248, 0.35);
  }

  .contact-sub {
    font-size: 0.95rem;
    color: rgba(244, 246, 248, 0.55);
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
    border-bottom: 1px solid rgba(244, 246, 248, 0.1);
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
    font-size: 0.75rem;
    color: rgba(244, 246, 248, 0.25);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    width: 65px;
    flex-shrink: 0;
  }

  .ci-val {
    font-size: 0.9rem;
    color: rgba(244, 246, 248, 0.75);
    transition: color 0.2s;
  }

  .contact-item:hover .ci-val {
    color: var(--paper);
  }

  .ci-arrow {
    font-size: 1rem;
    color: rgba(244, 246, 248, 0.2);
    transition: color 0.2s, transform 0.2s;
  }

  .contact-item:hover .ci-arrow {
    transform: translate(3px, -3px);
    color: var(--paper);
  }

  /* ── FOOTER ── */
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
    .ruled-header { grid-template-columns: auto minmax(0, 1fr); gap: 1rem; }
    .contact-headline { font-size: clamp(2rem, 8vw, 2.5rem); }
    .section-heading { font-size: clamp(1.7rem, 7vw, 2.2rem); }
    .about-layout, .contact-grid { grid-template-columns: minmax(0, 1fr); }
    .about-layout > div, .contact-grid > div { min-width: 0; }
    .fact-table { table-layout: fixed; }
    .fact-table td:last-child, .ci-val { overflow-wrap: anywhere; }
    .ci-left { min-width: 0; gap: 0.6rem; }
    .ci-type { width: 52px; }
    .nav-brand { gap: 0.5rem; }
    .nav-brand-by { max-width: 120px; font-size: 0.75rem; letter-spacing: 0.1em; }
    .skills-magazine {
      grid-template-columns: 1fr;
    }
    .projects-masonry {
      grid-template-columns: 1fr;
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
