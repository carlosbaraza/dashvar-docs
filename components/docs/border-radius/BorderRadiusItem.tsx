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
        <VarLabel color="var(--amber-900)" varColor="var(--amber-600)">
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .BorderRadiusItem {
          display: flex;
          justify-content: center;
          background: var(--amber-100);
          padding: var(--size-09);
          border-radius: ${props.variable.value};
          border: 2px solid var(--amber-900);
        }
      `}</style>
    </>
  );
};
