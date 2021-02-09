import { letterSpacingVariables } from "dashvar/lib/variables/letter-spacing";
import React, { FC } from "react";
import { LetterSpacingItem } from "./LetterSpacingItem";

type Props = {};

export const LetterSpacingShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="LetterSpacingShowcase">
        {letterSpacingVariables.map((variable) => (
          <LetterSpacingItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .LetterSpacingShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-03);
          width: 100%;
        }
      `}</style>
    </>
  );
};
