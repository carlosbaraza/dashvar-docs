import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const OutlineOffsetItem: FC<Props> = (props) => {
  return (
    <>
      <div className="OutlineOffsetItem">
        <VarLabel subtitle={`${props.variable.value}`}>
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .OutlineOffsetItem {
          display: flex;
          justify-content: center;
          text-align: center;
          padding: var(--size-04);
          border-radius: var(--border-radius-5);
          outline-offset: ${props.variable.value};
          outline: var(--outline-black);
          background: var(--yellow-200);
        }
      `}</style>
    </>
  );
};
