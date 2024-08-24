import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  const galleries = {
    all: ["one.png", "two.png", "three.png", "four.png", "five.png", "six.png", "seven.png", "eight.png"],
    fashion: ["one.png", "two.png", "three.png", "four.png"],
    landscape: ["five.png", "six.png"],
    portrait: ["seven.png", "eight.png"],
  };

  const [selectedGallery, setSelectedGallery] = useState("all"); // Default is 'all' images
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ width: "auto", height: "auto" });

  const handleImageClick = (index) => {
    const image = new Image();
    image.src = `../images/${galleries[selectedGallery][index]}`;
    image.onload = () => {
      const maxWidth = window.innerWidth * 0.9;
      const maxHeight = window.innerHeight * 0.9;
      const ratio = Math.min(maxWidth / image.width, maxHeight / image.height);

      setImageDimensions({
        width: image.width * ratio,
        height: image.height * ratio,
      });
      setSelectedIndex(index);
    };
  };

  const handleCloseModal = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    const newIndex = selectedIndex === galleries[selectedGallery].length - 1 ? 0 : selectedIndex + 1;
    handleImageClick(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = selectedIndex === 0 ? galleries[selectedGallery].length - 1 : selectedIndex - 1;
    handleImageClick(newIndex);
  };

  return (
    <>
      <div className="text-bg-dark pt-5">
        <div className="mt-5">
          <div className="container">
            <div className="mytextdiv">
              <div className="mytexttitle red-color">OUR PORTFOLIO</div>
              <div className="divider"></div>
            </div>
            <h1 className="mt-2">
              LATEST <span className="only-outline">WORK</span>
            </h1>
            <div className="mt-5">
              <span style={{ marginRight: "4%", cursor: "pointer" }} className="red-color" onClick={() => setSelectedGallery("all")}>
                ALL WORK
              </span>
              <span style={{ marginRight: "4%", cursor: "pointer" }} onClick={() => setSelectedGallery("fashion")}>
                FASHION PHOTOGRAPHY
              </span>
              <span style={{ marginRight: "4%", cursor: "pointer" }} onClick={() => setSelectedGallery("landscape")}>
                LANDSCAPE PHOTOGRAPHY
              </span>
              <span style={{ marginRight: "4%", cursor: "pointer" }} onClick={() => setSelectedGallery("portrait")}>
                PORTRAIT PHOTOGRAPHY
              </span>
            </div>
          </div>

          <div className="container mt-5">
            <div className="row">
              {galleries[selectedGallery].map((image, index) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                  <img
                    src={`./images/${image}`}
                    className="img-fluid rounded"
                    alt={`Portfolio ${index + 1}`}
                    onClick={() => handleImageClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <>
          <div
            className="modal fade show"
            style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            onClick={handleCloseModal}
          >
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "unset" }}>
              <div className="modal-content" style={{ backgroundColor: "transparent", border: "none", padding: 0, textAlign: "center" }}>
                <img
                  src={`../images/${galleries[selectedGallery][selectedIndex]}`}
                  alt={`Selected ${selectedIndex + 1}`}
                  style={{
                    width: imageDimensions.width,
                    height: imageDimensions.height,
                    maxWidth: "100%", // Ensure image doesn't exceed viewport width
                    maxHeight: "90vh", // Ensure image doesn't exceed viewport height
                    objectFit: "contain", // Keep aspect ratio intact
                  }}
                />
                <button className="btn btn-dark position-absolute start-0 top-50" onClick={(e) => { e.stopPropagation(); handlePrevious(); }}>
                  &#8592;
                </button>
                <button className="btn btn-dark position-absolute end-0 top-50" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
                  &#8594;
                </button>
              </div>
            </div>
          </div>

          <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>
        </>
      )}
    </>
  );
}

export default Portfolio;
