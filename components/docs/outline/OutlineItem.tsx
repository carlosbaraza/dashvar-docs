import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const OutlineItem: FC<Props> = (props) => {
  return (
    <>
      <div className="OutlineItem">
        <VarLabel subtitle={`${props.variable.value}`}>
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .OutlineItem {
          display: flex;
          justify-content: center;
          text-align: center;
          padding: var(--size-04);
          border-radius: var(--border-radius-5);
          outline: ${props.variable.value};
          outline-offset: var(--outline-offset-1);
          background: var(--yellow-200);
        }
      `}</style>
    </>
  );
};
