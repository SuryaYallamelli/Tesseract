import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const OPP = () => {
  const data = {
    title: `Payroll software. For outsourced payroll providers.`,
    subtitle: `From automated payruns to payroll compliance. We’ve got you covered. See how you can help your clients process payroll in a smarter way.`,
    image: `https://employmenthero.com/wp-content/uploads/2023/02/Prod-updates-440x301.png`,
    button: `Become a Partner`,
    bgc: `#85b0ff`
  }

  const item = [
    {
      title: `All in one place`,
      subtitle: `Managing paperwork and spreadsheets can be messy. Store all important client information digitally in one location. It’s secure and you can access it from wherever you are – via mobile or desktop.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Solutions-HR_IconTop-216x216.png`
    },
    {
      title: `Save time processing payroll`,
      subtitle: `Save up to 90% of your time on payroll admin. Automate tasks such as processing standing data and timesheets, downloading and applying tax codes, super deductions, leave calculations and more.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Recruit_ManageCand-216x216.png`
    },
    {
      title: `Scalable payroll`,
      subtitle: `No limit on employees or business size. Available in Australia, New Zealand, Singapore, Malaysia and the UK, our global offering streamlines payroll for your clients across multiple countries.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Careers_FreedomToWork-216x216.png`
    }
  ]
  
  const Alttempdata = [
    {
      title: `Automate pay runs`,
      subtitle: `Run multiple pay runs in the background from start to finish at the same time. Choose which pay run processes to automate, and enjoy greater control by choosing specific dates and times to automate certain tasks. Choose warnings that will stop the automation - on your terms - to maintain control and quality assurance.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/AU-Awards-min-468x468.png`
    },
    {
      title: `Automate awards and streamline payroll compliance`,
      subtitle: `Remove the need for manual calculations, spreadsheets, or multiple apps for the interpretation of Australia’s modern awards and leading ATO-certified STP reporting feature. Our modern award interpretation engine can automate employee award calculations for you.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/AU-Awards-min-468x468.png`
    },
    {
      title: `Automate reporting`,
      subtitle: `Create payroll reports from four main categories: Payroll, Employee, Time & Attendance and ATO reporting. Using report filters such as date range, employing entity, pay schedule, and location, to name a few, you can easily retrieve the specific financial data you require, with minimum effort.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/AU-Reports-ATO-Reporting-min-468x468.png`
    },
    {
      title: `Flexible configurations`,
      subtitle: `If staff accrue Rostered Days Off, or Time Off in Lieu of overtime, automate these accruals with rule sets using our pay conditions engine. Automatically calculate wage rates, penalties and allowances based on specific working requirements and migrate straight to the pay run.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/AU-Reports-ATO-Reporting-min-468x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Threeitems item={item}/>

      <div className="between">
        <div className="h1-between">
          <h1>
          Streamline payroll for you and your clients.
          </h1>
        </div>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default OPP