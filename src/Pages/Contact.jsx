import ShinyText from "../Components/ReactBits/ShinyText"
import DecryptedText from "../Components/ReactBits/DecryptedText"
import ScrollVelocity from "../Components/ReactBits/ScrollVelocity"

import Solo from "../assets/Solo.jpeg"
import Email from "../assets/Email.png"
import Instagram from "../assets/Instagram.png"

import "../App.css"

function Contact() {
    const skills = [
        "Graphic Designer",
        "Merch Designer",
        "Cover Art Designer",
        "Digital Artist"
    ];

    return (
        <>
            <div className="profile-container">
                <img src={Solo} alt="Thakhani Khorommbi's Profile" className="solo" />

                <h1>
                    <ShinyText
                        text="Let's Work Together"
                        speed={2}
                        shineColor="#b35900"
                        color="white"
                        spread={120}
                    />
                </h1>

            </div>
            <div className="contact-details">
                <div className="socials-container">
                    <a href="https://www.instagram.com/solo.designsx/" target="_blank"><img src={Instagram} alt="Solo Design's Instagram Link" /></a>
                    <a href="https://www.instagram.com/solo.designsx/" target="_blank"><p><ShinyText
                        text="Solo.Designsx"
                        speed={2}
                        shineColor="#b35900"
                        spread={120}
                    />
                    </p></a>

                </div>
                <div className="socials-container">
                    <a href="mailto:solodesignsx@gmail.com" target="_blank"><img src={Email} alt="Solo Design's Email Link" /></a>
                    <a href="mailto:solodesignsx@gmail.com" target="_blank"><p>
                        <ShinyText
                            text="solodesignsx@gmail.com"
                            speed={2}
                            shineColor="#b35900"
                            spread={120}
                        />


                    </p></a>
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

export default Contact