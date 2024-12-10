import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Testing from './Test';
import Reference from './Reference';
import Navbar from './Navbar';
import Reducerr from './Reducer';
import Memo from "./Memo";
import Modellist from './Models/Modellist';
import Login from './Login';
import Calculator from './Calculator';
import Users from "./Users/Users";
import Adduser from './Users/Adduser';
import Dashboard from './Dashboard';
import Employeescreate from './Employeescreate';
import Basicdetails from './Basicdetails';
import Education from "./Education";
import Employeeslist from './Employeeslist';
import Employeeimport from './Employeeimport';
import { FormProvider } from './FormContext';  // Use your custom FormProvider
import Addaward from './Addaward';
import Awardslist from './Awardslist';
import Noticelist from './Noticelist';
import Addnotice from './Addnotice';
import Firstdash from './Firstdash';
import Attendanceimport from './Attendanceimport';
import Manualpunching from './Manualpunching';
import Addmanual from './Addmanual';
import Leavelist from './Leavelist';
import Addleave from './Addleave';
import Absentlist from './Absentlist';
import Addabsent from './Addabsent';
import Attendanceverify from "./Attendanceverify";
import Employeeloan from "./Employeeloan";
import Addloan from "./Addloan";
import Employeeconveyance from "./Employeeconveyance";
import Addconveyance from './Addconveyance';
import Taxfileupload from './Taxfileupload';

import Salarysetup from './Salarysetup';
import Addpaysetup from './Addpaysetup';
import Salaryprocess from './Salaryprocess';
import Payslip from './Payslip';

import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useEffect } from 'react';

// import { useForm, FormProvider as RHFormProvider } from 'react-hook-form';


function App() {
  const { trackPageView } = useMatomo()
 
    useEffect(() => {
      console.log("Entered......");
     trackPageView({})
    }, []);
  return (
    <FormProvider>  {/* Use your custom FormProvider */}
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/reducer" element={<Reducerr />} />
            <Route path="/testing" element={<Testing />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/modellist" element={<Modellist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/users" element={<Users />} />
            <Route path="/add" element={<Adduser />} />
            <Route path="/employeescreate/*" element={<Employeescreate />}>
              <Route path="basicdetails" element={<Basicdetails />} />
              <Route path="education" element={<Education />} />
            </Route>
            <Route path="/employeeslist" element={<Employeeslist />} />
            <Route path="/employeeimport" element={<Employeeimport />} />
            <Route path="/awardslist" element={<Awardslist/>}></Route>
            <Route path="/addaward" element={<Addaward/>}></Route>
            <Route path="/noticelist" element={<Noticelist/>}></Route>
            <Route path="/addnotice" element={<Addnotice/>}></Route>
            <Route path="/firstdash" element={<Firstdash/>}></Route>
            <Route path="/attendanceimport" element={<Attendanceimport/>}></Route>
            <Route path="/manualpunching" element={<Manualpunching/>}></Route>
            <Route path="/addmanual" element={<Addmanual/>}></Route>
            <Route path="/leavelist" element={<Leavelist/>}></Route>
            <Route path="/addleave" element={<Addleave/>}></Route>
            <Route path="/absentlist" element={<Absentlist/>}></Route>
            <Route path="/addabsent" element={<Addabsent/>}></Route>
            <Route path="/attendanceverify" element={<Attendanceverify/>}></Route>
            <Route path="/employeeloan" element={<Employeeloan/>}></Route>
            <Route path="/addloan" element={<Addloan/>}></Route>
            <Route path="/employeeconveyance" element={<Employeeconveyance/>}></Route>
            <Route path="/addconveyance" element={<Addconveyance/>}></Route>
            <Route path="/taxfileupload" element={<Taxfileupload/>}></Route>
            
            <Route path="/salarysetup" element={<Salarysetup/>}></Route>
            <Route path="/addpaysetup" element={<Addpaysetup/>}></Route>
           
            <Route path="/payslip" element={<Payslip/>}></Route>
            <Route path="/salaryprocess" element={<Salaryprocess/>}></Route>
            
          </Routes>
        </div>
      </Router>
    </FormProvider>
  );
}

export default App;







