export class InvalidArgumentException extends Error {
  constructor(msg) {
    super(msg || 'Argumentos inválidos.');
    this.statusCode = 400;
  }
}