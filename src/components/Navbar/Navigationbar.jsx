import React,{useState} from 'react';
import './Navstyles.css';


function Navigationbar() {
  const activeNavValues = {
    products : false,
    solutions : false,
    whyus : false,
    partners : false,
    resources : false
  }
  const[activeNav, setActiveNav] = useState(activeNavValues);
  const clickhandler = (e)=>{
    setActiveNav({...activeNavValues, [e.target.id]:!activeNav[e.target.id]})
    // console.log(e.target.id);
  };
  
  const modalClickHandler = ()=>{
    setActiveNav(activeNavValues)
  }

  activeNav.products || activeNav.solutions || activeNav.whyus || activeNav.partners || activeNav.resources ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  return (
    <div className='container'>
      <div className='Navcontainer'>
        <div className='logo'>
          <a href="./">
            <h2>Tesseract</h2>
          </a>
        </div>
        <ul className='Navcontainer-lists'>
          <li className='Navcontainer-lists-items'>
            <div id='products' onClick={clickhandler}>
              Products
              {/* {activeNav.products ? img-1 : img-2} */}
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='solutions' onClick={clickhandler}>
              Solutions
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='whyus' onClick={clickhandler}>
              Why us
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='partners' onClick={clickhandler}>
              Partners
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='pricing'>
              Pricing
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='resources' onClick={clickhandler}>
              Resources
            </div>
          </li>
        </ul>
        <div className="btn-grp">
        <button className='btn btn-1'>Start your free trial</button>
        <button className='btn btn-2'>Request a demo</button>
        </div>
      </div>
      {activeNav.products && 
        <div className='Modal-container' onClick={modalClickHandler}>
          <div className="Modal-content">
            <div className="left">
              <h4>Get back to growing your <br /> business</h4>
              <h5>Manage HR, payroll, performance, <br /> learning, recognition and benifits <br /> easily with our integrated program.</h5>
              <a className='button' href="./Products">Product Overview</a>
            </div>
            <div className="middle">
              <a href="/Products/HR-software"><h4>HR Software & Employee <br /> Benefits</h4></a>
              <a href="/Products/Payroll-software"><h4>Payroll Software</h4></a>
              <a href="/Products/employer-of-record"><h4>Global Teams - Employer of <br /> Record</h4></a>
              <a href="/Products/employee-learning-management-system"><h4>Empoyee Learning <br /> Management System(LMS)</h4></a>
              <a href="/Products/applicant-tracking-system"><h4>Application Tracking System <br />(ATS)</h4></a>
              <a href="/Products/employment-superapp"><h4>Swag Employment <br /> Superapp</h4></a>
            </div>
            <div className="right">
              <h4>Services & Add-Ons</h4>
              <h5>Our experts are ready to help you <br /> through complex workplace situations</h5>
              <div className="anchor">
                <a href="/Services/eap">Employee Assistance</a><br />
                <a href="/Services/hr-implementation">HR implementation</a><br />
                <a href="/Services/payroll-implementation">Payroll Implementation</a><br />
                <a href="/Services/advisory-lines">Advisory Lines</a><br />
                <a href="/Services/learning-plus">Learning Plus</a>
              </div>
            </div>
          </div>
        </div>
      }
      {activeNav.solutions && <div className='Modal-container' onClick={modalClickHandler}>
          <div className="Modal-content">
            <div className="solutions-left">
              <a href=""><h4>Recruitment</h4></a><br />
              <a href=""><h4>Onboarding</h4></a><br />
              <a href=""><h4>Governance</h4></a><br />
              <a href=""><h4>Payroll and Payments</h4></a><br />
              <a href=""><h4>Employee Engagement</h4></a><br />
              <a href=""><h4>Employee Performance</h4></a><br />
              <a href=""><h4>Business Performance</h4></a><br />
              <a href=""><h4>Remote Employment</h4></a><br />
              <a href=""><h4>Managing Turonover</h4></a>
            </div>
            <div className="solutions-main">
              <div className="top">
                  <h4>Solutions</h4>
                  <h5>We give you the tools you need to manage your team at every stage. From interviews and onboarding, right through to offboarding.</h5>
                  <a href="./solutions">
                    <p>Solution Overview</p>
                  </a>
              </div>
              <div className="bottom">

              </div>
            </div>
          </div>
      </div>}
      {activeNav.whyus && <div className='Modal-container' onClick={modalClickHandler}>
          <div className="Modal-content">
            <div className="left">
              <h4>Employment Hero services <br /> over 200,000 business</h4>
              <h5>we give you the tools to hire new <br /> staff easily, scale quickly and <br /> improve compliance.</h5>
              <a className='button' href="./about-us">Learn more</a>
            </div>
            <div className="middle">
              <div className="whyus-middle-sec">
                <a href="">
                  <h4>Our story</h4>
                  <h5>Employment Hero is one of <br /> Australia's fastest-growing SaaS <br /> companies, powered by a mission to <br /> help SmBs aroung the world.</h5>
                </a>
              </div>
              <div className="middle-sec">
                <a href="">
                  <h4>Award winning</h4>
                  <h5>Defined by innovation, reliablity and <br /> outstanding customer service (and <br /> we have the award to prove it).</h5>
                </a>
              </div>
              <div className="middle-sec">
                <a href="/trust-security">
                 <h4>Safe and secure</h4>
                  <h5>Trust is a core value of Employment <br /> Hero, so we take protecting your <br /> data really seriously.</h5>
                </a>
              </div>
              <div className="middle-sec">
                <a href="/partner-network">
                  <h4>Become a partner</h4>
                  <h5>Join us on the journey towards <br /> making employment easier and <br /> more valuable for everyone</h5>
                </a>
              </div>
            </div>
            <div className="right">
              <h4>Customer Success Stories</h4>
              <h5>Learn more about how we've made <br /> employment easier and more rewarding <br /> for business across multiple <br /> industries.</h5>
              <div className="anchor">
                <a href="">APD Projects</a><br />
                <a href="">Fonda Mexican</a><br />
                <a href="">WorkXtra</a><br />
                <a href="">F45</a>
              </div>
            </div>
          </div>
      </div>}
      {activeNav.partners && <div className='Modal-container' onClick={modalClickHandler}>
          <div className="Modal-content">
            <div className="left">
              <h4>Join the Employment Hero <br /> Partner Network</h4>
              <h5>We are your partner in payroll and <br /> employment success. join us on <br /> the journey towards making <br /> employment and payroll easier, <br /> and more valuable.</h5>
              <a className='button' href="./partner-network">Partners Overview</a>
            </div>
            <div className="middle">
              <a href="">
                <h4>Outsourced payroll services</h4>
                <h5>For accoutants, bookkeepers, and <br /> outsourced payroll providers</h5>
              </a>
              <a href="/partner-network/accountants"><h4>Accountants</h4></a>
              <a href="/partner-network/bookkeepers"><h4>Bookkeepers</h4></a>
              <a href="/partner-network/outsourced-payroll-providers"><h4>Outsourced payroll providers</h4></a>
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
              <h5>Let us be your go-to for all things HR,<br /> people management and payroll.</h5>
              <div className="anchor">
                <a href="">Case study: EPG Payroll & HR</a><br />
                <a href="">Case study: Alltech Outsourced Payroll <br /> Solutions</a><br />
                <a href="">Case study: Infra Hub</a><br />
                <a href="">Case study: Bentleys</a>
              </div>
            </div>
          </div>
      </div>}
      {activeNav.resources && <div className='Modal-container' onClick={modalClickHandler}>
          <div className="Modal-content">
            <div className="left">
              <h4>We're to help.</h4>
              <h5>Blogs, guides, whitepapers, <br /> webinars and more. It's all here.</h5>
              <a className='button' href="./resources">Resources</a>
            </div>
            <div className="middle">
              <a href="">
                <h4>Resources</h4>
                <h5>Let us be your go-to for all things <br />HR, people management and payroll <br />Take a look at our helpful blogs, webinars, research reports, guides and more.</h5>
              </a>
              <a href="/quick-demos">
                <h4>See us in action</h4>
                <h5>Fancy a tour? HR, payroll and <br /> benefits features that make your life <br /> easier. Watch our quick demo <br /> videos.</h5>
              </a>
              <a href="/talent-insights">
                <h4>Talents insights Report</h4>
              <h5>'The Great Resignation','Quiet Quitting','Career Cushioning'... <br /> What's going on with Australian <br />employees and  the jobs market  in <br />2023? We surveyed 1,000 to find <br />out.</h5>
              </a>
            </div>
            <div className="right">
              <h4>Browse by popular categories</h4>
              <a href="">Blogs</a>
              <a href="">Webinars</a>
              <a href="">Guides</a>
              <a href="">Templates</a>
              <a href="">Reports and factsheets</a>
              <a href="">Case studies</a>
            </div>
          </div>
      </div>}
    </div>
  )
}

export default Navigationbar;