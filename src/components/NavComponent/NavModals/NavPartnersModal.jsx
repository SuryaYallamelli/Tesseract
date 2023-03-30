import React from "react";
import { useNavigate } from "react-router-dom";
function NavPartnersModal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="left">
        <h4>
          Join the Employment Hero <br /> Partner Network
        </h4>
        <h5>
          We are your partner in payroll and <br /> employment success. join us
          on <br /> the journey towards making <br /> employment and payroll
          easier, <br /> and more valuable.
        </h5>
        <div
          className="button"
          onClick={() => {
            navigate("./partner-network");
          }}
        >
          Partners Overview
        </div>
      </div>
      <div className="middle">
        <div
          onClick={() => {
            navigate("");
          }}
        >
          <h4>Outsourced payroll services</h4>
          <h5>
            For accoutants, bookkeepers, and <br /> outsourced payroll providers
          </h5>
        </div>
        <div
          onClick={() => {
            navigate("/partner-network/accountants");
          }}
        >
          <h4>Accountants</h4>
        </div>
        <a href="/partner-network/bookkeepers">
          <h4>Bookkeepers</h4>
        </a>
        <a href="/partner-network/outsourced-payroll-providers">
          <h4>Outsourced payroll providers</h4>
        </a>
        <a href="/become-a-partner">
          <h4>Strategic alliances</h4>
          <h5>Build on your acquisition strategy.</h5>
        </a>
        <a href="">
          <h4>HR Refferal Partners</h4>
          <h5>Refer clients to Employment Hero.</h5>
        </a>
      </div>
      <div className="right">
        <h4>Partner Resources</h4>
        <h5>
          Let us be your go-to for all things HR,
          <br /> people management and payroll.
        </h5>
        <div className="anchor">
          <a href="">Case study: EPG Payroll & HR</a>
          <br />
          <a href="">
            Case study: Alltech Outsourced Payroll <br /> Solutions
          </a>
          <br />
          <a href="">Case study: Infra Hub</a>
          <br />
          <a href="">Case study: Bentleys</a>
        </div>
      </div>
    </>
  );
}

export default NavPartnersModal;
