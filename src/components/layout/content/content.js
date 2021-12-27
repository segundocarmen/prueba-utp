import React from "react";
import { ContainerComponent } from "./contentStyle";

const Content = ({ children }) => {
  return <ContainerComponent>{children}</ContainerComponent>;
};

export default Content;
