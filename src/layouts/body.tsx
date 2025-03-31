import { useState } from "react";
import HeaderLogo from "./headerLogo";
import StickyHeader from "./stickyHeader";
import "../assest/style/header.css";
import { ArrowRight, Facebook } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="">
      {/* Top Bar */}
      <div
        className="top-header"
        style={{ textAlign: "left", display: "flex" }}
      >
        <div style={{ width: "50%" }}>
          <a href="#">Login</a> /<a href="#">Register</a> /
          <a href="#">Qatar Info</a> /<a href="#">Careers</a> /
          <a href="#">Visa</a> /<a href="#">Download Calendar</a>
        </div>

        <div
          className=""
          style={{ color: "red", justifyContent: "space-between" }}
        >
          <i className="bi bi-facebook text-white text-xl"></i>
          <i className="bi bi-twitter text-white text-xl"></i>
          <i className="bi bi-instagram text-white text-xl"></i>
          <i className="bi bi-linkedin text-white text-xl"></i>
        </div>
      </div>

      <HeaderLogo />
      <StickyHeader />
    </header>
  );
};

export default Header;
