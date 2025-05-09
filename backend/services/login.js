export function loginService(username, password) {
  if (!username || !password
    || typeof username !== 'string'
    || typeof password !== 'string'
  ) {
    return {
      error: 'Argumentos inválidos.',
    };
  }

  if (username !== 'admin') {
    return {
      error: 'Credenciales inválidas.',
    };
  }

  if (password !== '1234') {
    return {
      error: 'Credenciales inválidas.',
    };
  }

  return {
    token: 'Token de acceso'
  };
}