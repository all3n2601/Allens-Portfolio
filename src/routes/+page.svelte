<script>
  import AnimateOnScroll from '$lib/components/AnimateOnScroll.svelte';

  let selectedCategory = $state('All');
  let searchQuery = $state('');
  let sortBy = $state('Featured');


  let formData = $state({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  let isSubmitting = $state(false);

  let copied = $state(false);
  let copiedPhone = $state(false);
  
  function copyEmail() {
    try {
      navigator?.clipboard?.writeText('allsurej@gmail.com').then(() => {
        copied = true;
        setTimeout(() => (copied = false), 1500);
      });
    } catch(e) {
      copied = true;
      setTimeout(() => (copied = false), 1500);
    }
  }

  function copyPhone() {
    try {
      navigator?.clipboard?.writeText('(617) 606-8268').then(() => {
        copiedPhone = true;
        setTimeout(() => (copiedPhone = false), 1500);
      });
    } catch(e) {
      copiedPhone = true;
      setTimeout(() => (copiedPhone = false), 1500);
    }
  }

  let submitStatus = $state(null);
  let submitMessage = $state("");

  async function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    submitStatus = null;

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);

      submitStatus = "success";
      submitMessage = "Thank you for your message! I will get back to you soon.";

      formData = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };
    } catch (error) {
      submitStatus = "error";
      submitMessage = "Sorry, there was an error sending your message. Please try again.";
    } finally {
      isSubmitting = false;
      setTimeout(() => {
        submitStatus = null;
        submitMessage = "";
      }, 5000);
    }
  }

  let isFormValid = $derived(
    formData.name.trim() &&
    formData.email.trim() &&
    formData.subject.trim() &&
    formData.message.trim() &&
    formData.email.includes("@")
  );


  const steps = [
    {
      name: "Restaurant POS System",
      icon: "fa-solid fa-cash-register",
      description: "Production Flutter POS application deployed across 2 UK restaurant chains, serving 70+ daily customers. Complete solution with order management, payment processing, inventory tracking, and real-time analytics dashboard.",
      href: null,
      demo: null,
      technologies: ["Flutter", "Dart", "Android SDK", "Firebase", "Real-time Analytics"],
      category: "Mobile & Production",
      status: "In Production",
      featured: true,
      achievement: "💼 Professional Work - Siga Infotech",
      priority: 1
    },
    {
      name: "NavX - Ride Sharing Platform",
      icon: "fa-solid fa-car-side",
      description: "Led team of 4 to develop carpooling mobile and web application with women safety features using custom ML harassment detection model. Implemented real-time matching system with Firebase authentication.",
      href: "https://github.com/all3n2601/NavX-CodeHunt",
      demo: null,
      technologies: ["MERN Stack", "Flutter", "OpenCV", "Firebase", "ML Model"],
      category: "Web & Mobile Application",
      status: "Completed",
      featured: true,
      award: "🥈 2nd Place among 72 teams",
      priority: 2
    },
    {
      name: "Emergency Communication System",
      icon: "fa-solid fa-house-tsunami",
      description: "LoRaWAN-based emergency communication system for natural disasters with hardware sensors monitoring tilt, axis, and environmental parameters. React dashboard for emergency responders to receive real-time sensor data when traditional infrastructure fails.",
      href: "https://github.com/all3n2601/Natural-Disaster-Escalation-and-Administration-Framework",
      demo: null,
      technologies: ["React.js", "Arduino", "LoRaWAN", "Hardware Sensors", "Real-time Systems"],
      category: "IoT & Emergency Systems",
      status: "Completed",
      featured: true,
      publication: "📄 Published in IEEE ICCCSMD'24",
      patent: "📜 Patent Filed: App No. 202441052914",
      priority: 3
    },
    {
      name: "EnergyP2P - Renewable Trading Platform",
      icon: "fa-solid fa-bolt",
      description: "Developed 3 Android applications for Renewable Energy Trading platform at IIT Guwahati. Optimized match-making algorithm reducing performance bottlenecks, decreasing load time from 800ms to 320ms (60% improvement).",
      href: "https://github.com/all3n2601/EnergyP2P",
      demo: null,
      technologies: ["Flutter", "Dart", "Firebase", "Algorithm Optimization"],
      category: "Mobile & Sustainability",
      status: "Completed",
      featured: true,
      achievement: "⚡ 60% Performance Improvement - IIT Guwahati",
      priority: 4
    },
    {
      name: "Legal Document Assistant",
      icon: "fa-solid fa-scale-balanced",
      description: "AI-powered legal assistant for document analysis and advice. Simplifies complex legal jargon and helps users understand contracts and agreements.",
      href: "https://github.com/all3n2601/Legal-Assistant-LLM-Model",
      demo: null,
      technologies: ["LangChain", "HuggingFace", "ChainLit", "Python", "NLP"],
      category: "AI & Machine Learning",
      status: "Completed",
      featured: true
    },
    {
      name: "ASA Mobile Apps Suite",
      icon: "fa-solid fa-mobile-screen",
      description: "Built Flutter ad-free applications suite for various needs including calculator, media player, notes, and weather updates. Focus on clean UI/UX and optimal performance.",
      href: "https://github.com/all3n2601/ASA-Mobile-Apps",
      demo: null,
      technologies: ["Flutter", "Dart", "Firebase", "MongoDB", "Material Design"],
      category: "Mobile Application",
      status: "Completed",
      featured: false
    },
    {
      name: "Riders Paradise",
      icon: "fa-solid fa-motorcycle",
      description: "3D interactive motorcycle showroom with immersive experience. Features virtual tours, customization options, and real-time rendering.",
      href: "https://github.com/all3n2601/Riders-Paradise",
      demo: null,
      technologies: ["MERN Stack", "React Three Fiber", "Redux", "TailwindCSS", "3D Modeling"],
      category: "Web Application",
      status: "Completed",
      featured: false
    },
    {
      name: "Hospital Management System",
      icon: "fa-solid fa-hospital",
      description: "Comprehensive healthcare management platform with modern UI. Includes patient records, appointment scheduling, and billing management.",
      href: "https://github.com/all3n2601/Hospital-Management-System-MERN-Stack",
      demo: null,
      technologies: ["MERN Stack", "Framer Motion", "Redux", "TailwindCSS"],
      category: "Web Application",
      status: "Completed",
      featured: false
    }
  ];

  const benefits = [
    {
      name: "Production-Ready Developer",
      icon: "fa-solid fa-rocket",
      description: "With 11 months of professional experience at Siga Infotech, I've shipped production Flutter applications serving 70+ daily customers across UK restaurant chains. I understand the full software development lifecycle—from requirements gathering to deployment, maintenance, and user feedback iteration. My code doesn't just work in demos; it performs in real-world production environments."
    },
    {
      name: "Academic Excellence & Research",
      icon: "fa-solid fa-graduation-cap",
      description: "Currently pursuing MS in Computer Science at Northeastern University (2025-2027), building on my BTech from VIT-AP University (CGPA: 8.93/10). Published research in IEEE ICCCSMD'24 on Natural Disaster Management Systems and filed a patent for real-time environmental alert systems. I combine academic rigor with practical implementation."
    },
    {
      name: "Performance Optimization Expert",
      icon: "fa-solid fa-gauge-high",
      description: "During my internship at IIT Guwahati, I optimized match-making algorithms achieving 60% performance improvement, reducing load times from 800ms to 320ms. I don't just write code—I analyze, profile, and optimize for efficiency. Whether it's database queries, algorithm complexity, or UI rendering, I deliver fast, responsive applications."
    },
    {
      name: "Team Leadership & Agile Practices",
      icon: "fa-solid fa-users",
      description: "Led cross-functional teams in hackathons (2nd place among 72 teams), collaborated in Agile environments with sprint planning, code reviews, and CI/CD practices. Experienced in Git workflows, documentation, and clear technical communication. I believe great software is built by great teams working together."
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: "fa-solid fa-palette",
      color: "from-blue-500 to-cyan-500",
      description: "Crafting beautiful, responsive user experiences",
      skills: [
        { name: "React.js", icon: "fa-brands fa-react", experience: "2+ years", projects: 5 },
        { name: "Svelte/SvelteKit", icon: "fa-solid fa-fire", experience: "1+ year", projects: 3 },
        { name: "Flutter", icon: "fa-brands fa-flutter", experience: "2+ years", projects: 4 },
        { name: "TailwindCSS", icon: "fa-solid fa-wind", experience: "2+ years", projects: 7 },
        { name: "JavaScript/TS", icon: "fa-brands fa-js", experience: "3+ years", projects: 7 }
      ]
    },
    {
      title: "Backend Architecture",
      icon: "fa-solid fa-server",
      color: "from-green-500 to-emerald-500",
      description: "Building scalable, secure server solutions",
      skills: [
        { name: "Node.js", icon: "fa-brands fa-node-js", experience: "2+ years", projects: 6 },
        { name: "Express.js", icon: "fa-solid fa-route", experience: "2+ years", projects: 6 },
        { name: "MongoDB", icon: "fa-solid fa-database", experience: "2+ years", projects: 5 },
        { name: "Firebase", icon: "fa-solid fa-fire-flame-curved", experience: "2+ years", projects: 4 },
        { name: "Java", icon: "fa-brands fa-java", experience: "3+ years", projects: 3 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: "fa-solid fa-microchip",
      color: "from-purple-500 to-pink-500",
      description: "Connecting physical devices to digital solutions",
      skills: [
        { name: "Arduino", icon: "fa-solid fa-microchip", experience: "2+ years", projects: 3 },
        { name: "LoRaWAN", icon: "fa-solid fa-tower-broadcast", experience: "1+ year", projects: 2 },
        { name: "Sensor Integration", icon: "fa-solid fa-gauge-high", experience: "2+ years", projects: 3 },
        { name: "Blynk IoT", icon: "fa-solid fa-cloud", experience: "1+ year", projects: 2 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "fa-solid fa-brain",
      color: "from-violet-500 to-purple-500",
      description: "Implementing intelligent, data-driven solutions",
      skills: [
        { name: "LangChain", icon: "fa-solid fa-link", experience: "6+ months", projects: 1 },
        { name: "HuggingFace", icon: "fa-solid fa-face-smile", experience: "6+ months", projects: 1 },
        { name: "Python", icon: "fa-brands fa-python", experience: "2+ years", projects: 3 },
        { name: "NLP", icon: "fa-solid fa-language", experience: "1+ year", projects: 1 }
      ]
    }
  ];

  const highlights = [
    { label: "Industry Experience", value: "11 Mo", icon: "fa-solid fa-briefcase" },
    { label: "Daily Users Served", value: "70+", icon: "fa-solid fa-users" },
    { label: "Projects Completed", value: "7+", icon: "fa-solid fa-check-circle" },
    { label: "Patents Filed", value: "1", icon: "fa-solid fa-certificate" }
  ];

  const categories = ['All', 'Mobile & Production', 'IoT & Emergency Systems', 'Mobile & Sustainability', 'Web & Mobile Application', 'Mobile Application', 'Web Application', 'AI & Machine Learning'];

  let baseFiltered = $derived(selectedCategory === 'All'
    ? steps
    : steps.filter(step => step.category === selectedCategory));

  let filteredByQuery = $derived(
    searchQuery.trim()
      ? baseFiltered.filter(step => {
          const q = searchQuery.toLowerCase();
          return (
            step.name.toLowerCase().includes(q) ||
            step.description.toLowerCase().includes(q) ||
            step.technologies.some(t => t.toLowerCase().includes(q))
          );
        })
      : baseFiltered
  );

  let filteredSteps = $derived(
    sortBy === 'Featured'
      ? [...filteredByQuery].sort((a, b) => {
          // First sort by priority if exists (lower number = higher priority)
          if (a.priority && b.priority) return a.priority - b.priority;
          if (a.priority) return -1;
          if (b.priority) return 1;
          // Then by featured status
          if (Number(b.featured) !== Number(a.featured)) {
            return Number(b.featured) - Number(a.featured);
          }
          // Finally alphabetically
          return a.name.localeCompare(b.name);
        })
      : [...filteredByQuery].sort((a, b) => a.name.localeCompare(b.name))
  );
</script>

<!-- Particles Background - Full Page -->
<div id="hero-particles" class="fixed inset-0 pointer-events-none" style="z-index: 0;"></div>

<main class="flex flex-col flex-1 p-4 relative" style="z-index: 1;">
  <!-- Hero Section -->
  <section id="introPage" class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 min-h-[80vh]">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 relative" style="z-index: 2;">
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Allen Febi</span> M A
        <br />Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        <span class="text-violet-400">MS Computer Science</span> student at Northeastern University with <span class="text-violet-400">11 months</span> of industry experience. Specializing in Flutter, MERN Stack, and IoT solutions.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 mx-auto lg:mr-auto lg:ml-0">
        <a
          href="#contact"
          class="blueShadow text-base sm:text-lg md:text-xl poppins relative px-6 py-3 rounded-full bg-violet-400 text-slate-950 hover:bg-violet-500 transition-all duration-300 inline-block transform hover:scale-105"
        >
          <h4 class="relative">Get in touch &rarr;</h4>
        </a>
        <a
          href="/documents/resume.pdf"
          download
          class="text-base sm:text-lg md:text-xl poppins relative px-6 py-3 rounded-full bg-transparent border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 transition-all duration-300 inline-block transform hover:scale-105"
        >
          <h4 class="relative flex items-center gap-2">
            <i class="fa fa-download"></i>
            Download Resume
          </h4>
        </a>
      </div>
    </div>
    <div class="relative shadow-2xl grid place-items-center" style="z-index: 2;">
      <img
        src="/images/profile.png"
        alt="Allen Febi M A - Full Stack Developer"
        class="object-cover z-[2] max-h-[70vh] rounded-lg"
      />
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>


    <!-- Tools: Search + Sort -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
      <div class="relative w-full sm:w-80">
        <input
          type="text"
          bind:value={searchQuery}
          class="w-full px-4 py-2 pl-10 rounded-full bg-slate-800/60 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
          placeholder="Search projects or tech..."
          aria-label="Search projects"
        />
        <i class="fa fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
      </div>

      <select
        bind:value={sortBy}
        class="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        aria-label="Sort projects"
      >
        <option value="Featured">Featured</option>
        <option value="A–Z">A–Z</option>
      </select>
    </div>

    <!-- Project Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-8">
      {#each categories as category}
        <button
          class="px-4 py-2 rounded-full border transition-all duration-200 {selectedCategory === category
            ? 'bg-violet-600 text-white border-violet-600'
            : 'bg-transparent text-gray-300 border-gray-600 hover:border-violet-400 hover:text-violet-400'}"
          onclick={() => selectedCategory = category}
        >
          {category}
        </button>

    {#if filteredSteps.length === 0}
      <div class="text-center text-gray-400 italic mb-8">No projects match your filters. Try a different search or category.</div>
    {/if}

      {/each}
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-8">
      {#each filteredSteps as step, i}
        <AnimateOnScroll animation="fadeInUp" delay={i * 100}>
          <div class="relative pt-12">
            <div class="project-card p-6 sm:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group hover:border-violet-400 duration-300 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all h-full">
              <!-- Icon positioned absolutely and centered -->
              <div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-950 grid place-items-center text-4xl md:text-5xl rounded-full w-20 h-20 border-2 border-violet-600 group-hover:border-violet-400 group-hover:scale-110 transition-all duration-200 z-10">
                <i class={step.icon}></i>
              </div>

          <div class="flex flex-col gap-2 pt-4">
            <h3 class="font-medium text-xl sm:text-2xl md:text-3xl text-white">
              {step.name}
            </h3>
            {#if step.featured}
              <span class="inline-block px-2 py-1 bg-violet-600 text-white text-xs rounded-full mx-auto">
                Featured Project
              </span>
            {/if}
          </div>

          <div class="flex-1 space-y-3">
            <p class="text-gray-300 leading-relaxed">
              {step.description}
            </p>

            <!-- Technology badges -->
            <div class="flex flex-wrap gap-2 justify-center">
              {#each step.technologies as tech}
                <span class="px-2 py-1 bg-violet-600/20 text-violet-300 text-xs rounded-full border border-violet-600/30">
                  {tech}
                </span>
              {/each}
            </div>

            <!-- Category and status -->
            <div class="flex justify-between items-center text-xs">
              <span class="text-gray-400">{step.category}</span>
              <span class="px-2 py-1 bg-green-600/20 text-green-300 rounded-full">
                {step.status}
              </span>
            </div>

            <!-- Awards, achievements, patents, and publications -->
            {#if step.award}
              <div class="text-yellow-400 text-sm font-medium">
                {step.award}
              </div>
            {/if}
            {#if step.achievement}
              <div class="text-green-400 text-sm font-medium">
                {step.achievement}
              </div>
            {/if}
            {#if step.patent}
              <div class="text-blue-400 text-sm font-medium">
                {step.patent}
              </div>
            {/if}
            {#if step.publication}
              <div class="text-violet-400 text-sm font-medium">
                {step.publication}
              </div>
            {/if}
          </div>

          <div class="flex {step.demo ? 'justify-between' : 'justify-center'} items-center gap-4 mt-4">
            {#if step.href}
              <a
                href={step.href}
                target="_blank"
                class="{step.demo ? 'flex-1' : 'w-full'} blueShadow relative px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300 transform hover:scale-105"
              >
                <span class="relative flex items-center justify-center gap-2">
                  <i class="fab fa-github"></i>
                  View Code
                </span>
              </a>
            {:else if !step.demo}
              <div class="w-full px-4 py-2 bg-slate-700/50 text-gray-400 rounded-lg text-center border border-slate-600/50">
                <span class="flex items-center justify-center gap-2">
                  <i class="fa fa-lock"></i>
                  Private Repository
                </span>
              </div>
            {/if}
            {#if step.demo}
              <a
                href={step.demo}
                target="_blank"
                class="flex-1 relative px-4 py-2 rounded-lg bg-transparent border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <span class="relative flex items-center justify-center gap-2">
                  <i class="fa fa-external-link-alt"></i>
                  Live Demo
                </span>
              </a>
            {/if}
          </div>
            </div>
          </div>
        </AnimateOnScroll>
      {/each}
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="py-20 lg:py-32 flex flex-col gap-16">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        What I bring to the table
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        <span class="poppins text-violet-400">Skills</span> & Expertise
      </h3>
    </div>

    <!-- Highlights Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
      {#each highlights as highlight}
        <div class="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 text-center group hover:border-violet-400/50 transition-all duration-300 hover:scale-105">
          <i class="{highlight.icon} text-3xl text-violet-400 mb-3 group-hover:scale-110 transition-transform duration-300"></i>
          <div class="text-3xl font-bold text-white mb-1">{highlight.value}</div>
          <div class="text-sm text-gray-400">{highlight.label}</div>
                </div>
      {/each}
    </div>

    <!-- Skills Categories Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
      {#each skillCategories as category}
        <div class="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-violet-700/30 hover:border-violet-500/50 transition-all duration-300 group">
          <!-- Category Header -->
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br {category.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <i class={category.icon}></i>
            </div>
            <div class="flex-1">
              <h4 class="text-xl md:text-2xl font-semibold text-white group-hover:text-violet-300 transition-colors">{category.title}</h4>
              <p class="text-sm text-gray-400 mt-1">{category.description}</p>
            </div>
          </div>

          <!-- Skills Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {#each category.skills as skill}
              <div class="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:bg-slate-900/80 group/item">
                <div class="flex items-center gap-3 mb-3">
                  <i class="{skill.icon} text-xl text-violet-400 group-hover/item:text-violet-300 transition-colors"></i>
                  <span class="font-medium text-white text-sm">{skill.name}</span>
                </div>
                <div class="flex items-center justify-between text-xs">
                  <span class="text-gray-400 flex items-center gap-1">
                    <i class="fa-solid fa-clock text-xs"></i>
                    {skill.experience}
                  </span>
                  <span class="text-violet-400 flex items-center gap-1">
                    <i class="fa-solid fa-folder text-xs"></i>
                    {skill.projects} {skill.projects === 1 ? 'project' : 'projects'}
                  </span>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Additional Skills Tags -->
    <div class="max-w-4xl mx-auto w-full">
      <h4 class="text-center text-xl font-semibold text-gray-300 mb-6">Also Experienced With</h4>
      <div class="flex flex-wrap gap-3 justify-center">
        {#each ['React Native', 'Redux', 'Socket.io', 'REST APIs', 'Git & GitHub', 'PostgreSQL', 'MySQL', 'Docker', 'AWS', 'Responsive Design', '3D Graphics', 'Real-time Systems', 'Agile/Scrum', 'CI/CD'] as tag}
          <span class="px-4 py-2 bg-slate-800/50 border border-violet-700/30 rounded-full text-sm text-gray-300 hover:border-violet-500/50 hover:text-white hover:bg-slate-800/70 transition-all duration-300 cursor-default">
            {tag}
          </span>
        {/each}
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <!-- Section Header -->
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>

    <!-- Introduction -->
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-xl sm:text-2xl md:text-3xl font-semibold poppins text-violet-400 mb-6">
        About Me
      </p>
      <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
        MS Computer Science student at <span class="text-violet-400 font-semibold">Northeastern University</span> with real-world industry experience. 
        I've developed production applications serving thousands of users, published research in IEEE conferences, 
        and filed patents for innovative IoT solutions.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8">
        <div class="bg-slate-800/40 border border-violet-700/30 rounded-lg p-4">
          <h4 class="text-violet-400 font-semibold mb-2 flex items-center gap-2">
            <i class="fa-solid fa-graduation-cap"></i> Education
          </h4>
          <p class="text-sm text-gray-300">
            <strong>MS Computer Science</strong><br/>
            Northeastern University, Boston<br/>
            Aug 2025 - Dec 2027
          </p>
          <p class="text-sm text-gray-300 mt-3">
            <strong>BTech Computer Science</strong><br/>
            VIT-AP University, India<br/>
            CGPA: 8.93/10
          </p>
        </div>
        <div class="bg-slate-800/40 border border-violet-700/30 rounded-lg p-4">
          <h4 class="text-violet-400 font-semibold mb-2 flex items-center gap-2">
            <i class="fa-solid fa-briefcase"></i> Experience
          </h4>
          <p class="text-sm text-gray-300">
            <strong>Software Engineer</strong><br/>
            Siga Infotech, Trivandrum<br/>
            Sept 2024 - July 2025
          </p>
          <p class="text-sm text-gray-300 mt-3">
            <strong>Application Developer Intern</strong><br/>
            IIT Guwahati<br/>
            Jan 2023 - Apr 2023
          </p>
        </div>
      </div>
    </div>

    <!-- Benefits Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto max-w-6xl">
      {#each benefits as benefit, index}
        <div class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
          <!-- Icon Badge -->
          <div class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 rotate-3">
            <i class={benefit.icon}></i>
          </div>

          <!-- Content -->
          <div class="flex flex-col gap-4 mt-4">
            <h3 class="text-2xl sm:text-3xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
              {benefit.name}
            </h3>
            <p class="text-gray-300 leading-relaxed text-base">
              {benefit.description}
            </p>
          </div>

          <!-- Decorative Element -->
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-violet-500/5 rounded-tl-full group-hover:bg-violet-500/10 transition-colors duration-300 overflow-hidden">
            <div class="absolute bottom-4 right-4 w-20 h-20 border-2 border-violet-500/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Call to Action -->
    <div class="text-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
      <p class="text-xl sm:text-2xl font-semibold text-white mb-4">
        Ready to collaborate?
      </p>
      <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        I'm always excited about new opportunities and challenges. Let's connect and create something amazing together!
      </p>
      <a
        href="#contact"
        class="inline-flex items-center gap-2 px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105"
      >
        <span>Let's Talk</span>
        <i class="fa fa-arrow-right"></i>
      </a>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        Let's work together
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Get in <span class="poppins text-violet-400">Touch</span>
      </h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto w-full">
      <!-- Contact Information -->
      <div class="space-y-8">
        <div>
          <h4 class="text-2xl font-semibold mb-6 text-violet-300">Let's Connect</h4>
          <p class="text-gray-300 text-lg leading-relaxed mb-8">
            I'm always interested in new opportunities, collaborations, and interesting projects.
            Whether you have a question about my work or want to discuss a potential project,
            feel free to reach out!
          </p>
        </div>

        <div class="space-y-6">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
              <i class="fa fa-envelope text-white"></i>
            </div>
            <div>
              <p class="text-white font-medium">Email</p>
              <div class="flex items-center gap-2">
                <a href="mailto:allsurej@gmail.com" class="text-violet-400 hover:text-violet-300 transition-colors">
                  allsurej@gmail.com
                </a>
                <button onclick={copyEmail} class="px-2 py-1 text-xs rounded border border-slate-600 hover:border-violet-400 text-gray-300 hover:text-white transition">
                  Copy
                </button>
                {#if copied}
                  <span class="text-green-400 text-xs">Copied!</span>
                {/if}
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
              <i class="fa fa-phone text-white"></i>
            </div>
            <div>
              <p class="text-white font-medium">Phone</p>
              <div class="flex items-center gap-2">
                <a href="tel:+16176068268" class="text-violet-400 hover:text-violet-300 transition-colors">
                  (617) 606-8268
                </a>
                <button onclick={copyPhone} class="px-2 py-1 text-xs rounded border border-slate-600 hover:border-violet-400 text-gray-300 hover:text-white transition">
                  Copy
                </button>
                {#if copiedPhone}
                  <span class="text-green-400 text-xs">Copied!</span>
                {/if}
              </div>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
              <i class="fab fa-github text-white"></i>
            </div>
            <div>
              <p class="text-white font-medium">GitHub</p>
              <a href="https://github.com/all3n2601" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors">
                github.com/all3n2601
              </a>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
              <i class="fab fa-linkedin text-white"></i>
            </div>
            <div>
              <p class="text-white font-medium">LinkedIn</p>
              <a href="https://www.linkedin.com/in/all3n-f3bi/" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors">
                Connect with me
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-900/30">
        <form onsubmit={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name *</label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email *</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
            <input
              type="text"
              id="subject"
              bind:value={formData.subject}
              required
              class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message *</label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="5"
              class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell me about your project or question..."
            ></textarea>
          </div>

          <!-- Submit Status -->
          {#if submitStatus}
            <div class="p-4 rounded-lg {submitStatus === 'success' ? 'bg-green-900/50 border border-green-700 text-green-300' : 'bg-red-900/50 border border-red-700 text-red-300'}">
              {submitMessage}
            </div>
          {/if}

          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            class="w-full blueShadow relative px-6 py-3 rounded-lg bg-violet-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-violet-700 transform hover:scale-[1.02] disabled:transform-none"
          >
            <span class="relative flex items-center justify-center gap-2">
              {#if isSubmitting}
                <i class="fa fa-spinner fa-spin"></i>
                Sending...
              {:else}
                <i class="fa fa-paper-plane"></i>
                Send Message
              {/if}
            </span>
          </button>
        </form>
      </div>
    </div>
  </section>
</main>

<svelte:head>
  <script>
    if (typeof window !== 'undefined') {
      window.addEventListener('load', function() {
        const initParticles = () => {
          const el = document.getElementById('hero-particles');
          if (!el) {
            console.warn('hero-particles container not found');
            return;
          }
          if (typeof particlesJS === 'undefined') return false;
          const isMobile = window.innerWidth < 768;
          const particleCount = isMobile ? 40 : 80;
          particlesJS('hero-particles', {
            particles: {
              number: { value: particleCount, density: { enable: true, value_area: 800 } },
              color: { value: "#8b5cf6" },
              shape: { type: "circle" },
              opacity: { value: 0.6, random: true, anim: { enable: false } },
              size: { value: 3, random: true, anim: { enable: false } },
              line_linked: { enable: true, distance: 150, color: "#8b5cf6", opacity: 0.4, width: 1 },
              move: { 
                enable: true, 
                speed: isMobile ? 1 : 2, 
                direction: "none", 
                random: true, 
                straight: false, 
                out_mode: "bounce",
                bounce: true,
                attract: { enable: false }
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: { onhover: { enable: !isMobile, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
              modes: { 
                grab: { distance: 140, line_linked: { opacity: 0.5 } },
                push: { particles_nb: 2 }
              }
            },
            retina_detect: true
          });
          console.log('Particles.js loaded in hero section with', particleCount, 'particles');
          return true;
        };

        if (!initParticles()) {
          // Retry for up to ~4s in case CDN loads late
          let tries = 0;
          const iv = setInterval(() => {
            tries++;
            if (initParticles() || tries > 20) {
              clearInterval(iv);
              if (tries > 20) console.error('particlesJS not available after retries');
            }
          }, 200);
        }
      });
    }
  </script>
</svelte:head>

<style>
  /* 3D Card Effects for Project Cards */
  .project-card {
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
  }

  .project-card:hover {
    transform: translateY(-12px) rotateX(2deg) rotateY(-2deg);
    box-shadow: 
      0 25px 50px -12px rgba(139, 92, 246, 0.25),
      0 0 0 1px rgba(139, 92, 246, 0.1),
      0 0 80px -20px rgba(139, 92, 246, 0.3);
  }

  /* 3D Card Effects for About Cards */
  .group:hover {
    transform: translateY(-10px) scale(1.02);
  }

  /* Add subtle animation to cards on load */
  @keyframes cardFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  .project-card {
    animation: cardFloat 6s ease-in-out infinite;
  }

  .project-card:nth-child(2n) {
    animation-delay: 0.5s;
  }

  .project-card:nth-child(3n) {
    animation-delay: 1s;
  }

  /* Disable floating animation on hover */
  .project-card:hover {
    animation: none;
  }

  /* Ensure parent wrapper allows overflow for floating icons */
  .relative {
    overflow: visible;
  }
</style>
