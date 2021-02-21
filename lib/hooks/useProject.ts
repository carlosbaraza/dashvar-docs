import { Project, Variable } from "@prisma/client";
import { useProjectId } from "./useProjectId";
import { useResource } from "./useResource";

export type FetchedProject = Project & {
  forks: Project[];
  variables: Variable[];
  parent: Project | null;
  user: {
    id: number;
  };
};

export const useProject = () => {
  const projectId = useProjectId();
  const resource = useResource<FetchedProject>(`/api/projects/${projectId}`);
  return {
    project: resource.data,
    loading: resource.loading,
    error: resource.error,
  };
};
