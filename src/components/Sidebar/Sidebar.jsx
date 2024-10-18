import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { SlBadge } from "react-icons/sl";
import { TiDocument } from "react-icons/ti";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { name: "Dashboard", slug: "/", icon: BsTextParagraph, color: "text-black " },
  { name: "Skill Test", slug: "/skill-test", icon: SlBadge, color: "text-black" },
  { name: "Internship", slug: "/internship", icon: TiDocument, color: "text-black" },
];

const NavItem = React.memo(({ item, isActive, onClick }) => (
  <li
    className={`flex gap-4 items-center text-lg font-medium cursor-pointer pl-5 pt-4 pb-4 hover:text-violet-400 hover:font-bold ${
      isActive ? "text-violet-600 bg-violet-100 rounded-lg rounded-r-3xl" : item.color
    } text-gray-600`}
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
    <div className="h-full pt-5 p-4 pl-0 flex flex-col border border-r-violet-100">
      <div className="mt-5 mb-10 self-center text-center">
        <h1 className="text-black  text-4xl md:text-3xl sm:text-2xl font-bold tracking-wide">
          WhatBytes
        </h1>
      </div>
      <ul className="mt-8">
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
