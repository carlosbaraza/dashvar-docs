import React, { FC } from "react";

type Props = { children: string; subtitle?: string };

export const VarLabel: FC<Props> = (props) => {
  return (
    <>
      <div className="VarLabel">
        <div>
          <span className="VarLabel__pre">var(</span>
          <span className="VarLabel__body">{props.children}</span>
          <span className="VarLabel__post">)</span>
        </div>

        {props.subtitle && <div className="subtitle">{props.subtitle}</div>}
      </div>

      <style jsx>{`
        .VarLabel {
          color: var(--gray-800);
          font-family: var(--font-family-mono);
        }

        .VarLabel__pre {
          color: var(--gray-400);
        }

        .VarLabel__body {
          font-weight: var(--font-weight-bold);
        }

        .VarLabel__post {
          color: var(--gray-400);
        }

        .subtitle {
          font-size: var(--font-size-0);
          color: var(--gray-600);
        }
      `}</style>
    </>
  );
};
