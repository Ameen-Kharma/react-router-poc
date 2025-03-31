import { useState } from "react";
import "../assest/style/header.css";

const HeaderLogo: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="logo">
      <a href="http://qmmf.com/" className="icon">
        <img
          className="mkd-normal-logo"
          src="http://qmmf.com/wp-content/themes/discussionwp/assets/img/qmmflogo.png"
          alt="logo"
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
