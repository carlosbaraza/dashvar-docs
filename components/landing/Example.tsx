import React, { FC } from "react";
import { CodeSandboxEmbed } from "./CodeSandboxEmbed";

type Props = {};

export const Example: FC<Props> = (props) => {
  return (
    <>
      <div className="Example">
        <h2>Show me the code.</h2>
        <CodeSandboxEmbed
          title="dashvar-example1"
          embedId="dashvar-example1-3wee3"
        />
      </div>

      <style jsx>{`
        .Example {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        h2 {
          font-size: var(--font-size-8);
          line-height: var(--line-height-8);
          font-weight: var(--font-weight-bold);
        }

        .Example > :global(* + *) {
          margin-top: var(--size-07);
        }
      `}</style>
    </>
  );
};
