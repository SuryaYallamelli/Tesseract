import React from 'react'
import Footer from '../../components/Footer/Footer'
import MCC from '../../MulticolCarousel/MCC'
import CI from '../../components/Sections/CI/CI'

const Solutions = () => {
  const data = {
    title: "The employee lifecycle. We're with you at every stage.",
    subtitle: `See why we're the leading HR,
    payroll and benefits solution for
    SMEs with big ambitions.`,
    button: `Talk to a specialist today`,
    image: `https://employmenthero.com/wp-content/uploads/2021/07/Lifecycle_header-1-440x390.png`,
    bgc: `#85b0ff`

  }
  return (
    <div>
      <CI data={data}/>
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