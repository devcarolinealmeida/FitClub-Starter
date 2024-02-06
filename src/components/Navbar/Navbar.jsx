import { useRef } from "react";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header">
      <img src={Logo} alt="Logo The Fit" className="logo" />
      <nav className="header-menu" ref={navRef}>
        <li>
          <Link onClick={showNavbar} to="hero" spy={true} smooth={true}>
            Home
          </Link>
        </li>

        <li>
          <Link onClick={showNavbar} to="programs" spy={true} smooth={true}>
            Programs
          </Link>
        </li>

        <li>
          <Link onClick={showNavbar} to="reasons" spy={true} smooth={true}>
            Why us
          </Link>
        </li>

        <li>
          <Link onClick={showNavbar} to="plans" spy={true} smooth={true}>
            Plans
          </Link>
        </li>
        
        <li>
          <Link onClick={showNavbar} to="testimonials" spy={true} smooth={true}>
          Testimonials
          </Link>
        </li>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
