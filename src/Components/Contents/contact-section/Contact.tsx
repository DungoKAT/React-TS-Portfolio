import { useState } from "react"
import EmailJS from "@emailjs/browser"
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs"
import { AiFillMail, AiTwotonePhone } from "react-icons/ai"
import { BiSolidMessage } from "react-icons/bi"
import HeadTopic from "../../HeadTopic"
import "../../../Styles/contact.css"

const Contact = () => {
    const [fromName, setFromName] = useState<string>("")
    const [fromEmail, setFromEmail] = useState<string>("")
    const [fromMessage, setFromMessage] = useState<string>("")

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        EmailJS.sendForm('service_vd5m9p8', 'template_lvxap7o', e.currentTarget, '1IBLyM4LoyTzbsA-z')
            .then((result) => {
                console.log(result)
                setFromName("")
                setFromEmail("")
                setFromMessage("")
                alert("Email sent successfully")
            }, (error) => {
                console.log(error.text)
            });
    };

    return (
        <section className='contact-section' id='contact'>
            <HeadTopic class="head-topic" text="Contact me" icon={<BiSolidMessage/>}/>
            <div className="content">
                <div className="email-form">
                    <form onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder="Your Name" value={fromName} onChange={(e) => setFromName(e.currentTarget.value)} required/>
                        <input type="email" name="from_email" placeholder="Your Email" value={fromEmail} onChange={(e) => setFromEmail(e.currentTarget.value)} required/>
                        <textarea name="message" placeholder="Your Message" value={fromMessage} onChange={(e) => setFromMessage(e.currentTarget.value)} rows={11} required></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="other-contact">
                    <div className="email-phone">
                        <AiFillMail/>
                        <p>punnaphat.phiam@gmail.com</p>
                        <AiTwotonePhone/>
                        <p>0983516540</p>
                    </div>
                    <div className="social">
                        <a href="https://www.facebook.com/punnaphat.phiamtanapuwanon/" target="_blank"><BsFacebook/></a>
                        <a href="https://www.instagram.com/invites/contact/?i=1dt6xtxoqik7v&utm_content=14q18n8" target="_blank"><BsInstagram/></a>
                        <a href="https://x.com/Dung25156789" target="_blank"><BsTwitter/></a>
                        <a href="https://www.linkedin.com/in/punnaphat-phiamtanapuwanon-165100299/" target="_blank"><BsLinkedin/></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;