

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": true
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B98n0UX6.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B-0wejU6.js","_app/immutable/chunks/Dwm2ogbv.js","_app/immutable/chunks/X5P3KvA1.js","_app/immutable/chunks/B7c5JMVo.js"];
export const stylesheets = ["_app/immutable/assets/0.BPEeNHig.css"];
export const fonts = [];
