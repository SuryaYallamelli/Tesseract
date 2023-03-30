import React from "react";
import "./Alttemp.css";

const Alttemp = ({ Alttempdata }) => {
  return Alttempdata.map((data, index) => {
    if (index === 0 || index % 2 === 0) {
      return (
        <>
          <div className="left-img-right-cont">
            <img
              className="left-img-right-cont-img"
              src={data.img}
              alt="img1"
            />
            <div>
              <div className="title">
                <h2>{data.title}</h2>
              </div>
              <div className="subtitle">
                <p>{data.subtitle}</p>
              </div>
              <a href={data.link}>see{data.linkdata}</a>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="right-img-left-cont">
          <div>
            <div className="title">
              <h2>{data.title}</h2>
            </div>
            <div className="subtitle">
              <p>{data.subtitle}</p>
            </div>
            <a href={data.link}>see{data.linkdata}</a>
          </div>
          <img className="right-img-left-cont-img" src={data.img} alt="img2" />
        </div>
      </>
    );
  });
};

export default Alttemp;
