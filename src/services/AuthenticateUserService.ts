import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    // verificar se email existe
    const user = await usersRepositories.findOne({
      email
    });

    // verificar se senha está correta
    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    // compara senha 12345 / hash 989as8e0a0as9e80sa98e
    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    // gerar token
    const token = sign({
      email: user.email
    }, "6eff661eb971c045c7ebfff6bb18d590", {
      subject: user.id,
      expiresIn: "1d",
    }
    );

    return token;
  }
}

export { AuthenticateUserService };