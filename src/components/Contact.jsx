import React from "react";
import emailjs from "@emailjs/browser";

import "../styles/Contact.css";

import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Linkedin from "../assets/linkedin.png";

const Contact = () => {  
  
  const [data, setData] = React.useState(
    {
      name:"",
      email:"",
      subject:"",
      message:""
    }
  )
  
  const handleChange = (event) => {
    setData(
      prevData => {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        };
      }
    )
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      data.name !== "" &&
      data.email !== "" &&
      data.subject !== "" &&
      data.message !== ""
    ) {
      emailjs.sendForm(
          "portfolio",
          "template_dwk6rhm",
          ".contactForm",
          "l1_TnfwGwEjpzlB6s"
        )
        .then(
          () => {
            document.querySelector(".status").textContent =
              "Your e-mail was sent successfully";
            document.querySelector(".status").style.color = "#77DD77";
          },
          () => {
            document.querySelector(".status").textContent =
              "There was an error";
            document.querySelector(".status").style.color = "red";
          }
        );
    } 
    else {
      document.querySelector(".status").textContent = "Please fill in the info";
      document.querySelector(".status").style.color = "white";
    }
  };


  
  return (
    <div className="contact" id="Contact">
      <div className="text">
        <div>
          <h1>Contact Me.</h1>
          <div className="paragraphs">
            <p>
              I will read all emails. Send me any message you want and I'll get
              back to you.
            </p>
            <p>
              I need your <span>name</span> and <span>email address</span>. You
              won't receive anything other than your reply.
            </p>
          </div>
        </div>
        <div className="socialMedia">
          <div className="socialNetworks">
            <p>Does not send emails</p>
            <h3>Write to me on my social networks</h3>
          </div>
          <div className="icons">
            <a
              href="https://www.facebook.com/younes.oumast"
              className="icon"
              target="_blank"
            >
              <img src={Facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com/younesoumast/"
              className="icon"
              target="_blank"
            >
              <img src={Instagram} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/younes-oumast/"
              className="icon"
              target="_blank"
            >
              <img src={Linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="form">
        <p>Send me a message :</p>
        <form onSubmit={sendEmail} className="contactForm">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="E-mail"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            value={data.subject}
            onChange={handleChange}
          />
          <textarea
            id=""
            placeholder="Message"
            name="message"
            value={data.message}
            onChange={handleChange}
          ></textarea>
          <div className="buttonAndStatus">
            <button>Send Message</button>
            <p className="status"></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
