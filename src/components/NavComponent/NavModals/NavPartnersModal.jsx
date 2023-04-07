import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavProducts.css";

function NavPartnersModal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="lft">
        <h4>
          Join the Employment Hero <br /> Partner Network
        </h4>
        <h5>
          We are your partner in payroll and <br /> employment success. join us
          on <br /> the journey towards making <br /> employment and payroll
          easier, <br /> and more valuable.
        </h5>
        <div
          className="button-outline"
          onClick={() => {
            navigate("./partner-network");
          }}
        >
          <h4>Partners Overview</h4>
        </div>
      </div>
      
      <div className="mid">
        {/* Outsourced payroll services button */}
        <div className="mid-item"
          onClick={() => {
            navigate("./outsourced-payroll-services");
          }}
        >
          <h4>Outsourced payroll services</h4>
          <h5>
            For accoutants, bookkeepers, and <br /> outsourced payroll providers
          </h5>
        </div>

        {/* Accountants button */}
        <div className="mid-item"
          onClick={() => {
            navigate("/partner-network/accountants");
          }}
        >
          <h4>Accountants</h4>
        </div>

        {/* Bookkeepers button */}
        <div className="mid-item" onClick={()=>{
          navigate("./partner-network/bookkeepers")
        }}>
           <h4>Bookkeepers</h4>
        </div>

        {/* Outsourced payroll providers button */}
        <div className="mid-item" onClick={()=>{
          navigate("./partner-network/outsourced-payroll-providers")
        }}>
          <h4>Outsourced payroll providers</h4>
        </div>
        
        {/* Strategic alliances button */}
        <div className="mid-item" onClick={()=>{
          navigate("./become-a-partner")
        }}>
          <h4>Strategic alliances</h4>
          <h5>Build on your acquisition strategy.</h5>
        </div>
        
        {/* HR Refferal Partners button */}
        <div className="mid-item" onClick={()=>{
          navigate("./become-a-partner")
        }}>
          <h4>HR Refferal Partners</h4>
          <h5>Refer clients to Employment Hero.</h5>
        </div>
      </div>

      <div className="rht">
        <h4>Partner Resources</h4>
        <h5>
          Let us be your go-to for all things HR,
          <br /> people management and payroll.
        </h5>
        <div className="anchor">
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Case study: EPG Payroll & HR</h5>
          </div>
          
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Case study: Alltech Outsourced Payroll <br /> Solutions</h5>
          </div>
          
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Case study: Infra Hub</h5>
          </div>
         
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Case study: Bentleys</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavPartnersModal;
