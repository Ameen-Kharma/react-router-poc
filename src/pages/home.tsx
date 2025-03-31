import React from "react";
import logo from "./logo.svg";
import Header from "../layouts/header";
import Body from "../layouts/body";
import Footer from "../layouts/footer";
import BootstrapPOC from "./bootstrapPOC";

const Home: React.FC = () => {
  return (
    <div>
      <BootstrapPOC />
      <Header />
      <Body PageName="Home" />
      <Footer />
    </div>
  );
};

export default Home;
