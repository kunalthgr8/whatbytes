import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { TiDocument } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Dashboard", slug: "/", icon: BsTextParagraph, color: "text-nav-white" },
  { name: "Skill Test", slug: "/skill-test", icon: SlBadge, color: "text-nav-white" },
  { name: "Internship", slug: "/internship", icon: TiDocument, color: "text-nav-white" },
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

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <div className="h-full pt-5 p-4 flex flex-col bg-nav-color">
      <div className="mt-8 flex flex-col justify-evenly self-center text-center gap-2">
        <h1 className="text-text-green mt-2 text-4xl md:text-3xl sm:text-2xl font-bold tracking-widest">
          WhatBytes
        </h1>
      </div>
      <ul className="mt-8 p-4">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.slug;
          
          // Wrap navigate in a function to prevent immediate execution
          const handleClick = () => navigate(item.slug);
          
          return (
            <NavItem
              key={item.slug}
              item={item}
              isActive={isActive}
              onClick={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
