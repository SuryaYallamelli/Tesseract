import React from 'react'

const Test = ({data}) => {
  const {title, subtitle, img, bgc} = data;
  const bgColor = {
    backgroundColor : bgc
  }
  return (
    <div className='parent' style = {bgColor}>
      <div className="left">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="subtitle">
          {subtitle}
        </div>
      </div>
      <div className="right">
        <img className='img' src={img} alt="" />
      </div>
    </div>
  )
}

export default Test