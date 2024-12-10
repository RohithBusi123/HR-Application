import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Dashboard() {
  const [isEmployeesDropdownOpen, setIsEmployeesDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setIsAttendanceDropdownOpen] = useState(false);
  const [isPayrollDropdown,setisPayrollDropdown]=useState(false);

  const toggleEmployeesDropdown = () => {
    setIsEmployeesDropdownOpen(!isEmployeesDropdownOpen);
  };

  const toggleAttendanceDropdown = () => {
    setIsAttendanceDropdownOpen(!isAttendanceDropdownOpen);
  };
  const togglePayrollDropdown=()=>{
    setisPayrollDropdown(!isPayrollDropdown);


  }

  return (
    <div className="container" style={{ display: "block" }}>
      <div className="row">
        <div className="col-sm-4">
          <h5>Dashboard</h5>
          
          <div style={{ border: "1px solid black", width: "180px", height: "6px", backgroundColor: "darkblue", display: "block" }}></div>
          <Link style={{textDecoration:"none"}} to="/Firstdash">Firstdashboard</Link>
          <div>
            <span onClick={toggleEmployeesDropdown} className="dropdown-btn">
              Employees <span className="dropdown-icon" style={{marginLeft:"30%"}}>{isEmployeesDropdownOpen ? '-' : '+'}</span>
            </span>
            {isEmployeesDropdownOpen && (
              <div className="dropdown-container">
                <ul style={{listStyleType:"none"}}>
                  <li><Link style={{textDecoration:"none",color:"black",marginLeft:"-2%"}} to="/Employeescreate">Employees Create</Link></li>
                  <li><Link style={{textDecoration:"none",color:"black",marginLeft:"-2%"}} to="/Employeeslist">Employees LIst</Link></li>
                  <li><Link style={{textDecoration:"none",color:"black",marginLeft:"-2%"}} to="/Employeeimport">Employees Imports</Link></li>
                  <li><Link style={{textDecoration:"none",color:"black",marginLeft:"-2%"}} to="/Awardslist">Awards List</Link></li>
                  <li><Link style={{textDecoration:"none",color:"black",marginLeft:"-2%"}} to="/Noticelist">Notice List</Link></li>

                </ul>
                  
                
              </div>
            )}
          </div>
          
          <div>
            <span onClick={toggleAttendanceDropdown} className="dropdown-btn">
              Attendance <span className="dropdown-icon" style={{marginLeft:"28%"}}>{isAttendanceDropdownOpen ? '-' : '+'}</span>
            </span>
            {isAttendanceDropdownOpen && (
              <div className="dropdown-container">
                <ul style={{listStyleType:"none"}}>
                  <li><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Attendanceimport">Attendance Import</Link></li>
                  <li><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Manualpunching">Manual Punching</Link></li>
                  <li><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Leavelist">Leave Application</Link></li>
                  <li><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Absentlist">Absent Details</Link></li>
                  <li><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Attendanceverify">Attendance Verification</Link></li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <span onClick={togglePayrollDropdown}>Payroll
              <span className='dropdown-icon' style={{marginLeft:"39%"}}>{isPayrollDropdown?"-":"+"}</span>
            </span>
            {isPayrollDropdown && (
              <div className='dropdown-container'>
                <ul>
                  <li style={{listStyleType:"none"}}><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Payslip">Payslip</Link></li>
                  <li style={{listStyleType:"none"}}><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Salarysetup">Salary Setup</Link></li>
                  <li style={{listStyleType:"none"}}><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Salaryprocess">Salary Process</Link></li>
                  <li style={{listStyleType:"none"}}><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Employeeloan">Employee Loan</Link></li>
                  <li style={{listStyleType:"none"}}><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Employeeconveyance">Employee Conveyance</Link></li>
                  <li style={{listStyleType:"none"}}><Link style={{textDecorationLine:"none",color:"black",marginLeft:"-2%"}} to="/Taxfileupload">Tax File Upload</Link></li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;



