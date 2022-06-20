import "./nav.css";

//icons
import { MdHome } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { MdCall } from "react-icons/md";

function Navbar() {
  return (
    <div className="navigation">
      <a href="#home">
        <MdHome className="icon active-nav" />
      </a>
      <a href="#about">
        <MdOutlinePersonSearch className="icon" />
      </a>
      <a href="#members">
        <IoPeopleCircleOutline className="icon" />
      </a>
      <a href="#contact">
        <MdCall className="icon" />
      </a>
      <a href="#footer">
        <BiTask className="icon" />
      </a>
    </div>
  );
}

export default Navbar;
