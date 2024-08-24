import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Testimonial() {
  return (
    <div className="text-bg-dark pt-5">
      <div className="position-relative">
        <img
          src="../images/maxresdefault.jpg"
          className="img-fluid w-100"
          alt="Background"
          style={{ objectFit: 'cover', height: '50vh' }} // Adjust height as needed
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <Container>
            <Row>
              <Col className="text-center">
                <div className="mytextdiv">
                  <div className="mytexttitle4 text-danger">
                    TESTIMONIAL
                  </div>
                  <div className="divider4" style={{ backgroundColor: '#e44c4b', height: '2px', width: '50px', margin: '0 auto' }}></div>
                </div>
                <h1 className="mt-3 text-white" style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
                  CLIENT <span className="text-danger">REVIEW</span>
                </h1>
                <div className="d-flex align-items-start mt-3">
                  <i className="bi bi-quote text-danger" style={{ fontSize: '3rem' }}></i>
                  <p className="text-white ms-3" style={{ textAlign: 'left' }}>
                    "Photography is a way of feeling, of touching, of loving. What you have caught on film is captured
                    forever... it remembers little things long after you have forgotten everything."
                  </p>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src="../images/jan-oliver-dahl-kalari-testimonial-round-300.png"
                    width="50"
                    alt="Author"
                    className="rounded-circle"
                  />
                  <div className="ms-3 text-white">
                    <span className="text-danger">Jacob Jones</span>
                    <br />
                    <span>Marketing Coordinator</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
