import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsTextParagraph } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { TiDocument } from "react-icons/ti";
import { toggleSidebar } from "../../store/sidebarSlice.js";
import "./HeaderSidebar.css";

const NAV_ITEMS = [
  {
    name: "Dashboard",
    slug: "/",
    icon: BsTextParagraph,
    color: "text-nav-white",
  },
  {
    name: "Skill Test",
    slug: "/skill-test",
    icon: SlBadge,
    color: "text-nav-white",
  },
  {
    name: "Internship",
    slug: "/internship",
    icon: TiDocument,
    color: "text-nav-white",
  },
];

const NavItem = React.memo(({ item, isActive, onClick }) => (
  <li
    className={`flex items-center m-1 text-base font-medium cursor-pointer p-2 hover:text-nav-active hover:font-bold ${
      isActive ? "text-nav-active" : item.color
    } text-slate-50`}
    onClick={onClick}
    aria-current={isActive ? "page" : undefined}
  >
    <item.icon className="mr-2" />
    {item.name}
  </li>
));

const HeaderSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  const handleLinkClick = (slug) => {
    navigate(slug);
    dispatch(toggleSidebar());
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-nav-color transform transition-transform duration-300 z-50">
          <div className="mt-8 flex flex-col justify-evenly self-center text-center gap-2">
        <h1 className="text-text-green mt-2 text-4xl md:text-3xl sm:text-2xl font-bold tracking-widest">
          WhatBytes
        </h1>
      </div>
          <div className="h-full pt-5 p-4 flex flex-col">
            <ul className="mt-8 p-4">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.slug;
                const onClick = () => handleLinkClick(item.slug);

                return (
                  <NavItem
                    key={item.slug}
                    item={item}
                    isActive={isActive}
                    onClick={onClick}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderSidebar;
