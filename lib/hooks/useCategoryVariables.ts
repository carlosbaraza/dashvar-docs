import { useCoreData } from "./../../components/docs/CoreDataProvider";

export const useCategoryVariables = (category: string) => {
  const { project } = useCoreData();
  const variables = project?.variables || [];
  return variables.filter((variable) => variable.category === category);
};
