import { InvalidArgumentException } from '../exceptions/invalid_argument_exception.js';
import { InvalidCredemntialsException } from '../exceptions/invalid_credentials_exception.js';
import { getDependency } from '../libs/dependencies.js';
import bcrypt from 'bcrypt';
import config from '../config.js';
import jwt from 'jsonwebtoken';

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

    /*
    console.log('Calculando hash');
    const hash = bcrypt.hashSync('1234', 10);
    console.log(hash);
    console.log('Hash calculado');
    */

    if (!(await bcrypt.compare(credentials.password, user.hashedPassword)))
      throw new InvalidCredemntialsException();

    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        fullName: user.fullName,
        roles: user.roles,
      },
      config.jwtKey,
      {
        expiresIn: '1h' // El token expirará en 1 hora
      }
    );

    return { token };
  }
}