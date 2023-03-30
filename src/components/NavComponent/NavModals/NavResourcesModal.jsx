import React from "react";

function NavResourcesModal() {
  return (
    <>
      <div className="left">
        <h4>We're to help.</h4>
        <h5>
          Blogs, guides, whitepapers, <br /> webinars and more. It's all here.
        </h5>
        <a className="button" href="./resources">
          Resources
        </a>
      </div>
      <div className="middle">
        <a href="">
          <h4>Resources</h4>
          <h5>
            Let us be your go-to for all things <br />
            HR, people management and payroll <br />
            Take a look at our helpful blogs, webinars, research reports, guides
            and more.
          </h5>
        </a>
        <a href="/quick-demos">
          <h4>See us in action</h4>
          <h5>
            Fancy a tour? HR, payroll and <br /> benefits features that make
            your life <br /> easier. Watch our quick demo <br /> videos.
          </h5>
        </a>
        <a href="/talent-insights">
          <h4>Talents insights Report</h4>
          <h5>
            'The Great Resignation','Quiet Quitting','Career Cushioning'...{" "}
            <br /> What's going on with Australian <br />
            employees and the jobs market in <br />
            2023? We surveyed 1,000 to find <br />
            out.
          </h5>
        </a>
      </div>
      <div className="right">
        <h4>Browse by popular categories</h4>
        <a href="">Blogs</a>
        <br />
        <a href="">Webinars</a>
        <br />
        <a href="">Guides</a>
        <br />
        <a href="">Templates</a>
        <br />
        <a href="">Reports and factsheets</a>
        <br />
        <a href="">Case studies</a>
      </div>
    </>
  );
}

export default NavResourcesModal;
