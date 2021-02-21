import { useRouter } from "next/router";

export const useProjectId = (): string => {
  const router = useRouter();
  const projectId = Array.isArray(router.query.projectId)
    ? router.query.projectId[0]
    : router.query.projectId;

  return projectId || "default";
};
