import React from 'react';
import './Contact.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="contact section " id="contact">
        <div className="conhead">
            <h1>Contact <span>Us</span></h1>
        </div>
        <div className="contact-info">
            <div className="submitform">
                <form >
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Mobile Number" />
                    <input type="email" placeholder="Email" />
                    <textarea rows={4} cols={4} placeholder='Your Message'></textarea>
                    <Link to='submit' spy={true}  duration={500} className='subbtn'>Register here</Link>
                </form>
            </div>
            <div className="gym-info">
                <h4 ><FontAwesomeIcon icon={faClock} className='i' />Monday - Friday</h4>
                <h5 className="timing">6:00Am - 11:00Am</h5>
                <h4 className="timing">Saturday - Sunday</h4>
                <h5 className="timing">5:00Pm - 9:00Pm</h5>
              <h4 className="email"><FontAwesomeIcon icon={faEnvelope} className='i' />fitnessplus295@gmail.com</h4>
              <h4 className="address"><FontAwesomeIcon icon={faLocationDot} className='i' />1145/Plot No.47, Ram Vihar Colony, Delhi</h4>
            </div>
        </div>
    </div>
  )
}

export default Contact;