import { getJson } from '../libs/api.js';

export async function get(query) {
  return await getJson('/user', query);
}