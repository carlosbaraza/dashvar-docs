import React, { FC } from "react";
import { Code } from "../Code";

type Props = {
  color1: string;
  color2: string;
};

export const BackgroundGradient: FC<Props> = (props) => {
  return (
    <>
      <div className="BackgroundGradient">
        <div className="background" />

        <Code noTopBorderRadius language="css">
          {`.selector {
  background: linear-gradient(to right, var(--yellow-400), var(--yellow-600));
}`}
        </Code>
      </div>

      <style jsx>{`
        .BackgroundGradient {
          display: flex;
          flex-direction: column;
        }

        .background {
          height: var(--size-09);
          background: linear-gradient(
            to right,
            var(--yellow-400),
            var(--yellow-600)
          );
          border-radius: var(--border-radius-3) var(--border-radius-3) 0 0;
        }
      `}</style>
    </>
  );
};
