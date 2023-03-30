import React from 'react'
import './Threeitems.css'

const Threeitems = ({item}) => {
  return (
    <div className='Titems'>
    {item.map(e => {
        return <div className="item-1">
        <img style={{height:'250px', width: '200px'}} className='image' src={e.image} alt="" />
        <h3 style={{fontSize: "20px", fontWeight:'bold'}} className='title'>{e.title}</h3>
        <p className='subtitle'>{e.subtitle}</p>
      </div>
    })}
    </div>
  )
}

export default Threeitems