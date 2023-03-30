import React from "react";

function NavWhyusModal() {
  return (
    <>
      <div className="left">
        <h4>
          Employment Hero services <br /> over 200,000 business
        </h4>
        <h5>
          we give you the tools to hire new <br /> staff easily, scale quickly
          and <br /> improve compliance.
        </h5>
        <a className="button" href="./about-us">
          Learn more
        </a>
      </div>
      <div className="middle">
        <div className="whyus-middle-sec">
          <a href="">
            <h4>Our story</h4>
            <h5>
              Employment Hero is one of <br /> Australia's fastest-growing SaaS{" "}
              <br /> companies, powered by a mission to <br /> help SmBs aroung
              the world.
            </h5>
          </a>
        </div>
        <div className="middle-sec">
          <a href="">
            <h4>Award winning</h4>
            <h5>
              Defined by innovation, reliablity and <br /> outstanding customer
              service (and <br /> we have the award to prove it).
            </h5>
          </a>
        </div>
        <div className="middle-sec">
          <a href="/trust-security">
            <h4>Safe and secure</h4>
            <h5>
              Trust is a core value of Employment <br /> Hero, so we take
              protecting your <br /> data really seriously.
            </h5>
          </a>
        </div>
        <div className="middle-sec">
          <a href="/partner-network">
            <h4>Become a partner</h4>
            <h5>
              Join us on the journey towards <br /> making employment easier and{" "}
              <br /> more valuable for everyone
            </h5>
          </a>
        </div>
      </div>
      <div className="right">
        <h4>Customer Success Stories</h4>
        <h5>
          Learn more about how we've made <br /> employment easier and more
          rewarding <br /> for business across multiple <br /> industries.
        </h5>
        <div className="anchor">
          <a href="">APD Projects</a>
          <br />
          <a href="">Fonda Mexican</a>
          <br />
          <a href="">WorkXtra</a>
          <br />
          <a href="">F45</a>
        </div>
      </div>
    </>
  );
}

export default NavWhyusModal;
