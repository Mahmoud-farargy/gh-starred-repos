import React from 'react';
import styled from "styled-components";

const StyledGloabalLoading = styled.div`
    @keyframes spin {
      to {
        transform: rotateZ(360deg);
      }
    }  
    position: fixed;
    inset: 0 0 0 0;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items:center;
    background-color: var(--ultra-white);
    z-index: var(--z-loading);
    span {
      display: block;
      margin: 0 auto;
      width:60px;
      height: 60px;
      border: 4px solid transparent;
      border-top-color: var(--primary-clr);
      border-radius: 50%;
      animation: spin ease 1000ms infinite;
      -webkit-animation: spin ease 1000ms infinite;
    }
`;

const LoadingScreen: React.FC= () => {
        return (
            <StyledGloabalLoading className="flex-column">
                <span></span>
            </StyledGloabalLoading>
        );
}

export default LoadingScreen;