import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      runtime: 'nodejs20.x',
      external: ['three', '@threlte/core', '@threlte/extras']
    })
  }
};

export default config;
