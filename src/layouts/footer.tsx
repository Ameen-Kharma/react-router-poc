import { useState } from "react";
import HeaderLogo from "./headerLogo";
import StickyHeader from "./stickyHeader";
import "../assest/style/header.css";

const Footer: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <p> this is the Footer view</p>
    </div>
  );
};

export default Footer;
