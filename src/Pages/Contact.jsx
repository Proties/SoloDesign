import Solo from "../assets/Solo.jpeg"
import Email from "../assets/Email.png"
import Instagram from "../assets/Instagram.png"

import "../App.css"

function Contact() {
    return (
        <>
            <div className="profile-container">
                <img src={Solo} alt="Thakhani Khorommbi's Profile" className="solo" />

                <h1>Let's Work Together</h1>

            </div>
            <div className="contact-details">
                <div className="socials-container">
                    <a href="https://www.instagram.com/solo.designsx/" target="_blank"><img src={Instagram} alt="Solo Design's Instagram Link" /></a>
                    <a href="https://www.instagram.com/solo.designsx/" target="_blank"><p>Solo.Designsx</p></a>

                </div>
                <div className="socials-container">
                    <a href="mailto:solodesignsx@gmail.com" target="_blank"><img src={Email} alt="Solo Design's Email Link" /></a>
                    <a href="mailto:solodesignsx@gmail.com" target="_blank"><p>solodesignsx@gmail.com</p></a>


                </div>

            </div>

        </>
    )
}

export default Contact