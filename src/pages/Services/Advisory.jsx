import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Advisory = () => {
  const data = {
    title: `Advisory
    Lines`,
    subtitle:  `Advisory
    Lines`,
    bgc: `#f78da7`
  }

  const Alttempdata = [
    {
      title: `HR Advisory`,
      subtitle:  `Get access to highly trained workplace consultants who can consult on a range of HR matters. Communicating on the phone or via email, our consultants can provide pragmatic advice on complex HR issues.
`,
      img: `	https://employmenthero.com/wp-content/uploads/2021/07/Learning_3-495x468.png`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Advisory