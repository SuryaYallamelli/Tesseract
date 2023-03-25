import React from 'react'
import { useState } from 'react'

const MenuCard = () => {
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
  )
}

export default MenuCard