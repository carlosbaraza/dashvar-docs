import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const ColourPaletteItem: FC<Props> = (props) => {
  return (
    <>
      <div className="ColourPaletteItem">
        <div className="swatch" />
        <div className="label">
          <VarLabel subtitle={props.variable.equivalent}>
            {props.variable.key}
          </VarLabel>
        </div>
      </div>

      <style jsx>{`
        .ColourPaletteItem {
          display: flex;
          flex-direction: column;
          text-align: center;
          background: var(--white);
        }

        .label {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--size-05);
          height: var(--size-09);
        }

        .swatch {
          height: var(--size-09);
          background: ${props.variable.value};
        }
      `}</style>
    </>
  );
};
