import React from "react";
import { Auxiliary } from "../index";
import styled from "styled-components";

const StyledFooter = styled.footer`
  align-items: center;
  justify-content: center;
  .footer--inner {
    align-items: center;
    justify-content: center;
    .footer--row {
      color: var(--text-black);
      margin-bottom: 0.8rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      display: block;
      a {
        text-decoration: none;
        color: var(--primary-clr);
        padding: 5px;
        &:hover,
        &:focus {
          text-decoration: underline;
        }
      }
    }
  }
  padding: 2rem 5rem;
  font-weight: var(--font-weight);
  font-size: var(--font-size-sm);
`;

const Footer: React.FC = () => {
  return (
    <Auxiliary>
      <StyledFooter id="footer" className="flex-row">
        <div className="footer--inner flex-column">
          <div className="footer--row">
            <span>Built with</span>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>
            &middot;
            <a
              href="https://www.typescriptlang.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Typescript
            </a>
            &middot;
            <a
              href="https://styled-components.com/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled components
            </a>
            and more!
          </div>
          <div className="footer--row">
            <span>Made By</span>
            <a
              href="https://mahmoud-farargy.web.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mahmoud El-Farargy
            </a>
          </div>
        </div>
      </StyledFooter>
    </Auxiliary>
  );
};

export default Footer;
