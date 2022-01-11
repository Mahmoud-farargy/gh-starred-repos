import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts/fonts";

const globalStyles = createGlobalStyle`
    ${Fonts}
    * {
    padding: 0;
    margin: 0;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    min-width: 150px;
    overflow-x: hidden;
    font-family: var(--font-raleway);
    -webkit-font-smoothing: antialiased;
    background-color: var(--seconday-clr);
    transition: background-color var(--trans-05);
  }
  // Root
  :root {
    // heights
    --height-header: 50px;
    --height-footer: 118px;
    /* colors */
    --primary-clr: #0070f3; //10%
    --seconday-clr: #f6f8fa; //60%
    --tertiary-clr: #2f2a34; //20%
    --quaternary-clr: #ffffff; //10%
    --dark-gray: #545057;
    --ultra-white: #fff;
    --ultra-black: #000;
    --darker-black: #24292e;
    --gray: #dbdbdb;
    --light-gray: #bababa;
    --lighter-gray: #e4e4e4;
    --more-lighter-gray: #efefef;
    --text-gray: #74706b;
    --text-black: #4a525f;
    --text-dark-black: #363636;
    --light-red: #ed4956;
    --light-primary-clr: #a8cdf7;
    --transparent-black: rgba(0, 0, 0, 0.1);
    --dark-yellow: rgb(66, 62, 3);
    // letter spacing
    --spacing: 0.25rem;
    // border radius
    --radius: 0.5rem;
    --radius-curved: 1.5rem;
    /* font-sizes */
    //-- static
    --font-size-sm: 14px;
    //-- responsize
    --font-size-x-small: 0.75em;
    --font-size-small: 0.875em;
    --font-size-medium: 0.95em;
    --font-size-medium-x: 1.2em;
    --font-size-large: 1.25em;
    --font-size-x-large: 1.5em;
    --font-size-xx-large: 1.8em;
    /* font weights */
    --font-weight: 400;
    --font-weight-medium: 500;
    --font-weight-heavy: 700;
    --font-weight-x-heavy: 900;
    /* font families */
    --font-fam-main: serif;
    /* transitions */
    --trans-05: 0.5s ease;
    --trans-1s: 1s ease;
    /* font families */
    --font-raleway: "Raleway", "serif", Fira Sans, sans-serif;
    /* shadows */
    --slight-shadow: 0 1px 15px rgba(0, 0, 0, 0.08);
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    // z-index's
    --z-header: 150;
    --z-corner: 50;
    --z-theme-changer: 50;
    --z-scroll-me-up: 50;
    --z-loading: 200;
  }
  
  // themes
  html[data-theme="dark"] {
    --primary-clr: #2f4864;
    --gray: #262626;
    --ultra-white: #151515;
    --seconday-clr: #1a1e22;
    --light-gray: #161616;
    --ultra-black: #fff;
    --light-black: #999999;
    --links-clr: #9595f3;
    --bluish-sky: #4e8bc4;
    --shadow-white: #666666;
    --darker-black: #cce0f5;
    --text-black: #d8d7d7;
    --text-dark-black: #dadada;
    --transparent-black: rgba(255, 255, 255, 0.1);
    --more-lighter-gray: #3d3b3b;
    --quaternary-clr: #dadada;
    --light-primary-clr: rgb(64, 69, 75);
    --dark-yellow: rgb(182, 176, 93);
    --lighter-gray: #666666;
  }
  html[data-theme="dark"] img {
    filter: brightness(90%);
  }
  // Global classes
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }
  img {
    background-color: var(--lighter-gray);
    transition: background-color var(--trans-05);
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-style: normal;

    margin-top: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  strong,
  span,
  i,
  em {   
    font-family: var(--font-raleway);
    color: var(--text-black);
    transition: color var(--trans-05);
  }
  ::selection {
    background-color: var(--primary-clr);
    color: var(--ultra-white);
  }
  
  #app {
    min-height: calc(100vh - var(--height-footer));
    max-width: 1600px;
    padding: 3rem 6rem;
  }
  .loading--container {
    width: 100%;
    min-height: 50px;
    margin: 1rem 0.6rem 1.3rem;
    text-align: center;
    img {
      background-color: transparent;
      width: 40px;
      height: 40px;
      object-fit: contain;
      margin: auto;
    }
  }
  .error__msg {
    margin: 1rem 0;
    color: var(--light-red);
    text-align: center;
    font-size: var(--font-size-medium);
  }
  h2.page--title {
    font-size: 1.7rem;
    display: inline-block;
    background: linear-gradient(
      90deg,
      rgb(209, 213, 218) 50%,
      rgba(255, 255, 255, 0) 0px
    );
    background-position: center bottom;
    padding-bottom: 6px;
    background-repeat: repeat-x;
    background-size: 10px 2px;
  }
  #home {
    margin-top: 3rem;
  }
  
  //   responsive
  
  @media only screen and (max-width: 56.25rem) {
    #app,
    #footer {
      padding: 2rem;
    }
  }
  
  @media only screen and (max-width: 41.87rem) {
    h2.page--title {
      font-size: var(--font-size-x-large);
    }
  }
  @media only screen and (max-width: 25rem) {
    #app,
    #footer {
      padding: 1rem;
    }
  }
  @media only screen and (max-width: 21rem) {
    #app,
    #footer {
      padding: 1rem 0.5rem;
    }
  }
  
`;

export default globalStyles;