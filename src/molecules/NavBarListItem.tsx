import React from "react";

interface NavBarListItemProps {
  text: string;
}

const NavBarListItem: React.FC<NavBarListItemProps> = ({ text }) => {
  return (
    <li className="mr-6">
      <a
        className=" hover:text-blue-100 text-white hover:scale-140 tracking-wide hover:underline hover:transition-all hover:scale-105 hover:ease-in"
        href={`#${text}`}
        style={{ fontFamily: "Poppins" }}
      >
        {text}
      </a>
    </li>
  );
};

export default NavBarListItem;
