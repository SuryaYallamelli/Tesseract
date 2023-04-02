import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Payrollsoftware = () => {
  const data = {
    title : `Cloud payroll software.
    For Australian businesses.`,
    subtitle : `Automate as much of your payroll processes as you like by harnessing the power of a fully integrated HR and payroll platform. Reduce double data handling and the errors that come with it, and never lose a timesheet or leave request again.`,
    button : `Request a demo`,
    image : `https://employmenthero.com/wp-content/uploads/2023/02/Payroll-Hero-Quinn-Paper-Plane-390x390.png`,
    bgc : `#ffceb2`
  }

  const item = [{
    image: `https://employmenthero.com/wp-content/uploads/2023/02/Payroll_Three-Column-1.svg`,
    title: `Automated online payroll`,
    subtitle: `Payroll management made easy. Employee hours and attendance tracking are all calculated in real-time. Say goodbye to manual data entry with our employee self-service portal.`
},
{
    image: `https://employmenthero.com/wp-content/uploads/2023/02/Payroll_Three-Column-2.svg`,
    title: `Automatic leave balances`,
    subtitle: `Workforce management at your fingertips. Leave accrual and requests updated in seconds.`
},
{
    image: `https://employmenthero.com/wp-content/uploads/2023/02/Payroll_Three-Column-3.svg`,
    title: `Tools for a remote workforce`,
    subtitle: `Streamline your payroll process by importing employee time worked, leave taken and other employee details from your payroll system into Employment Hero.`
}
]

const Alttempdata = [
  {
    img: `https://employmenthero.com/wp-content/uploads/2023/02/Payroll_1_Left_Gungahlin-468x468.jpg`,
    title: `“I can do it from anywhere”`,
    subtitle: `“With Employment Hero Payroll, it takes me three hours to do payroll rather than one-and-a-half days—and I can do it from anywhere, which is invaluable.”`
  },
  {
    img: `https://employmenthero.com/wp-content/uploads/2023/02/Payroll_2_Right_F45-468x468.jpg`,
    title: `“It’s really easy.”`,
    subtitle: `"Keeping up with the awards changes is really easy. When you sign in to the dashboard, it tells you straight away, 'this is the update, this is what's changed'."`
  },
  {
    img: `https://employmenthero.com/wp-content/uploads/2023/02/Payroll_3_Right_SPP-468x468.jpg`,
    title: `“Employment Hero has cut our payroll down”`,
    subtitle: `"Employment Hero Payroll has cut our payroll down by a third now that we no longer have to input data from individual timesheets.”`
  }
]
  return (
    <div>
      <CI data={data}/>

      {/* section-3 */}
      <div className="between">
        <div className="h1-between">
          <h1>All-in-one payroll solution</h1>
        </div>
      </div>

      {/* section-4 */}
      <Threeitems item={item}/>

      {/* section-6 */}
      <div className="between">
        <div className="h1-between">
          <h1>Hear what our clients have to say</h1>
        </div>
      </div>

      {/* section-7 */}
      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Payrollsoftware