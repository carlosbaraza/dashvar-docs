import { transitionDurationVariables } from "dashvar/lib/variables/transition-duration";
import React, { FC } from "react";
import { TransitionDurationItem } from "./TransitionDurationItem";

type Props = {};

export const TransitionDurationShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="TransitionDurationShowcase">
        {transitionDurationVariables.map((variable) => (
          <TransitionDurationItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .TransitionDurationShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-07);
        }
      `}</style>
    </>
  );
};
