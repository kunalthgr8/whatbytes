import React from "react";
import Man from "../../assets/man.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { toggleSidebar } from "../../store/sidebarSlice";

function Header() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const togglebar = () => {
    dispatch(toggleSidebar());
  };

  const capitalizeName = (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="flex w-full justify-between mt-4 p-4 items-center">
      {/* Hamburger menu only visible on smaller screens */}
      <div className="text-4xl lg:hidden cursor-pointer">
        <RxHamburgerMenu
          onClick={togglebar}
          aria-label={isSidebarOpen ? "Close Sidebar" : "Open Sidebar"} // Accessibility
        />
      </div>

      {/* Add space between menu and profile on large screens */}
      <div className="flex-grow"></div>

      {/* User profile with logo and text to the right */}
      <div className="flex items-center space-x-3 cursor-pointer hover:scale-105 transition-all duration-300">
        
        {/* User profile */}
        <div className="flex flex-col items-center border-2 rounded-3xl p-2 mr-3" >
          <Link to="/user" className="flex  items-center">
            <img width="48" height="48" src={Man} alt="user" />
            <p className="text-sm mr-2">{capitalizeName("kunal singla")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
