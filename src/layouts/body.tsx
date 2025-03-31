import { useState } from "react";
import "../assest/style/header.css";

type Props = {
  PageName: string;
};

const Body: React.FC<Props> = ({ PageName }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <p> this is the {PageName} view</p>
    </div>
  );
};

export default Body;
