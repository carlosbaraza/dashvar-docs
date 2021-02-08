import React, { FC, ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Navigation } from "./Navigation";

type Props = { children: ReactNode };

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="Layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="Layout__Container">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="content">{props.children}</div>
        </div>
      </div>

      <style jsx>{`
        .Layout {
          background: var(--gray-100);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          max-width: var(--size-18);
          margin: 0 auto;
          padding: 0 var(--size-06);
        }

        .Layout__Container {
          display: flex;
          flex-grow: 1;
        }

        .navigation {
          min-width: var(--size-13);
        }

        .content {
          padding: var(--size-07);
          flex-grow: 1;
          max-width: calc(100% - var(--size-13));
        }

        .content > :global(* + *) {
          margin-top: var(--size-09);
        }
      `}</style>
    </>
  );
};
