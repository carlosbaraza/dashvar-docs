import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const LineHeightItem: FC<Props> = (props) => {
  return (
    <>
      <div className="LineHeightItem">
        <div className="title">
          The quick brown fox jumped over the lazy dog.
        </div>
        <VarLabel subtitle={props.variable.value}>
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .LineHeightItem {
          display: flex;
          justify-content: flex-start;
          text-align: left;
          white-space: nowrap;
          background: var(--white);
          padding: var(--size-05);
          border-radius: var(--size-04);

          overflow: scroll;
          flex-direction: column;
        }

        .LineHeightItem > :global(* + *) {
          margin-top: var(--size-06);
        }

        .title {
          font-size: var(--font-size-4);
          font-size: var(
            ${props.variable.key.replace("line-height", "font-size")}
          );
          line-height: ${props.variable.value};
          background: var(--amber-200);
        }
      `}</style>
    </>
  );
};
