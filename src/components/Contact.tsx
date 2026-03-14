import { MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex" style={{ flexDirection: 'column', alignItems: 'center', gap: '60px', textAlign: 'center' }}>
          <div className="contact-box" style={{ width: '100%', maxWidth: '500px' }}>
            <form action="https://formsubmit.co/parthmanchanda870@gmail.com" method="POST" className="contact-form">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" required></textarea>
              <input type="hidden" name="_subject" value="New Portfolio Contact Message!" />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Parth Manchanda</span>
            </h2>
            <h5 style={{ justifyContent: 'center' }}>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
