// import React, { useContext } from 'react';
// import { FormContext } from './FormContext';

// function Employeeslist() {
//   const { employees } = useContext(FormContext);

//   return (
//     <div className="container">
//       <h2>Employee List</h2>
//       {employees.length > 0 ? (
//         <ul>
//           {employees.map((employee, index) => (
//             <li key={index}>
//               <p>Emp No: {employee.empNo}</p>
//               <p>Full Name: {employee.fullName}</p>
//               <p>Father Name: {employee.fatherName}</p>
//               <p>Email: {employee.email}</p>
//               <p>School Name: {employee.schoolname}</p>
//               <p>CGPA: {employee.cgpa}</p>
//               <p>SGPA: {employee.sgpa}</p>
//               <p>School Pincode: {employee.pincode}</p>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No employees found.</p>
//       )}
//     </div>
//   );
// }

// export default Employeeslist;



import React, { useContext,useState } from 'react';
import { FormContext } from './FormContext';
import "./pointer.css";


function Employeeslist() {
  const { employees } = useContext(FormContext);
  const [employeeslist,setemployeeslist]=useState(employees);
  const [searchquery,setsearchquery]=useState();
  const rohitSubmit = () => {
    const filteredList = employeeslist.filter((empl) => 
      empl.fullName.toLowerCase().includes(searchquery.toLowerCase()));
      setemployeeslist(filteredList);
      // setsearchquery(searchquery);

      // setsearchquery("");
      if(filteredList.length===0){
        console.log("page is empty");
      }
  };
 
  

  return (
    <div>
      <div>
        <h6 style={{marginTop:"1%",marginLeft:"4px"}}>Employees List</h6>
       
        <span style={{marginLeft:"4px"}} >{employeeslist.length} results found</span> <br></br>
       <div>
          <label style={{marginTop:"1%",marginLeft:"4px"}}>Full Name:</label><br></br>
          <input style={{marginLeft:"4px"}} className='bottom-border-input' type="text"  value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} />
          
          <button style={{marginLeft:"4%",padding:"5px 10px",backgroundColor:"black",color:"white"}} onClick={rohitSubmit}>filter</button>
       </div>
        
      </div>
      <div style={{marginTop:"4%"}}>
      
      <table className="table">
        <thead  >
          <tr >
            <th style={{textAlign:"left"}}>EmpNo</th>
            <th style={{textAlign:"left"}}>FullName</th>
            <th style={{textAlign:"left"}}>FatherName</th>
            <th style={{textAlign:"left"}}> Email</th>
            <th style={{textAlign:"left"}}>Designation</th>
            <th style={{textAlign:"left"}}>CGPA</th>
            <th style={{textAlign:"left"}}>JoinDate </th>
            <th style={{textAlign:"left"}}>Pincode</th>

            
          </tr>
        </thead>
        <tbody className="table-group-divider">
          
          {employeeslist.map((employee)=>(
            <tr>
              <td style={{textAlign:"left"}}>{employee.empNo}</td>
              <td style={{textAlign:"left"}}>{employee.fullName}</td>
              <td style={{textAlign:"left"}}>{employee.fatherName}</td>
              <td style={{textAlign:"left"}}>{employee.email}</td>
              <td style={{textAlign:"left"}}>{employee.designation}</td>
              <td style={{textAlign:"left"}}>{employee.cgpa}</td>
              <td style={{textAlign:"left"}}>{employee.joindate}</td>
              <td style={{textAlign:"left"}}>{employee.pincode}</td>
            </tr>

          ))}

         
          
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Employeeslist;










