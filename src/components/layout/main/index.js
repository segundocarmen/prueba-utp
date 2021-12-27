import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Content from "../content/content";

const Main = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <Content children={children} />
      <Footer />
    </div>
  );
};

export default Main;
