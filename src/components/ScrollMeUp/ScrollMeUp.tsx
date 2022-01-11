import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";

const StyledBtnContainer = styled.div`
  position: fixed;
  z-index: var(--z-scroll-me-up);
  bottom: 0.67rem;
  right: 1rem;
  button {
    width: 36px;
    height: 36px;
    border: none;
    display: grid;
    place-items: center;
    background: var(--light-primary-clr);
    transition: background var(--trans-05);
    padding: 0.2rem;
    cursor: pointer;
    font-size: var(--font-size-x-large);
    text-align: center;
    color: var(--quaternary-clr);
    border-radius: 50%;
  }
`;

const ScrollMeUp: React.FC = () => {
  const [scrolledDown, setScrolledDownState] = useState<boolean>(false);
  const heightToShowBtn: number = 300;
  const handlingScrollBtnAppearing = useCallback(() => {
    const currScrollHeight =
      window.scrollY || document.body.scrollTop || document.documentElement;
    setScrolledDownState(currScrollHeight >= heightToShowBtn);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handlingScrollBtnAppearing, true);
    return () => {
      window.removeEventListener("scroll", handlingScrollBtnAppearing, true);
    };
  }, [handlingScrollBtnAppearing]);
  const onBtnClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <StyledBtnContainer>
      {scrolledDown && (
        <button onClick={() => onBtnClick()}>
          <MdKeyboardArrowUp />
        </button>
      )}
    </StyledBtnContainer>
  );
};

export default ScrollMeUp;
