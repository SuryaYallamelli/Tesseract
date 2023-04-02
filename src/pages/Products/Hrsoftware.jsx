import React from 'react'
import CI from '../../components/Sections/CI/CI'
import Rating from '../../components/Sections/Rating/Rating'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import Lcrv from '../../components/Sections/LCRV/Lcrv'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'

const Hrsoftware = () => {
  const data = {
    title : `Cloud HR software.
    For Aussie SMEs.`,
    subtitle : `Employment Hero is an end-to-end human resources management system that covers every aspect of the employee lifecycle, from recruitment and onboarding to engagement, productivity, and success.`,
    image: `https://employmenthero.com/wp-content/uploads/2023/02/HR-Quinn-blue-390x390.png`,
    button: `Request a demo`,
    bgc: `#85b0ff`
  }
  

  const item = [
    {
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Recruit_ATS-216x216.png`,
      title: `Cloud-based platform`,
      subtitle: `100% paper-free files, policies, contracts, leave, employee records and timesheets.`
    },
    {
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Support-Platformstatus-JR-216x216.png`,
      title: `Streamline compliance`,
      subtitle: `Access our library of employment contracts and policies, tracking and record-keeping.`
    },
    {
      image: `https://employmenthero.com/wp-content/uploads/2021/07/Solution_Attract_Best-216x216.png`,
      title: `Boost employee engagement`,
      subtitle: `Pulse checks, reward and recognition and learning and development.`
    }
  ]

  const Alttempdata = [
    {
      img: `https://employmenthero.com/wp-content/uploads/2023/02/HR-Software-HR-Software-Made-Easy-468x468.png`,
      title: `HR Software made easy`,
      subtitle: `We've designed our all-in-one HR management platform to be completely configurable to the specific needs of your business – whether you're a small business with just a few employees, or a larger organisation with hundreds of staff members.`,
      linkdata: `Request a demo`
    },
    {
      img: `https://employmenthero.com/wp-content/uploads/2023/02/HR-Software-Onboarding-468x468.png`,
      title: `Onboard with ease`,
      subtitle: `Our HR management solution is the most comprehensive and user-friendly solution on the market. Our HR system is designed to help small and medium businesses (SMEs) take care of their most important asset – their people. Having cloud-based software gives you the flexibility to have direct access to your employee data from anywhere, any time.`,
      linkdata: `Onboard Employees`
    }
  ]
  return (
    <div>
        {/* section-1 */}
        <CI data={data}/>
        {/* section-2 */}
        <Rating/>
        {/* section-3 */}
        <div className="between">
          <h1 className="between-h1">
          All-in-one HR Management Software
          </h1>
        </div>

        {/* section-4 */}
        <Threeitems item={item}/>

        {/* section-4 */}
        <Lcrv/>

        {/* section-5 */}
        <div className="between">
          <div className="h1-between">
          <h1>Why use Employment Hero’s HR Software?</h1>
          </div>
        </div>

        {/* section-6 */}
        <Alttemp Alttempdata={Alttempdata}/>
    </div>
  )
}

export default Hrsoftware