import "./contact.css";

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
        <a
          href="https://www.youtube.com/channel/UCzoBz4EKrLOvm3L4DDNc_pg"
          className="contact youtube"
          target={"blank"}
        >
          <MdOutlineMailOutline className="icon" />
          <h2>
            Email <span>our.biss0132@gmail.com</span>
          </h2>
        </a>

        <a
          href="https://wa.link/bywzv3"
          className="contact whatsapp"
          target={"blank"}
        >
          <MdCall className="icon" />
          <h2>
            Call us <span>+40757 386 289</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <RiInstagramLine className="icon" />
          <h2>
            Instagram <span>@lorb0t</span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiFillGithub className="icon" />
          <h2>
            GitHub <span>progenor</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
