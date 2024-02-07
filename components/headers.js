import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

function Header(props) {
  console.log(props)
  const router = useRouter();
  const [active, setActive] = useState(props?.pageName)
  let section = props?.section
  return (
    <>
      <header class="text-bg-dark"
      // style={{
      //   position: 'sticky',
      //   top: 0
      // }}
      >
        <div class="container">
          <header class="d-flex flex-wrap align-items-center  py-3">
            <div class="col-md-3 mb-2 mb-md-0">
              <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                <img src="./images/Logo2.png" width="50%" alt="Logo" />
              </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2  mb-md-0">
              <li><a href="#" className={`text-white nav-link px-4 ${section == 'home' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('home') }}>HOME</a></li>
              <li><a href="#" className={`text-white nav-link px-4 ${section == 'services' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('services') }} >OUR SERVICES</a></li>
              <li><a href="#" className={`text-white nav-link px-4 ${section == 'aboutUs' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('aboutUs') }}>ABOUT US </a></li>
              <li><a href="#" className={`text-white nav-link px-4 ${section == 'portfolio' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('portfolio') }}>PORTFOLIO</a></li>
              <li><a href="#" className={`text-white nav-link px-4 ${section == 'testimonials' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('testimonials') }}>TESTIMONIAL</a></li>
              <li><a href="#" className={`text-white nav-link px-4 ${section == 'contactUs' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('contactUs') }}>CONTACT US</a></li>
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

