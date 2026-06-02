import { Link } from "react-router-dom"

import ShinyText from "../Components/ReactBits/ShinyText"

import Cover1 from '../assets/banner.webp'
import Port1 from '../assets/Ad.webp'
import Port2 from '../assets/Business_card.webp'
import Port3 from '../assets/PC.webp'
import Port4 from '../assets/photo_Manipulation.webp'
import Port5 from '../assets/Sign.webp'

import Cover2 from '../assets/Building_Billboard_Mockup 1.webp'

import '../App.css'


function ProjectTwo() {
    return (
        <>
            <div className="project-header">
                <h1><ShinyText
                    text="NeuroHome"
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
                        <p>NeuroHome is a smart home technology brand designed to bring
                            convenience, automation, and control into everyday living.
                            The project focused on creating a clean, modern visual identity
                            that communicates innovation, simplicity, and trust, supported by
                            brand applications that showcase the product in real-world
                            environments.</p>
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
                                <p>NeuroHome</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='project-image-container'>
                    <img src={Port1} alt="NeuroHome Ad Mockup" />
                    <img src={Port2} alt="NeuroHome Business Card Mockup" />
                    <img src={Port3} alt="NeuroHome PC Mockup" />
                    <img src={Port4} alt="NeuroHome Photo Manipulation Mockup" />
                    <img src={Port5} alt="NeuroHome Signboard Mockup" />
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
                    <Link className="project-card" to="/project/axis"><img src={Cover2} alt="Axis Card Cover" /></Link>
                    <div className="project-info">
                        <Link className="project-name" to="/project/axis"><ShinyText
                            text="Axis"
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

export default ProjectTwo;