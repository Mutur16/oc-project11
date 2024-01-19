import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Base(): ReactNode {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Base
