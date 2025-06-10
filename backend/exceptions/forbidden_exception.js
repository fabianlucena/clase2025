export class ForbiddenException extends Error {
  constructor() {
    super('Acceso prohibido.');
    this.statusCode = 401;
  }
}