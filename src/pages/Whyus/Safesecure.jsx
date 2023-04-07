import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'
import Rating from '../../components/Sections/Rating/Rating'

const Safesecure = () => {
  const data = {
    title: `Trust and Security`,
    subtitle: `Here you'll find information on how we manage and protect data.`,
    image: `https://employmenthero.com/wp-content/uploads/2022/04/Header-copy-440x390.png`,
    button: `Read our factsheet`,
    bgc: `#e7efff`
  }

  const Alttempdata = [
    {
      title: `ISO 27001 Certification`,
      subtitle: `Trust is a core value of Employment Hero, so we take protecting your data really seriously. We use the same level of encryption standards and industry leading technology that banks use to manage the security and integrity of your HR data. We have also achieved ISO 27001 compliance.`,
      img: `https://employmenthero.com/wp-content/uploads/2022/04/Magnify2-468x468.png`,
      linkdata: `View our certificate`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Alttemp Alttempdata={Alttempdata}/>

      <div className="between">
        <div className="h1-between">
          <h1>We've got you covered</h1>
        </div>
      </div>

      <Rating/>
    </div>
  )
}

export default Safesecure