import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

function Header(props) {
  const router = useRouter();
  const [active, setActive] = useState(props?.pageName)
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container">
          <div className="container-fluid d-flex align-items-center justify-content-between">
            <a
              href=""
              className="logo d-flex align-items-center  me-auto me-lg-0"
              onClick={() => { router.push('home') }}
            >
              {/* <img src="assets/img/logo.png" alt="" /> */}
              <i className="bi bi-camera"></i>
              {/* <img
                src="assets/img/logo.png"
                className="img-fluid"
                alt="header-logo"
              /> */}
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a href="#" className={active == 'Home' ? 'active' : ''} onClick={() => { router.push('/home') }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about1.html">Testimonial</a>
                </li>
                <li className="dropdown">
                  <a href="#"
                    className={active == 'Wedding' || active == 'Prewedding' ? 'active' : ''}>
                    <span>Our Work</span>{" "}
                    <i className="bi bi-chevron-down dropdown-indicator"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#" className={active == 'Prewedding' ? 'active' : ''} onClick={() => { router.push('/wedding') }}>Wedding</a>
                    </li>
                    <li>
                      <a href="gallery.html" className={active == 'Prewedding' ? 'active' : ''}>Prewedding</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="services1.html">About US </a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
              </ul>
            </nav>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;

