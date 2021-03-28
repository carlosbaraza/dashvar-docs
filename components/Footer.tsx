import React, { FC } from "react";

type Props = {};

export const Footer: FC<Props> = (props) => {
  return (
    <>
      <div className="Footer">
        Made with <span className="heart">(you name it)</span> by{" "}
        <a href="https://carlosbaraza.com">Carlos Baraza</a>
      </div>

      <style jsx>{`
        .Footer {
          font-weight: var(--font-weight-semibold);
          padding: var(--size-05);
          text-align: center;
        }

        .heart {
          color: var(--red-500);
        }

        a {
          color: var(--yellow-800);
        }
        a:hover {
          color: var(--yellow-600);
        }
      `}</style>
    </>
  );
};
