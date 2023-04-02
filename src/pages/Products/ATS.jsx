import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Rating from '../../components/Sections/Rating/Rating'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'

const ATS = () => {
  const data = {
    title: `Our applicant tracking system. Your new talent shortcut.`,
    subtitle: `Stand out candidates who want to work for you? Learn to attract the best – so you can be the best`,
    image : `	https://employmenthero.com/wp-content/uploads/2023/02/ATS_Hero_Quinn_Phone-390x390.png`,
    button: `Request a demo`,
    bgc : `#fef1ae`
  }

  const item = [
    {
      img: `https://employmenthero.com/wp-content/uploads/2023/02/ATS-Three-Column-1.svg`,
      title: `Attract the best`,
      subtitle: `Your search for the best talent just got easier.`
    },
    {
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Learning_Development_Three-Column-2.svg`,
      title: `Job board integration`,
      subtitle: `Put your open roles in front of the best people.`
    },
    {
      img: `https://employmenthero.com/wp-content/uploads/2023/02/Learning_Development_Three-Column-2.svg`,
      title: `A world of talent`,
      subtitle: `The strategic advantage you’ve been searching for.`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Rating/>

      <div className="between">
        <div className="h1-between">
          <h1>
          Great talent. At your fingertips.
          </h1>
        </div>
      </div>

      <Threeitems item={item}/>
    </div>
  )
}

export default ATS