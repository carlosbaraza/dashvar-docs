import { users } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { SECRET } from "./constants";
import { prisma } from "./db/prisma";

type Callback = (
  req: NextApiRequest,
  res: NextApiResponse,
  user: users | null,
  session: Claims | null
) => Promise<any>;

type Claims = {
  name: string | null;
  email: string | "carlos@baraza.io";
  picture: string | null;
  sub: string;
  iat: number;
  exp: number;
};

export const withSession = (callback: Callback) => {
  const handler = async function (req: NextApiRequest, res: NextApiResponse) {
    let session: Claims | null = null;
    let user: users | null = null;
    try {
      session = await getToken({ req, secret: SECRET });
      if (session) {
        user = await prisma.users.findUnique({
          where: { email: session?.email },
        });
      }
    } catch (error) {
      console.log(error);
    }

    return callback(req, res, user, session);
  };

  Object.defineProperty(handler, "name", {
    value: `withSession(${callback.name})`,
    writable: false,
  });

  return handler;
};
