<script lang="ts">
  import { site } from '$lib/data/site';
  import SectionHeader from './SectionHeader.svelte';
</script>

<section id="about">
  <div class="section-wrap">
    <SectionHeader num="04" title="About" accent="Me" />

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

<style>
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

  @media (max-width: 900px) {
    .about-layout {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }
  }

  @media (max-width: 600px) {
    .about-layout {
      grid-template-columns: minmax(0, 1fr);
    }

    .about-layout > div {
      min-width: 0;
    }

    .fact-table {
      table-layout: fixed;
    }

    .fact-table td:last-child {
      overflow-wrap: anywhere;
    }
  }
</style>
