import React,{useState} from 'react'
import {CarouselItems} from './CarouselItems';
import './App.css'
import './Caurousel.css'
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [

    {
      description : "Baseball is a bat-and-ball sport played between two teams",
      icon : require('./Media/family.svg')
    },
    {
      description : "Walking (also known as ambulation)",
      icon : require('./Media/work.svg')
    },
    {
      description : "Weightlifting generally refers to activities",
      icon : require('./Media/eiffel_tower.svg')
    }
  ];

  const updateIndex = (newIndex) => {
    if(newIndex < 0){
      newIndex = 0;
    }else if(newIndex > items.length){
      newIndex = items.length-1;
    }

    setActiveIndex(newIndex);
  }
  return (
    <div className='carousel'>
      <div>
        Checking!
      </div>
      <div className="inner"
      style={{transform: `translate(-${activeIndex *100}%)`}}>
        {
          items.map(
            (item)=>{return <CarouselItems item={item}/>}
          )
        }
      </div>

      <div className="carousel-buttons">
        <button onClick={()=>{
          updateIndex(activeIndex-1);
        }} className='button-arrow'>
        <span class="material-symbols-outlined">
          arrow_back_ios
          </span> {" "}
        </button>
        <div className="indicators">
          {items.map((item,index)=>{
            return(
              <button onClick={()=>{
                updateIndex(index);
              }} className="indicator-buttons">
                <span className={`material-symbols-outlined ${index === activeIndex ? "indicator-symbol-active" : "indicator-symbol"}`}>
                  radio_button_checked
                </span>
              </button>
            ) 
          })}
        </div>
        <button onClick={()=>{
          updateIndex(activeIndex+1);
        }} className='button-arrow'>
        <span class="material-symbols-outlined">
          arrow_forward_ios
        </span>
        </button>
      </div>
    </div>
  )
}
export default Carousel;