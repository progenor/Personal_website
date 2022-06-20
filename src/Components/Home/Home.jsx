import "./home.css";
import img from "../../assets/logo.jpg";

function Home() {
  const sw_circle = () => {
    const toggle = document.querySelector(".hover-show");
    toggle.classList.toggle("active");
  };

  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show" onClick={sw_circle}>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Home;
