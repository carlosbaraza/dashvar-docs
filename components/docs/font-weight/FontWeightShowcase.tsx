import { fontWeightVariables } from "dashvar/lib/variables/font-weight";
import React, { FC } from "react";
import { FontWeightItem } from "./FontWeightItem";

type Props = {};

export const FontWeightShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="FontWeightShowcase">
        {fontWeightVariables.map((variable) => (
          <FontWeightItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .FontWeightShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-03);
          width: 100%;
        }
      `}</style>
    </>
  );
};
