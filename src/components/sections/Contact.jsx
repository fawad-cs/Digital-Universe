import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

import SocialIcons from "../common/SocialIcons";
import Reveal from "../common/Reveal";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 👈 Naya State: Button ko disable karne ke liye
  const [isSending, setIsSending] = useState(false); 

  const contactEmail = "fawadk.shalmani@gmail.com"; 

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Agar pehle se email ja rahi hai, toh dobara na bheje
    if (isSending) return; 
    
    setIsSending(true); // Button ko disable kar dein

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      'service_ske573v',       
      'template_1ur5qxc',      
      templateParams, 
      'QvkW1kMR7RPxufgWI'        
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully! I will get back to you soon.");
      
      setFormData({ name: "", email: "", message: "" });
      setIsSending(false); // Kaam khatam, button wapas chalu karein
    })
    .catch((error) => {
      console.log('FAILED...', error);
      alert("Failed to send the message. Please try again.");
      setIsSending(false); // Error aya toh bhi button wapas chalu karein
    });
  }

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <Reveal direction="up">
          <div className="contact-heading">
            <span className="section-label">GET IN TOUCH</span>
            <h2>
              Let's Build Something <span>Great</span>
            </h2>
            <p>
              Have a project idea or want to connect? Send me a message.
            </p>
          </div>
        </Reveal>

        <div className="contact-wrapper">
          <Reveal direction="left">
            <div className="contact-info">
              <span className="contact-small-label">
                CONTACT DETAILS
              </span>
              <h3>Let's start a conversation.</h3>
              <p>
                I'm interested in learning, collaborating, and building
                meaningful digital experiences.
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span>Email</span>
                  <p>{contactEmail}</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span>Location</span>
                  <p>Pakistan</p>
                </div>
              </div>

              <div className="contact-socials">
                <SocialIcons />
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="contact-email">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* 👈 Button update kiya hai */}
              <button type="submit" className="contact-submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"} <Send size={17} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;