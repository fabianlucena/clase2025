import { getJson, post as apiPost } from '../libs/api.js';

export async function get(query) {
  return await getJson('/user', query);
}

export async function post(body, options) {
  return await apiPost('/user', body, options);
}