import React from "react";
import Logo from "../assets/download.jpg";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F7F7F7] ">
      <div>
        <img src={Logo} alt="logo-3W" style={{ width: "80px" }} />
      </div>
      <div>
        <ul className="flex">
          <li>
            <a href="/">Acceuil</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
