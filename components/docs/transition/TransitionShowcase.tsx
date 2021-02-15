import { transitionVariables } from "dashvar/lib/variables/transition";
import React, { FC } from "react";
import { TransitionItem } from "./TransitionItem";

type Props = {};

export const TransitionShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="TransitionShowcase">
        {transitionVariables.map((variable) => (
          <TransitionItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .TransitionShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-07);
        }
      `}</style>
    </>
  );
};
