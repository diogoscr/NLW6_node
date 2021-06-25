import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // receber token
  const authToken = request.headers.authorization;

  // validar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");


  try {
    // validar se token é valido
    const { sub } = verify(
      token,
      "6eff661eb971c045c7ebfff6bb18d590"
    ) as IPayload;

    // recuperar info user
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }
}
