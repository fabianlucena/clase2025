import { postJson } from '../libs/api.js';

export async function login(username, password) {
  return await postJson('/login', { username, password });
}