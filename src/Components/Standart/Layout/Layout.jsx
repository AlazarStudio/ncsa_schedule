import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../Blocks/Header/Header"
import Footer from "../../Blocks/Footer/Footer";


const Layout = () => {
    return (
        <>
            <Header />
            <div style={{ padding: "20px" }}>
                <Outlet /> {/* Отображает текущую вложенную страницу */}
            </div>
        </>
    );
};

export default Layout;