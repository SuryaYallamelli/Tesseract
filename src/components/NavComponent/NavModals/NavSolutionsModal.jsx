import React, { useState } from 'react'
import './NavSolutions.css'
import {useNavigate} from 'react-router-dom';

const NavSolutionsModal = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id){
    setToggle(id)
  }

  const navigate = useNavigate();
  return (
    <div className='solutions'>

      <div className="solutions-left">

        {/* <div onClick={()=>{
          updateToggle(1)
        }} className="solutions-link">
          
        </div> */}
        <div onClick={()=>{
          updateToggle(2)
        }
        } className='solutions-link'>
          <h3>Recruitment</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(3)
        }
        } className='solutions-link'>
          <h3>Onboarding</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(4)
        }
        } className='solutions-link'>
          <h3>Governance</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(5)
        }
        } className='solutions-link'>
          <h3>Payroll and Payments</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(6)
        }
        } className='solutions-link'>
          <h3>Employee Engagement</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
           updateToggle(7)
        }
        } className='solutions-link'>
          <h3>Employee Performance</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(8)
        }
        } className='solutions-link'>
          <h3>Business Performance</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(9)
        }
        } className='solutions-link'>
          <h3>Remote Employment</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>

        <div onClick={()=>{
          updateToggle(10)
        }
        } className='solutions-link'>
          <h3>Managing Turnover</h3>
          <span class="material-symbols-outlined">
            navigate_next
          </span>
        </div>
      </div>
      
      <div className="solutions-right">
        
          <div className={toggle === 1 ? "show-content" : "default-content"}>
            <div className="default-content-top">
              <h2 onClick={()=>{
                navigate("./solutions")
              }}>Solutions</h2>
              <p>We give you the tools you need to manage your team at every stage. From interviews <br /> and onboarding, right through to offboarding.</p>
              <div className='arrow-button'>
                <p>Solutions Overview</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </div>
            </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 2 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Recruitment</h2>
                <p>Streamlined recruitment? You betcha. Securely manage candidates so you start your recruitment process on the right foot – every time.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div>
                <h4>The best candidate experience</h4>
                <h5>With a seamless internal process <br /> your candidates will have their best <br /> recruitment experience yet.</h5>
              </div>
              <div>
                <h4>Hiring collaboratively</h4>
                <h5>Ditch the spreadsheets, email threads <br /> and handwritten notes. Work <br /> together from one common place.</h5>
              </div>
              <div>
                <h4>Offer today. Hire today.</h4>
                <h5>Send digital contracts to your new <br /> hires and have them signed and <br /> returned in an instant.</h5>
              </div>
            </div>
          </div>

          <div className={toggle === 3 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Onboarding</h2>
                <p>Onboarding made simple. Get your new starters set up for success and cut down on your onboarding admin.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 4 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Governance</h2>
                <p>Spending hours on employee admin? We’ll show you a more efficient way to elevate your team.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 5 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Payroll and Payments</h2>
                <p>Save time and pay your people with automated payroll and take care of workforce planning – all in one simple place.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 6 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Employee Engagement</h2>
                <p>Engage your people. Even on Mondays. Effective engagement for your team starts – and continues – here.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 7 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Employee Performance</h2>
                <p>Create a team at the top of their game and fulfil big career ambitions.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 8 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Business Performance</h2>
                <p>Helping you to make strategic decisions with data and keep on top of your people.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 9 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Remote Employment</h2>
                <p>Global Teams is a best in class professional employer organisation (PEO) that enables you to hire based on skill, not location.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>

          <div className={toggle === 10 ? "show-content" : "default-content"}>
              <div className="default-content-top">
                <h2>Managing Turnover</h2>
                <p>Goodbyes are hard. We make them easier. We’ll manage your employee admin so you can take one less thing off your plate.</p>
                <div className='arrow-button'>
                <p>Learn more</p>
                <span class="material-symbols-outlined">
                  arrow_right_alt
                </span>
                </div>
              </div>
            <div className='default-content-bottom'>
              <div><h4>Accounting</h4></div>
              <div><h4>Healthcare</h4></div>
              <div><h4>Construction</h4></div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NavSolutionsModal