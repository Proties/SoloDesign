import Cover1 from '../assets/Building_Billboard_Mockup 2.png'
import Port1 from '../assets/AXIS.jpg.jpeg'
import Port2 from '../assets/AXIS_BOTTLE.png'
import Port3 from '../assets/Building_Billboard_Mockup 2.png'
import Port4 from '../assets/signboard.png'

import '../App.css'

function ProjectOne() {
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
                    <img src={Port1} alt="Axis Mockup" />
                    <img src={Port2} alt="Axis Bottle Mockup" />
                    <img src={Port3} alt="Axis Billboard Mockup" />
                    <img src={Port4} alt="Axis Signboard Mockup" />
                </div>


            </div>

        </>
    )
}

export default ProjectOne;