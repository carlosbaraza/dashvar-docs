import { lineHeightVariables } from "dashvar/lib/variables/line-height";
import React, { FC } from "react";
import { LineHeightItem } from "./LineHeightItem";

type Props = {};

export const LineHeightShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="LineHeightShowcase">
        {lineHeightVariables.map((variable) => (
          <LineHeightItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .LineHeightShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-03);
          width: 100%;
        }
      `}</style>
    </>
  );
};
