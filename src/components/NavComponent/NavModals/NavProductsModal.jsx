import React from "react";

function NavProductsModal() {
  return (
    <>
      <div className="left">
        <h4>
          Get back to growing your <br /> business
        </h4>
        <h5>
          Manage HR, payroll, performance, <br /> learning, recognition and
          benifits <br /> easily with our integrated program.
        </h5>
        <a className="button" href="./Products">
          Product Overview
        </a>
      </div>
      <div className="middle">
        <a href="/Products/HR-software">
          <h4>
            HR Software & Employee <br /> Benefits
          </h4>
        </a>
        <a href="/Products/Payroll-software">
          <h4>Payroll Software</h4>
        </a>
        <a href="/Products/employer-of-record">
          <h4>
            Global Teams - Employer of <br /> Record
          </h4>
        </a>
        <a href="/Products/employee-learning-management-system">
          <h4>
            Empoyee Learning <br /> Management System(LMS)
          </h4>
        </a>
        <a href="/Products/applicant-tracking-system">
          <h4>
            Application Tracking System <br />
            (ATS)
          </h4>
        </a>
        <a href="/Products/employment-superapp">
          <h4>
            Swag Employment <br /> Superapp
          </h4>
        </a>
      </div>
      <div className="right">
        <h4>Services & Add-Ons</h4>
        <h5>
          Our experts are ready to help you <br /> through complex workplace
          situations
        </h5>
        <div className="anchor">
          <a href="/Services/eap">Employee Assistance</a>
          <br />
          <a href="/Services/hr-implementation">HR implementation</a>
          <br />
          <a href="/Services/payroll-implementation">Payroll Implementation</a>
          <br />
          <a href="/Services/advisory-lines">Advisory Lines</a>
          <br />
          <a href="/Services/learning-plus">Learning Plus</a>
        </div>
      </div>
    </>
  );
}

export default NavProductsModal;
