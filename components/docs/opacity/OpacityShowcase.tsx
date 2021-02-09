import { opacityVariables } from "dashvar/lib/variables/opacity";
import React, { FC } from "react";
import { OpacityItem } from "./OpacityItem";

type Props = {};

export const OpacityShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="OpacityShowcase">
        {opacityVariables.map((variable) => (
          <OpacityItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .OpacityShowcase {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: var(--size-08);
          grid-row-gap: var(--size-08);
          background: var(--white);
          padding: var(--size-07);
          border-radius: var(--border-radius-7);
        }

        @media (min-width: 1024px) {
          .OpacityShowcase {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
};
