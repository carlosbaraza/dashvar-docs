import { fontSizeVariables } from "dashvar/lib/variables/font-size";
import React, { FC } from "react";
import { FontSizeItem } from "./FontSizeItem";

type Props = {};

export const FontSizeShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="FontSizeShowcase">
        {fontSizeVariables.map((variable) => (
          <FontSizeItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .FontSizeShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-03);
          width: 100%;
        }
      `}</style>
    </>
  );
};
