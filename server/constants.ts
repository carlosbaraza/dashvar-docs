if (!process.env.DATABASE_URL)
  throw new Error("DATABASE_URL env variable must be defined");
export const DATABASE_URL = process.env.DATABASE_URL;

if (!process.env.SECRET) throw new Error("SECRET env variable must be defined");
export const SECRET = process.env.SECRET;
