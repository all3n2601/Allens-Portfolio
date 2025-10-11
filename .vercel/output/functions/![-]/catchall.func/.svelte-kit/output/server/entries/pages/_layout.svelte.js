import { x as attr_class, y as ensure_array_like, z as attr, F as bind_props, G as stringify, J as slot } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/context.js";
import "clsx";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { y = void 0 } = $$props;
    const tabs = [
      { name: "Projects", link: "#projects" },
      { name: "Skills", link: "#skills" },
      { name: "About", link: "#about" },
      { name: "Contact", link: "#contact" }
    ];
    $$renderer2.push(`<header${attr_class(`sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid backdrop-blur-sm ${stringify(y > 0 ? " py-4 bg-slate-950/90 border-violet-950" : " py-6 bg-transparent border-transparent")}`)}><h1 class="font-medium"><b class="font-bold poppins text-white">M A Allen Febi</b></h1> <div class="hidden sm:flex items-center gap-4"><!--[-->`);
    const each_array = ensure_array_like(tabs);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tab = each_array[$$index];
      $$renderer2.push(`<a${attr("href", tab.link)} class="duration-200 hover:text-violet-400 text-white"><p>${escape_html(tab.name)}</p></a>`);
    }
    $$renderer2.push(`<!--]--> <a href="#contact" class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-400 text-slate-950 hover:bg-violet-500 transition-colors duration-200"><div class="absolute top-0 right-full w-full h-full bg-white opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h4 class="relative z-9">Get in touch</h4></a></div> <button class="sm:hidden text-white text-xl p-2" aria-label="Toggle mobile menu"><i${attr_class(`fa ${stringify("fa-bars")}`)}></i></button></header> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { y });
  });
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="py-8 bg-slate-900 border-t border-solid border-violet-950"><div class="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4"><div class="text-center sm:text-left"><p class="text-gray-400 text-sm">© 2024 M A Allen Febi. Built with Svelte 5, TailwindCSS &amp; Threlte</p></div> <div class="flex items-center gap-6"><a href="https://github.com/all3n2601" target="_blank" class="text-gray-400 hover:text-violet-400 transition-colors duration-200" aria-label="GitHub"><i class="fab fa-github text-xl"></i></a> <a href="https://www.linkedin.com/in/all3n-f3bi/" target="_blank" class="text-gray-400 hover:text-violet-400 transition-colors duration-200" aria-label="LinkedIn"><i class="fab fa-linkedin text-xl"></i></a> <a href="mailto:allenabi2614@gmail.com" class="text-gray-400 hover:text-violet-400 transition-colors duration-200" aria-label="Email"><i class="fa fa-envelope text-xl"></i></a></div></div></footer>`);
}
function _layout($$renderer, $$props) {
  let y = 0;
  $$renderer.push(`<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen" style="z-index: 1;"><div${attr_class(`fixed bottom-0 w-full duration-200 p-10 flex z-[10] ${stringify("pointer-events-none opacity-0")}`)}><button class="ml-auto rounded-full bg-white text-violet-400 px-3 sm:px-4 hover:bg-violet-400 hover:text-white cursor-pointer transition-colors duration-200"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div> `);
  Header($$renderer, { y });
  $$renderer.push(`<!----> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
