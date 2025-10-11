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
		client: {start:"_app/immutable/entry/start.4dqAspxd.js",app:"_app/immutable/entry/app.DQWMsJ1f.js",imports:["_app/immutable/entry/start.4dqAspxd.js","_app/immutable/chunks/Bf6U-1tO.js","_app/immutable/chunks/CmTa1m9M.js","_app/immutable/chunks/BVp3Qxu9.js","_app/immutable/entry/app.DQWMsJ1f.js","_app/immutable/chunks/BVp3Qxu9.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/CmTa1m9M.js","_app/immutable/chunks/K8RNzTXk.js","_app/immutable/chunks/Bv3xtDKD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
