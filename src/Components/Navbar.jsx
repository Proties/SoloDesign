import { Link } from 'react-router-dom';
import ShinyText from "../Components/ReactBits/ShinyText"
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
                    <Link to="/contact"><ShinyText
                        text="Contact Us"
                        speed={2}
                        shineColor="#b35900"
                        color='white'
                        spread={120}
                    /></Link>
                </div>
            </nav>
        </header>
    )

}

export default Navbar