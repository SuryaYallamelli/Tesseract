import React from "react";
import "./NavProducts.css";
import { useNavigate } from "react-router-dom";

function NavProductsModal({props}) {
  const navigate = useNavigate();
  const [setActiveNav,activeNavValues] = props;

  console.log(props)

  function setActiveNavValues(){
    setActiveNav(activeNavValues);
  }
  return (
    <>
      <div className="lft">
        <h4>
          Get back to growing your <br /> business
        </h4>
        <h5>
          Manage HR, payroll, performance, <br /> learning, recognition and
          benifits <br /> easily with our integrated program.
        </h5>

        <div onClick={()=>{
          setActiveNavValues();
          navigate("./products");
        }} className="button-outline">
          <h4>Product Overview</h4>
        </div>
      </div>

      <div className="mid">

        {/* HR Software & Employee button */}
        <div className="mid-item" onClick={()=>{
          setActiveNavValues();
          navigate("./Products/HR-software")
        }}>
          <h4>HR Software & Employee <br /> Benefits</h4>
        </div>

        {/* Payroll Software button */}
        <div className="mid-item" onClick={()=>{
          setActiveNavValues();
          navigate("./Products/Payroll-software")
        }}>
          <h4>Payroll Software</h4>
        </div>
    
        {/* Global Teams button */}
        <div className="mid-item" onClick={()=>{
          setActiveNavValues();
          navigate("./Products/employer-of-record")
        }}>
          <h4>Global Teams - Employer of <br /> Record</h4>
        </div>
        
        {/* Employee Learning button */}
        <div className="mid-item" onClick={()=>{
          setActiveNavValues();
          navigate("./Products/employee-learning-management-system")
        }}>
          <h4>Empoyee Learning <br /> Management System(LMS)</h4>
        </div>
  
        {/* Application Tracking System button */}
        <div className="mid-item" onClick={()=>{
          setActiveNavValues();
          navigate("./Products/applicant-tracking-system")
        }}>
          <h4>Application Tracking System <br />
            (ATS)</h4>
        </div>
      
        {/* Swag Employment button */}
        <div className="mid-item" onClick={()=>{
          setActiveNavValues();
          navigate("./Products/employment-superapp")
        }}>
          <h4>Swag Employment <br /> Superapp</h4>
        </div>
      </div>

      <div className="rht">
        <h4>Services & Add-Ons</h4>
        <h5>
          Our experts are ready to help you <br /> through complex workplace
          situations
        </h5>
        <div className="anchor">

        <div onClick={()=>{
          setActiveNavValues();
          navigate("./Services/eap")
        }}>
          <h5>Employee Assistance</h5>
        </div>

          <div onClick={()=>{
            setActiveNavValues();
          navigate("./Services/hr-implementation")
          }}>
            <h5>HR implementation</h5>
          </div>
          

          <div onClick={()=>{
            setActiveNavValues();
          navigate("./Services/payroll-implementation")
          }}>
            <h5>Payroll Implementation</h5>
          </div>

          <div onClick={()=>{
            setActiveNavValues();
          navigate("./Services/advisory-lines")
          }}>
            <h5>Advisory Lines</h5>
          </div>

          <div onClick={()=>{
            setActiveNavValues();
          navigate("./Services/learning-plus")
        }}>
          <h5>Learning Plus</h5>
        </div>
        </div>
      </div>
    </>
  );
}

export default NavProductsModal;
