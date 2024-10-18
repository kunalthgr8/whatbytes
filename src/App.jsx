import "./App.css";
import React, { useEffect } from "react";
import { Header, HeaderSidebar, Sidebar } from "./components/index.js";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Clean up on unmount
    };
  }, [isSidebarOpen]); // Reacts to sidebar open state

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/6 md:w-1/5 sm:w-1/4 h-full hidden lg:block">
        <Sidebar />
      </div>

      <div className={`lg:hidden transition-all duration-300 ${isSidebarOpen ? "block" : "hidden"}`}>
        <HeaderSidebar />
      </div>

      <div className="flex flex-col  w-full h-full flex-grow overflow-y-auto">
        <Header />
        {/* <div className="flex justify-center"> */}
          <Outlet />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
