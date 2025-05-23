export class UserMockup {
  static users = [
    {
      username: 'admin',
      password: '1234',
      name: 'Admin',
      email: 'admin@fake.com',
    },
    {
      username: 'operator',
      password: '12345',
      name: 'Operador',
      email: 'operator@fake.com',
    },
  ];

  static async getSingleOrNullByUsername(username) {
    return this.users.find(u => u.username == username);
  }
}