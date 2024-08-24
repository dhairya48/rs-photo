import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";

function Footer() {
  return (
    <>
      <div
        style={{ backgroundColor: "#212529", color: "#FFF" }}
        className="pt-5"
      >
        <div className="container">
          <div className="row text-center text-lg-start">
            <div className="col-lg-3 col-md-6 mb-4">
              <img src="../images/Logo2.png" width="50%" alt="" />
              <p className="mt-4" style={{ color: "#ABABAB" }}>
                I recently had the pleasure of working with a talented
                photographer for my daughter's senior portraits and I couldn't
                be happier with the results. From the moment we met.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <span className="fs-6">Quick Links</span>
              <hr />
              <p>
                <a href="home.html" style={{ color: "#e44c4b" }} className="nav-link">
                  Home
                </a>
              </p>
              <p>
                <a href="about.html" className="nav-link">
                  About
                </a>
              </p>
              <p>
                <a href="portfolio.html" className="nav-link">
                  Portfolio
                </a>
              </p>
              <p>
                <a href="blog.html" className="nav-link link-light">
                  Blog
                </a>
              </p>
              <p>
                <a href="contact.html" className="nav-link link-light">
                  Contact
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <span className="fs-6">More Links</span>
              <hr />
              <p>
                <a href="privacy-policy.html" className="nav-link">
                  Privacy Policy
                </a>
              </p>
              <p>
                <a href="terms-conditions.html" className="nav-link">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="credit-disclaimer.html" className="nav-link">
                  Credit Disclaimer
                </a>
              </p>
              <p>
                <a href="contact.html" className="nav-link link-light">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <span className="fs-6">Follow Us</span>
              <hr />
              <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                <i className="bi bi-facebook mx-2"></i>
                <i className="bi bi-instagram mx-2"></i>
                <i className="bi bi-youtube mx-2"></i>
              </div>
              <p>2024 Seven Vows, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
