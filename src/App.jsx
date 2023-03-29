import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './pages/Home/Home';
// Pricing page imports
import Pricing from './pages/Pricing/Pricing';

// Products page imports
import Hrsoftware from './pages/Products/Hrsoftware';
import Payrollsoftware from './pages/Products/Payrollsoftware';
import Products from './pages/Products/Products';
import LMS from './pages/Products/LMS';
import ATS from './pages/Products/ATS';
import Superapp from './pages/Products/Superapp';
import Globalteams from './pages/Products/Globalteams';

// Service page imports
import Services from './pages/Services/Services';
import Eap from './pages/Services/Eap';
import Hrimp from './pages/Services/Hrimp';
import Learning from './pages/Services/Learning';
import Advisory from './pages/Services/Advisory';
import Payroll from './pages/Services/Payroll';

//Solutions page imports
import Solutions from './pages/Solutions/Solutions';
import BP from './pages/Solutions/BP';
import EP from './pages/Solutions/EP';
import Remote from './pages/Solutions/Remote';
import Turnover from './pages/Solutions/Turnover';
import Engagement from './pages/Solutions/Engagement';
import PRP from './pages/Solutions/PRP';
import Governance from './pages/Solutions/Governance';
import Onboarding from './pages/Solutions/Onboarding';
import Recruitment from './pages/Solutions/Recruitment';

//industry page imports
import Industry from './pages/Industry/Industry';
import Accounting from './pages/Industry/Accounting';
import Construction from './pages/Industry/Construction';
import Healthcare from './pages/Industry/Healthcare';
import Navigationbar from './components/Navbar/Navigationbar';

//Whyus page imports
import Whyus from './pages/Whyus/Whyus';
import Safesecure from './pages/Whyus/Safesecure';

//Partners page imports
import Partners from './pages/Partners/Partners';
import Accountants from './pages/Partners/Accountants';
import Bookkeepers from './pages/Partners/Bookkeepers';
import OPP from './pages/Partners/OPP';
import SA from './pages/Partners/SA';
import Refer from './pages/Partners/Refer';

//Resources page imports
import Resources from './pages/Resources/Resources';
import Qdemo from './pages/Resources/Qdemo';
import Tinsights from './pages/Resources/Tinsights';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
          {/* Products Section */}
          <Route path='/Products' element={<Products/>}/>
          <Route path='/Products/HR-software' element={<Hrsoftware/>}/>
          <Route path='/Products/Payroll-software' element={<Payrollsoftware/>}/>
          <Route path='/Products/employer-of-record' element={<Globalteams/>}/>
          <Route path='/Products/employee-learning-management-system' element={<LMS/>}/>
          <Route path='/Products/applicant-tracking-system' element={<ATS/>}/>
          <Route path='/Products/employment-superapp' element={<Superapp/>}/>
           {/* Services Section */}
          <Route path='/Services' element={<Services/>}/>
          <Route path='/Services/eap' element={<Eap/>}/>
          <Route path='/Services/hr-implementation' element={<Hrimp/>}/>
          <Route path='/Services/payroll-implementation' element={<Payroll/>}/>
          <Route path='/Services/advisory-lines' element={<Advisory/>}/>
          <Route path='/Services/learning-plus' element={<Learning/>}/>
          {/* Solutions Section */}
          <Route path='/Solutions' element={<Solutions/>}/>
          <Route path='/Solutions/Business-Performance' element={<BP/>}/>
          <Route path='/Solutions/recruitment-software' element={<Recruitment />}/>
          <Route path='/Solutions/onboarding-software' element={<Onboarding />}/>
          <Route path='/Solutions/employee-management-software' element={<Governance />}/>
          <Route path='/Solutions/single-touch-payroll-software' element={<PRP/>}/>
          <Route path='/Solutions/employee-engagement-software' element={<Engagement/>}/>
          <Route path='/Solutions/performance-management-software' element={<EP/>}/>
          <Route path='/Solutions/employer-of-record' element={<Remote/>}/>
          <Route path='/Solutions/offboarding-software' element={<Turnover/>}/>
          {/* Industry Section */}
          <Route path='/Industry' element={<Industry/>}/>
          <Route path='/Industry/accounting' element={<Accounting/>}/>
          <Route path='/Industry/healthcare' element={<Healthcare/>}/>
          <Route path='/Industry/construction' element={<Construction/>}/>
          {/* Whyus Section */}
          <Route path='/about-us' element={<Whyus/>}/>
          <Route path='/trust-security' element={<Safesecure/>}/>

          {/* Partners Section */}
          <Route path='/partner-network' element={<Partners/>}/>
          <Route path='/partner-network/accountants' element={<Accountants/>}/>
          <Route path='/partner-network/bookkeepers' element={<Bookkeepers/>}/>
          <Route path='/partner-network/outsourced-payroll-providers' element={<OPP/>}/>
          <Route path='/become-a-strategic-partner' element={<SA/>}/>
          <Route path='/become-a-partner' element={<Refer/>}/>
          
          {/* Pricing Section */}
          <Route path='/Pricing' element={<Pricing/>}/>

          {/* Resources Section */}
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/quick-demos' element={<Qdemo/>}/>
          <Route path='/talent-insights' element={<Tinsights/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
