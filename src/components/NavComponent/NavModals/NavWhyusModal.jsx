import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavProducts.css";

function NavWhyusModal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="lft">
        <h4>
          Employment Hero services <br /> over 200,000 business
        </h4>
        <h5>
          we give you the tools to hire new <br /> staff easily, scale quickly
          and <br /> improve compliance.
        </h5>
        <a className="button-outline" href="./about-us">
         <h4>Learn more</h4>
        </a>
      </div>

      <div className="mid">

        {/* Ourstory button */}
        <div className="mid-item" onClick={()=>{
          navigate("#")
        }}>      
            <h4>Our story</h4>
            <h5>
              Employment Hero is one of <br /> Australia's fastest-growing SaaS{" "}
              <br /> companies, powered by a mission to <br /> help SmBs aroung
              the world.
            </h5>
        </div>

        {/* Awarding winning */}
        <div className="mid-item" onClick={()=>{
          navigate("#")
        }}>
            <h4>Award winning</h4>
            <h5>
              Defined by innovation, reliablity and <br /> outstanding customer
              service (and <br /> we have the award to prove it).
            </h5>   
        </div>

        {/* Safe and secure button */}
        <div className="mid-item" onClick={()=>{
          navigate("./trust-security")
        }}>
            <h4>Safe and secure</h4>
            <h5>
              Trust is a core value of Employment <br /> Hero, so we take
              protecting your <br /> data really seriously.
            </h5>
        </div>

        {/* Become a partner button */}
        <div className="mid-item" onClick={()=>{
          navigate("./partner-network")
        }}>
            <h4>Become a partner</h4>
            <h5>
              Join us on the journey towards <br /> making employment easier and{" "}
              <br /> more valuable for everyone
            </h5>
        </div>
      </div>

      <div className="rht">
        <h4>Customer Success Stories</h4>
        <h5>
          Learn more about how we've made <br /> employment easier and more
          rewarding <br /> for business across multiple <br /> industries.
        </h5>
        <div className="anchor">
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>APD Projects</h5>
          </div>
          
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Fonda Mexican</h5>
          </div>
          
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>WorkXtra</h5>
          </div>
          
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>F45</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavWhyusModal;
