export class LoginService {
  static async login(credentials) {
    if (!credentials
      || !credentials.username
      || !credentials.password
      || typeof credentials.username !== 'string'
      || typeof credentials.password !== 'string'
    ) {
      return {
        error: 'Argumentos inválidos.',
      };
    }

    if (credentials.username !== 'admin') {
      return {
        error: 'Credenciales inválidas.',
      };
    }

    if (credentials.password !== '1234') {
      return {
        error: 'Credenciales inválidas.',
      };
    }

    return {
      token: 'Token de acceso'
    };
  }
}