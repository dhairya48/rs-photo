<Navbar collapseOnSelect expand="lg" class="header d-flex align-items-center fixed-top">
        <Container>
          <Navbar.Brand href="#home">SEVEN-VOWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
            <Nav className="container-fluid d-flex align-items-center justify-content-between">
              <Nav.Link
                href="javascript:;"
                onClick={() => router.push("/home")}
              >
                
                {router.pathname == "/home" ? (
                  <h4>
                  <Badge  bg="info">
                    Home
                  </Badge>
                  </h4>
                ) : (
                  <h4>Home</h4>
                )}
                
              </Nav.Link>
              <Nav.Link href="javascript:;"onClick={() => router.push("/about")}>
             
              {router.pathname == "/about" ? (
                <h4>
                  <Badge  bg="info">
                    About
                  </Badge>
                </h4>): (
                  <h4>About</h4>
                )}
                
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>