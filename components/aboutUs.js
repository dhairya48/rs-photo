
import { useState, useEffect, useRef } from "react";

function AboutUs(props) {

  // const service = services?.services
  const [loading, setLoading] = useState(true);


  return (
    <div class="text-bg-dark pt-5">

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
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>moments in time. Whether it"s a</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>stunning landscape.a candid portrait.or</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>a dramatic action shot.a well-crafted</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>photography has the ability to convey</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>emotion, tell a story, and evoke a sense</p>
          <p style={{ "line-height": "8px", "color": "#7E7C7D" }}>of wonder and awe in the viewer.</p>
          <hr width="50%" class="mt-5" />

          <div class="row">
            <div class="col-5">
              {/* <i class="bi bi-play-circle-fill fs-4 " style={{ "color": "#E74D44" }}></i> */}
            </div>
            <div class="col-7" id="font-style-2">
              sevenvows
            </div>
          </div>
        </div>
      </div>
      <div class="row pb-2">
      </div>


    </div>
  );
}

export default AboutUs;