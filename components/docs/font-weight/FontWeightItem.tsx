import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";

type Props = {
  variable: Variable;
};

export const FontWeightItem: FC<Props> = (props) => {
  return (
    <>
      <div className="FontWeightItem">
        <div>var({props.variable.key})</div>
        <div>{props.variable.value}</div>
      </div>

      <style jsx>{`
        .FontWeightItem {
          display: flex;
          justify-content: flex-start;
          text-align: left;
          white-space: nowrap;
          background: var(--white);
          padding: var(--size-05);
          border-radius: var(--size-04);
          font-weight: ${props.variable.value};
          overflow: scroll;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};
