
function Testimonial() {
  return (
    <>
      <div class="text-bg-dark pt-5">
        <div class="img-container pt-5">
          <img src="../images/maxresdefault.jpg" width="100%" class="img-fluid" alt="image" />

          <div class="top-left">
            <div class="mytextdiv" style={{ paddingLeft: "7%" }}>
              <div class="mytexttitle4 red-color">
                TESTIMONIAL
              </div>
              <div class="divider4"></div>
            </div>

            <div class="row pt-4" style={{ paddingLeft: "7%" }}>
              <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "left" }} > CLIENT <span class="only-outline" > REVIEW</span></h1>
              <div class=" col-lg-1 d-flex justify-content-end">
                <i class="bi bi-quote " style={{ fontSize: "3rem", color: "#e44c4b" }}></i>
              </div>
              <div class="col-lg-11">
                <p style={{ textAlign: "left" }}>"Photography is a way of felling, of touching of loving. what you have caught
                  on film is captured <br /> forever...it remembers little things.long after you have forgotton everything"
                </p>
              </div>
            </div>

            <div class="row pt-2" style={{ paddingLeft: "10%" }}>
              <div class="col-lg-1 d-flex justify-content-end align-items-center">
                <img src="../images/jan-oliver-dahl-kalari-testimonial-round-300.png" width="50" alt="" />
              </div>
              <div class="col-lg-11 text-start">
                <span class="red-color">Jacob Jones</span>
                <br />
                <span>Marketing Cordinator</span>
              </div>
            </div>

          </div>
        </div >
      </div >
    </>
  );
}

export default Testimonial;