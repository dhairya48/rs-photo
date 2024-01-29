import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

function Header(props) {
  const router = useRouter();
  const [active, setActive] = useState(props?.pageName)
  return (
    <>
      <header class="text-bg-dark">
        <div class="container">
          <header class="d-flex flex-wrap align-items-center  py-3">
            <div class="col-md-3 mb-2 mb-md-0">
              <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                <img src="./images/Logo2.png" width="50%" alt="Logo" />
              </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2  mb-md-0">
              <li><a href="#" class="text-white nav-link px-4 link-secondary">HOME</a></li>
              <li><a href="#" class="text-white nav-link px-4">OUR SERVICES</a></li>
              <li><a href="#" class="text-white nav-link px-4">ABOUT US </a></li>
              <li><a href="#" class="text-white nav-link px-4">PORTFOLIO</a></li>
              <li><a href="#" class="text-white nav-link px-4">TESTIMONIAL</a></li>
              <li><a href="#" class="text-white nav-link px-4">CONTACT US</a></li>

            </ul>

            {/* <div class="col-md-3 text-end">
              <button type="button" class="btn btn-outline-danger text-white ">BOOK NOW</button>
            </div> */}
          </header>
        </div>
      </header>
    </>
  );
}
export default Header;

