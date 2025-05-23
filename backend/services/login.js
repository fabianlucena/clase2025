import { InvalidArgumentException } from '../exceptions/invalid_argument_exception.js';
import { InvalidCredemntialsException } from '../exceptions/invalid_credentials_exception.js';
import { getDependency } from '../libs/dependencies.js';

export class LoginService {
  static async login(credentials) {
    if (!credentials
      || !credentials.username
      || !credentials.password
      || typeof credentials.username !== 'string'
      || typeof credentials.password !== 'string'
    )
      throw new InvalidArgumentException();

    const UserService = getDependency('UserService');
    const user = await UserService.getSingleOrNullByUsername(credentials.username);
    if (!user)
      throw new InvalidCredemntialsException();

    if (credentials.password !== user.password)
      throw new InvalidCredemntialsException();

    return {
      token: 'Token de acceso'
    };
  }
}