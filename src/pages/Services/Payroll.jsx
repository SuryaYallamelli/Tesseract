import React from 'react'
import CI from '../../components/Sections/CI/CI'

const Payroll = () => {
  const data = {
    title: `Payroll Implementation`,
    subtitle:  `Switching to Employment Hero Payroll? Excellent choice. To set you up for success, you’ll need to choose one of our payroll implementations services: managed or guided.`,
    bgc: `#f7eee2`
  }
  return (
    <div>
      <CI data={data}/>
    </div>
  )
}

export default Payroll