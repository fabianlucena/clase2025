import { InvalidArgumentException } from '../exceptions/invalid_argument_exception.js';
import { InvalidCredemntialsException } from '../exceptions/invalid_credentials_exception.js';

export class LoginService {
  static async login(credentials) {
    if (!credentials
      || !credentials.username
      || !credentials.password
      || typeof credentials.username !== 'string'
      || typeof credentials.password !== 'string'
    )
      throw new InvalidArgumentException();

    if (credentials.username !== 'admin')
      throw new InvalidCredemntialsException();

    if (credentials.password !== '1234')
      throw new InvalidCredemntialsException();

    return {
      token: 'Token de acceso'
    };
  }
}