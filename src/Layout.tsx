import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/mine/Header";

const Layout: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <main className="flex-1"> 
        <Outlet /> 
      </main>
    </div>
  );
};

export default Layout;
