import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Footer from '../../components/Footer/Footer'

const Whyus = () => {
  const data = {
    title : 'About us.',
    subtitle :  "Employment Hero connects and empowers over 200,000 businesses across the world with a suite of powerful employment features. We're launching employers toward their goals, powering more productive teams and making employment easier and more rewarding for everyone.",
    image:'',
    button:'',
    bgc: '#85b0ff'
  }
  return (
    <div>
      <CI data={data} style={{backgroundColor:'red'}}/>
      <Footer/>
    </div>
  )
}

export default Whyus