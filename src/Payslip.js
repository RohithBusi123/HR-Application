import { useState} from "react";
import { useLocation,Link } from "react-router-dom";
function Payslip(){
    const [selectYear,setselectYear]=useState("");
    const [selectMonth,setselectMonth]=useState("");
    const [selectEmployee,setselectEmployee]=useState("");
    const [selecttext,setselecttext]=useState("");

    const years=[];
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const employees=["rohit","teja","atchuth","arun","kumar"];
    for (let year=2000;year<=2024;year++){
        years.push(year);
    }
    const handleYearChange=(event)=>{
        setselectYear(event.target.value);
    }
    const handleMonthChange=(event)=>{
        setselectMonth(event.target.value);

    }
    const handleEmployeeChange=(event)=>{
        setselectEmployee(event.target.value);
    }
    const location=useLocation();
    console.log(location);
    const pathnames=location.pathname.split("/").filter((x)=>x);
    
    return(
        <div style={{backgroundColor:"lightgray",height:"654px"}}>
            <div style={{display:"flex"}}>
                <h4 style={{marginLeft:"1%"}}>Payslip</h4>
                <nav>
                    <ul className="breadcrumb">
                        <li style={{marginTop:"0.4%"}}>
                            <Link style={{color:"black",textDecoration:"none",marginLeft:"5%"}} to="/">Home</Link>
                            <Link style={{color:"black",textDecoration:"none",marginLeft:"5%"}} to="/payroll">Payroll</Link>
                        </li>
                        {pathnames.map((value,index)=>{
                            const to=`/${pathnames.slice(0,index+1).join("/")}`;
                            return(
                                <li style={{marginTop:"0.4%"}} key={to}>
                                    <Link style={{color:"black",textDecoration:"none",marginLeft:"24%"}} to={to}>{value}</Link>

                                </li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
            <div  style={{backgroundColor:"white",height:"82vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
                <div style={{display:"flex"}} >
                    <div >
                        <div style={{display:"block"}} >
                        <label style={{marginLeft:"2%"}}>year</label>
                        <select  style={{display:"flex",marginLeft:"2%"}}  value={selectYear} onChange={handleYearChange}>
                            <option value="" disabled></option>
                            {years.map((year)=>(
                                <option>{year}</option>
                                
                            ))}

                        </select>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div>
                            <label style={{marginLeft:"20%"}}>month</label>
                            <select style={{display:"flex",marginLeft:"20%"}} value={selectMonth} onChange={handleMonthChange}>
                                <option value="" disabled></option>
                                {months.map((month)=>(
                                    <option>{month}</option>
                                ))}
                            
                            </select>
                            
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div >
                            <label>Employee</label>
                            <select style={{display:"flex"}}  value={selectEmployee} onChange={handleEmployeeChange}>
                                <option value="" disabled></option>
                                {employees.map((employee)=>(
                                    <option>{employee}</option>
                                ))}
                            
                            </select>
                            
                        </div>
                    </div>
                   <div className="col-sm-3">
                    <div >
                            <button  style={{marginTop:"5%"}} type="submit">filter</button>
                            

                        </div>
                   </div>
                </div>
                <div><br></br>
                <span style={{color:"red",marginLeft:"1%"}}>{selecttext}</span>
                </div>
            </div>

        </div>
        
        

    )
}
export default Payslip;

// import React from "react";
// import {useState} from 'react';

// function Payslip(){
//     const [isOpen,setisOpen]=useState(false);
//     const [selectedvalue,setselectedvalue]=useState("");
//     const headers=[
//         {
//             id:1,
//             values:["test1","test2","test3"]
//         }
//     ]
//     const toggleDropDown=()=>setisOpen(!isOpen);
//     const selectOption=(option)=>{
//         setselectedvalue(option);
//         setisOpen(false);

//     }
//     return(
//         <div className="dropdown">
//             <button className="dropdown-btn" onClick={toggleDropDown}>{selectedvalue}</button>
//             {isOpen && (
//                 <div className="dropdown-container">
//                     {headers[0].values.map((index,value)=>(
//                         <div key={index}
//                         // className="dropdown-item"
//                         onClick={()=>selectOption(value)}
//                         >
//                             {value}
//                         </div> 
//                     ))}
//                 </div>
//             )}


//         </div>

//     )
// }
// export default Payslip;




// import React, { useState } from "react";
// import './Payslip.css'; // Ensure you have a CSS file for styling

// function Payslip() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedValue, setSelectedValue] = useState("Select an option");
//     const [selectcolor,setselectcolor]=useState("lightgray");
   
    

//     const headers = [
//         {
//             id: 1,
//             values: ["test1", "test2", "test3","rohit"]
//         }
//     ];

//     const toggleDropDown = () => setIsOpen(!isOpen);
    
//     const selectOption = (option) => {
//         setSelectedValue(option);
//         setIsOpen(false);
//     };
//     const valueColorChange=(e)=>{
//         const newValue=e.target.value;
//         if(newValue===headers[0].values[0]){
//             setselectcolor("blue");

//         }

//     }


//     return (
//         <div className="dropdown">
//             <button className="dropdown-btn" onClick={toggleDropDown} value={selectedValue} onChange= {valueColorChange} style={{backgroundColor:selectcolor}}>
//                 {"<" + selectedValue + ">"}
//             </button>
//             {isOpen && (
//                 <div className="dropdown-container">
//                     {headers[0].values.map((value, index) => (
//                         <div
//                             key={index}
//                             className="dropdown-item"
//                             onClick={() => selectOption(value)}
                            
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Payslip;



// import React, { useState } from "react";
// import './Payslip.css'; // Ensure you have a CSS file for styling

// function Payslip() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedValue, setSelectedValue] = useState("Select an option");
//     const [selectColor, setSelectColor] = useState("lightgray");

//     const headers = [
//         {
//             id: 1,
//             values: ["test1", "test2", "test3", "rohit"]
//         }
//     ];

//     const toggleDropDown = () => setIsOpen(!isOpen);

//     const selectOption = (option) => {
//         setSelectedValue(option);
//         setIsOpen(false);
//         // Change color based on the selected option
//         if (option === headers[0].values[0]) {
//             setSelectColor("blue");
//                     // Change color based on the selected option
//         if (option === headers[0].values[1]) {
//             setSelectColor("blue");
//         } else {
//             setSelectColor("lightgray");
//         }
//     };

//     return (
//         <div className="dropdown">
//             <button
//                 className="dropdown-btn"
//                 onClick={toggleDropDown}
//                 style={{ backgroundColor: selectColor }}
//             >
//                 {"<" + selectedValue + ">"}
//             </button>
//             {isOpen && (
//                 <div className="dropdown-container">
//                     {headers[0].values.map((value, index) => (
//                         <div
//                             key={index}
//                             className="dropdown-item"
//                             onClick={() => selectOption(value)}
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Payslip;




// import React, { useState } from "react";
// import './Payslip.css'; // Ensure you have a CSS file for styling

// function Payslip() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedValue, setSelectedValue] = useState("Select an option");
//     const [selectColor, setSelectColor] = useState("lightgray");

//     const headers = [
//         {
//             id: 1,
//             values: ["test1", "test2", "test3", "rohit"]
//         }
//     ];

//     const toggleDropDown = () => setIsOpen(!isOpen);

//     const selectOption = (option) => {
//         setSelectedValue(option);
//         setIsOpen(false);
//         // Change color based on the selected option
//         if (option === headers[0].values[0]) {
//             setSelectColor("blue");
//                     // Change color based on the selected option
        
//         } 
//         if (option === headers[0].values[1]) {
//             setSelectColor("red");}
//     };

//     return (
//         <div className="dropdown">
//             <button
//                 className="dropdown-btn"
//                 onClick={toggleDropDown}
//                 style={{ backgroundColor: selectColor,padding:"10px 60px" }}
//             >
//                 {"<" + selectedValue + ">"}
//             </button>
//             {isOpen && (
//                 <div className="dropdown-container">
//                     {headers[0].values.map((value, index) => (
//                         <div
//                             key={index}
//                             className="dropdown-item"
//                             onClick={() => selectOption(value)}
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Payslip;




// import React, { useState } from "react";
// import './Payslip.css'; // Ensure you have a CSS file for styling

// function Payslip() {
//     const [isOpen, setIsOpen] = useState(false);
//     const [selectedValue, setSelectedValue] = useState("Select an option");
//     const [selectColor, setSelectColor] = useState("lightgray");

//     const headers = [
//         {
//             id: 1,
//             values: ["test1", "test2", "test3", "rohit"]
//         }
//     ];

//     const toggleDropDown = () => setIsOpen(!isOpen);

//     const selectOption = (option) => {
//         setSelectedValue(option);
//         setIsOpen(false);
//         // Change color based on the selected option
//         if (option === headers[0].values[0]) {
//             setSelectColor("blue");
//         } else if (option === headers[0].values[1]) {
//             setSelectColor("red");
//         }
//     };

//     return (
//         <div className="dropdown">
//             <button
//                 className="dropdown-btn"
//                 onClick={toggleDropDown}
//                 style={{ backgroundColor: selectColor,width:"100%" }}
//             >
//                 <span className="dropdown-icon">&lt;</span>
//                 <span className="dropdown-text">{selectedValue}</span>
//                 <span className="dropdown-icon">&gt;</span>
//             </button>
//             {isOpen && (
//                 <div className="dropdown-container">
//                     {headers[0].values.map((value, index) => (
//                         <div
//                             key={index}
//                             className="dropdown-item"
//                             onClick={() => selectOption(value)}
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Payslip;







// import React from 'react';
// import "./Payslip.css";

// function StyledButton() {
//   return (
//     <button className="styled-button">
//       <span className="bracket">{"<"}</span>
//       <span className="button-text">Rohit</span>
//       <span className="bracket">{">"}</span>
//     </button>
//   );
// }

// export default StyledButton;


// import React, { useState, useEffect } from "react";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import axios from 'axios';

// function Email() {
//     const [typeAlignment, setTypeAlignment] = useState('Personal');
//     const [statusAlignment, setStatusAlignment] = useState('Current');
//     const [enteredemail, setEnteredEmail] = useState("");
//     const [emailsarray, setEmailsArray] = useState([]);

//     // On component mount, load emails from localStorage and then from the backend
//     useEffect(() => {
//         const storedEmails = JSON.parse(localStorage.getItem("emailsarray"));
//         if (storedEmails) {
//             setEmailsArray(storedEmails);
//         }

//         axios.get('/api/emails')
//             .then(response => {
//                 setEmailsArray(response.data);
//                 localStorage.setItem("emailsarray", JSON.stringify(response.data));
//             })
//             .catch(error => {
//                 console.error("Error fetching emails from the backend!", error);
//             });
//     }, []);

//     const handleTypeChange = (event, newAlignment) => {
//         setTypeAlignment(newAlignment);
//     };

//     const handleStatusChange = (event, newAlignment) => {
//         setStatusAlignment(newAlignment);
//     };

//     const EmailSubmit = () => {
//         if (enteredemail.trim() !== "") {JSON.stringify
//             const updatedEmailsArray = [...emailsarray, enteredemail];
//             setEmailsArray(updatedEmailsArray);
//             setEnteredEmail("");

//             localStorage.setItem("emailsarray", JSON.stringify(updatedEmailsArray));

//             axios.post('/api/emails', { email: enteredemail })
//                 .then(response => {
//                     setEmailsArray(response.data);  // Use backend response to sync state
//                     localStorage.setItem("emailsarray", JSON.stringify(response.data));
//                 })
//                 .catch(error => {
//                     console.error("Error submitting email to the backend!", error);
//                     // Optionally, handle the error, maybe retry later or notify the user
//                 });
//         }
//     };

//     return (
//         <div style={{ border: "1px solid black", height: "300px", backgroundColor: "white" }}>
//             <div>
//                 <div style={{ display: "flex" }}>
//                     <h5 style={{ marginLeft: "2%", marginTop: "2%" }}>Emails</h5>
//                     <span style={{ marginTop: "2%", marginLeft: "2%" }}>
//                         ({emailsarray.length || 0})
//                     </span>
//                 </div>
//                 <div>
//                     <div>
//                         <span style={{ marginLeft: "2%" }}>Email</span>
//                     </div>
//                     <div>
//                         <input
//                             style={{ marginLeft: "2%", marginTop: "5px" }}
//                             type="text"
//                             placeholder="Enter email"
//                             value={enteredemail}
//                             onChange={(e) => setEnteredEmail(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "20px", marginLeft: "-30%" }}>
//                             <span style={{ marginLeft: "2%" }}>Type-optional</span>
//                             <ToggleButtonGroup
//                                 color="primary"
//                                 value={typeAlignment}
//                                 exclusive
//                                 onChange={handleTypeChange}
//                                 aria-label="Type"
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 <ToggleButton value="Personal">Personal</ToggleButton>
//                                 <ToggleButton value="Professional">Professional</ToggleButton>
//                             </ToggleButtonGroup>
//                         </div>
//                     </div>

//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "-28%" }}>
//                             <span style={{ marginLeft: "2%" }}>Status-optional</span>
//                             <ToggleButtonGroup
//                                 color="primary"
//                                 value={statusAlignment}
//                                 exclusive
//                                 onChange={handleStatusChange}
//                                 aria-label="Status"
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 <ToggleButton value="Current">Current</ToggleButton>
//                                 <ToggleButton value="Previous">Previous</ToggleButton>
//                             </ToggleButtonGroup>
//                         </div>
//                     </div>

//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "-28%" }}>
//                             <span>ConfidenceLevel-optional</span>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <div style={{ marginTop: "-2%" }}>
//                 <button
//                     onClick={EmailSubmit}
//                     style={{
//                         marginLeft: "70%",
//                         paddingTop: "6%",
//                         paddingBottom: "4.5%",
//                         paddingLeft: "10px",
//                         paddingRight: "10px",
//                         marginTop: "-80%",
//                         position: "relative",
//                         top: "-20px"
//                     }}
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Email;


// import React from "react";
// import { useState,useEffect } from "react";

// import axios from 'axios';
// function Payslip(){
//   const [idsarray,setidsarray]=useState([]);
//   const [enteredid,setenteredid]=useState("");
//   useEffect(()=>{
//     axios.get("https://jsonplaceholder.typicode.com/todos").then(
//       response=>{
//         setidsarray(response.data);
//       }
//     ).catch(
//       error=>{
//         console.error("there is error ")
//       }
//     )

//   },[]);
//   const dataSubmit=()=>{
//     if(enteredid.trim()!==""){
//       const newIds=([...idsarray,enteredid]);
//       setidsarray(newIds);
//       setenteredid("");
//       localStorage.setItem("idsarray",JSON.stringify(idsarray));
//       axios.post('https://jsonplaceholder.typicode.com/todos',{id:enteredid})
//       .then(res=>{
//         setidsarray(res.data);
//         localStorage.setItem('idsarray',JSON.stringify(idsarray));
//       })
//       .catch(error=>{
//         console.error("there is error")
//       })
      
//     }

//   }
//   return(

//     <div>
//       <input type="text" placeholder="enter id" value={enteredid} onChange={(e)=>setenteredid(e.target.value)}/>
//       <button onClick={dataSubmit} >Submit</button>

//     </div>
    
//   )
// }
// export default Payslip;
















// import React from "react";
// import { useState,useEffect } from "react";
// import axios from 'axios';

// function Payslip(){
//   const [dataarray,setdataarray]=useState([]);
//   const [enteredemail,setenteredemail]=useState("");
//   const [titles,settitles]=useState([]);
//   const [idsarray,setidsarray]=useState([]);
//   const validateData=()=>{
    
//     if(enteredemail.trim()!==""){
//       axios.get(`https://jsonplaceholder.typicode.com/todos/${enteredemail}`).then(
//         response=>{
//           const title=response.data.title;
//           settitles({...titles,[enteredemail]:title})
//           setidsarray(previds=>[...previds,enteredemail]);
//           setenteredemail("");
//           console.log(idsarray);
//         }
//       ).catch(
        
//           error=>{
//             console.error("this is not valid data")

//           }
        
//       )
//     }
//   }

//   return(
//     <div>
//       <div>
//       <input type="text" placeholder="enter id" value={enteredemail} onChange={(e)=>setenteredemail(e.target.value)}/>
//       <button onClick={validateData}>Submit</button>
    
//     </div>
//     {idsarray.map((id)=>(
//       <div>
//         <span>{titles[id]}</span>
//       </div>
//     ))}
//     </div>
    
//   )
// }
// export default Payslip;



// import React from "react";
// import { useState,useEffect } from "react";
// import axios from 'axios';

// function Payslip(){
//   const [post,setpost]=useState({
//     title:'',
//     body:''

// })
// const handleInput=(e)=>{
//   setpost({...post,[e.target.name]:[e.target.value]})
// }
// const Rohitsubmit=()=>{
//   axios.post("https://jsonplaceholder.typicode.com/posts",{post}).then(
//     response=>{
//       console.log(response);
//     }
//   ).catch(
//     error=>{
//       console.error("this");
//     }
//   )
// }
//   return(
//     <div>
//       <input type="text" placeholder="enter title" name="title" onChange={handleInput}/>
//       <input type="text" placeholder="enter body" name="body" onChange={handleInput}/>
//       <button onClick={Rohitsubmit}>submit</button>

//     </div>
//   )
// }
// export default Payslip;





// import React from 'react';
// function Payslip(){
//   const details=[
//     {
//       id:1,
//       name:"test1"
//     },
//     {
//       id:2,
//       name:"test2"
//     },
//     {
//       id:3,
//       name:"test3"
//     }
//   ]
//   return(
//     <div>
//       {details.map((detail)=>(
//         <span>{details.indexOf(detail)}</span>
//       ))}
//     </div>
//   )
// }
// export default Payslip;


















