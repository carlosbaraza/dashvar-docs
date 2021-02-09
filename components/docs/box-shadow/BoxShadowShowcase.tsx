import { boxShadowVariables } from "dashvar/lib/variables/box-shadow";
import React, { FC } from "react";
import { BoxShadowItem } from "./BoxShadowItem";

type Props = {};

export const BoxShadowShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="BoxShadowShowcase">
        {boxShadowVariables.map((variable) => (
          <BoxShadowItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .BoxShadowShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: var(--size-08);
          grid-row-gap: var(--size-08);
        }

        @media (min-width: 1024px) {
          .BoxShadowShowcase {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};
