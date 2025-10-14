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
		client: {start:"_app/immutable/entry/start.gjJKJ2qM.js",app:"_app/immutable/entry/app.BZ-TUXrI.js",imports:["_app/immutable/entry/start.gjJKJ2qM.js","_app/immutable/chunks/C8rAE_rx.js","_app/immutable/chunks/DUWnfcEN.js","_app/immutable/chunks/B-0wejU6.js","_app/immutable/entry/app.BZ-TUXrI.js","_app/immutable/chunks/B-0wejU6.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DUWnfcEN.js","_app/immutable/chunks/X5P3KvA1.js","_app/immutable/chunks/fvTesaLR.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
