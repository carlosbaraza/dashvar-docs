import { AnimatePresence, motion } from "framer-motion";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import { DropdownTipBox } from "./DropdownTipBox";

type Props = { children: ReactNode; target: ReactNode };

function hasChild(containerEl: any, childEl: any) {
  let el: any = childEl;
  do {
    if (el == containerEl) return true;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return false;
}

export const Dropdown: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function outsideClickHandler(event: MouseEvent) {
      if (containerEl.current && !hasChild(containerEl.current, event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      window.addEventListener("click", outsideClickHandler);
    }
    return () => {
      window.removeEventListener("click", outsideClickHandler);
    };
  }, [isOpen]);

  return (
    <>
      <div className="Dropdown" ref={containerEl}>
        <div className="target" onClick={() => setIsOpen(true)}>
          {props.target}
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="initial"
              animate="show"
              exit="exit"
              variants={{
                initial: { opacity: 0, y: -50 },
                show: { opacity: 1, y: 0 },
                exit: {
                  opacity: 0,
                  y: -50,
                  transition: { ease: "easeOut", duration: 0.2 },
                },
              }}
            >
              <div className="dropdown">
                <DropdownTipBox tipPosition="top-right">
                  {props.children}
                </DropdownTipBox>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .Dropdown {
          position: relative;
        }

        .dropdown {
          position: absolute;
          top: calc(100% + var(--size-03));
          right: 0;
        }
      `}</style>
    </>
  );
};
