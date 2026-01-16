import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import MainHeader from "./MainHeader";

const MainLayout = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <Header />
            <MainHeader />


            <main className="flex-fill">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
