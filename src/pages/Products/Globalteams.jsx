import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Rating from '../../components/Sections/Rating/Rating'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Globalteams = () => {
  const data = {
    title: `Employer of Record Service. Hire Remotely.`,
    subtitle: `Global Teams is a best in class global employer of record (EOR) that enables you to hire based on skill, not location. Whether you’re expanding into new markets or struggling to fill open roles, we connect the best talent with the best employers, legally and ethically.`,
    image: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Quinn-Office-390x390.png`,
    button: `Speak to an expert`,
    bgc: `#cafad9`
  }

  const item = [
    {
      title: `Access the best talent`,
      subtitle: `Access highly skilled remote employees across different industries in multiple countries.`,
      image: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Three-Column-1.svg`
    },
    {
      title: `Skip the headache`,
      subtitle: `No recruiters, no overseas entities, no compliance risks. We do it all for you.`,
      image: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Three-Column-2-216x216.png`
    },
    {
      title: `All-in-one solution`,
      subtitle: `Manage, pay, motivate and reward your local and global teams together with employee benefits.`,
      image: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Three-Column-3-216x216.png`
    }
  ]

  const Alttempdata = [
    {
      title: `Eden Brew`,
      subtitle: `Eden Brew is an Australian-based company that’s changing the way we think about milk. We spoke with Anna Oxley Rintoul, Head of People & Culture, about the difference Employment Hero’s Global Team’s service has made when it comes to their international hiring.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Eden-Brew-468x468.png`,
      linkdata: ` more`
    },
    {
      title: `Elabor8`,
      subtitle: `Elabor8 is a management consultancy that specialises in agile transformation. We spoke with Ariane Sarabia, Global Acquisition Specialist, about the difference our Global Teams solution has made on their quest to expand globally.`,
      img: `https://employmenthero.com/wp-content/uploads/2023/02/EOR-Elabor8-468x468.png`,
      linkdata: ` more`
    }
  ]
  return (
    <div>
      <CI data={data}/>

      <Rating/>
    
      <div className="between">
        <div className="h1-between">
          <h1>
          Find your unicorn. Yesterday
          </h1>
        </div>
      </div>

      <Threeitems item={item}/>

      <div className="between">
        <div className="h1-between">
          <h1>
          Hear what our clients have to say
          </h1>
        </div>
      </div>

      <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Globalteams