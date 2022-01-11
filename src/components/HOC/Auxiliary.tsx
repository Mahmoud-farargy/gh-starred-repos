import React from "react";

interface AuxiliaryProps {
  children: JSX.Element | null;
}

const Auxiliary: React.FC<AuxiliaryProps> = ({ children }) => children;
export default Auxiliary;
