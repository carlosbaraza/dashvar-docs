import { transitionTimingFunctionVariables } from "dashvar/lib/variables/transition-timing-funtion";
import React, { FC } from "react";
import { TransitionTimingFunctionItem } from "./TransitionTimingFunctionItem";

type Props = {};

export const TransitionTimingFunctionShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="TransitionTimingFunctionShowcase">
        {transitionTimingFunctionVariables.map((variable) => (
          <TransitionTimingFunctionItem
            variable={variable}
            key={variable.key}
          />
        ))}
      </div>

      <style jsx>{`
        .TransitionTimingFunctionShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-07);
        }
      `}</style>
    </>
  );
};
