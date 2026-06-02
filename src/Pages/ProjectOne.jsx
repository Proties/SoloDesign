import { Link } from "react-router-dom"

import ShinyText from "../Components/ReactBits/ShinyText"

import Cover1 from '../assets/Building_Billboard_Mockup 1.webp'
import Port1 from '../assets/AXIS.jpg.webp'
import Port2 from '../assets/AXIS_BOTTLE.webp'
import Port3 from '../assets/Building_Billboard_Mockup 1.webp'
import Port4 from '../assets/signboard.webp'

import Cover2 from '../assets/banner.webp'

import '../App.css'

function ProjectOne() {
    return (
        <>
            <div className="project-header">
                <h1><ShinyText
                    text="Axis"
                    speed={2}
                    shineColor="#b35900"
                    color="white"
                    spread={120}
                /></h1>
            </div>
            <div className='project-portfolio'>
                <div className='project-overview'>
                    <img src={Cover1} alt="Axis Card Cover" className="cover" />
                    <div className='project-description'>
                        <h2><ShinyText
                            text="Description"
                            speed={2}
                            shineColor="white"
                            color="#b35900"
                            spread={120}
                        /></h2>
                        <p>Axis is a modern sports and lifestyle brand centered around movement,
                            wellness, and community. Built around a running club initiative, the
                            brand inspires people to stay active while offering thoughtfully
                            designed apparel, accessories, and essentials that support an everyday
                            athletic lifestyle</p>
                        <div className='project-label-container'>
                            <div className='service-label'>
                                <h3><ShinyText
                                    text="Service"
                                    speed={2}
                                    shineColor="#b35900"
                                    spread={120}
                                /></h3>
                                <p>Brand Mockup</p>
                            </div>
                            <div className='client-label'>
                                <h3><ShinyText
                                    text="Client"
                                    speed={2}
                                    shineColor="#b35900"
                                    spread={120}
                                /></h3>
                                <p>Axis</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='project-image-container'>
                    <img src={Port1} alt="Axis Mockup" />
                    <img src={Port2} alt="Axis Bottle Mockup" />
                    <img src={Port3} alt="Axis Billboard Mockup" />
                    <img src={Port4} alt="Axis Signboard Mockup" />
                </div>
            </div>
            <div className='more-projects'>
                <div className="more-projects-titles">
                    <h2><ShinyText
                        text="More Projects"
                        speed={2}
                        shineColor="#b35900"
                        color="white"
                        spread={120}
                    /></h2>
                </div>
                <div className="project-details">
                    <Link className="project-card" to="/project/neurohome"><img src={Cover2} alt="Neuro Home Cover" /></Link>

                    <div className="project-info">
                        <Link className="project-name" to="/project/neurohome"> <ShinyText
                            text="NeuroHome"
                            speed={2}
                            shineColor="#b35900"
                            spread={120}
                        /></Link>
                        <h2 className="project-type">Brand Mockup</h2>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProjectOne;