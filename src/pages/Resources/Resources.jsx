import React from 'react'
import CI from '../../components/Sections/CI/CI'

const Resources = () => {
  const data = {
    title: `Resources`,
    subtitle:`Let us be your go-to for all things HR, people management and payroll. Take a look at our helpful blogs, webinars, research reports, guides and more.`
  }
  return (
    <div>
      <CI data={data}/>
    </div>
  )
}

export default Resources