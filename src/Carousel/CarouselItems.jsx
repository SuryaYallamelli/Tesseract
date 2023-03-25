import React from 'react'

const CarouselItems = ({item, width}) => {
  return (
    <div className='carousel-item'>
      <div></div>
      <img src={item.icon.default} alt="" className="carousel-img" />
      <div className='carousel-item-text'>{item.description}</div>
    </div>
  )
}
export default CarouselItems;