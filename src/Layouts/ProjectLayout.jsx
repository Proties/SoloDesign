import { Outlet, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

import '../App.css'

function ProjectLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )

}

export default ProjectLayout;