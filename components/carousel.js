import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
    <div class="container">
      <div class="position-relative">
    <Carousel>
      <Carousel.Item interval={1500} >
      {/* <Carousel.Item  > */}
        <img
          className="d-block mw-100 fluid"
          src="../images/1.jpg"
          alt="First slide"
          style={{'height':'700px', 'width': '1295px'}}
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="../images/2.jpg"
          alt="Second slide"
          style={{'height':'700px', 'width': '1295px'}}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="../images/3.jpg"
          alt="Third slide"
          style={{'height':'700px', 'width': '1295px'}}
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </main>
  );
}

export default IndividualIntervalsExample;