import { Link } from 'react-router-dom';
import "../App.css"
import Logo from "../assets/logo.png"

function Navbar() {
    return (
        <header>
            <nav>
                <div className='right-container-nav'>
                    <Link to="/"><img src={Logo} alt="Solo Designs Logo" className='logo' /></Link>
                </div>
                <div className='left-container-nav'>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </nav>
        </header>
    )

}

export default Navbar