import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { getProject } from ".";
import { prisma } from "../../../../server/db/prisma";
import { withSession } from "../../../../server/session";
import { uuidTranslator } from "../../../../server/utils/uuid-translator";

export default withSession(async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  user,
  session
) {
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const id = Array.isArray(req.query.projectId)
    ? req.query.projectId[0]
    : req.query.projectId;

  if (req.method === "POST") {
    if (!id) return res.status(400).json({ message: "ID not defined" });

    const parentProject = await getProject(id);
    if (!parentProject)
      return res.status(404).json({ message: "Project to fork not found" });

    const forkId = uuidv4();
    const forkProject = await prisma.project.create({
      data: {
        id: forkId,
        name: `${parentProject.name}-fork-${uuidTranslator.fromUUID(forkId)}`,
        parentId: parentProject.id,
        userId: user.id,
        variables: {
          create: parentProject.variables.map((v) => ({
            category: v.category,
            name: v.name,
            key: v.key,
            value: v.value,
            equivalent: v.equivalent,
            documentationUrl: v.documentationUrl,
          })),
        },
      },
    });

    return res.status(200).json(forkProject);
  } else {
    return res.status(400).json({ message: "HTTP method not supported" });
  }
});
