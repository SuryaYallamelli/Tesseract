import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Bookkeepers = () => {
  const data = {
    title: `Payroll made simpler, faster and smarter. For Bookkeepers.`,
    subtitle: `Frustrated by all the late nights and missed lunch breaks? Focus on more important things by streamlining your entire payroll process.`,
    image: `https://employmenthero.com/wp-content/uploads/2023/02/FAQS-440x301.png`,
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
      subtitle: `Available in Australia, New Zealand, Singapore, Malaysia and the UK, our global offering streamlines payroll for your clients across multiple countries.`,
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
      title: `Accounting and bookkeeping software integration`,
      subtitle: `Remove the need for spreadsheets. Integrate seamlessly with a range of accounting and bookkeeping platforms including Xero, QuickBooks Online, and NetSuite. Automatically post journal entries to bookkeeping software after each pay run, removing the need to download and re-upload payroll data.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Carousel-4-Quinn-Pricing-468x468.png`
    },
    {
      title: `Automate pay runs`,
      subtitle: `Remove all the mundane parts of payroll processing, freeing up time while keeping you firmly in charge. Let pay runs run in the background from start to finish and choose warnings that will stop the automation. Set and forget.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Global-Report-Packs-min-468x468.png`
    },
    {
      title: `Automate reporting`,
      subtitle: `Tired of manually building payroll reports? Automate the generation and distribution of key reports such as Gross to Net, Leave Liabilities, pay run, super and PAYG. With an easy setup, reports can be created automatically and sent to your clients each month!`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Global-Report-Packs-min-468x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Threeitems item={item}/>

      <div className="between">
        <div className="h1-between">
          <h1>Eliminate manual payroll headaches, and get time back.</h1>
        </div>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Bookkeepers