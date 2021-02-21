import { Variable } from "dashvar/lib/types";
import React, { FC, useState } from "react";
import { useVariableEditor } from "../VariableEditor/VariableEditorProvider";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const ColourPaletteItem: FC<Props> = (props) => {
  const variableEditor = useVariableEditor();
  const [override, setOverride] = useState<Variable>();

  return (
    <>
      <div
        className="ColourPaletteItem"
        onClick={() =>
          variableEditor.editVariable(props.variable as any, (variable) => {
            setOverride(variable);
            console.log(variable);
          })
        }
      >
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
          background: ${override?.value || props.variable.value};
        }
      `}</style>
    </>
  );
};
