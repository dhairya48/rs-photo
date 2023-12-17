function IndividualIntervalsExample() {
  return (
    <main id="main" data-aos="fade" data-aos-delay="1500">
      <div class="container">
        <div class="position-relative">
          <div class="slides-1 portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center mng-slider-height">
              <div class="swiper-slide">
                <img
                  className="d-block mw-100 fluid"
                  src="../images/1.jpg"
                  alt="First slide"
                  style={{ height: "700px", width: "1295px" }}
                />
              </div>
              <div class="swiper-slide">
                <img
                  className="d-block mw-100 fluid"
                  src="../images/1.jpg"
                  alt="First slide"
                  style={{ height: "700px", width: "1295px" }}
                />
              </div>
              <div class="swiper-slide">
                <img
                  className="d-block mw-100 fluid"
                  src="../images/1.jpg"
                  alt="First slide"
                  style={{ height: "700px", width: "1295px" }}
                />
              </div>
              {/* <div class="swiper-slide">
                <img src=".slider5.jpeg" alt="" />
              </div>
              <div class="swiper-slide">
                <img src=".slider6.jpg" alt="" /> 
              </div> */}
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </main>
  );
}

export default IndividualIntervalsExample;
