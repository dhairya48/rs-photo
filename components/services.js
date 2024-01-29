
function Services() {
  return (
    <div class="text-bg-dark pt-5">
      <section id="ourServices" class="container">
        <div>
          <div class="mytextdiv">
            <div class="mytexttitle red-color">
              OUR SERVICES
            </div>
            <div class="divider"></div>
          </div>
          <h1 class="fw-bold pt-1">WHAT <span class="only-outline">WE DO</span></h1>
          <p>In a world we are constantly bambarded with images, <br /> photography has the power to cut though the noise
            and make us pause</p>

        </div>

        <div class="row mt-5">
          <div class="col-lg-4 d-flex justify-content-center">
            <div class="border border-white rounded p-3" style={{ "width": "85%" }}>
              <img src="../images/ayo-ogunseinde-UqT55tGBqzI-unsplash.jpg" class="rounded mb-2"
                style={{ "max-width": "100%", "max-height": "100%" }} alt="image2" />
              <b class="mt-1">Fashion Photography</b>
              <p>In a world where we are constantly bombarded with images</p>
            </div>
          </div>

          <div class="col-lg-4 d-flex justify-content-center">
            <div class="border border-white rounded p-3" style={{ "width": "85%" }}>
              <img src="../images/freestocks-8hAsLeE6Fbo-unsplash.jpg" class="rounded mb-2"
                style={{ "max-width": "100%", "max-height": "100%" }} alt="image2" />
              <b class="mt-1">Fashion Photography</b>
              <p>In a world where we are constantly bombarded with images</p>
            </div>
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <div class="border border-white rounded p-3" style={{ "width": "85%" }}>
              <img src="../images/aiony-haust-K0DxxljcRv0-unsplash.jpg" class="rounded mb-2"
                style={{ "max-width": "100%", "max-height": "100%" }} alt="image3" />
              <b class="mt-1">Fashion Photography</b>
              <p>In a world where we are constantly bombarded with images</p>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <button class="btn btn-danger mt-5 mb-5">View All Services</button>
        </div>
      </section>

      {/* Not Needed Right Now  */}
      {/* <div class="d-flex justify-content-center mb-5">
        <div class="rounded-circle text-center d-flex flex-column justify-content-center"
          style="background-color: #211D1C; width: 14%; height: 200px; border: 1px solid #7E7C7D;">
          <p style={{ "color": "#979596" }}><br />BEING AROUND FOR</p>
          <p style={{ "color": "#979596" }}>50</p>
          <p style={{ "color": "#979596" }}>YEARS</p>
        </div>
      </div> */}

      <div class="row pb-5">
        <div class="col-6 d-flex justify-content-end px-5">
          <img src="../images/left-image.jpg" class="rounded img-fluid" alt="" />
        </div>
        <div class="col-6">
          <div class="mytextdiv">
            <div class="mytexttitle2 red-color">
              PHOTOGRPHY INFO
            </div>
            <div class="divider2">
            </div>
          </div>



          <h1 class="mb-4">ABOUT <span class="only-outline">DETAILS</span></h1>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>Photography is a powerful art form that</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>allows us to capture and preserve</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>moments in time. Whether it's a</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>stunning landscape.a candid portrait.or</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>a dramatic action shot.a well-crafted</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>photography has the ability to convey</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>emotion, tell a story, and evoke a sense</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>of wonder and awe in the viewer.</p>
          <hr width="50%" class="mt-5" />

          <div class="row">
            <div class="col-5">
              <i class="bi bi-play-circle-fill fs-4 " style={{ "color": "#E74D44" }}></i>
            </div>
            <div class="col-7" id="font-style-2">
              sevenvows
            </div>
          </div>
        </div>
      </div>

      {/* Not Needed Right Now  */}
      {/* <div style={{ backgroundColor: "#232323" }} class="p-5">
        <div class="container d-flex justify-content-around">
          <div class="d-flex" style={{ color: "#979596" }}>
            <i class="fa-solid fa-down-left-and-up-right-to-center pt-3 fa-2xl"></i>
            <h3 class="px-3">Nextmove</h3>
          </div>
          <div class="d-flex" style={{ color: "#979596" }}>
            <i class="fa-solid fa-down-left-and-up-right-to-center pt-3 fa-2xl"></i>
            <h3 class="px-3">Inspire</h3>
          </div>
          <div class="d-flex" style={{ color: "#979596" }}>
            <i class="fa-solid fa-down-left-and-up-right-to-center pt-3 fa-2xl"></i>
            <h3 class="px-3">Nextmove</h3>
          </div>
          <div class="d-flex" style={{ color: "#979596" }}>
            <i class="fa-solid fa-down-left-and-up-right-to-center pt-3 fa-2xl"></i>
            <h3 class="px-3">Inspire</h3>
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default Services;