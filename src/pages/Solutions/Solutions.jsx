import React from 'react'
import Footer from '../../components/Footer/Footer'
import LIRCWB from '../../components/Sections/LIRCWB/LIRCWB'
import MCC from '../../MulticolCarousel/MCC'

const Solutions = () => {
  return (
    <div>
      <LIRCWB/>
      <div className="between">
        <h1 className="between-h1">
        Innovation, reliability, customer service. <br /> Tick, gold medal, five stars.
        </h1>
      </div>
      <MCC/>
      <Footer/>
    </div>
  )
}

export default Solutions