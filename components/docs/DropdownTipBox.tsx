import React, { FC, ReactNode } from "react";
import { DropdownTip } from "./DropdownTip";

type Props = {
  children: ReactNode;
  tipPosition: "top-right" | "top-left" | "bottom-right" | "bottom-left";
};

export const DropdownTipBox: FC<Props> = (props) => {
  let paddingTop = "0";
  let paddingBottom = "0";
  let tipTop = "auto";
  let tipBottom = "auto";
  let tipLeft = "auto";
  let tipRight = "auto";
  let tipType: any;

  switch (props.tipPosition) {
    case "top-right":
      paddingTop = "var(--size-03)";
      tipTop = "0";
      tipRight = "var(--size-05)";
      tipType = "up";
      break;
    case "top-left":
      paddingTop = "var(--size-03)";
      tipTop = "0";
      tipLeft = "var(--size-05)";
      tipType = "up";
      break;
    case "bottom-right":
      paddingBottom = "var(--size-03)";
      tipBottom = "0";
      tipRight = "var(--size-05)";
      tipType = "down";
      break;
    case "bottom-left":
      paddingBottom = "var(--size-03)";
      tipBottom = "0";
      tipLeft = "var(--size-05)";
      tipType = "down";
      break;
  }

  return (
    <>
      <div className="DropdownTipBox">
        <div className="tip">
          <DropdownTip type={tipType} height="var(--size-03)" />
        </div>
        <div className="inner">{props.children}</div>
      </div>

      <style jsx>{`
        .DropdownTipBox {
          position: relative;
          padding-top: ${paddingTop};
          padding-bottom: ${paddingBottom};
        }

        .tip {
          position: absolute;
          top: ${tipTop};
          bottom: ${tipBottom};
          right: ${tipRight};
          left: ${tipLeft};
        }

        .inner {
          background: var(--white);
          padding: var(--size-06);
          border-radius: var(--border-radius-4);
          box-shadow: var(--box-shadow-4);
        }
      `}</style>
    </>
  );
};
