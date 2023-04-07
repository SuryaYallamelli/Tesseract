import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Footer from '../../components/Footer/Footer'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'
import Rating from '../../components/Sections/Rating/Rating'

const Whyus = () => {
  const data = {
    title : 'About us.',
    subtitle :  "Employment Hero connects and empowers over 200,000 businesses across the world with a suite of powerful employment features. We're launching employers toward their goals, powering more productive teams and making employment easier and more rewarding for everyone.",
    bgc: '#85b0ff'
  }

  const Alttempdata = [
    {
      title: `Our story.`,
      subtitle: `Ben Thompson witnessed the devastation of poorly managed employment. Why reinvent the wheel for each business when you could have a complete, scalable cloud platform that could help millions of SMEs?

      After taking Australia by storm, we set out to take on the rest of the world, launching internationally in New Zealand, The United Kingdom, Malaysia and Singapore – but our mission doesn't end there.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/AboutUs_2-468x468.png`
    },
    {
      title: `Making employment easier and more rewarding, for everyone.`,
      subtitle: `After working with small businesses across the globe, we saw firsthand how much employees needed a tool designed to fight the rising cost of living, gain control over their finances, and make work more rewarding.

      Enter Swag: a world-first superapp that redefines the way we work, save and get paid.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/03/Untitled-design-5-468x468.png`
    },
    {
      title: `Our leaders.`,
      subtitle: `Employment lawyer of 20 years, Ben Thompson, founded Employment Hero alongside Dave Tong in 2014. Since day one, both have been inspired to lift employment to new heights.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/AboutUs_1-468x468.png`
    },
    {
      title: `Our team.`,
      subtitle: `At Employment Hero, we’re an ambitious group of people on a mission to make employment easier and more rewarding for everyone. We believe that the future of employment is global, diverse and purpose-driven.

      We like to stay ahead of the curve and provide our team with tools to innovate. We pride ourselves on our inclusive, innovative culture that rewards and recognises our team for great work.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/AboutUs_1-468x468.png`
    }
  ]
  return (
    <div>
      <CI data={data} style={{backgroundColor:'red'}}/>

      <Alttemp Alttempdata={Alttempdata}/>

      <div className="between">
        <div className="h1-between">
          <h1>Defined by innovation, reliability and outstanding customer service.</h1>
        </div>
      </div>

      <Rating/>
      <Footer/>
    </div>
  )
}

export default Whyus