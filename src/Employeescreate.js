// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// function Employeescreate() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className='col-sm-4'>
//           <div style={{ display: "block",border:"1px solid black",width:"50%" ,padding:"0px 20px",}}>
//             <p>Step 1:</p>
//             <Link to="basicdetails" style={{ marginLeft: "5px" }}>Basic Details</Link>
//           </div>
//         </div>
//         <div className='col-sm-4'>
//           <p>Step 2:</p>
//           <Link to="education">Education</Link>
//         </div>
//       </div>
//       <div className="row">
//         <div className='col-sm-12'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Employeescreate;


// import React from 'react';
// import { NavLink, Outlet } from 'react-router-dom';
// import {useState} from 'react';

// function Employeescreate() {
//   const [activeLink,setactiveLink]=useState(null);
//   const handleLinkclick=(link)=>{
//     setactiveLink(link);
//   }
//   return (
//     <div className="container">
//       <div className="row">
//         <div className='col-sm-4'>
//           <div style={{ display: "block", border: "1px solid black", width: "50%", padding: "0px 20px", }}>
//             <p>Step 1:</p>
//             <NavLink
//               to="basicdetails"
//               style={{ marginLeft: "5px",backgroundColor:activeLink==="basicdetails"?"green":"transparent"}}
              
//               onClick={handleLinkclick}
//             >
//               Basic Details
//             </NavLink>
//           </div>
//         </div>
//         <div className='col-sm-4'>
//           <p>Step 2:</p>
//           <NavLink
//             to="education"
//             style={{ textDecoration: "none", color: "inherit" }}
//             activeStyle={{ backgroundColor: "green", color: "white" }}
//           >
//             Education
//           </NavLink>
//         </div>
//       </div>
//       <div className="row">
//         <div className='col-sm-12'>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Employeescreate;



import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Employeescreate() {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="container">
      <div className="row">
        <div className='col-sm-4'>
          <div
            style={{
              display: "block",
              border: "1px solid black",
              width: "50%",
              padding: "0px 20px",
              backgroundColor: activeLink === "basicdetails" ? "green" : "transparent",
              color:activeLink==="basicdetails"?"white":"black"
              
            }}
          >
            <p>Step 1:</p>
            <NavLink
              to="basicdetails"
              style={{ marginLeft: "5px", textDecoration: "none", color: "inherit" }}
              onClick={() => handleNavLinkClick("basicdetails")}
            >
              Basic Details
            </NavLink>
          </div>
        </div>
        <div className='col-sm-4'>
          
          <div
            style={{
              display: "block",
              border: "1px solid black",
              width: "50%",
              padding: "0px 20px",
              border:"1px solid black",
              

              backgroundColor: activeLink === "education" ? "green" : "transparent",
              color:activeLink==="education"?"white":"black"
            }}
          >
            <p>Step 2:</p>

            <NavLink
              to="education"
              style={{ marginLeft: "5px", textDecoration: "none", color: "inherit" }}
              onClick={() => handleNavLinkClick("education")}
            >
              Education
            </NavLink>
          </div>
        </div>
      </div>
      <div className="row">
        <div className='col-sm-12'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Employeescreate;






