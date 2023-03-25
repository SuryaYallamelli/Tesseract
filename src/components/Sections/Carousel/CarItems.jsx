import React from 'react'

const CarItems = ({item}) => {
  return (
    <div>
      <div className='carousel-item'>
      <div></div>
      <img src={item.icon.default} alt="" className="carousel-img" />
      <div className='carousel-item-text'>{item.description}</div>
    </div>
    </div>
  )
}

export default CarItems