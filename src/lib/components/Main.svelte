<script>
  import Scene3D from './Scene3D.svelte';
  
  const projects = [
    {
      name: "Natural Disaster and Escalation Management",
      icon: "fa fa-tornado",
      description: "Emergency response system using LoRaWAN for disaster communication",
      href: "https://github.com/all3n2601/Natural-Disaster-Escalation-and-Administration-Framework",
      technologies: ["React.js", "Node.js", "Arduino C", "MongoDB", "LoRaWAN", "Socket.io"],
      category: "IoT & Emergency Systems",
      status: "Completed",
      featured: true
    },
    {
      name: "EnergyP2P",
      icon: "fa fa-bolt",
      description: "Peer-to-peer renewable energy trading platform with smart matching",
      href: "https://github.com/all3n2601/EnergyP2P",
      technologies: ["Flutter", "Dart", "Firebase", "Firestore"],
      category: "Mobile & Sustainability",
      status: "In Development",
      featured: true
    },
    {
      name: "NavX",
      icon: "fa fa-car",
      description: "Safe carpooling platform with enhanced women safety features - 2nd Prize Winner",
      href: "https://github.com/all3n2601/NavX-CodeHunt",
      technologies: ["MERN Stack", "Redux", "TailwindCSS", "Real-time Tracking"],
      category: "Web Application",
      status: "Completed",
      featured: true,
      award: "🥈 2nd Prize - 24 Hour Hackathon"
    }
  ];
</script>

<!-- 3D Background -->
<Scene3D />

<main class="flex flex-col flex-1 p-4 relative z-10">
  <!-- Hero Section -->
  <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14 min-h-screen items-center">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">M A Allen Febi</span>
      </h2>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl poppins text-violet-400">
        Full Stack Developer
      </h3>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400">favorite tech</span> includes Java, Flutter, TailwindCSS, Node.js + Express.js & JavaScript or Firebase/Firestore!
      </p>
      <a
        href="#contact"
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-violet-400 text-slate-950 hover:bg-violet-500 transition-all duration-300 inline-block"
      >
        <div class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </a>
    </div>
    
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src="images/profile.png"
        alt="M A Allen Febi - Full Stack Developer"
        class="object-cover z-[2] max-h-[70vh] rounded-lg"
      />
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h4 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h4>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      {#each projects as project}
        <div class="flex flex-col gap-6 duration-200 group cursor-pointer h-full">
          <div class="bg-slate-800 border border-solid border-slate-700 text-slate-50 rounded-lg p-6 flex-1 group-hover:border-violet-700 transition-all duration-300">
            {#if project.featured}
              <div class="flex justify-between items-start mb-4">
                <span class="bg-violet-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
                {#if project.award}
                  <span class="text-yellow-400 text-xs">{project.award}</span>
                {/if}
              </div>
            {/if}
            
            <div class="w-16 h-16 bg-violet-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500 transition-colors duration-300">
              <i class="{project.icon} text-2xl text-white"></i>
            </div>
            
            <h3 class="font-medium text-xl mb-3 group-hover:text-violet-400 transition-colors duration-300">
              {project.name}
            </h3>
            
            <p class="text-slate-400 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              {#each project.technologies as tech}
                <span class="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-md">
                  {tech}
                </span>
              {/each}
            </div>
            
            <div class="mt-auto">
              {#if project.href}
                <a
                  href={project.href}
                  target="_blank"
                  class="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm group-hover:shadow-lg group-hover:shadow-violet-600/25"
                >
                  <i class="fab fa-github"></i>
                  View Project
                  <i class="fa fa-external-link-alt text-xs"></i>
                </a>
              {:else}
                <span class="inline-flex items-center gap-2 bg-slate-600 text-slate-300 px-4 py-2 rounded-lg text-sm cursor-not-allowed">
                  <i class="fa fa-clock"></i>
                  Coming Soon
                </span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- About Section -->
  <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
    <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
      <h4 class="text-large sm:text-xl md:text-2xl">Want to know more?</h4>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      <div class="flex gap-6 sm:gap-8">
        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">01</p>
        <div class="flex flex-col gap-6 sm:gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-5xl">a passionate full-stack developer</h3>
          <p>With expertise spanning from IoT systems to AI-powered applications, I've successfully delivered 7+ projects using cutting-edge technologies. My journey from Arduino programming to modern web frameworks demonstrates my adaptability and commitment to continuous learning.</p>
        </div>
      </div>
      
      <div class="flex gap-6 sm:gap-8">
        <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">02</p>
        <div class="flex flex-col gap-6 sm:gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-5xl">an innovative problem solver</h3>
          <p>I thrive on tackling complex challenges, from developing emergency communication systems using LoRaWAN to creating AI-powered legal assistants. My projects have earned recognition including hackathon prizes and patent approvals.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Contact Section -->
  <section id="contact" class="py-20 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24">
    <div class="flex flex-col gap-2 text-center">
      <h4 class="text-large sm:text-xl md:text-2xl">Ready to collaborate?</h4>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Let's get in <span class="poppins text-violet-400">touch</span>
      </h3>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-violet-400">Get in Touch</h3>
          <p class="text-gray-300 leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, or just have a chat about technology. 
            Whether you're looking for a developer, have a project idea, or want to collaborate, I'd love to hear from you!
          </p>
        </div>
        
        <div class="space-y-6">
          <div class="flex items-center gap-4 group">
            <div class="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
              <i class="fa fa-envelope text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">Email</p>
              <a 
                href="mailto:allenabi2614@gmail.com"
                class="text-white hover:text-violet-400 transition-colors duration-300"
              >
                allenabi2614@gmail.com
              </a>
            </div>
          </div>
          
          <div class="flex items-center gap-4 group">
            <div class="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
              <i class="fab fa-linkedin text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/all3n-f3bi/"
                target="_blank"
                class="text-white hover:text-violet-400 transition-colors duration-300"
              >
                all3n-f3bi
              </a>
            </div>
          </div>
          
          <div class="flex items-center gap-4 group">
            <div class="w-12 h-12 bg-violet-600 rounded-lg flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
              <i class="fab fa-github text-white"></i>
            </div>
            <div>
              <p class="text-sm text-gray-400">GitHub</p>
              <a 
                href="https://github.com/all3n2601"
                target="_blank"
                class="text-white hover:text-violet-400 transition-colors duration-300"
              >
                all3n2601
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <form class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              required
              class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              id="message"
              required
              rows="5"
              class="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
              placeholder="Tell me about your project or just say hello!"
            ></textarea>
          </div>
          
          <button
            type="submit"
            class="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <i class="fa fa-paper-plane group-hover:translate-x-1 transition-transform duration-300"></i>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</main>
