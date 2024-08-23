import { useState } from "react";

function AboutUs(props) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="text-bg-dark pt-5">
      <div className="container">
        <div className="row pb-5 align-items-center">
          <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4 mb-lg-0">
            <img
              src="../images/left-image.jpg"
              className="rounded img-fluid"
              alt="About Us"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="mytextdiv">
              <div className="mytexttitle2 red-color">PHOTOGRAPHY INFO</div>
              <div className="divider2"></div>
            </div>
            <h1 className="mb-4">
              ABOUT <span className="only-outline">DETAILS</span>
            </h1>
            <p className="text-muted">Photography is a powerful art form that</p>
            <p className="text-muted">allows us to capture and preserve</p>
            <p className="text-muted">
              moments in time. Whether it&apos;s a
            </p>
            <p className="text-muted">stunning landscape, a candid portrait, or</p>
            <p className="text-muted">a dramatic action shot, well-crafted</p>
            <p className="text-muted">photography has the ability to convey</p>
            <p className="text-muted">emotion, tell a story, and evoke a sense</p>
            <p className="text-muted">of wonder and awe in the viewer.</p>
            <hr className="mt-5 w-50" />
            <div className="row">
              <div className="col-5">
                {/* Uncomment if you have the icon */}
                {/* <i className="bi bi-play-circle-fill fs-4" style={{ color: "#E74D44" }}></i> */}
              </div>
              <div className="col-7" id="font-style-2">
                sevenvows
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
