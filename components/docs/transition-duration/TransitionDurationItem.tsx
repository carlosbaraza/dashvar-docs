import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const TransitionDurationItem: FC<Props> = (props) => {
  const description = props.variable.value.replace(/\), /g, "),\n");

  return (
    <>
      <div className="TransitionDurationItem">
        <VarLabel subtitle={description}>{props.variable.key}</VarLabel>
      </div>

      <style jsx>{`
        .TransitionDurationItem {
          display: flex;
          max-width: 100%;
          justify-content: center;
          overflow: scroll;
          text-align: center;
          background: var(--white);
          padding: var(--size-05);
          border-radius: var(--size-04);
          box-shadow: var(--box-shadow-3);
          transition: var(--transition-all);
          transition-duration: ${props.variable.value};
          border: var(--border-width-4) solid transparent;
        }

        .TransitionDurationItem:hover {
          background: var(--yellow-100);
          color: var(--white);
          transform: scale(1.05);
          cursor: pointer;
          border: var(--border-width-4) solid var(--yellow-400);
          box-shadow: var(--box-shadow-5);
        }
      `}</style>
    </>
  );
};
