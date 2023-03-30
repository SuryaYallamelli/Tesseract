import React from 'react'
import './Alttemp.css'

const Alttemp = ({Alttempdata}) => {
  return (
    <div>
      <div className='left-img-right-cont'>
      <img className='left-img-right-cont-img' src="	https://employmenthero.com/wp-content/uploads/2021/07/ProductOverview_1-495x468.png" alt="" />
        <div>
          <div className="title">
            <h2>Fake title</h2>
          </div>
          <div className="subtitle">
            <p>Fake subtitle</p>
          </div>
          <a href="">see</a>
        </div>
      </div>

      <div className='right-img-left-cont'>
        <div>
          <div className="title">
            <h2>Fake title</h2>
          </div>
          <div className="subtitle">
            <p>Fake subtitle</p>
          </div>
        </div>
        <img className='right-img-left-cont-img' src="	https://employmenthero.com/wp-content/uploads/2021/07/ProductOverview_1-495x468.png" alt="" />
      </div>
    </div>
  )
}

export default Alttemp