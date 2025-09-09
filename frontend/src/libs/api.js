export const urlBase = import.meta.env.VITE_API_URL || '/api';
export const headers = {};

export async function fetchApi(service, options) {
  options = {...options};
  options.headers = {
    ...headers,
    ...options.headers,
  };

  if (options.json) {
    options.headers ??= {};
    options.headers.Accept ||= 'application/json';
  }

  if (options.body) {
    if (typeof options.body !== 'string') {
      options.body = JSON.stringify(options.body);
    }

    options.headers ??= {};
    options.headers['Content-Type'] ||= 'application/json';
  }

  let path = '';
  if (options.path)
    path = '/' + options.path;

  let query = '';
  if (options.query) {
    if (typeof options.query === 'string') {
      query = options.query;
    } else {
      query = new URLSearchParams(options.query).toString();
    }

    if (query.length)
      query = `?${query}`;
  }

  let res = await fetch(`${urlBase}${service}${path}${query}`, options);

  if (!res.ok)
    throw new Error("El resultado no es OK.");

  if (options.json) {
    if (!res.headers.get('Content-Type')?.startsWith('application/json')) {
      throw new Error("El resultado no es un JSON.")
    }

    res = await res.json();
  }

  return res;
}

export async function post(service, body, options) {
  return await fetchApi(service, {...options, body, method: 'POST'});
}

export async function get(service, query, options) {
  return await fetchApi(service, {...options, query, method: 'GET'});
}

export async function patch(service, body, options) {
  return await fetchApi(service, {...options, body, method: 'PATCH'});
}

export async function deleteItem(service, options) {
  return await fetchApi(service, {...options, method: 'DELETE'});
}

export async function postJson(service, body, options) {
  return await post(service, body, {...options, json: true});
}

export async function getJson(service, query, options) {
  return await get(service, query, {...options, json: true});
}