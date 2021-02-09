import { Variable } from "dashvar/lib/types";
import React, { FC } from "react";
import { ColourPaletteItem } from "./ColourPaletteItem";

type Props = {
  variables: Variable[];
  name: string;
};

export const ColourPalette: FC<Props> = (props) => {
  return (
    <>
      <div className="ColourPalette">
        <h2>{props.name}</h2>
        <div className="palette">
          {props.variables.map((variable) => (
            <ColourPaletteItem variable={variable} key={variable.key} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .ColourPalette {
          display: flex;
          flex-direction: column;
        }

        .ColourPalette > :global(* + *) {
          margin-top: var(--size-05);
        }

        h2 {
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-bold);
          color: ${props.variables.slice(-1)[0].value};
        }

        .palette {
          display: grid;
          grid-template-columns: 1fr;
        }

        :global(.md) .palette {
          grid-template-columns: 1fr 1fr;
        }

        :global(.lg) .palette {
          grid-template-columns: 1fr 1fr 1fr 1fr;
        }

        :global(.xl) .palette {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
      `}</style>
    </>
  );
};
