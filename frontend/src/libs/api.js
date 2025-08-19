export const urlBase = import.meta.env.VITE_API_URL || '/api';
export const headers = {};

export async function fetchApi(service, options) {
  options = {...options};
  options.headers = {
    ...headers,
    ...options.headers,
  };

  if (options.body) {
    if (typeof options.body !== 'string') {
      options.body = JSON.stringify(options.body);
    }

    options.headers ??= {};
    options.headers['Content-Type'] ||= 'application/json';
  }

  if (options.json) {
    options.headers ??= {};
    options.headers.Accept ||= 'application/json';
  }

  let res = await fetch(`${urlBase}${service}`, options);

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

export async function postJson(service, body, options) {
  return await post(service, body, {...options, json: true});
}