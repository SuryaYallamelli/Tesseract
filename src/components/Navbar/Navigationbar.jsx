import React,{useState} from 'react';
import './Navstyles.css';


function Navigationbar() {
  const activeNavValues = {
    products : false,
    solutions : false,
    whyus : false,
    partners : false,
    resources : false
  }
  const[activeNav, setActiveNav] = useState(activeNavValues);
  const clickhandler = (e)=>{
    setActiveNav({...activeNavValues, [e.target.id]:!activeNav[e.target.id]})
    // console.log(e.target.id);
  };

  activeNav.products || activeNav.solutions || activeNav.whyus || activeNav.partners || activeNav.resources ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  return (
    <div className='container'>
      <div className='Navcontainer'>
        <div className='logo'>
            <h2>Tesseract</h2>
        </div>
        <ul className='Navcontainer-lists'>
          <li className='Navcontainer-lists-items'>
            <div id='products' onClick={clickhandler}>
              Products
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='solutions' onClick={clickhandler}>
              Solutions
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='whyus' onClick={clickhandler}>
              Why us
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='partners' onClick={clickhandler}>
              Partners
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='pricing'>
              Pricing
            </div>
          </li>
          <li className='Navcontainer-lists-items'>
            <div id='resources' onClick={clickhandler}>
              Resources
            </div>
          </li>
        </ul>
        <div className="btn-grp">
        <button className='btn btn-1'>Start your free trial</button>
        <button className='btn btn-2'>Request a demo</button>
        </div>
      </div>
      {activeNav.products && 
        <div className='Modal-container'>
          <div className="Modal-content">
            This is div refering products
          </div>
        </div>
      }
      {activeNav.solutions && <div className='Modal-container'>
          <div className="Modal-content">
            This is div refering Solutions
          </div>
      </div>}
      {activeNav.whyus && <div className='Modal-container'>
          <div className="Modal-content">
            This is div refering Why us
          </div>
      </div>}
      {activeNav.partners && <div className='Modal-container'>
          <div className="Modal-content">
            This is div refering partners
          </div>
      </div>}
      {activeNav.resources && <div className='Modal-container'>
          <div className="Modal-content">
            This is div refering resources
          </div>
      </div>}
    </div>
  )
}

export default Navigationbar;