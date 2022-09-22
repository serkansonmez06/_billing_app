import React from "react";
import { Routes, Route } from "react-router-dom";
import BillComponent from "./BillComponent";
import DashboardComponent from "./DashboardComponent";
import UsersComponent from "./UsersComponent";

const HomeComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/bill" element={<BillComponent />} />
        <Route path="/users" element={<UsersComponent />} />
      </Routes>
    </div>
  );
};

export default HomeComponent;
