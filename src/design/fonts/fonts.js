import { css } from 'styled-components';
// raleway
import ralewayThinTtf from "./Raleway/Raleway-Thin.ttf";
import ralewasyExtralightTtf from "./Raleway/Raleway-ExtraLight.ttf";
import ralewasyLightTtf from "./Raleway/Raleway-Light.ttf";
import ralewayRegularTtf from "./Raleway/Raleway-Medium.ttf";
import ralewayMediumTtf from "./Raleway/Raleway-Regular.ttf";
import ralewaySemiboldTtf from "./Raleway/Raleway-SemiBold.ttf";
import ralewayBoldTff from "./Raleway/Raleway-Bold.ttf";
import ralewayExtraboldTtf from "./Raleway/Raleway-ExtraBold.ttf";
import ralewayHeavyTtf from "./Raleway/Raleway-Black.ttf";

import ralewayRegularItalicTtf from "./Raleway/Raleway-Italic.ttf";
import ralewayBoldItalicTtf from "./Raleway/Raleway-BoldItalic.ttf";
import ralewaySemiboldItalicTtf from "./Raleway/Raleway-SemiBold.ttf";
import ralewayExtraboldItalicTtf from "./Raleway/Raleway-ExtraBoldItalic.ttf";

// mono
import SFMonoRegularWoff from './SFMono/SFMono-Medium.ttf';
import SFMonoRegularWoff2 from './SFMono/SFMono-Regular.woff2';
import SFMonoSemiboldWoff from './SFMono/SFMono-Semibold.woff';
import SFMonoSemiboldWoff2 from './SFMono/SFMono-Semibold.woff2';

import SFMonoRegularItalicWoff from './SFMono/SFMono-RegularItalic.woff';
import SFMonoRegularItalicWoff2 from './SFMono/SFMono-RegularItalic.woff2';
import SFMonoSemiboldItalicWoff from './SFMono/SFMono-SemiboldItalic.woff';
import SFMonoSemiboldItalicWoff2 from './SFMono/SFMono-SemiboldItalic.woff2';


// raleways weights
const ralewayNormalWeights = {
  100: [ralewayThinTtf],
  200: [ralewasyExtralightTtf],
  300: [ralewasyLightTtf],
  400: [ralewayRegularTtf],
  500: [ralewayMediumTtf],
  600: [ralewaySemiboldTtf],
  700: [ralewayBoldTff],
  800: [ralewayExtraboldTtf],
  900: [ralewayHeavyTtf]
}
const ralewayItalicWeights = {
  400: [ralewayRegularItalicTtf],
  600: [ralewaySemiboldItalicTtf],
  700: [ralewayBoldItalicTtf],
  900: [ralewayExtraboldItalicTtf]
}


// mono weights
const sfMonoNormalWeights = {
  400: [SFMonoRegularWoff, SFMonoRegularWoff2],
  600: [SFMonoSemiboldWoff, SFMonoSemiboldWoff2],
};

const sfMonoItalicWeights = {
  400: [SFMonoRegularItalicWoff, SFMonoRegularItalicWoff2],
  600: [SFMonoSemiboldItalicWoff, SFMonoSemiboldItalicWoff2],
};

const sfMono = {
  name: 'SF Mono',
  normal: sfMonoNormalWeights,
  italic: sfMonoItalicWeights,
};

const raleway = {
  name: "Raleway",
  normal: ralewayNormalWeights,
  italic: ralewayItalicWeights
}


const createFontFaces = (family, style = 'normal') => {
  let styles = '';

  for (const [weight, formats] of Object.entries(family[style])) {
    const woff = formats[0];
    const woff2 = formats[1];

    styles += `
      @font-face {
        font-family: '${family.name}';
        src: ${woff2 ? `url(${woff2}) format('woff2'),` : ''}
            url(${woff}) format('woff');
        font-weight: ${weight};
        font-style: ${style};
        font-display: swap;
      }
    `;
  }

  return styles;
};

// font faces
const ralewayNormal = createFontFaces(raleway);
const ralewasyItalic = createFontFaces(raleway, "italic");

const sfMonoNormal = createFontFaces(sfMono);
const sfMonoItalic = createFontFaces(sfMono, 'italic');


const Fonts = css`
  ${ralewayNormal + ralewasyItalic +
    sfMonoNormal + sfMonoItalic
  }
`;

export default Fonts;
