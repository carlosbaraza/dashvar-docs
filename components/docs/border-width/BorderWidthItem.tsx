import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const BorderWidthItem: FC<Props> = (props) => {
  return (
    <>
      <div className="BorderWidthItem">
        <VarLabel
          subtitle={`${props.variable.value} / ${props.variable.equivalent}`}
        >
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .BorderWidthItem {
          display: flex;
          justify-content: center;
          text-align: center;
          padding: var(--size-04);
          border-radius: var(--border-radius-full);
          border: ${props.variable.value} solid var(--yellow-600);
        }
      `}</style>
    </>
  );
};
