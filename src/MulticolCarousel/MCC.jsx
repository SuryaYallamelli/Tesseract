import React, { useState } from "react";
import "./MCC.css";
function MCC() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [click, setClick] = useState("undefined");
  const image1 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-7.png";
  const image2 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-5.png";
  const image3 =
    "	https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-4.png";
  const image4 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-3.png";
  const image5 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-7.png";
  const image6 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-5.png";
  const image7 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-4.png";
  const image8 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-3.png";
  const image9 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-6.png";

  const image10 =
    "https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Awards-6.png";
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  const nextSlide = () => {
    setClick(true);
    setTimeout(() => {
      setCurrentSlide(
        currentSlide === imageUrls.length - 1 ? 0 : currentSlide + 1
      );
    }, 0);
  };

  const prevSlide = () => {
    setClick(false);
    setTimeout(() => {
      setCurrentSlide(
        currentSlide === 0 ? imageUrls.length - 1 : currentSlide - 1
      );
    });
  };
  const transition = click ? "right" : "left";
  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <button className="slider-btn slider-btn--prev" onClick={prevSlide}>
          <h2>&lt;</h2>
        </button>
        <div className={`slider `}>
          <img
            className={`image ${transition}`}
            src={
              imageUrls[
                (currentSlide + imageUrls.length - 2) % imageUrls.length
              ]
            }
            alt="previous previous slide"
          />
          <img
            className={`image ${transition}`}
            src={
              imageUrls[
                (currentSlide + imageUrls.length - 1) % imageUrls.length
              ]
            }
            alt="previous slide"
          />
          <img
            className={`image ${transition}`}
            src={imageUrls[currentSlide]}
            alt="current slide"
          />
          <img
            className={`image ${transition}`}
            src={imageUrls[(currentSlide + 1) % imageUrls.length]}
            alt="next slide"
          />
          <img
            className={`image ${transition}`}
            src={imageUrls[(currentSlide + 2) % imageUrls.length]}
            alt="next next slide"
          />
        </div>

        <button className="slider-btn slider-btn--next" onClick={nextSlide}>
          <h2>&gt;</h2>
        </button>
      </div>
    </div>
  );
}

export default MCC;