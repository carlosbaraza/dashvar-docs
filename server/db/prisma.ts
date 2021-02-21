import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Add default
// import { variables as defaultVariables } from "dashvar/lib/variables";
// async function defaultData() {
//   const defaultProject = await prisma.project.upsert({
//     create: {
//       name: "default",
//       userId: 1,
//       variables: {
//         create: defaultVariables,
//       },
//     },
//     update: {},
//     where: { name: "default" },
//     include: { variables: true },
//   });

//   const missingDefaultVariables = defaultVariables.filter(
//     (defaultVariable) =>
//       !defaultProject.variables.find((v) => v.key === defaultVariable.key)
//   );

//   for (let index = 0; index < missingDefaultVariables.length; index++) {
//     const variable = missingDefaultVariables[index];
//     await prisma.variable.create({
//       data: { ...variable, projectId: defaultProject.id },
//     });
//   }
// }
// defaultData();
