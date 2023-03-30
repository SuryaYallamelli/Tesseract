import React from 'react'
import Footer from '../../components/Footer/Footer'
import Alttemp from '../../components/Sections/Alttemp/Alttemp'
import CI from '../../components/Sections/CI/CI'
import Threeitems from '../../components/Sections/Threeitems/Threeitems'
import { item, data,Alttempdata } from '../../components/Cmpntdata'


const Products = () => {

  return (
    <div>

     {/* section-1 */}
     <CI data={data}/>

     {/* section-2 */}
     <div className="between">
      <div className="between-h1">
        An HRIS system that works for you.
      </div>
     </div>
     
     {/* section-3 */}
     <Threeitems item={item}/>

     {/* section-4 */}
     <Alttemp Alttempdata={Alttempdata}/>

     {/* section-6 */}
     <div className="between">
      <div className="h1">
        <h1>Work easy.</h1>
        <h4>For small and medium businesses on the up.</h4>
        <a className='button' href="">Find out more</a>
      </div>
     </div>
    
     <Footer/> 
    </div>
  )
}

export default Products