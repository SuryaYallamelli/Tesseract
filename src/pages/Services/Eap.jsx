import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Eap = () => {
  const data = {
    title: `Employee Assistance
    Program`,
    subtitle: `Enable your employees to produce their best work by supporting them with an employee assistance program.`,
    bgc: `#e1ceea`
  }

  const item = [
    {
      title: `Confidential support`,
      subtitle: `In person or telephone counselling.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/human_432x432px-216x216.png`
    },
    {
      title: `Usage reporting`,
      subtitle: `Available annually or quarterly.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Computer_432x432px-216x216.png`
    },
    {
      title: `24/7 access`,
      subtitle: `Crises don't keep office hours.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Communication_432x432px-216x216.png`
    }
  ]

  const Alttempdata = [
    {
      title: `Support for your employees when they need it`,
      subtitle: `An employee assistance program (EAP) is a confidential counselling service provided free to your team as a workplace benefit. It’s a great way to support your employees’ mental wellbeing.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/EAP_1-495x468.png`
    },
    {
      title: `Wellbeing at work`,
      subtitle: `Workers compensation claims for psychological injuries are climbing up to 15 times faster than physical injuries. EAPs can reduce this risk in addition to supporting team happiness and engagement.`,
      img: `	https://employmenthero.com/wp-content/uploads/2021/07/EAP_3-494x387.png`
    },
    {
      title: `Pricing that works for you`,
      subtitle: `We’ve partnered with Acacia Connections to offer packages starting from $5 per employee per month (min. $200 p/m), which includes 3 sessions per employee per year, annual reporting and more.`,
      img: `https://employmenthero.com/wp-content/uploads/2021/07/EAP_2-495x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Threeitems item={item}/>

      <div className="between">
        <h1 className="between-h1">
        Untreated mental health conditions cost Australian workplaces an estimated $11 billion per year.
        </h1>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Eap