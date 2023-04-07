import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Accountants = () => {
  const data = {
    title: `Free up time with payroll automation. Made for accountants.`,
    subtitle: `Streamline your practice’s entire payroll journey in the cloud. Earn more time to shift your focus from compliance to advisory.`,
    image : `https://employmenthero.com/wp-content/uploads/2023/02/Webinars-440x301.png`,
    button: `Become a Partner`,
    bgc: `#85b0ff`
  }

  const item = [
    {
      title: `All in one place`,
      subtitle: `Managing paperwork and spreadsheets can be hard to keep track of. Store all important client information digitally in one location. It’s secure and you can access it from wherever you are – via mobile or desktop.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Solutions-HR_IconTop-216x216.png`
    },
    {
      title: `Stay up to date`,
      subtitle: `Enjoy product innovation, development, integrations, feature testing and legislation updates - all designed with you in mind.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Recruit_ManageCand-216x216.png`
    },
    {
      title: `Expand globally`,
      subtitle: `Available in Australia, New Zealand, Singapore, Malaysia and the UK, our global offering streamlines payroll for your clients across multiple countries. Have as many clients as you like on the system.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Careers_FreedomToWork-216x216.png`
    }
  ]

  const Alttempdata = [
    {
      title: `Support with award and payroll compliance`,
      subtitle: `Payroll compliance is ever evolving and complex. Remove the need for manual calculations, spreadsheets, or multiple apps for the interpretation of Australia’s modern awards and leading ATO-certified STP reporting feature. Our modern award interpretation engine can automate employee award calculations - always updated in real time with scheduled legislation changes.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/AU-Awards-min-468x468.png`
    },
    {
      title: `Accounting software integration`,
      subtitle: `Eliminate the need for journal spreadsheet exports and uploads. Integrate seamlessly with a range of accounting platforms including Xero, QuickBooks Online, NetSuite and Saasu. Automate journal entries after each pay run, provision leave liabilities in journals, and map GL accounts with the ability to split by location.`,
      img: `	https://employmenthero.com/wp-content/uploads/2023/02/EOR-Carousel-4-Quinn-Pricing-468x468.png`
    },
    {
      title: `Automate pay runs`,
      subtitle: `Remove all the mundane parts of payroll processing, freeing up time while keeping you firmly in charge. Let pay runs run in the background from start to finish and choose warnings that will stop the automation. Set and forget.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Global-Report-Packs-min-468x468.png`
    },
    {
      title: `Automate reporting`,
      subtitle: `Add value beyond payroll. Automate the generation and distribution of key reports such as Gross to Net, Leave Liabilities, pay run, super and PAYG.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Global-Report-Packs-min-468x468.png`
    },
    {
      title: `Timesheet app and time clocking`,
      subtitle: `Accountants often spend hours each month chasing and managing timesheets. Our timesheet calculator automatically interprets timesheet hours for each employee and feeds the data straight into payroll, so you don’t have to.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Global-Timesheet-Calculations-min-468x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Threeitems item={item}/>

      <div className="between">
        <div className="h1-between">
          <h1>
          Drive profit through payroll services.
          </h1>
        </div>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Accountants