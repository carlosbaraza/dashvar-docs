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
          {"A tiny (<1.5KB) CSS Variables library. Yes! Only CSS Variables."}
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
          padding: var(--size-09) 0;
        }

        h1 {
          font-size: var(--font-size-10);
          line-height: var(--line-height-10);
          font-weight: var(--font-weight-bold);
          letter-spacing: var(--letter-spacing-1);
        }

        h2 {
          font-size: var(--font-size-6);
          line-height: var(--line-height-6);
        }

        .cta-container {
          display: flex;
          justify-content: center;
        }

        .cta-container > :global(* + *) {
          margin-left: var(--size-05);
        }

        .Header > :global(* + *) {
          margin-top: var(--size-08);
        }
      `}</style>
    </>
  );
};
