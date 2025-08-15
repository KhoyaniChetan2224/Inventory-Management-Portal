import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Common Pages
import Navbar from './pages/navbar';
import Home from './pages/home';
import Admin from './pages/admin';
import Manager from './pages/Manager';
import Sales from './pages/sales';
import Customer from './pages/Customer';

// Admin Components
import AdminHome from './components/Admin/adminhome';
import AdminSupport from './components/Admin/adminsupport';
import AdminReporting from './components/Admin/adminreporting';
import AdminPurchase from './components/Admin/adminpurchase';
import AdminOrders from './components/Admin/adminorders';
import AdminSettings from './components/Admin/adminsettings';
import AdminInventory from './components/Admin/admininventory';
import AdminHeader from './components/Admin/AdminHeader/adminheader';
//New Products
import AdminNewProduct from './components/Admin/Navigate Page/newproduct';


// Manager Components
import ManagerHome from './components/Manager/ManagerHome';
import ManagerHeader from './components/Manager/ManagerHeader/managerheader';
import ManagerServices from './components/Manager/managerservices';
import ManagerEvents from './components/Manager/managerevents';
import ManagerBlog from './components/Manager/managerblog';

// Manager Account
import ManagerAccountSetting from './components/Manager/ManagerAccount/manageraccountsetting';
import ManagerPassword from './components/Manager/ManagerAccount/managerpassword';
import ManagerSecurityAndPrivacy from './components/Manager/ManagerAccount/securityandsrivacy';
import ManagerNotification from './components/Manager/ManagerAccount/managernotification';
import ManagerAboutUs from './components/Manager/ManagerAccount/manageraboutus';

// Sales Components
import SalesHome from './components/Sales/saleshome';
import SalesHeader from './components/Sales/SalesHeader/salesheader';
import SalesClientType from './components/Sales/salesclienttype';
import SalesOpportunities from './components/Sales/salesopportunities';
import SalesProposals from './components/Sales/salesproposals';
import SalesProjects from './components/Sales/salesproject';

//Customer Components
import CustomerHeader from './components/Customer/CustomerHeader/customerheader'
import CustomerHome from './components/Customer/customerhome'
import CustomerProduct from './components/Customer/customerproduct'
import CustomerPayment from './components/Customer/customerpayment'
import CustomerAboutus from './components/Customer/customeraboutus'

const App = () => {
  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/customer" element={<Customer />} />

        {/* Admin Routes */}
        <Route path="/admin/adminhome" element={<AdminHome />} />
        <Route path="/admin/adminheader" element={<AdminHeader />} />
        <Route path="/admin/admininventory" element={<AdminInventory />} />
        <Route path="/admin/adminsupport" element={<AdminSupport />} />
        <Route path="/admin/adminreporting" element={<AdminReporting />} />
        <Route path="/admin/adminpurchase" element={<AdminPurchase />} />
        <Route path="/admin/adminorders" element={<AdminOrders />} />
        <Route path="/admin/adminsettings" element={<AdminSettings />} />
        {/* New Product */}
        <Route path='/admin/admininventory/newproduct' element={< AdminNewProduct />} />

        {/* Manager Routes */}
        <Route path="/manager/managerhome" element={<ManagerHome />} />
        <Route path="/manager/managerheader" element={<ManagerHeader />} />
        <Route path="/manager/managerservices" element={<ManagerServices />} />
        <Route path="/manager/managerevents" element={<ManagerEvents />} />
        <Route path="/manager/managerblog" element={<ManagerBlog />} />

        {/* Manager Account Settings */}
        <Route path="/manager/manageraccountsetting" element={<ManagerAccountSetting />} />
        <Route path="/manager/password" element={<ManagerPassword />} />
        <Route path="/manager/securityprivacy" element={<ManagerSecurityAndPrivacy />} />
        <Route path="/manager/notification" element={<ManagerNotification />} />
        <Route path="/manager/about-us" element={<ManagerAboutUs />} />

        {/* Sales Routes */}
        <Route path="/sales/home" element={<SalesHome />} />
        <Route path="/sales/salesheader" element={<SalesHeader />} />
        <Route path="/sales/clienttype" element={<SalesClientType />} />
        <Route path="/sales/opportunities" element={<SalesOpportunities/>} />
        <Route path="/sales/proposals" element={<SalesProposals />} />
        <Route path='/sales/projects' element={< SalesProjects />} />

        {/* Customer Routes */}
        <Route path='/customer/customerheader' element={< CustomerHeader />} />
        <Route path='/customer/customerhome' element={< CustomerHome />} />
        <Route path='/customer/customerproduct' element={< CustomerProduct />} />
        <Route path='/customer/customerpayment' element={< CustomerPayment />} />
        <Route path='/customer/customeraboutus' element={< CustomerAboutus />} />

      </Routes>
    </div>
  );
};

export default App;
