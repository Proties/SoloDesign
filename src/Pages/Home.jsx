import { Link } from "react-router-dom"
import Cover1 from '../assets/Building_Billboard_Mockup 2.png'
import Cover2 from '../assets/banner.png'

import "../App.css"

function Home() {
    return (
        <>

            <div className="projects">
                <div className="project-details">
                    <Link className="project-card" to="/project/axis"><img src={Cover1} alt="Axis Card Cover" /></Link>
                    <div className="project-info">
                        <Link className="project-name" to="/project/axis">Axis</Link>
                        <h2 className="project-type">Peace</h2>
                    </div>

                </div>
                <div className="project-details">
                    <Link className="project-card" to="/project/neurohome"><img src={Cover2} alt="Neuro Home Cover" /></Link>

                    <div className="project-info">
                        <Link className="project-name" to="/project/neurohome">NeuroHome</Link>
                        <h2 className="project-type">Peace</h2>
                    </div>
                </div>




            </div>

        </>

    )

}

export default Home