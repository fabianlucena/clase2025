export class UserMockup {
  static users = [
    {
      id: 1,
      username: 'admin',
      hashedPassword: '$2b$10$teSUseenCaoeaMUpmBpl7unyHN5n6w1ZEnZmgyLNveMBpPZULn.Ge',
      fullName: 'Admin',
      email: 'admin@fake.com',
      roles: ['admin'],
    },
    {
      id: 2,
      username: 'operator',
      hashedPassword: '$2b$10$teSUseenCaoeaMUpmBpl7unyHN5n6w1ZEnZmgyLNveMBpPZULn.Ge',
      fullName: 'Operador',
      email: 'operator@fake.com',
      roles: ['operator'],
    },
  ];

  static async getSingleOrNullByUsername(username) {
    return this.users.find(u => u.username == username);
  }

  static async get() {
    return this.users;
  }
}
