import { getJson } from '../libs/api.js';

export async function get() {
  return await getJson('/user');
}