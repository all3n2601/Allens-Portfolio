<script lang="ts">
  import { onMount } from 'svelte';
  import SiteNav from '$lib/components/home/SiteNav.svelte';
  import Hero from '$lib/components/home/Hero.svelte';
  import DataWork from '$lib/components/home/DataWork.svelte';
  import AiWork from '$lib/components/home/AiWork.svelte';
  import ShippedApps from '$lib/components/home/ShippedApps.svelte';
  import About from '$lib/components/home/About.svelte';
  import Skills from '$lib/components/home/Skills.svelte';
  import Experience from '$lib/components/home/Experience.svelte';
  import Projects from '$lib/components/home/Projects.svelte';
  import Education from '$lib/components/home/Education.svelte';
  import Honors from '$lib/components/home/Honors.svelte';
  import Contact from '$lib/components/home/Contact.svelte';
  import SiteFooter from '$lib/components/home/SiteFooter.svelte';

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

<SiteNav />

<main id="main">
  <Hero />
  <div class="sep"></div>
  <DataWork />
  <div class="sep"></div>
  <AiWork />
  <div class="sep"></div>
  <ShippedApps />
  <div class="sep"></div>
  <About />
  <div class="sep"></div>
  <Skills />
  <div class="sep"></div>
  <Experience />
  <div class="sep"></div>
  <Projects />
  <div class="sep"></div>
  <Education />
  <div class="sep"></div>
  <Honors />
  <Contact />
</main>

<SiteFooter />
