import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { Outlet } from "react-router";
// import { Outlet } from "react-router"

export default function Sindex() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}