import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";

function Header(props) {
  console.log(props)
  const router = useRouter();
  const [active, setActive] = useState(props?.pageName)
  const [crossIcon, setCrossIcon] = useState(false)
  let section = props?.section

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <header class="text-bg-dark"
          // style={{
          //   position: 'sticky',
          //   top: 0
          // }}
          >
            <div class="container">
              <div >
                <div class="row d-flex flex-wrap align-items-center  py-3">
                  <div class="col-md-3 mb-2 mb-md-0">
                    <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                      <img src="./images/Logo2.png" width="50%" alt="Logo" />
                    </a>
                  </div>

                  <ul class="nav col-md-9 col-12 col-md-auto mb-2  mb-md-0">
                    <li><a href="#" className={`d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block text-white nav-link px-4 ${section == 'home' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('home') }}>HOME</a></li>
                    <li><a href="#" className={`d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block text-white nav-link px-4 ${section == 'services' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('services') }} >OUR SERVICES</a></li>
                    <li><a href="#" className={`d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block text-white nav-link px-4 ${section == 'aboutUs' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('aboutUs') }}>ABOUT US </a></li>
                    <li><a href="#" className={`d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block text-white nav-link px-4 ${section == 'portfolio' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('portfolio') }}>PORTFOLIO</a></li>
                    <li><a href="#" className={`d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block text-white nav-link px-4 ${section == 'testimonials' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('testimonials') }}>TESTIMONIAL</a></li>
                    <li><a href="#" className={`d-md-none d-lg-block d-sm-none d-md-block d-none d-sm-block text-white nav-link px-4 ${section == 'contactUs' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('contactUs') }}>CONTACT US</a></li>
                  </ul>

                  <div className="d-flex justify-content-end align-items-center">
                    <button type="button" onClick={toggleSidebar} className={isSidebarOpen ? "bi bi-x-lg d-lg-none d-xl-block d-xl-none btn text-white bi bi-list fs-4" : "bi bi-list d-lg-none d-xl-block d-xl-none btn text-white bi bi-list fs-4"}>
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </header>
        </div >

        <div className="col-sm-12">
          <header class="text-bg-dark">
            <div id="sideBar" className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark ${isSidebarOpen ? '' : 'd-none'} w3-animate-opacity`} >
              {/* <hr /> */}
              <ul className="nav nav-pills flex-column mb-auto">
                <li><a href="#" className={`nav-link text-white ${section == 'home' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('home') }}>HOME</a></li>
                <li><a href="#" className={`nav-link text-white ${section == 'services' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('services') }} >OUR SERVICES</a></li>
                <li><a href="#" className={`nav-link text-white ${section == 'aboutUs' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('aboutUs') }}>ABOUT US </a></li>
                <li><a href="#" className={`nav-link text-white ${section == 'portfolio' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('portfolio') }}>PORTFOLIO</a></li>
                <li><a href="#" className={`nav-link text-white${section == 'testimonials' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('testimonials') }}>TESTIMONIAL</a></li>
                <li><a href="#" className={`nav-link text-white${section == 'contactUs' ? 'link-secondary' : ''}`} onClick={(e) => { props.changeSection('contactUs') }}>CONTACT US</a></li>
                {/* <li><a href="#" className={`nav-link text-white`}> Customers</a></li> */}
              </ul>
            </div>
          </header>
        </div >
      </div >
    </>
  );
}
export default Header;

