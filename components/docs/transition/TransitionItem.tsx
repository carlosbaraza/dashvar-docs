import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { VarLabel } from "../VarLabel";

type Props = {
  variable: Variable;
};

export const TransitionItem: FC<Props> = (props) => {
  const description = props.variable.value.replace(/\), /g, "),\n");

  return (
    <>
      <div className="TransitionItem">
        <VarLabel subtitle={description} subtitleColor="var(--gray-400)">
          {props.variable.key}
        </VarLabel>
      </div>

      <style jsx>{`
        .TransitionItem {
          display: flex;
          justify-content: flex-start;
          max-width: 100%;
          overflow: scroll;
          text-align: left;
          background: var(--white);
          padding: var(--size-05);
          border-radius: var(--size-04);
          box-shadow: var(--box-shadow-3);
          transition: ${props.variable.value};
          margin: var(--border-width-4) 0;
        }

        .TransitionItem:hover {
          background: var(--yellow-100);
          color: var(--white);
          transform: scale(1.05);
          cursor: pointer;
          border: var(--border-width-4) solid var(--yellow-400);
          margin: 0;
          box-shadow: var(--box-shadow-5);
        }
      `}</style>
    </>
  );
};
