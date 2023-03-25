import React from 'react'
import './App.css'
import { useState } from 'react'
import Car from '../../components/Sections/Carousel/Car'
import MCC from '../../MulticolCarousel/MCC'

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const resetValues = {
    div1 : false,
    div2 : false,
    div3 : false,
    div4 : false,
    div5 : false,
    div6 : false
  }
  const initialValues = {
    div1 : true,
    div2 : false,
    div3 : false,
    div4 : false,
    div5 : false,
    div6 : false
  }
  const[data, changeData] = useState(initialValues);
function clickHandler(e){
  const {id} = e.target;
  changeData({...resetValues, [id]: true})
}
  return (
    <div>

      {/* Section-1  */}
      <div className="hero">
        <div className="righthero">
          <div className="righthero-h">
            <h1>Employment. <br /> Made easy.</h1>
          </div>
          <div className="righthero-p">
            <p className='para'>
            The smarter way to manage HR, people, <br /> payroll and  productivity. For small and <br /> medium businesses on the up.
            </p>
          </div>
          <div><button className='btn btn-primary'>Request a demo</button></div>
        </div>
        <div className="lefthero">
          <iframe src="https://player.vimeo.com/video/803304932?h=8e12175b7a&dnt=1&app_id=122963&controls=0&hd=1&autohide=1&autoplay=1&loop=1&autopause=0&muted=1" style={{width:'400px', height:'800px', allow:'autoplay'}} frameborder="0"></iframe>
        </div>
      </div>

      {/* Section-2 */}
      <section class="capterra">
          <div class="h-container">
            <div class="capterra-container CapterraRatings">
              <div class="capterra-logo">
                <img src="https://employmenthero.com/wp-content/uploads/2021/07/capterra-142x34.png" style={{width:'142', height:'32'}} alt="" />
                {/* <img class="capterra-image" srcset="https://employmenthero.com/wp-content/uploads/2021/07/capterra-142x34.png , https://employmenthero.com/wp-content/uploads/2021/07/capterra-284x68.png 2x" src="https://employmenthero.com/wp-content/uploads/2021/07/capterra-142x34.png" style={{width:'142', height:'32'}} alt="" loading="lazy"> */}
              </div>
              <div class="capterra-rating">
                <div class="capterra-rating-text">
                  <span class="h-text--h3  md:text-md">
                    Customers rate us 4.5
                  </span>
                </div>
                <div class="capterra-rating-stars">
                                <div class="capterra-rating-star">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="38" width="48" viewBox="0 0 48 48"><path d="m24 36.55-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Z"></path></svg>							</div>
                                <div class="capterra-rating-star">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="38" width="48" viewBox="0 0 48 48"><path d="m24 36.55-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Z"></path></svg>							</div>
                                <div class="capterra-rating-star">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="38" width="48" viewBox="0 0 48 48"><path d="m24 36.55-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Z"></path></svg>							</div>
                                <div class="capterra-rating-star">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="38" width="48" viewBox="0 0 48 48"><path d="m24 36.55-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Z"></path></svg>							</div>
                                            <div class="capterra-rating-star">
                      <svg class="icon" xmlns="http://www.w3.org/2000/svg" height="38" width="48" viewBox="0 0 48 48"><path d="M24 13.7v19.35l7.85 4.75-2.1-8.9 6.9-6-9.1-.8Zm0 22.85-9.3 5.6q-.4.25-.85.225-.45-.025-.8-.275-.35-.25-.525-.65-.175-.4-.075-.9l2.45-10.6-8.2-7.15q-.4-.35-.475-.775-.075-.425.025-.825.1-.4.45-.675t.85-.325l10.85-.95 4.2-10q.2-.45.6-.675.4-.225.8-.225t.8.225q.4.225.6.675l4.2 10 10.85.95q.5.05.85.325t.45.675q.1.4.025.825-.075.425-.475.775l-8.2 7.15 2.45 10.6q.1.5-.075.9t-.525.65q-.35.25-.8.275-.45.025-.85-.225Z"></path></svg>							</div>
                </div>
              </div>
              
              <div class="capterra-context">
              <div class="text-right text-sm md:text-center">
                <span>
                Based on 
                  <a href="https://www.capterra.com.au/software/144645/employment-hero" target="blank">
                    164 Service Ratings
                  </a>
                  <br />over the past year
                </span></div>
              </div>
            </div>
          </div>
	    </section>
      
      {/* Section-3 */}
      <div className='St'>
          <div className='Sttop'>
              <ul className='Sttop-ul'>
              <li key={1} id = "div1" className={`Stbottom-div ${data.div1 && 'selected'}`} onClick={clickHandler}>HR Software</li>
              <li key={2} id = 'div2' className={`Stbottom-div ${data.div2 && 'selected'}`} onClick={clickHandler}>Payroll Software</li>
              <li key={3} id = 'div3' className={`Stbottom-div ${data.div3 && 'selected'}`} onClick={clickHandler}>Employment Superapp</li>
              <li key={4} id = 'div4' className={`Stbottom-div ${data.div4 && 'selected'}`} onClick={clickHandler}>Employer of Record</li>
              <li key={5} id = 'div5' className={`Stbottom-div ${data.div5 && 'selected'}`} onClick={clickHandler}>Applicant Tracking</li>
              <li key={6} id = 'div6' className={`Stbottom-div ${data.div6 && 'selected'}`} onClick={clickHandler}>Learning and Development</li>
              </ul>
          </div>
          <div className='Stbottom'>
              {data.div1 && 
              <div className='cardbox'>
                <div className='callout-tab-media'>
											<div className='callout-tab-media-wrapper'>
                        <img className='h-image_fit content_media_image' src="https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-520x450.png" style={{width:'520', height:'450', loading:'lazy'}} alt="" />
												{/* <img class="h-image_fit content_media_image" srcset="https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-520x450.png , https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-1040x900.png 2x" src="https://employmenthero.com/wp-content/uploads/2023/02/Homepage-Carousel-1-Employee-List-520x450.png" width="520" height="450" alt="" loading="lazy"> */}
											</div>
                </div>
                      <div className="main">
                        <div className="title">
                          <h4>It's a HR Software. By humans.</h4>
                        </div>
                        <div className="paragraph">
                          <p>
                          Onboard new recruits online in Australia. Make <br /> performance reviews a breeze. Manage your HR <br /> and people with built in contracts, policies and <br /> HR templates that are ready to go when you <br /> need them.
                          </p>
                        </div>
                        <div className="callout">
                          <a href="">
                            <button className='btn btn-primary'>HR Software</button>
                          </a>
                        </div>
                      </div>
              </div>}
              {data.div2 && 
              <div className='cardbox'>
                Using DIV-2
              </div>}
              {data.div3 && 
              <div className='cardbox'>
                Using DIV-3
              </div>}
              {data.div4 && 
              <div className='cardbox'>
                Using DIV-4
              </div>}
              {data.div5 && 
              <div className='cardbox'>
                Using DIV-5
              </div>}
              {data.div6 && 
              <div className='cardbox'>
                Using DIV-6
              </div>}
          </div>
      </div>

      {/* Section-4 */}        
      <div className='Sf-hero'>
        <div className='hero-left'>
          <div className='hero-left-content'>
            <div><h2 className='s4-h2'>The employee <br /> lifecycle. We're with <br /> you at every stage.</h2></div>
            <div>
              <p className='sfpara'>
              We give you the tools you need to manage your team at <br /> every stage. From interviews and onboarding, right <br /> through to offboarding.
              </p>
            </div>
          </div>

          <div className='hero-right-content'>
            <ul className='s4-list'>
              <li className='s4-listitems'>Attracting top talent</li>
              <li className='s4-listitems'>Recruitment</li>
              <li className='s4-listitems'>Payroll and payments</li>
              <li className='s4-listitems'>Learning and Development</li>
              <li className='s4-listitems'>Managing and turnover</li>
            </ul>
          </div>
        </div>
        <div className='hero-right'>
          <iframe src="https://player.vimeo.com/video/802966529?h=3d550a6a4a&dnt=1&app_id=122963&controls=0&hd=1&autohide=1&autoplay=1&loop=1&autopause=0&muted=1" style={{width:'390px', height:'500px', frameborder:'0', allow:'autoplay'}} frameborder="0"></iframe>
        </div>
      </div>

      {/* Section-5 */}
      <div className='hero-violet'>
        <div className='s5-hero-left'>
          <img src="https://employmenthero.com/wp-content/uploads/2023/02/Hero-Section-3-Swag-468x468.png " alt="" />
        </div>
        <div className='s5-hero-right'>
          <div>
          <div><h1 className='s5-h1'>Meet Swag. The <br /> world’s first <br /> employment <br /> superapp.</h1></div>
          <div className='s5-para'>Roll streamlined work, exciting careers, flexible pay and <br /> exclusive savings and benefits into one. Swag’s advanced <br /> features transform your team’s…</div>
          <div className='s5-list'>
            <ul>
              <li>Work; Manage all work admin from the app</li>
              <li>Career; Discover and apply for internal opportunities</li>
              <li>Money; Access wages on-demand and unlock cashback offers</li>
              <li>Benefits; Save on everyday essentials</li>
            </ul>
          </div>
          </div>
          <div>
            <button className='btn btn-primary s5-button'>Learn more</button>
          </div>
        </div>
      </div>

      {/* Section-6 */}
      <div className='hero'>
        <div>
          <img src="https://employmenthero.com/wp-content/uploads/2023/02/Home-page-Culture-and-Performance-468x468.png" alt="" />
        </div>
        <div>
          <div>Culture and performance. <br />It’s up and up.</div>
          <div>Develop feedback loops, set KPIs and design custom <br /> performance reviews. Quickly build a positive performance <br /> culture for your business — where everyone is aiming for <br /> the same goals.
          </div>
          <div>
            <button className='btn btn-primary'>Performance Management</button>
          </div>
        </div>
      </div>

      {/* Section-7 */}
      <div className='hero'>
        <div>
          <div>
            It's Payroll Software. <br />Just faster.
          </div>
          <div>
          Save your time, pay your people with automated payroll. <br /> Enjoy the benefits of Single Touch Payroll (STP) and take <br /> care of workforce planning - all in one simple place.
          </div>
          <div>
            <button className='btn btn-primary'>Payroll Features</button>
          </div>
        </div>
        <div>
          <img src="https://employmenthero.com/wp-content/uploads/2023/02/Home-page-Payroll-Software-468x468.png" alt="" />
        </div>
      </div>

      {/* Section-8 */}
      <div className='hero'>
        <div>
          <img src="	https://employmenthero.com/wp-content/uploads/2023/02/Home-page-ATS-468x468.png" alt="" />
        </div>
        <div>
          <div>Recruitment and onboarding. <br />Breeze through it.</div>
          <div>
          Save time, improve processes and streamline hiring. <br /> Managing candidates just got a whole lot easier. Post job <br /> listings to over 20 different job boards, then manage all <br /> applicants through each stage.
          </div>
          <div>
            <button className='btn btn-primary'>Onboarding Solutions</button>
          </div>
        </div>
      </div>

      {/* Section-9 */}
      <div className='hero'>
        <div>
          <div>Engage your people. <br />Even on Mondays.</div>
          <div>
          Monday mornings. We love 'em. Effective engagement <br /> for your team starts  – and continues – here.
          </div>
          <div>
            <button className='btn btn-primary'>Employee Engagement</button>
          </div>
        </div>
        <div>
          <img src="https://employmenthero.com/wp-content/uploads/2023/02/Home-page-Engage-your-people-468x468.png" alt="" />
        </div>
      </div>

      {/* Section-10 */}
      <div className='s10'>
        <div className='s10-main'>
            <div><h1 className='s10-h1'> We’ve got the numbers to prove it.</h1></div>
            <div className='s10-content'>
              <div className='s10-stats'>
                <div><h2>291%</h2></div>
                <div>return on investment for <br /> companies using <br /> Employment Hero</div>
              </div>
              <div className='s10-stats'>
                <div><h2>81%</h2></div>
                <div>Improved payroll efficiency</div>
              </div>
              <div className='s10-stats'>
                <div><h2>85%</h2></div>
                <div>Better onboarding experience</div>
              </div>
              <div className='s10-stats'>
                <div><h2>89%</h2></div>
                <div>Decreased paperwork</div>
              </div>
            </div>
        </div>
        
        <div>
          <button className='btn btn-primary'>Read more</button>
        </div>
      </div>

      {/* Section-11 */}
      <div className='s11-hero'>
        <div className='card' style={{width:'30rem', height:'54rem'}}>
          <img src="https://employmenthero.com/wp-content/uploads/2023/02/Image-496x284.jpg" className='card-img-top' alt="..." />
          <div className='card-body'>
            <h5 className='card-title'>Remote Work Report 2021</h5>
            <p className='card-text'>94% of Australians want to keep working remotely. <br /> Discover more insights.</p>
            <a href="#" className='btn btn-primary'>Read more</a>
          </div>
        </div>
        <div className='rightcrd'>
          <div className='ind1' style={{width:'30rem', height:'25rem'}}>
            <img src="https://employmenthero.com/wp-content/uploads/2023/03/workplace-culture-home-1-212x284.jpg" className='card-img-top-vertical' alt="..." />     
          
            <div className='card-body'>
              <h5 className='card-title'>30 Was to improve workplace culture[Free bundle]</h5>
              <p className='card-text'>A practical guide to improving your workplace culture</p>
              <a href="#" className='btn btn-primary'>Read more</a>
            </div>
          </div>
          <div className='ind2' style={{width:'30rem', height:'25rem'}}>
            <img src="	https://employmenthero.com/wp-content/uploads/2023/03/reward-and-recognition-home-1-212x284.jpg" className='card-img-top-vertical' alt="..." />
            <div className='card-body'>
              <h5 className='card-title'>Employee Reward and Recognition Guide</h5>
                <p>Have your read this blog? <br />It's all about rewarding your <br /> employees, but not in the <br /> traditional way.</p>
              <a href="#" className='btn btn-primary'>Read more</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section-12 */}
      <div className='hero'>
        <div>
          <img src="https://employmenthero.com/wp-content/uploads/2023…2/63d754b1cdfd66f01826dc67_hero-p-800-468x468.png" alt="" />
        </div>
        <div>
          <div>Talent Insights <br />Report</div>
          <div>
            'The Great Resignation', 'Quiet Quitting', 'Career <br /> Cushioning'... What's going on with Australian emplyees <br /> and the jobs market in 2023? We surveyed 1,000 to find <br /> out.
          </div>
          <div>
            <button className='btn btn-primary'>Explore now</button>
          </div>
        </div>
      </div>

      {/* Section-13 */}
      <Car/>
      
      {/* Section-14 */}
      <MCC/>
  </div>
  )
}

export default App