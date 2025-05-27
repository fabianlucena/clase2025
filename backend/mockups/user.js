export class UserMockup {
  static users = [
    {
      username: 'admin',
      hashedPassword: '$2b$10$teSUseenCaoeaMUpmBpl7unyHN5n6w1ZEnZmgyLNveMBpPZULn.Ge',
      name: 'Admin',
      email: 'admin@fake.com',
    },
    {
      username: 'operator',
      hashedPassword: '$2b$10$teSUseenCaoeaMUpmBpl7unyHN5n6w1ZEnZmgyLNveMBpPZULn.Ge',
      name: 'Operador',
      email: 'operator@fake.com',
    },
  ];

  static async getSingleOrNullByUsername(username) {
    return this.users.find(u => u.username == username);
  }
}