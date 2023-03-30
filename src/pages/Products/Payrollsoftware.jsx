import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'

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
    </div>
  )
}

export default Payrollsoftware