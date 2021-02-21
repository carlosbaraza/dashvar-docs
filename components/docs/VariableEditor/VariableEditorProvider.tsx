import { Variable } from "@prisma/client";
import React, { createContext, FC, useContext, useState } from "react";
import { VariableEditor } from "./VariableEditor";

type Props = {};

export type EditVariableFunctionOnChange = (variable: Variable) => void;
type EditVariableFunction = (
  variable: Variable,
  onChange: EditVariableFunctionOnChange
) => void;

const VariableEditorContext = createContext<{
  editVariable: EditVariableFunction;
  variable?: Variable;
  open: boolean;
}>({
  editVariable() {},
  open: false,
});

export const useVariableEditor = () => {
  return useContext(VariableEditorContext);
};

export const VariableEditorProvider: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [variable, setVariable] = useState<Variable>();
  const [onChange, setOnChange] = useState<EditVariableFunctionOnChange>();

  const editVariable: EditVariableFunction = (variable, onChangeFunc) => {
    setOpen(true);
    setVariable(variable);
    setOnChange(() => onChangeFunc);
  };

  return (
    <>
      <VariableEditorContext.Provider value={{ editVariable, variable, open }}>
        <div className="VariableEditorProvider">
          <VariableEditor open={open} variable={variable} onChange={onChange} />
          {props.children}
        </div>
      </VariableEditorContext.Provider>

      <style jsx>{`
        .VariableEditor {
        }
      `}</style>
    </>
  );
};
