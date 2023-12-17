import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useRouter } from "next/router";

function Footer() {
//   const router = useRouter();
  return (
    <>
    <footer id="footer" class="footer">
      <div class="container">
        <div class="footer-full">
          <div class="copyright">
            &copy; Copyright <strong><span>sevenvows</span></strong>. All Rights Reserved
          </div>
          <div class="header-social-links">
            <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
            <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
export default Footer;
