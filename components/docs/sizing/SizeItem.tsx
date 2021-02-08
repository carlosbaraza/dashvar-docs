import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const SizeItem: FC<Props> = (props) => {
  const { variable } = props;
  return (
    <>
      <div className="SizeItem">
        <div className="label">
          <VarLabel subtitle={`${variable.value} / ${variable.equivalent}`}>
            {variable.key}
          </VarLabel>
        </div>
        <div className="bar" style={{ width: variable.value }}></div>
        <div className="overlay" />
      </div>

      <style jsx>{`
        .SizeItem {
          position: relative;
          display: flex;
        }

        .label {
          width: var(--size-12);
          flex-shrink: 0;
        }

        .bar {
          background: var(--amber-500);
        }

        .overlay {
          position: absolute;
          right: 0;
          top: 0;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0),
            var(--gray-100)
          );
          width: var(--size-11);
          height: 100%;
        }
      `}</style>
    </>
  );
};
