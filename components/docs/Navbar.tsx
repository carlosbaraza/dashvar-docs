import Link from "next/link";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { useIsMobile } from "../../lib/hooks/useIsMobile";
import { NavbarFork } from "../NavbarFork";
import { useCoreData } from "./CoreDataProvider";
import { NavbarAccount } from "./NavbarAccount";
import { NavbarLink } from "./NavbarLink";

type Props = {};

export const Navbar: FC<Props> = (props) => {
  const isMobile = useIsMobile();
  const { project } = useCoreData();

  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/assets/images/icon/512w/dashvar-logo-horizontal-black-512w.png" />
            </a>
          </Link>
        </div>
        <div className="inner">
          <NavbarFork />

          <NavbarLink href="/[projectId]/docs" as="/default/docs">
            {isMobile ? "Docs" : "Documentation"}
          </NavbarLink>

          <NavbarAccount />

          <a href="https://github.com/dashvars/dashvar" className="icon">
            <FaGithub />
          </a>
        </div>
      </div>

      <style jsx>{`
        .Navbar {
          height: var(--size-09);
          display: flex;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
        }

        .logo :global(img) {
          width: var(--size-12);
        }

        h1 {
          font-size: var(--font-size-7);
          line-height: var(--line-height-7);
          font-weight: var(--font-weight-bold);
          color: var(--gray-700);
        }

        .inner {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .inner > :global(* + *) {
          margin-left: var(--size-07);
        }

        .icon {
          width: var(--size-07);
          font-size: var(--size-07);
          height: var(--size-07);
          line-height: 1;
          color: var(--gray-600);
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
