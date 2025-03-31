import React from "react";
import { Link } from "react-router";
// import logo from "./logo.svg";
// import Header from "../layouts/header";
// import Body from "../layouts/body";
// import Footer from "../layouts/footer";

const NotFound: React.FC = () => {
  return (
    <div>
      <p>
        {" "}
        404 Not found ! go back to
        <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
