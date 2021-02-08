import React, { FC } from "react";
import { sizeVariables } from "dashvar/lib/variables/size";
import { SizeItem } from "./SizeItem";

type Props = {};

export const SizingSystem: FC<Props> = (props) => {
  return (
    <>
      <div className="SizingSystem">
        {sizeVariables.map((variable) => (
          <SizeItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .SizingSystem {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .SizingSystem > :global(* + *) {
          margin-top: var(--size-05);
        }
      `}</style>
    </>
  );
};
