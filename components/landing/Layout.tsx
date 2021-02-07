import React, { FC, ReactNode } from "react";
import { Navbar } from "../docs/Navbar";

type Props = { children: ReactNode };

export const Layout: FC<Props> = (props) => {
  return (
    <>
      <div className="Layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="container">{props.children}</div>
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

        .container {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          align-items: center;
        }
      `}</style>
    </>
  );
};
