

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false,
  "prerender": true
};
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CooG6j6M.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BhTo0U-B.js","_app/immutable/chunks/CsO8xuU_.js","_app/immutable/chunks/d11F8gSC.js","_app/immutable/chunks/bND_sB_Q.js"];
export const stylesheets = ["_app/immutable/assets/0.BPEeNHig.css"];
export const fonts = [];
