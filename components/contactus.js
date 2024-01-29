
function Contactus() {
  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <div class="container pt-5 pb-5">
          <div class="img-container">
            <img src="./images/close-up-hand-holding-basket-ball.jpg" style={{ opacity: "0.3" }} width="100%" class="img-fluid" alt="" />
            <div class="top-left ">
              <div class="mytextdiv">
                <div class="mytexttitle4 red-color">
                  GET IN TOUCH
                </div>
                <div class="divider4"></div>
              </div>

              <div style={{ textAlign: "left" }} >
                <h1>CONTACT <span class="only-outline">US.</span></h1>
                <span style={{ color: "#7E7C7D" }}>In a world we are constantly bambarded with images,</span>
                <br />
                <span style={{ color: "#7E7C7D" }}>photography has the power to cut though the noise and make us pause</span>
              </div>

              <div class="row pt-5">
                <div class="col-lg-3">
                  <div class="row">
                    <div class="col-lg-3 d-flex justify-content-around align-items-center">
                      <i class="bi bi-telephone-fill display-6" style={{ color: "#E7474E" }}></i>
                    </div>
                    <div class="col-lg-9" style={{ textAlign: "left" }}>
                      <span>Jacob Jones</span>
                      <br />
                      <span>Marketing Cordinator</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="row">
                    <div class="col-lg-2 d-flex justify-content-around align-items-center">
                      <i class="bi bi-envelope-check-fill display-6" style={{ color: "#E7474E" }}></i>
                    </div>
                    <div class="col-lg-10" style={{ textAlign: "left" }}>
                      <span>Jacob Jones</span>
                      <br />
                      <span>Marketing Cordinator</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="row">
                    <div class="col-lg-2 d-flex justify-content-around align-items-center">
                      <i class="bi bi-geo-alt-fill display-6" style={{ color: "#E7474E" }}></i>
                    </div>
                    <div class="col-lg-10" style={{ textAlign: "left" }}>
                      <span>Jacob Jones</span>
                      <br />
                      <span>Marketing Cordinator</span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3">
                  <div class="row">
                    <div class="col-lg-2 d-flex justify-content-around align-items-center">
                      <i class="bi bi-browser-safari display-6" style={{ color: "#E7474E" }}></i>
                    </div>
                    <div class="col-lg-10" style={{ textAlign: "left" }}>
                      <span>Jacob Jones</span>
                      <br />
                      <span>Marketing Cordinator</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <div class="col-lg-6">
                  <img src="./images/tracking_kid_image1_687796327_670x377px_300dpi.jpg" class="img-fluid rounded" alt="" />
                </div>
                <div class="col-lg-6">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <input type="text" class="form-control text-bg-dark form-input" style={{ color: "#ABABAB" }}
                        placeholder="Name" id="inputname" />
                    </div>
                    <div class="col-md-6">
                      <input type="email" class="form-control text-bg-dark form-input" style={{ color: "#ABABAB" }}
                        placeholder="Email" id="inputemail" />
                    </div>
                    <div class="col-12">
                      <textarea class="form-control bg-dark dsa" style={{ color: "#ABABAB" }} id="exampleFormControlTextarea1"
                        rows="3">Message here...</textarea>
                    </div>

                    <div class="col-12" style={{ textAlign: "start" }}>
                      <button type="submit" style={{ backgroundColor: "#e44c4b" }} class="btn text-white">Send Your
                        Message</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div >
    </>
  );
}

export default Contactus;