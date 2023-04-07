import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'

const Hrimp = () => {
  const data = {
    title: `HR Implementation
    Services`,
    subtitle: `Every business has different people management needs. Ensure your Employment Hero account is set up to suit your specific needs by choosing either a managed or guided implementation.`,
    bgc: `#ffad80`
  }

  const item = [
    {
      title: `Guided HR Implementation`,
      subtitle: `For businesses with straightforward needs.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Onboard_VisaChecks-216x216.png`
    },
    {
      title: `Managed HR Implementation`,
      subtitle: `For businesses with complex needs.`,
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Payroll_Auto-216x216.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <div className="between">
        <h1 className="between-h1">
        Which implementation journey works best for you?
        </h1>
      </div>

      <Threeitems item={item}/>
    </div>
  )
}

export default Hrimp