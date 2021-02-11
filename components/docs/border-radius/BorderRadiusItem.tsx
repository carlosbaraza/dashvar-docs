import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const BorderRadiusItem: FC<Props> = (props) => {
  return (
    <>
      <div className="BorderRadiusItem">
        <VarLabel color="var(--yellow-900)" varColor="var(--yellow-600)">
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .BorderRadiusItem {
          display: flex;
          justify-content: center;
          text-align: center;
          background: var(--yellow-100);
          padding: var(--size-09) var(--size-04);
          border-radius: ${props.variable.value};
          border: 2px solid var(--yellow-900);
        }
      `}</style>
    </>
  );
};
