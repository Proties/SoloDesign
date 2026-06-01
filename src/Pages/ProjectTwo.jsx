import Cover1 from '../assets/banner.png'
import Port1 from '../assets/Ad.png'
import Port2 from '../assets/Business_card.png'
import Port3 from '../assets/PC.png'
import Port4 from '../assets/photo_Manipulation.png'
import Port5 from '../assets/Sign.png'

import '../App.css'


function ProjectTwo() {
    return (
        <>
            <div className="project-header">
                <h1>Axis</h1>
            </div>
            <div className='project-portfolio'>
                <div className='project-overview'>
                    <img src={Cover1} alt="Axis Card Cover" className="cover" />
                    <div className='project-description'>
                        <h2>Description</h2>
                        <p>dankie</p>
                        <div className=''>
                            <p>Service</p>
                            <p>Client</p>

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

        </>
    )
}

export default ProjectTwo;