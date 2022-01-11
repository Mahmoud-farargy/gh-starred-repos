import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdDarkMode, MdWbSunny } from "react-icons/md";

const StyledThemeChangerBtnContainer = styled.div`
  position: fixed;
  top: 0.67rem;
  left: 0.67rem;
  width: 40px;
  height: 40px;
  background: none;
  z-index: var(--z-theme-changer);
  button {
    cursor: pointer;
    margin: 0.3rem 0.5rem;
    border: 1px dashed #747441;
    background: var(--gray);
    padding: 0.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    svg {
      font-size: var(--font-size-large);
      transition: color 0.2s linear;
    }
    .dark__btn__icon {
      color: #4a525f;
    }
    .light__btn__icon {
      color: pink;
    }
  }
`;
const ThemeChanger: React.FC = () => {
  // We could have also used input checkbox instead of toggling the state
  // but all ways lead to Rome.
  const [isDark, setDarkMode] = useState<boolean>(false);
  const toggleMode = () => {
    setDarkMode((currMode: boolean) => !currMode);
  };
  useEffect(() => {
    const changeTheme = (e) => {
      setDarkMode(e.matches);
    };
    if (window.matchMedia) {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        ?.addEventListener("change", changeTheme);
    }
    return (): void => {
      window.matchMedia &&
        window
          .matchMedia("(prefers-color-scheme: dark)")
          .removeEventListener("change", changeTheme);
    };
  }, []);
  useEffect((): void => {
    if (typeof isDark === "boolean") {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    }
  }, [isDark]);
  return (
    <StyledThemeChangerBtnContainer>
      <button onClick={() => toggleMode()}>
        {isDark ? (
          <MdWbSunny className="light__btn__icon" />
        ) : ( 
          <MdDarkMode className="dark__btn__icon" />
        )}
      </button>
    </StyledThemeChangerBtnContainer>
  );
};
export default ThemeChanger;
