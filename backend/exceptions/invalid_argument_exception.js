export class InvalidArgumentException extends Error {
  constructor() {
    super('Argumentos inválidos.');
    this.statusCode = 400;
  }
}