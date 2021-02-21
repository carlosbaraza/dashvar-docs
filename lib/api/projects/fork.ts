export const forkProject = async (id: string) => {
  return fetch(`/api/projects/${id}/fork`);
};
