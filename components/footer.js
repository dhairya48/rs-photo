import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";

function Footer() {
  //   const router = useRouter();
  return (
    <>
      <div style={{ "backgroundColor": "#212529", color: "#FFF" }} class="pt-5">
        <div class="container ">
          <div class="row">
            <div class="col-lg-3">
              <img src="../images/Logo2.png" width="50%" alt="" />
              <p class="mt-4" style={{ "color": "#ABABAB" }}>
                I recently had the pleasure of working with a talented photographer for my daughter's senior portraits and
                i couldn't be happier with the results.
                From the moment we met.
              </p>
            </div>
            <div class="col-lg-3">
              <span class="fs-6">Quick Links</span>
              <hr />
              <p><a href="home.html" style={{ "color": "#e44c4b" }} class="nav-link">Home</a></p>
              <p><a href="about.html" class="nav-link">About</a></p>
              <p><a href="portfolio.html" class="nav-link">Portfolio</a></p>
              <p><a href="blog.html" class="nav-link link-light">Blog</a></p>
              <p><a href="contact.html" class="nav-link link-light">Contact</a></p>
            </div>
            <div class="col-lg-3">
              <span class="fs-6">Quick Links</span>
              <hr />
              <p><a href="privacy-policy.html" class="nav-link">Privacy Policy</a></p>
              <p><a href="terms-conditions.html" class="nav-link">Terms & Conditions</a></p>
              <p><a href="credit-disclaimer.html" class="nav-link">Credit Disclaimer</a></p>
              <p><a href="contact.html" class="nav-link link-light">Contact Us</a></p>
            </div>
            <div class="col-lg-3">
              <span class="fs-6">Follow</span>
              <hr />
              <i class="bi bi-facebook "></i>
              <i class="bi bi-instagram mx-2"></i>
              <i class="bi bi-youtube"></i>
              <p>2024 Seven Vows,All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
