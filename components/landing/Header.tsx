import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { CtaButton } from "./CtaButton";

type Props = {};

export const Header: FC<Props> = (props) => {
  return (
    <>
      <div className="Header">
        <h1>Rapid and beautiful UI development</h1>
        <h2>
          {"A tiny (<1.5KB) "}
          <strong>CSS Variables</strong> library. Yes! Only{" "}
          <strong>CSS Variables</strong>.
        </h2>

        <div className="cta-container">
          <CtaButton href="https://github.com/dashvars/dashvar">
            <FaGithub />
            <span>GitHub</span>
          </CtaButton>
          <CtaButton href="/docs" type="secondary">
            Getting Started
          </CtaButton>
        </div>
      </div>

      <style jsx>{`
        .Header {
          max-width: var(--size-17);
          text-align: center;
        }

        h1 {
          font-size: var(--font-size-8);
          line-height: var(--line-height-8);
          font-weight: var(--font-weight-bold);
          letter-spacing: var(--letter-spacing-1);
        }

        h2 {
          font-size: var(--font-size-5);
          line-height: var(--line-height-5);
        }

        .cta-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .cta-container > :global(* + *) {
          margin-top: var(--size-05);
        }

        .Header > :global(* + *) {
          margin-top: var(--size-08);
        }

        @media (min-width: 768px) {
          h1 {
            font-size: var(--font-size-10);
            line-height: var(--line-height-10);
          }

          h2 {
            font-size: var(--font-size-6);
            line-height: var(--line-height-6);
          }

          .cta-container {
            flex-direction: row;
            align-items: stretch;
            justify-content: center;
          }

          .cta-container > :global(* + *) {
            margin-top: 0;
            margin-left: var(--size-05);
          }
        }
      `}</style>
    </>
  );
};
