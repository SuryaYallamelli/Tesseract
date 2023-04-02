import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Rating from '../../components/Sections/Rating/Rating'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Superapp = () => {
  const data = {
    title : `Meet Swag.
    The world’s first employment superapp.`,
    subtitle: `Swag is redefining what it means to be employed. Our app rolls work, wages, savings and exclusive benefits into one superapp for your employees. When you offer employment – we’ll bring the benefits.`,
    image : `https://employmenthero.com/wp-content/uploads/2023/02/Swag_Product_Page_Hero-390x390.png`,
    bgc: `#f1e9fb`
  }


  const Alttempdata = [
    {
      title: `Work`,
      subtitle: `Say hello to our new look self-service hub for
      all things work – from timesheets and leave requests, to peer shoutouts and company notifications. The Swag app takes all the features your team loves in the Employment Hero app, and gives it a facelift.`,
      img : `	https://employmenthero.com/wp-content/uploads/2023/02/1_Swag_Product_Page_Left_Career-468x468.png`
    },
    {
      title: `Money`,
      subtitle: `The cost of living is soaring and everyone’s feeling the pinch. Swag Money helps you attract and retain great people by giving them the tools to fight inflation with features like on-demand pay, a dedicated Swag Spend account, in-store and online discounts and cashback offers.`,
      img : `	https://employmenthero.com/wp-content/uploads/2023/02/2_Swag_Product_Page_Right_Work-468x468.png`
    },
    {
      title: `Benefits`,
      subtitle: `Keep your team engaged and motivated with world-class benefits. We’ve got discounts on health insurance, gym memberships, groceries, fuel, electronics, homewares, wellbeing, travel and more – all the things your team uses every single day.`,
      img : `https://employmenthero.com/wp-content/uploads/2023/02/3_Swag_Product_Page_Left_Money-468x468.png`
    },
    {
      title: `Career`,
      subtitle: `Find the best talent s via our job board and manage applications with ease. Give candidates the ability to track their progress and allow your team to refer friends, past colleagues or even apply themselves. It’s a seamless hiring process they’ll never forget. `,
      img : `https://employmenthero.com/wp-content/uploads/2023/02/4_Swag_Product_Page_Right_Benefits-468x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Rating/>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Superapp