import { borderWidthVariables } from "dashvar/lib/variables/border-width";
import React, { FC } from "react";
import { BorderWidthItem } from "./BorderWidthItem";

type Props = {};

export const BorderWidthShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="BorderWidthShowcase">
        {borderWidthVariables.map((variable) => (
          <BorderWidthItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .BorderWidthShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: var(--size-08);
          grid-row-gap: var(--size-08);
        }

        @media (min-width: 1024px) {
          .BorderWidthShowcase {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};
