import { Outlet, Link } from 'react-router-dom';
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import '../App.css'


function PublicLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )

}

export default PublicLayout;