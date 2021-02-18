import React, { FC } from "react";

type Props = {
  type: "up" | "down" | "right" | "left";
  color?: string;
  height?: string;
};

const defaultProps = {
  color: "white",
  height: "5px",
};

export const DropdownTip: FC<Props> = (props) => {
  return (
    <>
      <div className={`arrow-${props.type}`}></div>

      <style jsx>{`
        .arrow-up {
          width: 0;
          height: 0;
          border-left: ${props.height} solid transparent;
          border-right: ${props.height} solid transparent;
          border-bottom: ${props.height} solid ${props.color};
        }

        .arrow-down {
          width: 0;
          height: 0;
          border-left: ${props.height} solid transparent;
          border-right: ${props.height} solid transparent;
          border-top: ${props.height} solid ${props.color};
        }

        .arrow-right {
          width: 0;
          height: 0;
          border-top: ${props.height} solid transparent;
          border-bottom: ${props.height} solid transparent;
          border-left: ${props.height} solid ${props.color};
        }

        .arrow-left {
          width: 0;
          height: 0;
          border-top: ${props.height} solid transparent;
          border-bottom: ${props.height} solid transparent;
          border-right: ${props.height} solid ${props.color};
        }
      `}</style>
    </>
  );
};

DropdownTip.defaultProps = defaultProps;
