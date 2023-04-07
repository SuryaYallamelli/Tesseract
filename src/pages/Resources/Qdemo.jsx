import React from 'react'
import CI from '../../components/Sections/CI/CI'

const Qdemo = () => {

  const data = {
    title: `Fancy a tour?
    See us in action.`,
    subtitle: `HR, payroll and benefits. It's all here. Watch our quick demo videos below.`,
    image: `https://employmenthero.com/wp-content/uploads/2021…mpaign880x780-Cartwheel-Blue-on-White-440x390.png`,
    bgc: `#85b0ff`
  }
  return (
    <div>
      <CI data={data}/>
    </div>
  )
}

export default Qdemo