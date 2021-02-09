import { fontFamilyVariables } from "dashvar/lib/variables/font-family";
import React, { FC } from "react";
import { FontFamilyItem } from "./FontFamilyItem";

type Props = {};

export const FontFamilyShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="FontFamilyShowcase">
        {fontFamilyVariables.map((variable) => (
          <FontFamilyItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .FontFamilyShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-row-gap: var(--size-06);
          width: 100%;
        }
      `}</style>
    </>
  );
};
