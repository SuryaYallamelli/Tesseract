import React from 'react'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'

const Outsourced = () => {
  const item = [
    {
      title: `Increase profit`,
      subtitle: `     Enjoy driving strategic objectives such as increasing client reach, earning an additional revenue stream and driving new business with a value-added reseller model.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Solutions-HR_IconTop-216x216.png`
    },
    {
      title: `Drive client productivity`,
      subtitle: `     Streamline payroll processes for your clients and improve customer retention, with cloud software that is constantly enhanced with legislation updates and value-add features.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Onboard_VisaChecks-216x216.png`
    },
    {
      title: `Tools to help you flourish`,
      subtitle: `Get extensive product support articles, marketing support, discounts, training videos, bite-sized webinars, and much more for your team to help your clients.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Onboard_Induction-216x216.png`
    }
  ]
  return (
    <div>
      <Threeitems item={item}/>
    </div>
  )
}

export default Outsourced