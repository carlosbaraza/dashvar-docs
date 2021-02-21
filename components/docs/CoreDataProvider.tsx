import { createContext, ReactNode, useContext } from "react";
import { FetchedProject, useProject } from "../../lib/hooks/useProject";

type CoreData = {
  project?: FetchedProject;
};
const CoreDataContext = createContext<CoreData>({});

export const useCoreData = () => {
  return useContext(CoreDataContext);
};

export const CoreDataProvider = (props: { children: ReactNode }) => {
  const { project } = useProject();

  return (
    <CoreDataContext.Provider value={{ project }}>
      {props.children}
    </CoreDataContext.Provider>
  );
};
