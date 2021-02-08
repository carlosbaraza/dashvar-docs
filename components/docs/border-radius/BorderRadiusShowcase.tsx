import { borderRadiusVariables } from "dashvar/lib/variables/border-radius";
import React, { FC } from "react";
import { BorderRadiusItem } from "./BorderRadiusItem";

type Props = {};

export const BorderRadiusShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="BorderRadiusShowcase">
        {borderRadiusVariables.map((variable) => (
          <BorderRadiusItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .BorderRadiusShowcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-column-gap: var(--size-08);
          grid-row-gap: var(--size-08);
        }
      `}</style>
    </>
  );
};
