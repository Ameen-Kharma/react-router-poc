import React from "react";
import logo from "./logo.svg";
import "../assest/style/App.css";
import Header from "../layouts/header";
import Body from "../layouts/body";
import Footer from "../layouts/footer";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Body PageName="about" />
      <Footer />
    </div>
  );
};

export default Home;
