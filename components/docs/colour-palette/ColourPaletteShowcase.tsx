import { colors as amberColors } from "dashvar/lib/variables/colors/amber";
import { colors as blueColors } from "dashvar/lib/variables/colors/blue";
import { colors as emeraldColors } from "dashvar/lib/variables/colors/emerald";
import { colors as grayColors } from "dashvar/lib/variables/colors/gray";
import { colors as indigoColors } from "dashvar/lib/variables/colors/indigo";
import { colors as pinkColors } from "dashvar/lib/variables/colors/pink";
import { colors as redColors } from "dashvar/lib/variables/colors/red";
import { colors as violetColors } from "dashvar/lib/variables/colors/violet";
import React, { FC } from "react";
import { ColourPalette } from "./ColourPalette";

type Props = {};

export const ColourPaletteShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="ColourPaletteShowcase">
        <ColourPalette variables={grayColors} name="Gray" />
        <ColourPalette variables={redColors} name="Red" />
        <ColourPalette variables={amberColors} name="Amber" />
        <ColourPalette variables={emeraldColors} name="Emerald" />
        <ColourPalette variables={blueColors} name="Blue" />
        <ColourPalette variables={indigoColors} name="Indigo" />
        <ColourPalette variables={violetColors} name="Violet" />
        <ColourPalette variables={pinkColors} name="Pink" />
      </div>

      <style jsx>{`
        .ColourPaletteShowcase {
          display: flex;
          flex-direction: column;
        }

        .ColourPaletteShowcase > :global(* + *) {
          margin-top: var(--size-07);
        }
      `}</style>
    </>
  );
};
