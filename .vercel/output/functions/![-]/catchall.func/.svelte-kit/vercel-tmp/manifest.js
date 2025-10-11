export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/particles.json","favicon.png","images/profile.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DsODCywV.js",app:"_app/immutable/entry/app.BOGYuu1k.js",imports:["_app/immutable/entry/start.DsODCywV.js","_app/immutable/chunks/Bj7J-C3M.js","_app/immutable/chunks/B7flzUx-.js","_app/immutable/chunks/BhTo0U-B.js","_app/immutable/entry/app.BOGYuu1k.js","_app/immutable/chunks/BhTo0U-B.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B7flzUx-.js","_app/immutable/chunks/d11F8gSC.js","_app/immutable/chunks/BTcDhAUt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
