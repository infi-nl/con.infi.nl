import { redirect } from '@sveltejs/kit';

export const load = () => {
  redirect(307, 'https://forms.office.com/e/yJUAL29bvN');
};
