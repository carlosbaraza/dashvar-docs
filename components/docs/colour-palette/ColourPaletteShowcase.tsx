import { colors as blueColors } from "dashvar/lib/variables/colors/blue";
import { colors as grayColors } from "dashvar/lib/variables/colors/gray";
import { colors as greenColors } from "dashvar/lib/variables/colors/green";
import { colors as indigoColors } from "dashvar/lib/variables/colors/indigo";
import { colors as pinkColors } from "dashvar/lib/variables/colors/pink";
import { colors as purpleColors } from "dashvar/lib/variables/colors/purple";
import { colors as redColors } from "dashvar/lib/variables/colors/red";
import { colors as yellowColors } from "dashvar/lib/variables/colors/yellow";
import React, { FC } from "react";
import { ColourPalette } from "./ColourPalette";

type Props = {};

export const ColourPaletteShowcase: FC<Props> = (props) => {
  return (
    <>
      <div className="ColourPaletteShowcase">
        <ColourPalette variables={grayColors} name="Gray" />
        <ColourPalette variables={redColors} name="Red" />
        <ColourPalette variables={yellowColors} name="Yellow" />
        <ColourPalette variables={greenColors} name="Green" />
        <ColourPalette variables={blueColors} name="Blue" />
        <ColourPalette variables={indigoColors} name="Indigo" />
        <ColourPalette variables={purpleColors} name="Purple" />
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
