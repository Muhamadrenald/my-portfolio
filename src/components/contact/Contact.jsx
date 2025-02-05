import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const emailData = {
      from_name: formData.get("user_name"),
      to_name: "Monolog",
      from_email: formData.get("user_email"),
      to_email: "logmono098@gmail.com",
      message: formData.get("message"),
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset(); // Reset form setelah sukses
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="contactContainer">
      <div className="contact" ref={ref}>
        <div className="cSection">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={listVariant}
            animate={isInView ? "animate" : "initial"}
          >
            <motion.h1 variants={listVariant} className="cTitle">
              Let's keep in touch
            </motion.h1>
            <motion.div variants={listVariant} className="formItem">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="John Doe"
                required
              />
            </motion.div>
            <motion.div variants={listVariant} className="formItem">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="john@gmail.com"
                required
              />
            </motion.div>
            <motion.div variants={listVariant} className="formItem">
              <label>Message</label>
              <textarea
                rows={10}
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </motion.div>
            <motion.button
              variants={listVariant}
              className="formButton"
              type="submit"
            >
              Send
            </motion.button>
            {success && <span>Your message has been sent!</span>}
            {error && <span>Something went wrong!</span>}
          </motion.form>
        </div>
        <div className="cSection">
          <ContactSvg />
        </div>
      </div>
    </div>
  );
};

export default Contact;
