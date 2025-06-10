import { InvalidArgumentException } from "../exceptions/invalid_argument_exception.js";
import { getDependency } from "../libs/dependencies.js";
import bcrypt from "bcrypt";

export class UserService {
  static async getSingleOrNullByUsername(username) {
    const UserModel = getDependency('UserModel');
    return (await UserModel.find({ username }))[0];
  }

  static async get() {
    const UserModel = getDependency('UserModel');
    return await UserModel.find({});
  }

  static async create(user) {
    if (!user.username) {
      throw new InvalidArgumentException('Falta el parámetro username.');
    }

    if (!user.fullName) {
      throw new InvalidArgumentException('Falta el parámetro fullName.');
    }

    if (!user.email) {
      throw new InvalidArgumentException('Falta el parámetro email.');
    }

    if (user.roles && !Array.isArray(user.roles)) {
      throw new InvalidArgumentException('El parámetro roles dbe ser una lista.');
    }    
    
    const UserModel = getDependency('UserModel');
    const existingUser = await  UserModel.find({ username: user.username });
    if (existingUser.length > 0) {
      throw new InvalidArgumentException('Ese usuario ya existe.');
    }

    if (user.password) {
      user.hashedPassword = bcrypt.hashSync(user.password, 10);
      delete user.password;
    }
    
    user.uuid = crypto.randomUUID();

    const newUser = new UserModel(user);
    await newUser.save();

    return newUser;
  }

  static async deleteByUuid(uuid) {
    if (!uuid) {
      throw new InvalidArgumentException('Falta el parámetro uuid.');
    }

    const UserModel = getDependency('UserModel');
    const user = await UserModel.findOneAndDelete({ uuid });
    if (!user) {
      throw new InvalidArgumentException('Usuario no encontrado.');
    }
  }
}