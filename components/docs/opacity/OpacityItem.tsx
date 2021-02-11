import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const OpacityItem: FC<Props> = (props) => {
  return (
    <>
      <div className="OpacityItem">
        <div className="background" />
        <div className="label">
          <VarLabel subtitle={props.variable.value}>
            {props.variable.key}
          </VarLabel>
        </div>
      </div>

      <style jsx>{`
        .OpacityItem {
          position: relative;
          display: flex;
          justify-content: center;
          text-align: center;
          padding: var(--size-05);
        }

        .label {
          z-index: 10;
        }

        .background {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: ${props.variable.value};
          background: var(--yellow-400);
          border-radius: var(--size-04);
        }
      `}</style>
    </>
  );
};
