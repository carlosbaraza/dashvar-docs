import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";
import { Router } from "next/router";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Footer } from "../Footer";
import { Navbar } from "./Navbar";
import { Navigation } from "./Navigation";
import { VariableEditorProvider } from "./VariableEditor/VariableEditorProvider";

type Props = { children: ReactNode };

export const Layout: FC<Props> = (props) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const navigationEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const enableScrollAfterRoute = () => {
      clearAllBodyScrollLocks();
    };
    Router.events.on("routeChangeStart", enableScrollAfterRoute);
    return () => Router.events.off("routeChangeStart", enableScrollAfterRoute);
  }, []);

  const openNavigation = () => {
    if (navigationEl.current) {
      disableBodyScroll(navigationEl.current);
      setIsNavigationOpen(true);
    }
  };

  const closeNavigation = () => {
    clearAllBodyScrollLocks();
    setIsNavigationOpen(false);
  };

  return (
    <>
      <VariableEditorProvider>
        <div className="Layout">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="Layout__Container">
            <div className="navigation-overlay" onClick={closeNavigation} />
            <div ref={navigationEl} className="navigation">
              <Navigation />
            </div>
            <div className="content">
              {props.children}
              <Footer />
            </div>
            <button onClick={openNavigation} className="menu-button">
              <FiMenu />
            </button>
          </div>
        </div>
      </VariableEditorProvider>

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

        .Layout > :global(* + *) {
          margin-top: var(--size-07);
        }

        .Layout__Container {
          display: flex;
          flex-grow: 1;
          align-items: flex-start;
        }

        .navigation {
          position: fixed;
          background: var(--gray-100);
          overflow-y: scroll;
          top: 0;
          height: 100vh;
          min-width: var(--size-13);
          left: ${isNavigationOpen ? 0 : "calc(-1 * var(--size-13))"};
          z-index: 30;
          padding: 0 var(--size-05);
          transition: left 0.3s ease-out;
        }

        .navigation-overlay {
          display: ${isNavigationOpen ? "block" : "none"};
          position: fixed;
          top: 0;
          left: 0;
          background: var(--gray-800);
          transition: 0.2s ease opacity;
          opacity: var(--opacity-3);
          height: 100vh;
          width: 100vw;
          z-index: 20;
        }

        .content {
          padding: var(--size-07) 0;
          flex-grow: 1;
          max-width: 100%;
        }

        .content > :global(* + *) {
          margin-top: var(--size-09);
        }

        .menu-button {
          position: fixed;
          bottom: var(--size-05);
          right: var(--size-05);
          padding: var(--size-05);
          border-radius: var(--border-radius-full);
          background: var(--yellow-400);
          box-shadow: var(--box-shadow-3);
          font-size: var(--font-size-4);
          z-index: 10;
        }

        @media (min-width: 768px) {
          .navigation {
            position: sticky;
            position: -webkit-sticky;
            margin-left: 0;
            padding: 0;
            margin-top: calc(-1 * var(--size-06));
          }

          .content {
            padding: 0 0 0 var(--size-07);
            max-width: calc(100% - var(--size-13));
          }

          .menu-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
};
