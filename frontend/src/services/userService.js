import * as api from '../libs/api.js';

export async function get(query) {
  return await api.getJson('/user', query);
}

export async function post(body, options) {
  return await api.post('/user', body, options);
}

export async function patch(uuid, body) {
  return await api.patch('/user', body, { path: uuid });
}

export async function deleteUser(uuid) {
  return await api.deleteItem('/user', { path: uuid });
}