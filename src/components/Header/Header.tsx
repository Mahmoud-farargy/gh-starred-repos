import React from "react";
import Auxiliary from "../HOC/Auxiliary";
import { Corner, ThemeChanger, ScrollMeUp } from "../../components";

const Header: React.FC = () => {
  return (
    <Auxiliary>
      <header>
        <Corner />
        <ThemeChanger />
        <ScrollMeUp />
      </header>
    </Auxiliary>
  );
};
export default Header;
