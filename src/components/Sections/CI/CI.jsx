import React from 'react'
import './CI.css'

const CI = ({data}) => {
  const{title, subtitle, image, button, bgc} = data;
  const bgColor = {
    backgroundColor : bgc
  }
  return (
    <div>
      <div className="temp" style={bgColor}>
        <div className="left" style={{height:'300px'}}>
          <div className="title">
              <h1>{title}</h1>
              <div className="subtitle">
                <h3>{subtitle}</h3>
              </div>
          </div>
          { !button ? "" : <a className='button' href="">{button}</a>}
        </div>
        <div className="right">
          { !image ? "" : <img style={{width:'400px', height:'400px'}} className='image' src={image} alt="Network issue" />}
        </div>
      </div>
    </div>
  )
}

export default CI