import React from 'react'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Partners = () => {
  const Alttempdata = [
    {
      title: `Level up your outsourced payroll services`,
      subtitle: `Are you an accountant, bookkeeper or outsourced payroll provider/payroll bureau? Elevate accuracy and automation in payroll compliance, increase client reach and free up time to drive new business.`,
      img: `https://employmenthero.com/wp-content/uploads/2022/10/quinn-plane-468x456.png`,
      linkdata: ` more`
    }
  ]
  return (
    <div>
      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Partners