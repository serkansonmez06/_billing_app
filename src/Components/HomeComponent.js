import React from "react";
import { Routes, Route } from "react-router-dom";
import BillComponent from "./BillComponent";
import { ContactComponent } from "./ContactComponent";
import DashboardComponent from "./DashboardComponent";
import { NewBillComponent } from "./NewBillComponent";
import NotFoundComponent from "./NotFoundComponent";
import UsersComponent from "./UsersComponent";

const HomeComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/bill" element={<BillComponent />} />
        <Route path="/users" element={<UsersComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/newaccount" element={<NewBillComponent />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
    </div>
  );
};

export default HomeComponent;
