import { zIndexVariables } from "dashvar/lib/variables/z-index";
import React, { FC } from "react";
import { ZIndexItem } from "./ZIndexItem";

type Props = {};

export const ZIndexShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="ZIndexShowcase">
        {zIndexVariables.map((variable) => (
          <ZIndexItem variable={variable} key={variable.key} />
        ))}
      </div>

      <style jsx>{`
        .ZIndexShowcase {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-radius: var(--border-radius-7);
        }
      `}</style>
    </>
  );
};
