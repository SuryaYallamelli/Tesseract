import React, { useState } from "react";
import "./MCC.css";
function MCC() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [click, setClick] = useState("undefined");
  const image1 =
    "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  const image2 =
    "https://media.istockphoto.com/id/542096870/photo/african-business-woman.jpg?s=612x612&w=0&k=20&c=Ne9jBIbyysEpH10vGXhtFTyggu8_0csuymNpwdeVUsw=";
  const image3 =
    "https://st2.depositphotos.com/1028979/6323/i/600/depositphotos_63233177-stock-photo-african-business-woman-working.jpg";
  const image4 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvbkxJU2ltcDD-baJxkogee7qiDnna3g1X7R_o0LyKMjOxjMQqBhuWD54E3G2GGv0gX4&usqp=CAU";
  const image5 =
    "https://www.shutterstock.com/shutterstock/photos/1812937819/display_1500/stock-photo-portrait-of-happy-mid-adult-man-sitting-on-sofa-at-home-handsome-latin-man-in-casual-relaxing-on-1812937819.jpg";
  const image6 =
    "https://edit.co.uk/uploads/2016/12/Image-1-Alternatives-to-stock-photography-Thinkstock.jpg";
  const image7 =
    "https://thumbs.dreamstime.com/z/boy-glasses-low-vision-cute-34469088.jpg";
  const image8 =
    "https://thumbs.dreamstime.com/z/caterina-murino-matam-senegal-circa-november-actress-greets-children-elementary-school-39008700.jpg";
  const image9 =
    "https://thumbs.dreamstime.com/z/vohitsaoka-ambalavao-madagascar-november-group-happy-malagasy-school-children-students-front-school-school-attendance-269574963.jpg";

  const image10 =
    "https://thumbs.dreamstime.com/z/group-kenyan-children-23152411.jpg";
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