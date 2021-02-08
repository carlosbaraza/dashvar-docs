import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const BoxShadowItem: FC<Props> = (props) => {
  return (
    <>
      <div className="BoxShadowItem">
        <VarLabel>{props.variable.key}</VarLabel>
      </div>

      <style jsx>{`
        .BoxShadowItem {
          display: flex;
          justify-content: center;
          background: var(--white);
          padding: var(--size-05);
          border-radius: var(--size-04);
          box-shadow: ${props.variable.value};
        }
      `}</style>
    </>
  );
};