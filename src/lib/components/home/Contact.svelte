<script lang="ts">
  import { site } from '$lib/data/site';
</script>

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

<style>
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

  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .contact-wrap {
      padding: 4rem 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .contact-headline {
      font-size: clamp(2rem, 8vw, 2.5rem);
    }

    .contact-grid {
      grid-template-columns: minmax(0, 1fr);
    }

    .contact-grid > div {
      min-width: 0;
    }

    .ci-val {
      overflow-wrap: anywhere;
    }

    .ci-left {
      min-width: 0;
      gap: 0.6rem;
    }

    .ci-type {
      width: 52px;
    }
  }
</style>
