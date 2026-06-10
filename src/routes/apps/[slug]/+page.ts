import type { PageLoad } from './$types';
import { appDetailSlugs, getAppDetail } from '$lib/data/app-details';

export const prerender = true;

export function entries() {
  return appDetailSlugs.map((slug) => ({ slug }));
}

export const load: PageLoad = ({ params }) => {
  return getAppDetail(params.slug);
};
