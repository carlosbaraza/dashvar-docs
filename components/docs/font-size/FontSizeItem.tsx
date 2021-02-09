import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const FontSizeItem: FC<Props> = (props) => {
  return (
    <>
      <div className="FontSizeItem">
        <VarLabel subtitle={`${props.variable.key}: ${props.variable.value}`}>
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .FontSizeItem {
          display: flex;
          justify-content: flex-start;
          text-align: left;
          white-space: nowrap;
          background: var(--white);
          padding: var(--size-05);
          border-radius: var(--size-04);
          font-size: ${props.variable.value};
          overflow: scroll;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};
