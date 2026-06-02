import { Link } from "react-router-dom"
import ShinyText from "../Components/ReactBits/ShinyText"
import Cover1 from '../assets/Building_Billboard_Mockup 2.png'
import Cover2 from '../assets/banner.png'
import DecryptedText from "../Components/ReactBits/DecryptedText"
import ScrollVelocity from "../Components/ReactBits/ScrollVelocity"

import "../App.css"

function Home() {
    const skills = [
        "Graphic Designer",
        "Merch Designer",
        "Cover Art Designer",
        "Digital Artist"
    ];
    return (
        <>

            <div className="projects">
                <div className="project-details">
                    <Link className="project-card" to="/project/axis"><img src={Cover1} alt="Axis Card Cover" /></Link>
                    <div className="project-info">


                        <Link className="project-name" to="/project/axis">
                            <ShinyText
                                text="Axis"
                                speed={2}
                                shineColor="#b35900"
                                spread={120}
                            />
                        </Link>


                        <h2 className="project-type">Brand Mockup</h2>
                    </div>

                </div>
                <div className="project-details">
                    <Link className="project-card" to="/project/neurohome"><img src={Cover2} alt="Neuro Home Cover" /></Link>

                    <div className="project-info">
                        <Link className="project-name" to="/project/neurohome">
                            <ShinyText
                                text="NeuroHome"
                                speed={2}
                                shineColor="#b35900"
                                spread={120}
                            />
                        </Link>
                        <h2 className="project-type">Brand Mockup</h2>
                    </div>
                </div>




            </div>
            <div className="skills">
                <ScrollVelocity
                    texts={skills}
                    velocity={30}
                    numCopies={3}
                    damping={50}
                    stiffness={50}
                    className="skills-scroll"
                >
                    {skills.map((skill) => (
                        <div key={skill} className="skill-item">
                            <DecryptedText
                                text={skill}
                                speed={50}
                                maxIterations={1}
                                characters="ABCD1234!?"
                                trigger="hover"
                            />
                        </div>
                    ))}
                </ScrollVelocity>
            </div>

        </>

    )

}

export default Home