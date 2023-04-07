import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavProducts.css";

function NavResourcesModal() {
  const navigate = useNavigate();
  return (
    <>
      <div className="lft">
        <h4>We're to help.</h4>
        <h5>
          Blogs, guides, whitepapers, <br /> webinars and more. It's all here.
        </h5>

        <div className="button-outline" onClick={()=>{
          navigate("./resources")
        }}>
          <h4>Resources</h4>
        </div>
      </div>

      <div className="mid">
        {/* Resources button */}
        <div className="mid-item" onClick={()=>{
            navigate("./resources")
        }}>
          <h4>Resources</h4>
          <h5>
            Let us be your go-to for all things <br />
            HR, people management and payroll <br />
            Take a look at our helpful blogs, webinars, research reports, guides
            and more.
          </h5>
        </div>

        {/* See us in action button */}
        <div className="mid-item" onClick={()=>{
          navigate("./quick-demos")
        }}>
          <h4>See us in action</h4>
          <h5>
            Fancy a tour? HR, payroll and <br /> benefits features that make
            your life <br /> easier. Watch our quick demo <br /> videos.
          </h5>
        </div>

        {/* Talent insights button */}
        <div className="mid-item" onClick={()=>{
          navigate("./talent-insights")
        }}>
          <h4>Talents insights Report</h4>
          <h5>
            'The Great Resignation','Quiet <br /> Quitting','Career Cushioning'...{" "}
            <br /> What's going on with Australian <br />
            employees and the jobs market in <br />
            2023? We surveyed 1,000 to find <br />
            out.
          </h5>
        </div>
      </div>

      <div className="rht">
      <h4>Browse by popular categories</h4>
        <div className="anchor">
          <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Blogs</h5>
          </div>

        <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Webinars</h5>
          </div>

        <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Guides</h5>
          </div>

        <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Templates</h5>
          </div>

        <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Reports and factsheets</h5>
          </div>

        <div onClick={()=>{
            navigate(".")
          }}>
            <h5>Case studies</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavResourcesModal;
