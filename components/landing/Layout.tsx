import React, { FC, ReactNode } from "react";
import { Navbar } from "../docs/Navbar";
import { Footer } from "../Footer";

type Props = { children: ReactNode };

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="Layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="Layout__container">{props.children}</div>
        <Footer />
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

        .Layout__container {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: center;
        }

        .Layout__container > :global(* + *) {
          margin-top: var(--size-10);
        }

        .Layout > :global(* + *) {
          margin-top: var(--size-08);
        }
      `}</style>
    </>
  );
};
