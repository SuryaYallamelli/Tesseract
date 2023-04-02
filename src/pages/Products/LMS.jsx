import React from 'react'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'
import CI from '../../components/Sections/CI/CI'
import Rating from '../../components/Sections/Rating/Rating'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'

const LMS = () => {
const data = {
  title: `Employee learning management system.`,
  subtitle: `Embrace growth. Upskill, develop and retain your best.

  Invest in your team and reap the benefits long term. It's the best decision you'll ever make.`,
  image : `https://employmenthero.com/wp-content/uploads/2023…Learning_Development_Hero_Quinn_Books-390x390.png`,
  button: `Request a demo`,
  bgc: `#90b9ff`

}

const item = [
  {
    title: `Invest in your team`,
    subtitle: `Continual development. It’s what your team wants. Give them the power to choose how they develop their skills with our range of courses. `,
    image : `https://employmenthero.com/wp-content/uploads/2023/02/Learning_Development_Three-Column-1.svg`
  },
  {
    title: `A culture of learning`,
    subtitle: `Active learning? It just got a whole lot easier. Give your team the tools they need to grow and develop on their own initiative.`,
    image : `	https://employmenthero.com/wp-content/uploads/2023/02/Learning_Development_Three-Column-2.svg`
  },
  {
    title: `Boost retention rates`,
    subtitle: `Ongoing employee training. A top priority for all. Keep your team feeling fulfilled, up to date and you'll feel the positive impact well down the line.`,
    image : `https://employmenthero.com/wp-content/uploads/2023/02/Learning_Development_Three-Column-3.svg`
  }
]

const item2 = [
  {
    title: `Custom learning paths`,
    subtitle: `Create your own content, catered to your business needs.`,
    image : `https://employmenthero.com/wp-content/uploads/2021/07/Payroll_Auto-216x216.png`
  },
  {
    title: `Create leaders`,
    subtitle: `Give your employees the confidence and tools to manage teams.`,
    image : `https://employmenthero.com/wp-content/uploads/2021/07/Performance_TopGame-216x216.png`
  },
  {
    title: `Content on the go`,
    subtitle: `Available on-demand, whenever and wherever you are`,
    image : `https://employmenthero.com/wp-content/uploads/2021/07/Onboard_Induction-216x216.png`
  }
]

const Alttempdata = [
  {
    title: `Digital learning for your workforce`,
    subtitle: `Learning Plus provides premium e-learning content to you and your employees online and 24/7, meaning they can learn in the environment that suits them best.`,
    img: `https://employmenthero.com/wp-content/uploads/2021/07/Learning_1-495x468.png`,
  },
  {
    title: `Uplift team capability`,
    subtitle: `Investing in your team’s learning and development can improve engagement, reduce turnover and increase productivity. Empower your team to learn with thousands of courses available on-demand.`,
    img: `https://employmenthero.com/wp-content/uploads/2021/07/Learning_2-494x387.png`,
  },
  {
    title: `Pricing that works for you`,
    subtitle: `Learning Plus is available on Premium and Platinum subscriptions for a small additional employee per month. It’s a cost-effective way to boost your team’s skills and development.`,
    img: `https://employmenthero.com/wp-content/uploads/2021/07/Learning_3-495x468.png  `,
  }
]
  return (
    <div>
      {/* section-1 */}
      <CI data={data}/>

      {/* section-2 */}
      <Rating/>

      <div className="between">
        <div className="h1-between">
          <h1>Your most rewarding payday yet.</h1>
        </div>
      </div>

      <Threeitems item={item}/>

      <div className="between">
        <div className="h1-between">
          <h1>Why use Learning Plus?</h1>
        </div>
      </div>

      <Threeitems item={item2}/>

      <div className="between">
        <div className="h1-between">
          <h1>Upskill today. Overcome the challenges of tomorrow.</h1>
        </div>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default LMS