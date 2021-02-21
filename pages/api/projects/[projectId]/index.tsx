import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../server/db/prisma";
import { isUUID } from "../../../../server/utils/is-uuid";

export async function getProject(id: string) {
  let project;
  if (isUUID(id)) {
    project = await prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        variables: {
          orderBy: {
            key: "asc",
          },
        },
        parent: true,
        forks: true,
        user: {
          select: { id: true },
        },
      },
    });
  } else {
    project = await prisma.project.findUnique({
      where: {
        name: id,
      },
      include: {
        variables: {
          orderBy: {
            key: "asc",
          },
        },
        parent: true,
        forks: true,
        user: {
          select: { id: true },
        },
      },
    });
  }
  return project;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const id = Array.isArray(req.query.projectId)
      ? req.query.projectId[0]
      : req.query.projectId;
    if (!id) return res.status(400).json({ message: "ID not defined" });

    const project = await getProject(id);

    if (!project) return res.status(404).json({ message: "Not found" });

    return res.status(200).json(project);
  } else {
    return res.status(400).json({ message: "HTTP method not supported" });
  }
}
