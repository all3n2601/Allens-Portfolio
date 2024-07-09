<script>
  import Step from "./Step.svelte";

  let steps = [
    {
      name: "Natural Disaster and Escalation Management",
      icon: "fa fa-tornado",
      description: "",
      href: "https://github.com/all3n2601/Natural-Disaster-Escalation-and-Administration-Framework",
    },
    {
      name: "EnergyP2P",
      icon: "fa fa-bolt",
      description: "",
      href: "",
    },
    {
      name: "NavX",
      icon: "fa bg-white fa-car",
      description: "",
      href: "https://github.com/all3n2601/NavX-CodeHunt",
    },
    {
      name: "legal Document Assistant",
      icon: "fa bg-white fa-file-signature",
      description: "",
      href: "https://github.com/all3n2601/Legal-Assistant-LLM-Model",
    },
    {
      name: "Smart Helmet for Miners",
      icon: "fa fa-medkit",
      description: "",
      href: "https://github.com/all3n2601/Smart-Helmet-For-Miners-Using-Arduino",
    },
    {
      name: "Riders Paradise",
      icon: "fa bg-white fa-motorcycle",
      description: "",
      href: "https://github.com/all3n2601/Riders-Paradise",
    },
    {
      name: "Hospital Management System",
      icon: "fa bg-white fa-hospital",
      description: "",
      href: "https://github.com/all3n2601/Hospital-Management-System-MERN-Stack",
    },
  ];

  let benefits = [
  {
    name: "a self-driven developer",
    description: 
      "I have taken the initiative to learn coding through university resources and free online materials, developing a passion for the creativity and problem-solving involved in creating innovative online experiences. Starting with JavaScript, HTML & CSS, I have expanded my knowledge to include various JavaScript frameworks, backend programming, design, cloud services, and much more.",
  },
  {
    name: "an excellent problem solver",
    description: 
      "I excel at solving complex problems, approaching challenges with creativity and analytical thinking. This skill allows me to develop effective and efficient solutions, enhancing the quality and functionality of the projects I work on.",
  },
  {
    name: "a quick learner",
    description: 
      "I have a strong ability to quickly grasp new concepts and technologies. This adaptability enables me to stay current with industry trends and continuously improve my skill set, making me a valuable asset to any team.",
  },
  {
    name: "a quick communicator",
    description: 
      "Effective and prompt communication is one of my key strengths. I value transparency and constructive dialogue, which help me build strong relationships and ensure my productivity in any collaborative environment.",
  },
];
</script>

<main class="flex flex-col flex-1 p-4">
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">M A Allen </span>Febi
        <br />Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400"> favorite tech</span> includes Java , Flutter
        , TailwindCSS , Node.js + Express.js & JavaScript or Firebase/Firestore!
      </p>
      <button
        class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-violet-400 text-slate-950"
      >
        <div
          class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <h4 class="relative z-9">Get in touch &rarr;</h4>
      </button>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.png"}
        alt="Zetane Engine"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
    <!-- <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"images/zetane-engine.jpeg"}
                alt="Zetane Engine"
                class="w-full h-full object-cover z-[2]"
            />
        </div> -->
  </section>
  <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
    <div class="flex flex-col gap-2 text-center">
      <h6 class="text-large sm:text-xl md:text-2xl">
        A few of my creative endeavors.
      </h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        Curious to <span class="poppins text-violet-400">see</span> my work?
      </h3>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
      <Step step={steps[0]}>
        <p>
          Utilizes LORAWAN for communication during Disaster Times and provide
          Administration for Escalation.<strong class="text-violet-400">
            React.js, Node, Arduino C, & MongoDB
          </strong>
          Uses Socket for communication and MongoDB as storage cluster.
        </p>
      </Step>
      <Step step={steps[1]}>
        <p>
          Android application to manage peer to peer renewable energy transfer.
          <strong class="text-violet-400">Flutter, Dart </strong>
          & <strong class="text-violet-400">Firebase</strong>
          Uses Firestore for data storage and Matchmaking Algorithm to provide efficient
          matches during energy transfers.
        </p>
      </Step>
      <Step step={steps[2]}>
        <p>
          The NavX is a <strong class="text-violet-400">MERN based</strong>
          web application,to provide car and bike pooling with enhanced women safety
          measures.
          <strong class="text-violet-400">Redux</strong>
          used to manage state and
          <strong class="text-violet-400">TailwindCSS</strong> for Responsiveness.
          🥈Recieved 2nd Prize at a 24 Hour Hackathon.
        </p>
      </Step>
      <Step step={steps[3]}>
        <p>
          LLM powered legal assistant to help individuals and small buisnesses
          in legal work.
          <strong class="text-violet-400"
            >LangChain, HuggingFace, ChainLit</strong
          > to develop a standalone application to provide legal advice, model trained
          with actual legal documents from Indian Government
        </p>
      </Step>

      <Step step={steps[4]}>
        <p>
          The Smart Helmet for Miners equipped with Sensors connected to
          Arduino, transferred to BLYNK Backend using LORAWAN to transfer
          packets.
          <strong class="text-violet-400">Arduino C, Blynk IOT</strong>
          Multiple Arduino's handle data between the miner and Base, reading based
          Emergency Protocols. Patent Issued by IPA.
        </p>
      </Step>

      <Step step={steps[5]}>
        <p>
          Riders Paradise - your ultimate destination for everything
          two-wheeled! MERN Bike Showroom
          <strong class="text-violet-400"
            >MERN, React Three, Redux, TailwindCSS</strong
          >
          3D Model using drei, redux for state management and MongoDB as data bucket.
        </p>
      </Step>

      <Step step={steps[6]}>
        <p>
          This Hospital Management System is a web application developed using
          <strong class="text-violet-400">MERN, Framer, Redux, TailwindCSS</strong> 
          with Redux for state management and TailwindCSS for responsive
          UI design. The system aims to streamline hospital operations, improve patient
          care, and enhance overall efficiency.
        </p>
      </Step>
    </div>
  </section>
  <section
    id="about"
    class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each benefits as benefit, index}
        <!-- <div class="flex flex-col gap-2 mx-auto">
                    <div class="flex items-end gap-4">
                        <p
                            class="poppins text-6xl sm:text-7xl md:text-8xl text-slate-500 font-medium"
                        >
                            {benefit.metric}
                        </p>
                        <p
                            class="text-xl sm:text-2xl md:text-3xl capitalize pb-2"
                        >
                            {benefit.name}
                        </p>
                    </div>
                    <p class="text-center italic">- {benefit.description}</p>
                </div> -->
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {benefit.name}
            </h3>
            <p>{benefit.description}</p>
          </div>
        </div>
      {/each}
    </div>

    <p class="mx-auto">So Still Looking for Ways to Invest If Not :)</p>
  </section>
</main>
