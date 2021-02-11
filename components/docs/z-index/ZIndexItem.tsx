import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const ZIndexItem: FC<Props> = (props) => {
  const index = props.variable.key.match(/--z-index-([0-9])/)?.[1];
  console.log(index);

  return (
    <>
      <div
        className="ZIndexItem"
        style={{ marginLeft: `calc(${index} * var(--left-margin))` }}
      >
        <div className="label">
          <VarLabel subtitle={props.variable.value}>
            {props.variable.key}
          </VarLabel>
        </div>
      </div>

      <style jsx>{`
        .ZIndexItem {
          --left-margin: var(--size-05);
          display: flex;
          justify-content: center;
          text-align: center;
          padding: var(--size-07);
          padding-bottom: var(--size-08);
          border: var(--border-width-2) solid var(--yellow-400);
          border-radius: var(--size-04);
          background: var(--white);
          box-shadow: var(--box-shadow-4);
        }

        :global(.md) .ZIndexItem {
          --left-margin: var(--size-08);
        }

        :global(.lg) .ZIndexItem {
          --left-margin: var(--size-10);
        }

        .ZIndexItem:last-child {
          padding-bottom: var(--size-07);
        }

        :global(.ZIndexItem + .ZIndexItem) {
          margin-top: calc(-1 * var(--size-07));
        }

        .label {
          z-index: 10;
        }
      `}</style>
    </>
  );
};
