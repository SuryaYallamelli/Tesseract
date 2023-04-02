import React from "react";
import "./App.css";
import { useState } from "react";
import Car from "../../components/Sections/Carousel/Car";
import MCC from "../../MulticolCarousel/MCC";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/Sections/Rating/Rating";

const App = () => {
  // const [showModal, setShowModal] = useState(false);

  // const handleClick = () => {
  //   setShowModal(!showModal);
  // };

  // const handleClose = () => {
  //   setShowModal(false);
  // };

  const resetValues = {
    div1: false,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
    div6: false,
  };
  const initialValues = {
    div1: true,
    div2: false,
    div3: false,
    div4: false,
    div5: false,
    div6: false,
  };
  const [data, changeData] = useState(initialValues);
  function clickHandler(e) {
    const { id } = e.target;
    changeData({ ...resetValues, [id]: true });
  }
  return (
    <div>
      {/* <Navigationbar /> */}
      {/* Section-1  */}
      <div className="hero">
        <div className="righthero">
          <div>
            <div className="righthero-h">
              <h1>
                Employment. <br /> Made easy.
              </h1>
            </div>
            <div className="righthero-p">
              <p className="para">
                The smarter way to manage HR, people, <br /> payroll and
                productivity. For small and <br /> medium businesses on the up.
              </p>
            </div>
          </div>
          <div>
            <button className="button">Request a demo</button>
          </div>
        </div>
        <div className="lefthero">
          <iframe
            src="https://player.vimeo.com/video/803304932?h=8e12175b7a&dnt=1&app_id=122963&controls=0&hd=1&autohide=1&autoplay=1&loop=1&autopause=0&muted=1"
            style={{ width: "400px", height: "500px", allow: "autoplay" }}
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Section-2 */}
      <Rating/>

      {/* Section-3 */}
      <div className="St">
        <div className="Sttop">
          <ul className="Sttop-ul">
            <li
              key={1}
              id="div1"
              className={`Stbottom-div ${data.div1 && "selected"}`}
              onClick={clickHandler}
            >
              HR Software
            </li>
            <li
              key={2}
              id="div2"
              className={`Stbottom-div ${data.div2 && "selected"}`}
              onClick={clickHandler}
            >
              Payroll Software
            </li>
            <li
              key={3}
              id="div3"
              className={`Stbottom-div ${data.div3 && "selected"}`}
              onClick={clickHandler}
            >
              Employment Superapp
            </li>
            <li
              key={4}
              id="div4"
              className={`Stbottom-div ${data.div4 && "selected"}`}
              onClick={clickHandler}
            >
              Employer of Record
            </li>
            <li
              key={5}
              id="div5"
              className={`Stbottom-div ${data.div5 && "selected"}`}
              onClick={clickHandler}
            >
              Applicant Tracking
            </li>
            <li
              key={6}
              id="div6"
              className={`Stbottom-div ${data.div6 && "selected"}`}
              onClick={clickHandler}
            >
              Learning and Development
            </li>
          </ul>
        </div>
        <div className="Stbottom">
          {data.div1 && (
            <div className="cardbox">
              <div className="callout-tab-media">
                <div className="callout-tab-media-wrapper">
                  <img
                    className="h-image_fit content_media_image"
                    src="https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-520x450.png"
                    style={{ width: "520", height: "450", loading: "lazy" }}
                    alt=""
                  />
                  {/* <img class="h-image_fit content_media_image" srcset="https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-520x450.png , https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-1040x900.png 2x" src="https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-520x450.png" width="520" height="450" alt="" loading="lazy"> */}
                </div>
              </div>
              <div className="main">
                <div className="title">
                  <h4>It's a HR Software. By humans.</h4>
                </div>
                <div className="paragraph">
                  <p>
                    Onboard new recruits online in Australia. Make <br />{" "}
                    performance reviews a breeze. Manage your HR <br /> and
                    people with built in contracts, policies and <br /> HR
                    templates that are ready to go when you <br /> need them.
                  </p>
                </div>
                <div className="callout">
                  <a href="">
                    <button className="btn btn-primary">HR Software</button>
                  </a>
                </div>
              </div>
            </div>
          )}
          {data.div2 && <div className="cardbox">Using DIV-2</div>}
          {data.div3 && <div className="cardbox">Using DIV-3</div>}
          {data.div4 && <div className="cardbox">Using DIV-4</div>}
          {data.div5 && <div className="cardbox">Using DIV-5</div>}
          {data.div6 && <div className="cardbox">Using DIV-6</div>}
        </div>
      </div>

      {/* Section-4 */}
      <div className="Sf-hero">
        <div className="hero-left">
          <div className="hero-left-content">
            <div>
              <h2 className="s4-h2">
                The employee <br /> lifecycle. We're with <br /> you at every
                stage.
              </h2>
            </div>
            <div>
              <p className="sfpara">
                We give you the tools you need to manage your team at <br />{" "}
                every stage. From interviews and onboarding, right <br />{" "}
                through to offboarding.
              </p>
            </div>
          </div>

          <div className="s4-left-listgroup">
            <ul className="s4-list">
              <li className="s4-listitems">Attracting top talent</li>
              <li className="s4-listitems">Recruitment</li>
              <li className="s4-listitems">Payroll and payments</li>
              <li className="s4-listitems">Learning and Development</li>
              <li className="s4-listitems">Managing and turnover</li>
            </ul>
          </div>
        </div>
        <div className="hero-right">
          <iframe
            src="https://player.vimeo.com/video/802966529?h=3d550a6a4a&dnt=1&app_id=122963&controls=0&hd=1&autohide=1&autoplay=1&loop=1&autopause=0&muted=1"
            style={{
              width: "390px",
              height: "500px",
              frameborder: "0",
              allow: "autoplay",
            }}
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* Section-5 */}
      <div className="hero-violet">
        <div className="s5-hero-left">
          <img
            src="https://employmenthero.com/wp-content/uploads/2023/02/Hero-Section-3-Swag-468x468.png "
            alt=""
          />
        </div>
        <div className="s5-hero-right">
          <div>
            <div>
              <h1 className="s5-h1">
                Meet Swag. The <br /> world’s first <br /> employment <br />{" "}
                superapp.
              </h1>
            </div>
            <div className="s5-para">
              Roll streamlined work, exciting careers, flexible pay and <br />{" "}
              exclusive savings and benefits into one. Swag’s advanced <br />{" "}
              features transform your team’s…
            </div>
            <div>
              <ul className="s5-list">
                <li>Work; Manage all work admin from the app</li>
                <li>Career; Discover and apply for internal opportunities</li>
                <li>
                  Money; Access wages on-demand and unlock cashback offers
                </li>
                <li>Benefits; Save on everyday essentials</li>
              </ul>
            </div>
          </div>
          <div>
            <button className="s5-button">Learn more</button>
          </div>
        </div>
      </div>

      <div className="between">
        <h1 className="between-h1">Take your business to the next level</h1>
      </div>

      {/* Section-6 */}
      <div className="s6-hero">
        <div>
          <img
            src="https://employmenthero.com/wp-content/uploads/2023/02/Home-page-Culture-and-Performance-468x468.png"
            alt=""
          />
        </div>
        <div className="s6-right">
          <div>
            <h2>
              Culture and performance. <br />
              It’s up and up.
            </h2>
          </div>
          <div>
            <p>
              Develop feedback loops, set KPIs and design custom <br />{" "}
              performance reviews. Quickly build a positive performance <br />{" "}
              culture for your business — where everyone is aiming for <br />{" "}
              the same goals.
            </p>
          </div>
          <div>
            <button className="button">Performance Management</button>
          </div>
        </div>
      </div>

      {/* Section-7 */}
      <div className="s7-hero">
        <div className="s7-left">
          <div>
            <h2>
              It's Payroll Software. <br />
              Just faster.
            </h2>
          </div>
          <div>
            <p>
              Save your time, pay your people with automated payroll. <br />{" "}
              Enjoy the benefits of Single Touch Payroll (STP) and take <br />{" "}
              care of workforce planning - all in one simple place.
            </p>
          </div>
          <div>
            <button className="button">Payroll Features</button>
          </div>
        </div>
        <div>
          <img
            src="https://employmenthero.com/wp-content/uploads/2023/02/Home-page-Payroll-Software-468x468.png"
            alt=""
          />
        </div>
      </div>

      {/* Section-8 */}
      <div className="s8-hero">
        <div>
          <img
            src="	https://employmenthero.com/wp-content/uploads/2023/02/Home-page-ATS-468x468.png"
            alt=""
          />
        </div>
        <div className="s8-right">
          <div>
            <h2>
              Recruitment and onboarding. <br />
              Breeze through it.
            </h2>
          </div>
          <div>
            <p>
              Save time, improve processes and streamline hiring. <br />{" "}
              Managing candidates just got a whole lot easier. Post job <br />{" "}
              listings to over 20 different job boards, then manage all <br />{" "}
              applicants through each stage.
            </p>
          </div>
          <div>
            <button className="button">Onboarding Solutions</button>
          </div>
        </div>
      </div>

      {/* Section-9 */}
      <div className="s9-hero">
        <div>
          <div>
            <h2>
              Engage your people. <br />
              Even on Mondays.
            </h2>
          </div>
          <div>
            <p>
              Monday mornings. We love 'em. Effective engagement <br /> for your
              team starts – and continues – here.
            </p>
          </div>
          <div>
            <button className="button">Employee Engagement</button>
          </div>
        </div>
        <div>
          <img
            src="https://employmenthero.com/wp-content/uploads/2023/02/Home-page-Engage-your-people-468x468.png"
            alt=""
          />
        </div>
      </div>

      {/* Section-10 */}
      <div className="s10">
        <div className="s10-main">
          <div>
            <h1>We’ve got the numbers to prove it.</h1>
          </div>
          <div className="s10-content">
            <div className="s10-stats">
              <div>
                <h1>291%</h1>
              </div>
              <div>
                <p>
                  return on investment for <br /> companies using <br />{" "}
                  Employment Hero
                </p>
              </div>
            </div>
            <div className="s10-stats">
              <div>
                <h1>81%</h1>
              </div>
              <div>
                <p>Improved payroll efficiency</p>
              </div>
            </div>
            <div className="s10-stats">
              <div>
                <h1>85%</h1>
              </div>
              <div>
                <p>Better onboarding experience</p>
              </div>
            </div>
            <div className="s10-stats">
              <div>
                <h1>89%</h1>
              </div>
              <div>
                <p>Decreased paperwork</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className="button">Read more</button>
        </div>
      </div>

      <div className="between">
        <h1 className="between-h1">Resources. All for you</h1>
      </div>

      {/* Section-11 */}
      <div className="s11-hero">
        <div className="card">
          <div className="card-content">
            <img
              src="https://employmenthero.com/wp-content/uploads/2023/02/Image-496x284.jpg"
              className="card-img-top"
              alt="..."
            />
            <a className="tile-resource-type">
              <span className="span-1">
                <img
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                  src="https://employmenthero.com/wp-content/uploads/2021/06/Blog-20x20.png"
                  alt=""
                />
              </span>
              <span style={{ fontSize: "15px" }}>Reports</span>
            </a>
            <h2 className="card-title">Remote Work Report 2021</h2>
            <h3 className="card-text">
              94% of Australians want to keep working remotely. <br /> Discover
              more insights.
            </h3>
          </div>
          <a href="#" className="crd-button">
            Read more
          </a>
        </div>
        <div className="rightcrd">
          <div className="ind1">
            <div className="card-body">
              <a className="tile-resource-type">
                <span className="span-1">
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                    src="https://employmenthero.com/wp-content/uploads/2021/06/Blog-20x20.png"
                    alt=""
                  />
                </span>
                <span style={{ fontSize: "15px" }}>Bundles</span>
              </a>
              <h2 className="card-title">
                30 Was to <br /> improve <br /> workplace <br /> culture[Free{" "}
                <br /> bundle]
              </h2>
              <h3 className="card-text">
                A practical guide to <br /> improving your workplace <br />{" "}
                culture
              </h3>
              <a href="#" className="crd-button">
                Read more
              </a>
            </div>
            <img
              src="https://employmenthero.com/wp-content/uploads/2023/03/workplace-culture-home-1-212x284.jpg"
              className="card-img-top-vertical"
              alt="..."
            />
          </div>
          <div className="ind2">
            <div className="card-body">
              <a className="tile-resource-type">
                <span className="span-1">
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                    src="https://employmenthero.com/wp-content/uploads/2021/06/Blog-20x20.png"
                    alt=""
                  />
                </span>
                <span style={{ fontSize: "15px" }}>Guides and Playbooks</span>
              </a>
              <h2 className="card-title">
                Employee Reward and Recognition Guide
              </h2>
              <h3>
                Have your read this blog? <br />
                It's all about rewarding your <br /> employees, but not in the{" "}
                <br /> traditional way.
              </h3>
              <a href="#" className="crd-button">
                Read more
              </a>
            </div>
            <img
              src="	https://employmenthero.com/wp-content/uploads/2023/03/reward-and-recognition-home-1-212x284.jpg"
              className="card-img-top-vertical"
              alt="..."
            />
          </div>
        </div>
      </div>

      {/* Section-12 */}
      <div className="hero">
        <div>
          <img
            src="https://employmenthero.com/wp-content/uploads/2023/02/63d754b1cdfd66f01826dc67_hero-p-800-468x468.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <h1>
              Talent Insights <br />
              Report
            </h1>
          </div>
          <div>
            'The Great Resignation', 'Quiet Quitting', 'Career <br />{" "}
            Cushioning'... What's going on with Australian emplyees <br /> and
            the jobs market in 2023? We surveyed 1,000 to find <br /> out.
          </div>
          <div>
            <button className="button">Explore now</button>
          </div>
        </div>
      </div>

      <div className="between">
        <h1 className="between-h1">Don't just take it from us...</h1>
      </div>

      {/* Section-13 */}
      <Car />

      <div className="between">
        <h1 className="between-h1">
          Innovation, reliability, customer service. A tick, gold <br /> medal,
          five stars.
        </h1>
      </div>

      {/* Section-14 */}
      <MCC />

      <div className="s14-hero">
        <div className="s14-left">
          <h1>Work easy.</h1>
          <h3>
            we're for small and medium businesses with big <br />
            ambitions
          </h3>
          <button
            style={{ backgroundColor: "black", color: "white" }}
            className="button"
          >
            Request a demo
          </button>
        </div>
        <div>
          <img
            src="https://employmenthero.com/wp-content/uploads/2023/03/QuinnYoga-HomePage-Final-Pitch-468x468.png"
            alt=""
          />
        </div>
      </div>

      {/* Section-14 */}
      <Footer />
    </div>
  );
};

export default App;
