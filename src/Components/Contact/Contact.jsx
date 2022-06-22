import "./contact.css";

//tools
import { motion } from "framer-motion";

//icons
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact </h1>
      <div className="contact-links">
        <motion.a
          href="mailto:our.biss0132@gmail.com"
          className="contact youtube"
          target={"blank"}
          whileHover={{ rotate: [0, 20, -20, 0] }}
        >
          <MdOutlineMailOutline className="icon" />
          <h2>
            Email <span>our.biss0132@gmail.com</span>
          </h2>
        </motion.a>

        <motion.a
          href="tel:+40757386289"
          className="contact whatsapp"
          target={"blank"}
          whileHover={{ rotate: [0, 20, -20, 0] }}
        >
          <MdCall className="icon" />
          <h2>
            Call us <span>+40757 386 289</span>
          </h2>
        </motion.a>

        <motion.a
          href="https://www.instagram.com/lorb0t/"
          className="contact instagram"
          whileHover={{ rotate: [0, 20, -20, 0] }}
        >
          <RiInstagramLine className="icon" />
          <h2>
            Instagram <span>@lorb0t</span>
          </h2>
        </motion.a>

        <motion.a
          href="https://github.com/progenor"
          className="contact instagram"
          whileHover={{ rotate: [0, 20, -20, 0] }}
        >
          <AiFillGithub className="icon" />
          <h2>
            GitHub <span>progenor</span>
          </h2>
        </motion.a>
      </div>
    </div>
  );
}

export default Contact;
