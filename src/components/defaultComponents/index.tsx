import { Outlet } from "react-router-dom";
import { Header } from "../header";

export function DefaultHeader() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}