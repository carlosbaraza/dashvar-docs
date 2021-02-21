import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const projects = await prisma.project.findMany({ take: 50 });
    return res.status(200).json(projects);
  } else {
    return res.status(400).json({ message: "HTTP method not supported" });
  }
}
