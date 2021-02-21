import { useRouter } from "next/router";
import React, { FC } from "react";
import { useProjectId } from "../lib/hooks/useProjectId";

type Props = {};

export const NavbarFork: FC<Props> = (props) => {
  const projectId = useProjectId();
  const router = useRouter();

  const handleClick = async () => {
    const response = await fetch(`/api/projects/${projectId}/fork`, {
      method: "POST",
    });

    if (response.ok) {
      const newProject = await response.json();
      console.log(newProject);
      const name = newProject.name;
      router.push("/[projectId]/docs", `/${name}/docs`);
    } else {
      // TODO show error
    }
  };

  return (
    <>
      <button className="NavbarFork" onClick={handleClick}>
        Fork
      </button>

      <style jsx>{`
        .NavbarFork {
          border-radius: var(--border-radius-3);
          background: var(--yellow-300);
          padding: var(--size-03) var(--size-05);
          font-weight: var(--font-weight-bold);
        }
      `}</style>
    </>
  );
};
