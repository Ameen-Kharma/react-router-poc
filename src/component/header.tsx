import { useState } from "react";
import HeaderLogo from "./headerLogo";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-700 text-sm py-2">
        <div className="container mx-auto flex justify-between items-center px-4" style={{"textAlign": "right"}}>
          {/* Left anks */}
            <a >Login</a>
            <a>Register</a>
            <a>Qatar Info</a>
            <a>Careers</a>
            <a>Visa</a>
            <a>Download Calendar</a>

          {/* Placeholder for Social Media Icons (Removed) */}
        </div>
      </div>

      <HeaderLogo />

      
    </header>
  );
};

export default Header;
