import { ReactNode } from "react";
import { Outlet } from "react-router-dom";

function Base(): ReactNode {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Base
