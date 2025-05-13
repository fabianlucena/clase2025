export class InvalidCredemntialsException extends Error {
  constructor() {
    super('Credenciales inválidas.');
    this.statusCode = 403;
  }
}