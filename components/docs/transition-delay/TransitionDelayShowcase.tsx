import { transitionDelayVariables } from "dashvar/lib/variables/transition-delay";
import React, { FC } from "react";
import { TransitionDelayItem } from "./TransitionDelayItem";

type Props = {};

export const TransitionDelayShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="TransitionDelayShowcase">
        {transitionDelayVariables.map((variable) => (
          <TransitionDelayItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .TransitionDelayShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-07);
        }
      `}</style>
    </>
  );
};
