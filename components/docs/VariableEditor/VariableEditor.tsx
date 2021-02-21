import { Variable } from "@prisma/client";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { VarLabel } from "../VarLabel";
import { EditVariableFunctionOnChange } from "./VariableEditorProvider";

type Props = {
  open?: boolean;
  variable?: Variable;
  onChange?: EditVariableFunctionOnChange;
};

export const VariableEditor: FC<Props> = (props) => {
  const [value, setValue] = useState(props.variable?.value);

  useEffect(() => {
    setValue(props.variable?.value);
  }, [props.variable]);

  return (
    <>
      <motion.div
        initial="close"
        animate={props.open ? "open" : "close"}
        variants={{
          open: {
            bottom: 0,
          },
          close: {
            bottom: -300,
          },
        }}
        className="VariableEditor"
      >
        <div className="key">
          <h3 className="key-title">Editing</h3>
          <VarLabel>{props.variable?.key || ""}</VarLabel>
        </div>
        <div className="value">
          <h3 className="value-title">Value</h3>
          <input
            value={value}
            className="input"
            onChange={(e) => {
              setValue(e.target.value);
              console.log(props);
              if (props.variable && props.onChange) {
                props.onChange({ ...props.variable, value: e.target.value });
              }
            }}
          />
        </div>

        <div className="actions">
          <button className="save">Save</button>
        </div>
      </motion.div>

      <style jsx>{`
        :global(.VariableEditor) {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
          background: var(--gray-200);
          z-index: var(--z-index-4);
          padding: var(--size-09);
          display: flex;
          align-items: center;
        }

        :global(.VariableEditor) > :global(* + *) {
          margin-left: var(--size-09);
        }

        .key > :global(* + *) {
          margin-top: var(--size-04);
        }
        .key-title {
          font-size: var(--font-size-7);
          line-height: var(--line-height-7);
        }

        .value {
          display: flex;
          align-items: center;
        }
        .value > :global(* + *) {
          margin-left: var(--size-04);
        }
        .value-title {
          font-size: var(--font-size-4);
          line-height: var(--line-height-4);
        }

        .input {
          padding: var(--size-05);
          border-radius: var(--border-radius-4);
        }

        .actions {
          display: flex;
          justify-content: flex-end;
          flex-grow: 1;
        }

        .save {
          background: var(--yellow-300);
          padding: var(--size-05) var(--size-07);
          border-radius: var(--border-radius-4);
          font-size: var(--font-size-4);
          line-height: var(--line-height-4);
          font-weight: var(--font-weight-bold);
        }

        .save:hover {
          background: var(--yellow-400);
        }
      `}</style>
    </>
  );
};
