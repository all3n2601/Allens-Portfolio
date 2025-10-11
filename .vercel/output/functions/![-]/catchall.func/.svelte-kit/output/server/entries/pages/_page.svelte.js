import { x as attr_class, G as stringify, K as head, z as attr, y as ensure_array_like, N as clsx } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
function AnimateOnScroll($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { animation = "fadeIn", children } = $$props;
    const animations = {
      fadeIn: "opacity-0",
      fadeInUp: "opacity-0 translate-y-10",
      fadeInDown: "opacity-0 -translate-y-10",
      fadeInLeft: "opacity-0 -translate-x-10",
      fadeInRight: "opacity-0 translate-x-10",
      zoomIn: "opacity-0 scale-95"
    };
    $$renderer2.push(`<div${attr_class(`transition-all duration-700 ease-out ${stringify(animations[animation])}`)}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selectedCategory = "All";
    let searchQuery = "";
    let sortBy = "Featured";
    let formData = { name: "", email: "", subject: "", message: "" };
    let isSubmitting = false;
    let isFormValid = formData.name.trim() && formData.email.trim() && formData.subject.trim() && formData.message.trim() && formData.email.includes("@");
    const steps = [
      {
        name: "Restaurant POS System",
        icon: "fa-solid fa-cash-register",
        description: "Production Flutter POS application deployed across 2 UK restaurant chains, serving 70+ daily customers. Complete solution with order management, payment processing, inventory tracking, and real-time analytics dashboard.",
        href: null,
        demo: null,
        technologies: [
          "Flutter",
          "Dart",
          "Android SDK",
          "Firebase",
          "Real-time Analytics"
        ],
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
        technologies: [
          "React.js",
          "Arduino",
          "LoRaWAN",
          "Hardware Sensors",
          "Real-time Systems"
        ],
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
        technologies: [
          "MERN Stack",
          "React Three Fiber",
          "Redux",
          "TailwindCSS",
          "3D Modeling"
        ],
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
          {
            name: "React.js",
            icon: "fa-brands fa-react",
            experience: "2+ years",
            projects: 5
          },
          {
            name: "Svelte/SvelteKit",
            icon: "fa-solid fa-fire",
            experience: "1+ year",
            projects: 3
          },
          {
            name: "Flutter",
            icon: "fa-brands fa-flutter",
            experience: "2+ years",
            projects: 4
          },
          {
            name: "TailwindCSS",
            icon: "fa-solid fa-wind",
            experience: "2+ years",
            projects: 7
          },
          {
            name: "JavaScript/TS",
            icon: "fa-brands fa-js",
            experience: "3+ years",
            projects: 7
          }
        ]
      },
      {
        title: "Backend Architecture",
        icon: "fa-solid fa-server",
        color: "from-green-500 to-emerald-500",
        description: "Building scalable, secure server solutions",
        skills: [
          {
            name: "Node.js",
            icon: "fa-brands fa-node-js",
            experience: "2+ years",
            projects: 6
          },
          {
            name: "Express.js",
            icon: "fa-solid fa-route",
            experience: "2+ years",
            projects: 6
          },
          {
            name: "MongoDB",
            icon: "fa-solid fa-database",
            experience: "2+ years",
            projects: 5
          },
          {
            name: "Firebase",
            icon: "fa-solid fa-fire-flame-curved",
            experience: "2+ years",
            projects: 4
          },
          {
            name: "Java",
            icon: "fa-brands fa-java",
            experience: "3+ years",
            projects: 3
          }
        ]
      },
      {
        title: "IoT & Hardware",
        icon: "fa-solid fa-microchip",
        color: "from-purple-500 to-pink-500",
        description: "Connecting physical devices to digital solutions",
        skills: [
          {
            name: "Arduino",
            icon: "fa-solid fa-microchip",
            experience: "2+ years",
            projects: 3
          },
          {
            name: "LoRaWAN",
            icon: "fa-solid fa-tower-broadcast",
            experience: "1+ year",
            projects: 2
          },
          {
            name: "Sensor Integration",
            icon: "fa-solid fa-gauge-high",
            experience: "2+ years",
            projects: 3
          },
          {
            name: "Blynk IoT",
            icon: "fa-solid fa-cloud",
            experience: "1+ year",
            projects: 2
          }
        ]
      },
      {
        title: "AI & Machine Learning",
        icon: "fa-solid fa-brain",
        color: "from-violet-500 to-purple-500",
        description: "Implementing intelligent, data-driven solutions",
        skills: [
          {
            name: "LangChain",
            icon: "fa-solid fa-link",
            experience: "6+ months",
            projects: 1
          },
          {
            name: "HuggingFace",
            icon: "fa-solid fa-face-smile",
            experience: "6+ months",
            projects: 1
          },
          {
            name: "Python",
            icon: "fa-brands fa-python",
            experience: "2+ years",
            projects: 3
          },
          {
            name: "NLP",
            icon: "fa-solid fa-language",
            experience: "1+ year",
            projects: 1
          }
        ]
      }
    ];
    const highlights = [
      {
        label: "Industry Experience",
        value: "11 Mo",
        icon: "fa-solid fa-briefcase"
      },
      {
        label: "Daily Users Served",
        value: "70+",
        icon: "fa-solid fa-users"
      },
      {
        label: "Projects Completed",
        value: "7+",
        icon: "fa-solid fa-check-circle"
      },
      {
        label: "Patents Filed",
        value: "1",
        icon: "fa-solid fa-certificate"
      }
    ];
    const categories = [
      "All",
      "Mobile & Production",
      "IoT & Emergency Systems",
      "Mobile & Sustainability",
      "Web & Mobile Application",
      "Mobile Application",
      "Web Application",
      "AI & Machine Learning"
    ];
    let baseFiltered = steps;
    let filteredByQuery = searchQuery.trim() ? baseFiltered.filter((step) => {
      const q = searchQuery.toLowerCase();
      return step.name.toLowerCase().includes(q) || step.description.toLowerCase().includes(q) || step.technologies.some((t) => t.toLowerCase().includes(q));
    }) : baseFiltered;
    let filteredSteps = [...filteredByQuery].sort((a, b) => {
      if (a.priority && b.priority) return a.priority - b.priority;
      if (a.priority) return -1;
      if (b.priority) return 1;
      if (Number(b.featured) !== Number(a.featured)) {
        return Number(b.featured) - Number(a.featured);
      }
      return a.name.localeCompare(b.name);
    });
    head($$renderer2, ($$renderer3) => {
      $$renderer3.push(`<script class="svelte-1uha8ag">
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
  <\/script><!---->`);
    });
    $$renderer2.push(`<div id="hero-particles" class="fixed inset-0 pointer-events-none svelte-1uha8ag" style="z-index: 0;"></div> <main class="flex flex-col flex-1 p-4 relative svelte-1uha8ag" style="z-index: 1;"><section id="introPage" class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 min-h-[80vh] svelte-1uha8ag"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 relative svelte-1uha8ag" style="z-index: 2;"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl svelte-1uha8ag">Hi! I'm <span class="poppins text-violet-400 svelte-1uha8ag">Allen Febi</span> M A <br class="svelte-1uha8ag"/>Full Stack <span class="poppins text-violet-400 svelte-1uha8ag">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl svelte-1uha8ag"><span class="text-violet-400 svelte-1uha8ag">MS Computer Science</span> student at Northeastern University with <span class="text-violet-400 svelte-1uha8ag">11 months</span> of industry experience. Specializing in Flutter, MERN Stack, and IoT solutions.</p> <div class="flex flex-col sm:flex-row gap-4 mx-auto lg:mr-auto lg:ml-0 svelte-1uha8ag"><a href="#contact" class="blueShadow text-base sm:text-lg md:text-xl poppins relative px-6 py-3 rounded-full bg-violet-400 text-slate-950 hover:bg-violet-500 transition-all duration-300 inline-block transform hover:scale-105 svelte-1uha8ag"><h4 class="relative svelte-1uha8ag">Get in touch →</h4></a> <a href="/resume.pdf" download="" class="text-base sm:text-lg md:text-xl poppins relative px-6 py-3 rounded-full bg-transparent border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-slate-950 transition-all duration-300 inline-block transform hover:scale-105 svelte-1uha8ag"><h4 class="relative flex items-center gap-2 svelte-1uha8ag"><i class="fa fa-download svelte-1uha8ag"></i> Download Resume</h4></a></div></div> <div class="relative shadow-2xl grid place-items-center svelte-1uha8ag" style="z-index: 2;"><img src="/images/profile.png" alt="Allen Febi M A - Full Stack Developer" class="object-cover z-[2] max-h-[70vh] rounded-lg svelte-1uha8ag"/></div></section> <section class="py-20 lg:py-32 flex flex-col gap-24 svelte-1uha8ag" id="projects"><div class="flex flex-col gap-2 text-center svelte-1uha8ag"><h6 class="text-large sm:text-xl md:text-2xl svelte-1uha8ag">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl svelte-1uha8ag">Curious to <span class="poppins text-violet-400 svelte-1uha8ag">see</span> my work?</h3></div> <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 svelte-1uha8ag"><div class="relative w-full sm:w-80 svelte-1uha8ag"><input type="text"${attr("value", searchQuery)} class="w-full px-4 py-2 pl-10 rounded-full bg-slate-800/60 border border-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition svelte-1uha8ag" placeholder="Search projects or tech..." aria-label="Search projects"/> <i class="fa fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 svelte-1uha8ag"></i></div> `);
    $$renderer2.select(
      {
        value: sortBy,
        class: "px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-violet-500",
        "aria-label": "Sort projects"
      },
      ($$renderer3) => {
        $$renderer3.option(
          { value: "Featured", class: "" },
          ($$renderer4) => {
            $$renderer4.push(`Featured`);
          },
          "svelte-1uha8ag"
        );
        $$renderer3.option(
          { value: "A–Z", class: "" },
          ($$renderer4) => {
            $$renderer4.push(`A–Z`);
          },
          "svelte-1uha8ag"
        );
      },
      "svelte-1uha8ag"
    );
    $$renderer2.push(`</div> <div class="flex flex-wrap justify-center gap-3 mb-8 svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let category = each_array[$$index];
      $$renderer2.push(`<button${attr_class(
        `px-4 py-2 rounded-full border transition-all duration-200 ${stringify(selectedCategory === category ? "bg-violet-600 text-white border-violet-600" : "bg-transparent text-gray-300 border-gray-600 hover:border-violet-400 hover:text-violet-400")}`,
        "svelte-1uha8ag"
      )}>${escape_html(category)}</button> `);
      if (filteredSteps.length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="text-center text-gray-400 italic mb-8 svelte-1uha8ag">No projects match your filters. Try a different search or category.</div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-20 gap-x-8 svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(filteredSteps);
    for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
      let step = each_array_1[i];
      AnimateOnScroll($$renderer2, {
        animation: "fadeInUp",
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="relative pt-12 svelte-1uha8ag"><div class="project-card p-6 sm:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group hover:border-violet-400 duration-300 bg-slate-800/30 backdrop-blur-sm hover:bg-slate-800/50 transition-all h-full svelte-1uha8ag"><div class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-950 grid place-items-center text-4xl md:text-5xl rounded-full w-20 h-20 border-2 border-violet-600 group-hover:border-violet-400 group-hover:scale-110 transition-all duration-200 z-10 svelte-1uha8ag"><i${attr_class(clsx(step.icon), "svelte-1uha8ag")}></i></div> <div class="flex flex-col gap-2 pt-4 svelte-1uha8ag"><h3 class="font-medium text-xl sm:text-2xl md:text-3xl text-white svelte-1uha8ag">${escape_html(step.name)}</h3> `);
          if (step.featured) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<span class="inline-block px-2 py-1 bg-violet-600 text-white text-xs rounded-full mx-auto svelte-1uha8ag">Featured Project</span>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex-1 space-y-3 svelte-1uha8ag"><p class="text-gray-300 leading-relaxed svelte-1uha8ag">${escape_html(step.description)}</p> <div class="flex flex-wrap gap-2 justify-center svelte-1uha8ag"><!--[-->`);
          const each_array_2 = ensure_array_like(step.technologies);
          for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
            let tech = each_array_2[$$index_1];
            $$renderer3.push(`<span class="px-2 py-1 bg-violet-600/20 text-violet-300 text-xs rounded-full border border-violet-600/30 svelte-1uha8ag">${escape_html(tech)}</span>`);
          }
          $$renderer3.push(`<!--]--></div> <div class="flex justify-between items-center text-xs svelte-1uha8ag"><span class="text-gray-400 svelte-1uha8ag">${escape_html(step.category)}</span> <span class="px-2 py-1 bg-green-600/20 text-green-300 rounded-full svelte-1uha8ag">${escape_html(step.status)}</span></div> `);
          if (step.award) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="text-yellow-400 text-sm font-medium svelte-1uha8ag">${escape_html(step.award)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (step.achievement) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="text-green-400 text-sm font-medium svelte-1uha8ag">${escape_html(step.achievement)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (step.patent) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="text-blue-400 text-sm font-medium svelte-1uha8ag">${escape_html(step.patent)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          if (step.publication) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="text-violet-400 text-sm font-medium svelte-1uha8ag">${escape_html(step.publication)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div${attr_class(`flex ${stringify(step.demo ? "justify-between" : "justify-center")} items-center gap-4 mt-4`, "svelte-1uha8ag")}>`);
          if (step.href) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a${attr("href", step.href)} target="_blank"${attr_class(`${stringify(step.demo ? "flex-1" : "w-full")} blueShadow relative px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 transition-all duration-300 transform hover:scale-105`, "svelte-1uha8ag")}><span class="relative flex items-center justify-center gap-2 svelte-1uha8ag"><i class="fab fa-github svelte-1uha8ag"></i> View Code</span></a>`);
          } else {
            $$renderer3.push("<!--[!-->");
            if (!step.demo) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<div class="w-full px-4 py-2 bg-slate-700/50 text-gray-400 rounded-lg text-center border border-slate-600/50 svelte-1uha8ag"><span class="flex items-center justify-center gap-2 svelte-1uha8ag"><i class="fa fa-lock svelte-1uha8ag"></i> Private Repository</span></div>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]-->`);
          }
          $$renderer3.push(`<!--]--> `);
          if (step.demo) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<a${attr("href", step.demo)} target="_blank" class="flex-1 relative px-4 py-2 rounded-lg bg-transparent border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white transition-all duration-300 transform hover:scale-105 svelte-1uha8ag"><span class="relative flex items-center justify-center gap-2 svelte-1uha8ag"><i class="fa fa-external-link-alt svelte-1uha8ag"></i> Live Demo</span></a>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div></div></div>`);
        }
      });
    }
    $$renderer2.push(`<!--]--></div></section> <section id="skills" class="py-20 lg:py-32 flex flex-col gap-16 svelte-1uha8ag"><div class="flex flex-col gap-2 text-center svelte-1uha8ag"><h6 class="text-large sm:text-xl md:text-2xl svelte-1uha8ag">What I bring to the table</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl svelte-1uha8ag"><span class="poppins text-violet-400 svelte-1uha8ag">Skills</span> &amp; Expertise</h3></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full svelte-1uha8ag"><!--[-->`);
    const each_array_3 = ensure_array_like(highlights);
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let highlight = each_array_3[$$index_3];
      $$renderer2.push(`<div class="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-xl p-6 text-center group hover:border-violet-400/50 transition-all duration-300 hover:scale-105 svelte-1uha8ag"><i${attr_class(`${stringify(highlight.icon)} text-3xl text-violet-400 mb-3 group-hover:scale-110 transition-transform duration-300`, "svelte-1uha8ag")}></i> <div class="text-3xl font-bold text-white mb-1 svelte-1uha8ag">${escape_html(highlight.value)}</div> <div class="text-sm text-gray-400 svelte-1uha8ag">${escape_html(highlight.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full svelte-1uha8ag"><!--[-->`);
    const each_array_4 = ensure_array_like(skillCategories);
    for (let $$index_5 = 0, $$length = each_array_4.length; $$index_5 < $$length; $$index_5++) {
      let category = each_array_4[$$index_5];
      $$renderer2.push(`<div class="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-violet-700/30 hover:border-violet-500/50 transition-all duration-300 group svelte-1uha8ag"><div class="flex items-center gap-4 mb-6 svelte-1uha8ag"><div${attr_class(`w-14 h-14 rounded-xl bg-gradient-to-br ${stringify(category.color)} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`, "svelte-1uha8ag")}><i${attr_class(clsx(category.icon), "svelte-1uha8ag")}></i></div> <div class="flex-1 svelte-1uha8ag"><h4 class="text-xl md:text-2xl font-semibold text-white group-hover:text-violet-300 transition-colors svelte-1uha8ag">${escape_html(category.title)}</h4> <p class="text-sm text-gray-400 mt-1 svelte-1uha8ag">${escape_html(category.description)}</p></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 svelte-1uha8ag"><!--[-->`);
      const each_array_5 = ensure_array_like(category.skills);
      for (let $$index_4 = 0, $$length2 = each_array_5.length; $$index_4 < $$length2; $$index_4++) {
        let skill = each_array_5[$$index_4];
        $$renderer2.push(`<div class="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50 hover:border-violet-500/50 transition-all duration-300 hover:bg-slate-900/80 group/item svelte-1uha8ag"><div class="flex items-center gap-3 mb-3 svelte-1uha8ag"><i${attr_class(`${stringify(skill.icon)} text-xl text-violet-400 group-hover/item:text-violet-300 transition-colors`, "svelte-1uha8ag")}></i> <span class="font-medium text-white text-sm svelte-1uha8ag">${escape_html(skill.name)}</span></div> <div class="flex items-center justify-between text-xs svelte-1uha8ag"><span class="text-gray-400 flex items-center gap-1 svelte-1uha8ag"><i class="fa-solid fa-clock text-xs svelte-1uha8ag"></i> ${escape_html(skill.experience)}</span> <span class="text-violet-400 flex items-center gap-1 svelte-1uha8ag"><i class="fa-solid fa-folder text-xs svelte-1uha8ag"></i> ${escape_html(skill.projects)} ${escape_html(skill.projects === 1 ? "project" : "projects")}</span></div></div>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="max-w-4xl mx-auto w-full svelte-1uha8ag"><h4 class="text-center text-xl font-semibold text-gray-300 mb-6 svelte-1uha8ag">Also Experienced With</h4> <div class="flex flex-wrap gap-3 justify-center svelte-1uha8ag"><!--[-->`);
    const each_array_6 = ensure_array_like([
      "React Native",
      "Redux",
      "Socket.io",
      "REST APIs",
      "Git & GitHub",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "AWS",
      "Responsive Design",
      "3D Graphics",
      "Real-time Systems",
      "Agile/Scrum",
      "CI/CD"
    ]);
    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
      let tag = each_array_6[$$index_6];
      $$renderer2.push(`<span class="px-4 py-2 bg-slate-800/50 border border-violet-700/30 rounded-full text-sm text-gray-300 hover:border-violet-500/50 hover:text-white hover:bg-slate-800/70 transition-all duration-300 cursor-default svelte-1uha8ag">${escape_html(tag)}</span>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative svelte-1uha8ag"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4 svelte-1uha8ag"><h6 class="text-large sm:text-xl md:text-2xl svelte-1uha8ag">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl svelte-1uha8ag">A bit <span class="poppins text-violet-400 svelte-1uha8ag">about</span> me.</h3></div> <div class="mx-auto max-w-4xl text-center svelte-1uha8ag"><p class="text-xl sm:text-2xl md:text-3xl font-semibold poppins text-violet-400 mb-6 svelte-1uha8ag">About Me</p> <p class="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6 svelte-1uha8ag">MS Computer Science student at <span class="text-violet-400 font-semibold svelte-1uha8ag">Northeastern University</span> with real-world industry experience. 
        I've developed production applications serving thousands of users, published research in IEEE conferences, 
        and filed patents for innovative IoT solutions.</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mt-8 svelte-1uha8ag"><div class="bg-slate-800/40 border border-violet-700/30 rounded-lg p-4 svelte-1uha8ag"><h4 class="text-violet-400 font-semibold mb-2 flex items-center gap-2 svelte-1uha8ag"><i class="fa-solid fa-graduation-cap svelte-1uha8ag"></i> Education</h4> <p class="text-sm text-gray-300 svelte-1uha8ag"><strong class="svelte-1uha8ag">MS Computer Science</strong><br class="svelte-1uha8ag"/> Northeastern University, Boston<br class="svelte-1uha8ag"/> Aug 2025 - Dec 2027</p> <p class="text-sm text-gray-300 mt-3 svelte-1uha8ag"><strong class="svelte-1uha8ag">BTech Computer Science</strong><br class="svelte-1uha8ag"/> VIT-AP University, India<br class="svelte-1uha8ag"/> CGPA: 8.93/10</p></div> <div class="bg-slate-800/40 border border-violet-700/30 rounded-lg p-4 svelte-1uha8ag"><h4 class="text-violet-400 font-semibold mb-2 flex items-center gap-2 svelte-1uha8ag"><i class="fa-solid fa-briefcase svelte-1uha8ag"></i> Experience</h4> <p class="text-sm text-gray-300 svelte-1uha8ag"><strong class="svelte-1uha8ag">Software Engineer</strong><br class="svelte-1uha8ag"/> Siga Infotech, Trivandrum<br class="svelte-1uha8ag"/> Sept 2024 - July 2025</p> <p class="text-sm text-gray-300 mt-3 svelte-1uha8ag"><strong class="svelte-1uha8ag">Application Developer Intern</strong><br class="svelte-1uha8ag"/> IIT Guwahati<br class="svelte-1uha8ag"/> Jan 2023 - Apr 2023</p></div></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mx-auto max-w-6xl svelte-1uha8ag"><!--[-->`);
    const each_array_7 = ensure_array_like(benefits);
    for (let index = 0, $$length = each_array_7.length; index < $$length; index++) {
      let benefit = each_array_7[index];
      $$renderer2.push(`<div class="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 svelte-1uha8ag"><div class="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 rotate-3 svelte-1uha8ag"><i${attr_class(clsx(benefit.icon), "svelte-1uha8ag")}></i></div> <div class="flex flex-col gap-4 mt-4 svelte-1uha8ag"><h3 class="text-2xl sm:text-3xl font-semibold text-white group-hover:text-violet-400 transition-colors duration-300 svelte-1uha8ag">${escape_html(benefit.name)}</h3> <p class="text-gray-300 leading-relaxed text-base svelte-1uha8ag">${escape_html(benefit.description)}</p></div> <div class="absolute bottom-0 right-0 w-32 h-32 bg-violet-500/5 rounded-tl-full group-hover:bg-violet-500/10 transition-colors duration-300 overflow-hidden svelte-1uha8ag"><div class="absolute bottom-4 right-4 w-20 h-20 border-2 border-violet-500/20 rounded-full group-hover:scale-150 transition-transform duration-500 svelte-1uha8ag"></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-center bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm border border-violet-500/20 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto svelte-1uha8ag"><p class="text-xl sm:text-2xl font-semibold text-white mb-4 svelte-1uha8ag">Ready to collaborate?</p> <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto svelte-1uha8ag">I'm always excited about new opportunities and challenges. Let's connect and create something amazing together!</p> <a href="#contact" class="inline-flex items-center gap-2 px-8 py-4 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/50 hover:scale-105 svelte-1uha8ag"><span class="svelte-1uha8ag">Let's Talk</span> <i class="fa fa-arrow-right svelte-1uha8ag"></i></a></div></section> <section id="contact" class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 svelte-1uha8ag"><div class="flex flex-col gap-2 text-center svelte-1uha8ag"><h6 class="text-large sm:text-xl md:text-2xl svelte-1uha8ag">Let's work together</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl svelte-1uha8ag">Get in <span class="poppins text-violet-400 svelte-1uha8ag">Touch</span></h3></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto w-full svelte-1uha8ag"><div class="space-y-8 svelte-1uha8ag"><div class="svelte-1uha8ag"><h4 class="text-2xl font-semibold mb-6 text-violet-300 svelte-1uha8ag">Let's Connect</h4> <p class="text-gray-300 text-lg leading-relaxed mb-8 svelte-1uha8ag">I'm always interested in new opportunities, collaborations, and interesting projects.
            Whether you have a question about my work or want to discuss a potential project,
            feel free to reach out!</p></div> <div class="space-y-6 svelte-1uha8ag"><div class="flex items-center gap-4 svelte-1uha8ag"><div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center svelte-1uha8ag"><i class="fa fa-envelope text-white svelte-1uha8ag"></i></div> <div class="svelte-1uha8ag"><p class="text-white font-medium svelte-1uha8ag">Email</p> <div class="flex items-center gap-2 svelte-1uha8ag"><a href="mailto:allsurej@gmail.com" class="text-violet-400 hover:text-violet-300 transition-colors svelte-1uha8ag">allsurej@gmail.com</a> <button class="px-2 py-1 text-xs rounded border border-slate-600 hover:border-violet-400 text-gray-300 hover:text-white transition svelte-1uha8ag">Copy</button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="flex items-center gap-4 svelte-1uha8ag"><div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center svelte-1uha8ag"><i class="fa fa-phone text-white svelte-1uha8ag"></i></div> <div class="svelte-1uha8ag"><p class="text-white font-medium svelte-1uha8ag">Phone</p> <div class="flex items-center gap-2 svelte-1uha8ag"><a href="tel:+16176068268" class="text-violet-400 hover:text-violet-300 transition-colors svelte-1uha8ag">(617) 606-8268</a> <button class="px-2 py-1 text-xs rounded border border-slate-600 hover:border-violet-400 text-gray-300 hover:text-white transition svelte-1uha8ag">Copy</button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div> <div class="flex items-center gap-4 svelte-1uha8ag"><div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center svelte-1uha8ag"><i class="fab fa-github text-white svelte-1uha8ag"></i></div> <div class="svelte-1uha8ag"><p class="text-white font-medium svelte-1uha8ag">GitHub</p> <a href="https://github.com/all3n2601" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors svelte-1uha8ag">github.com/all3n2601</a></div></div> <div class="flex items-center gap-4 svelte-1uha8ag"><div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center svelte-1uha8ag"><i class="fab fa-linkedin text-white svelte-1uha8ag"></i></div> <div class="svelte-1uha8ag"><p class="text-white font-medium svelte-1uha8ag">LinkedIn</p> <a href="https://www.linkedin.com/in/all3n-f3bi/" target="_blank" class="text-violet-400 hover:text-violet-300 transition-colors svelte-1uha8ag">Connect with me</a></div></div></div></div> <div class="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-violet-900/30 svelte-1uha8ag"><form class="space-y-6 svelte-1uha8ag"><div class="grid grid-cols-1 sm:grid-cols-2 gap-4 svelte-1uha8ag"><div class="svelte-1uha8ag"><label for="name" class="block text-sm font-medium text-gray-300 mb-2 svelte-1uha8ag">Name *</label> <input type="text" id="name"${attr("value", formData.name)} required class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all svelte-1uha8ag" placeholder="Your name"/></div> <div class="svelte-1uha8ag"><label for="email" class="block text-sm font-medium text-gray-300 mb-2 svelte-1uha8ag">Email *</label> <input type="email" id="email"${attr("value", formData.email)} required class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all svelte-1uha8ag" placeholder="your.email@example.com"/></div></div> <div class="svelte-1uha8ag"><label for="subject" class="block text-sm font-medium text-gray-300 mb-2 svelte-1uha8ag">Subject *</label> <input type="text" id="subject"${attr("value", formData.subject)} required class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all svelte-1uha8ag" placeholder="What's this about?"/></div> <div class="svelte-1uha8ag"><label for="message" class="block text-sm font-medium text-gray-300 mb-2 svelte-1uha8ag">Message *</label> <textarea id="message" required rows="5" class="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none svelte-1uha8ag" placeholder="Tell me about your project or question...">`);
    const $$body = escape_html(formData.message);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <button type="submit"${attr("disabled", !isFormValid || isSubmitting, true)} class="w-full blueShadow relative px-6 py-3 rounded-lg bg-violet-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:bg-violet-700 transform hover:scale-[1.02] disabled:transform-none svelte-1uha8ag"><span class="relative flex items-center justify-center gap-2 svelte-1uha8ag">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<i class="fa fa-paper-plane svelte-1uha8ag"></i> Send Message`);
    }
    $$renderer2.push(`<!--]--></span></button></form></div></div></section></main>`);
  });
}
export {
  _page as default
};
