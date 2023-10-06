import React from 'react'
import CommonHeading from '../utils/CommonHeading'

const Contact = () => {
  return (
    <>
      <section id="contact" className="section section-contact">
        <div className="container">
            <CommonHeading hText="Contact Us" />
        </div>

        <div className="section-contact-main contact-container">
            <form action="#">
             <div className="grid grid-two-column">
                <div>
                    <label for="username"></label>
                    <input type="text" placeholder="User Name:" name="username" id="username"/>
                </div>
                <div>
                    <label for="email"></label>
                    <input type="email" name="email" placeholder="Email" id="email"/>
                </div>
             </div>
             <div>
                <label for="Subject"></label>
                <input type="text" name="subject" id="subject" placeholder="Subject:"/>
             </div>
             <div>
                <label for="textarea"></label>
                <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
             </div>
             <div>
                <input type="submit" value="Send Message" className="btn"/>
             </div>

            </form>
        </div>
    </section> 
    </>
  )
}

export default Contact
