import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Learning = () => {
  const data = {
    title: `Learning Plus`,
    subtitle: `It's cheaper to upskill than rehire. Develop your employees into managers and leaders with access 24/7 premium learning content.`,
    bgc: `#ffe3ea`
  }

  const item = [
    {
      title: `Custom learning paths`,
      subtitle: `Create your own content, catered to your business needs.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Payroll_Auto-216x216.png`
    },
    {
      title: `Create leaders`,
      subtitle: `Give your employees the confidence and tools to manage teams.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Performance_TopGame-216x216.png`
    },
    {
      title: `Content on the go`,
      subtitle: `Available on-demand, whenever and wherever you are`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Onboard_Induction-216x216.png`
    }
  ]

  const Alttempdata= [
    {
      title: `Digital learning for your workforce`,
      subtitle: `Learning Plus provides premium e-learning content to you and your employees online and 24/7, meaning they can learn in the environment that suits them best.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/Learning_1-495x468.png`
    },
    {
      title: `Uplift team capability`,
      subtitle: `Investing in your team’s learning and development can improve engagement, reduce turnover and increase productivity. Empower your team to learn with thousands of courses available on-demand.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/Learning_2-494x387.png`
    },
    {
      title: `Pricing that works for you`,
      subtitle: `Learning Plus is available on Premium and Platinum subscriptions for a small additional employee per month. It’s a cost-effective way to boost your team’s skills and development.`,
      img: `	https://employmenthero.com/wp-content/uploads/2021/07/Learning_3-495x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Threeitems item={item}/>

      <div className="between">
        <h1 className="between-h1">
        Upskill today. Overcome the challenges of tomorrow.
        </h1>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Learning