import React, { useState, useEffect, useCallback } from "react";
import DropDownStyle from "./DropDownStyle";
import { IoMdArrowDropdown } from "react-icons/io";
import { trimText } from "../../../utilities/index";

interface DropDownBtnProps {
  onChange: Function;
  optionsList: Array<string>;
  defaultOption: string;
}

const DropDownBtn: React.FC<DropDownBtnProps> = ({
  onChange,
  optionsList,
  defaultOption,
}) => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || "stars"
  );
  const toggleDropDown = () => {
    setDropDownOpen((prevOpenState: boolean) => !prevOpenState);
  };
  const changeSelection = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };
  const closeDropWhenBlurred = useCallback(() => {
    toggleDropDown();
  }, []);
  useEffect((): void => {
    if (dropDownOpen) {
      document.addEventListener("click", closeDropWhenBlurred, false);
    } else {
      document.removeEventListener("click", closeDropWhenBlurred, false);
    }
  }, [dropDownOpen, closeDropWhenBlurred]);
  return (
    <DropDownStyle active={dropDownOpen}>
      <button className="dropdown__button" onClick={() => toggleDropDown()}>
        <label>{ trimText(selectedOption, 12) }</label>
        <IoMdArrowDropdown />
      </button>
      <ul className="dropdown__list">
        {optionsList?.length > 0 &&
          optionsList.map(
            (option: string, idx: number) =>
              option && (
                <li
                  className={`${
                    option === selectedOption ? "selected__option" : ""
                  } dropdown__list-item`}
                  key={idx}
                >
                  <button onClick={() => changeSelection(option)}>
                    {option}
                  </button>
                </li>
              )
          )}
      </ul>
    </DropDownStyle>
  );
};
export default DropDownBtn;
