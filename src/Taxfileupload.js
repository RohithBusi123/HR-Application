// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useRef } from "react";
// import {Link,useLocation} from 'react-router-dom';

// function Taxfileupload(){
//     const [selectyear,setselectyear]=useState("");
//     const [fileName,setfileName]=useState("");
//     const [filecontent,setfilecontent]=useState("");
//     const years=[];
//     const fileinputRef=useRef(null)
//     for (let year=2020;year<=2024;year++){
//         years.push(year);
//     }
//     const handleYearChange=(event)=>{
//         setselectyear(event.target.value);

//     }
//     // const importFile=()=>{
//     //     fileinputRef.current.click();
//     // }
//     const handleFileChange=(event)=>{
//         fileinputRef.current.click();
//         const file=event.target.files[0];
//         if(file){
//             setfileName(file.name);
//             const reader=new FileReader();
//             reader.onload=(e)=>{
//                 const content=e.target.result;
//                 setfilecontent(content);
//                 localStorage.setItem("file",file.name);
//                 localStorage.setItem("content",content);
//                 console.log(content);




//             }
//             reader.readAsText(file);

//         }
//     }
//     const location=useLocation();
//     const pathnames=location.pathname.split("/").filter((x)=>x);

    
//     return(
//        <div style={{backgroundColor:"lightgray",height:"654px"}}>
//             <div style={{display:"flex"}}>
//                 <h4 style={{marginLeft:"1%"}}>TaxFileUpload</h4>
//                 <nav>
//                     <ul className="breadcrumb">
//                         <li style={{marginTop:"0.4%"}}>
//                             <Link style={{color:"black",textDecoration:"none",marginLeft:"5%"}} to="/">Home</Link>
//                             <Link style={{color:"black",textDecoration:"none",marginLeft:"5%"}} to="/payroll">Payroll</Link>
//                         </li>
//                         {pathnames.map((value,index)=>{
//                             const to=`/${pathnames.slice(0,index+1).join("/")}`
//                             return(
//                                 <li style={{marginTop:"0.4%"}} key={to}>
//                                     <Link style={{color:"black",textDecoration:"none",marginLeft:"15%"}} to={to}>{value}</Link>

//                                 </li>
//                             )
                            
//                         })}

//                     </ul>
//                 </nav>
//             </div>
//             <div>
                
//                 <div >
                    
//                     <div style={{backgroundColor:"white",height:"82vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
//                         <form>
//                             <div >
                                
//                                     <div >
//                                         <label style={{marginTop:"4%",marginLeft:"1%"}}>Name:</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
                                
//                             </div>
//                             <input className="bottom-border-input" type="text" placeholder="name" style={{marginLeft:"1%"}}/><br></br>
//                             <div>
//                                 <div>
//                                     <label style={{marginTop:"1%",marginLeft:"1%"}} >Choose Year</label>
//                                     <span style={{color:"red"}}>*</span>
//                                 </div>
//                                 <select  className="bottom-border-input" style={{marginLeft:"1%",width:"20%" }} value={selectyear} onChange={handleYearChange}>
//                                     <option value="choose year"></option>
//                                     {years.map((yer)=>(
//                                         <option>
//                                             {yer}

//                                         </option>

//                                     ))}
                                    
                                    
//                                 </select><br></br>
//                             </div>
//                             {/* <button onClick={importFile}>Importfile</button> */}
//                             <div>
                               
//                                 <input  style={{marginTop:"1%",marginLeft:"1%"}} type="file" ref={fileinputRef}   onChange={handleFileChange}/>
//                             </div>

                            
//                         </form>


//                     </div>

//                 </div>

//             </div>
//        </div>
       
//     )
// }
// export default Taxfileupload;













// import React, { useEffect, useState } from "react";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { green } from "@mui/material/colors";
// import "./Login.css";


// function Email() {
//   const [togglehovered,settogglehovered]=useState(false);
//   const [secondtogglehovered,setsecondtogglehovered]=useState(false);
//   const [thirdtogglehovered,setthirdtogglehovered]=useState(false);
//   const [fourthtogglehovered,setfourthtogglehovered]=useState(false);
//   const [hovered, setHovered] = useState(false);
//   const [starttoggleclickedbutton,setstarttoggleclickedbutton]=useState("");
//   const [toggleclickedbutton,settoggleclickedbutton]=useState("");
//   const [typeAlignment, setTypeAlignment] = useState('');
//   const [statusAlignment, setStatusAlignment] = useState('');
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailerror, setemailerror] = useState("");
//   const [finalEmails, setFinalEmails] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("Level of Confidence");
//   const [isButtonDisabled,setIsButtonDisabled]=useState(false);
//   const [isLeftButtonDisabled,setisLeftButtonDisabled]=useState(false);
//   const [selectColor, setSelectColor] = useState("lightgray");
//   const [disablevalue,setdisablevalue]=useState(false);

//   const handlefourthtoggleMouseEnter=()=>setfourthtogglehovered(true);
//   const handlefourthtoggleMouseLeave=()=>setfourthtogglehovered(false);

//   const handlethirdtoggleMouseEnter=()=>setthirdtogglehovered(true);
//   const handlethirdtoggleMouseLeave=()=>setthirdtogglehovered(false);

//   const handlesecondtoggleMouseEnter=()=>setsecondtogglehovered(true);
//   const handlesecondtoggleMouseLeave=()=>setsecondtogglehovered(false);


//   const handletoggleMouseEnter=()=>settogglehovered(true);
//   const handletoggleMouseLeave=()=>settogglehovered(false);


//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = () => setHovered(false);

//   const handleTypeChange = (event, newAlignment) => {
//     setTypeAlignment(newAlignment);
//   };

//   const handleStatusChange = (event, newStatus) => {
//     setStatusAlignment(newStatus);
//   };

//   const handleEmailChange = (e) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     setEnteredEmail(e.target.value);
//     if (emailRegex.test(e.target.value)) {
//       setemailerror('');
//     } else {
//       setemailerror("This is not a proper email address");
//     }
//   };

//   useEffect(() => {
//     const storedEmails = JSON.parse(localStorage.getItem('finalEmails')) || [];
//     setFinalEmails(storedEmails);
//   }, []);

//   const finalEmailSubmit = () => {
//     if (enteredEmail && emailerror === "") {
//       const newEmails = [...finalEmails, enteredEmail];
//       setFinalEmails(newEmails);
//       localStorage.setItem('finalEmails', JSON.stringify(newEmails));
//       setEnteredEmail(""); 
//     } else {
//       console.log("Invalid email or empty input");
//     }
//   };

//   const headers = [
//     {
//       id: 1,
//       Emails: "Emails",
//       Emailsarray: finalEmails
//     },
//     {
//       id: 2,
//       Email: "Email"
//     },
//     {
//       id: 3,
//       type: "Type-optional",
//       firsttypeval: "Personal",
//       secondtypeval: "Professional"
//     },
//     {
//       id: 4,
//       secondtoggleheader: "Status-optional",
//       secondtogglevalue1: "Current",
//       secondtogglevalue2: "Previous"
//     },
//     {
//       id: 5,
//       confidenceheader: "ConfidenceLevel-optional",
//       confidencelevels: ["Level of Confidence","Low Confidence", "Medium Confidence", "High Confidence", "Very High Confidence"]
//     }
//   ];

//   const plusButtonColor = enteredEmail && emailerror === "" ? green[500]: "transparent";
//   const toggleDropDown = () => setIsOpen(!isOpen);
  

//   const selectOption = (option) => {
//     setSelectedValue(option);
//     setIsOpen(false);
    
//     if (option === headers[4].confidencelevels[0]) {
//       setSelectColor("lightgray");
//     } else if (option === headers[4].confidencelevels[1]) {
//       setSelectColor("red");
    
//     } else if(option === headers[4].confidencelevels[2]){
//       setSelectColor("yellow")
//     }else if(option === headers[4].confidencelevels[3]){
//       setSelectColor("lightgreen")

//     }else if(option === headers[4].confidencelevels[4]){
//       setSelectColor("green")

//     }
    
   
//   };

  
//   const rightSelectOption = (event) => {
//     event.stopPropagation();
//     const currentIndex = headers[4].confidencelevels.indexOf(selectedValue);
//     const nextIndex = (currentIndex + 1) % headers[4].confidencelevels.length;
    
    
    
//     if (currentIndex !== headers[4].confidencelevels.length - 1) {
//       setSelectedValue(headers[4].confidencelevels[nextIndex]);
//       setIsOpen(false);

      
//       if (headers[4].confidencelevels[nextIndex] === headers[4].confidencelevels[0]) {
//         setSelectColor("lightgray");
//       } else if (headers[4].confidencelevels[nextIndex] === headers[4].confidencelevels[1]) {
//         setSelectColor("red");
//       } else if (headers[4].confidencelevels[nextIndex] === headers[4].confidencelevels[2]) {
//         setSelectColor("yellow");
//       } else if (headers[4].confidencelevels[nextIndex] === headers[4].confidencelevels[3]) {
//         setSelectColor("lightgreen");
//       } else if (headers[4].confidencelevels[nextIndex] === headers[4].confidencelevels[4]) {
//         setSelectColor("green");
//       } else {
//         setSelectColor("lightgray");
//       }

     
//       if (nextIndex === headers[4].confidencelevels.length -1) {
//         setIsButtonDisabled(true);
//       }
//     } else {
//       setIsButtonDisabled(false); 
//     }
//   };
  
//   const leftSelectOpton=(event)=>{
//     event.stopPropagation();
//     const currentIndex = headers[4].confidencelevels.indexOf(selectedValue);
    
//     const prevIndex = (currentIndex - 1 + headers[4].confidencelevels.length) % headers[4].confidencelevels.length;
  
//     if(currentIndex!==0){
//       setSelectedValue(headers[4].confidencelevels[prevIndex]);
//       setIsOpen(false); 
//       if (headers[4].confidencelevels[prevIndex] === headers[4].confidencelevels[0]) {
//         setSelectColor("lightgray");
//       } else if (headers[4].confidencelevels[prevIndex] === headers[4].confidencelevels[1]) {
//         setSelectColor("red");
//       } else if (headers[4].confidencelevels[prevIndex] === headers[4].confidencelevels[2]) {
//         setSelectColor("yellow");
//       } else if (headers[4].confidencelevels[prevIndex] === headers[4].confidencelevels[3]) {
//         setSelectColor("lightgreen");
//       } else if (headers[4].confidencelevels[prevIndex] === headers[4].confidencelevels[4]) {
//         setSelectColor("green");
//       } 
//       else {
//         setSelectColor("lightgray");
//       }
//       if (prevIndex === 0) {
//         setisLeftButtonDisabled(true);
//       }
//     else {
//       setisLeftButtonDisabled(false); 
//     }

      
//     }
// }
  
  
  
  
  
//   const firsttoggleClick=()=>{
//     setstarttoggleclickedbutton('first');

//   }
//   const secondtoggleClick=()=>{
//     setstarttoggleclickedbutton('second');

//   }

//   const thirdtoggleClick=()=>{
//     settoggleclickedbutton('third');


//   }
//   const fourthtoggleClick=()=>{
//     settoggleclickedbutton('fourth');
//   }


  
 
  

//   return (
//     <div
//       style={{
//         border: "0px solid black",
//         minHeight: "300px",
//         position: "relative",
//         boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//         paddingBottom: "10px"
//       }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         style={{
//           border: hovered ? "1px solid black" : "none",
//           width: "5px",
//           minHeight: "100%",
//           position: "absolute",
//           backgroundColor: hovered ? "blue" : "white",
//           borderRadius: "10px",
//           paddingBottom: "10px"
//         }}
//       ></div>

//       {headers.map((header) => (
//         <div key={header.id}>
//           {header.Emails && (
//             <div>
//               <span style={{ marginLeft: "3%" }}>{header.Emails}</span>
//               <span style={{ marginLeft: "2%" }}>({header.Emailsarray.length})</span>
//             </div>
//           )}
//           {header.Email && (
//             <div style={{ display: 'block' }}>
//               <span style={{ marginLeft: "3%" }}>{header.Email}</span><br />
//               <input
//                 className={`email-input ${emailerror ? 'invalid' : ''}`} 
//                 style={{ marginLeft: "3%",marginTop:"1px" }}
//                 type="text"
//                 placeholder="Enter email"
//                 value={enteredEmail}
//                 onChange={handleEmailChange}
//               /><br />
//               {emailerror && <span style={{ color: "red", marginLeft: "3%"  }}>{emailerror}</span>}
//             </div>
//           )}
//         </div>
//       ))}

//       <div style={{ display: "flex", marginTop: "20px"}}>
//         <div style={{ paddingLeft:"3%"}}>
//           <div style={{ display: "block",}}>
//             <span >{headers[2].type}</span>
//           </div>
//           <div >
          
//             <ToggleButtonGroup
//               color="primary"
//               value={typeAlignment}
//               exclusive
//               onChange={handleTypeChange}
//               aria-label="Type"
//               style={{  height: "40px",borderRadius:"0"}}
              
              
//             >
//               <ToggleButton onClick={firsttoggleClick} onMouseEnter={handletoggleMouseEnter} onMouseLeave={handletoggleMouseLeave}   value={headers[2].firsttypeval} style={{color:starttoggleclickedbutton==="first"||togglehovered?"blue":"black",borderColor:starttoggleclickedbutton==="first"||togglehovered?"blue":"lightgray",borderRight: starttoggleclickedbutton==="first"||togglehovered ? "1px solid blue" : "none" , flex: "1",padding:"20px",textTransform:"capitalize",borderRadius:"0"}}>{headers[2].firsttypeval}</ToggleButton>
//               <ToggleButton onClick={secondtoggleClick} onMouseEnter={handlesecondtoggleMouseEnter} onMouseLeave={handlesecondtoggleMouseLeave} value={headers[2].secondtypeval} style={{flex: "1",padding:"20px",color:starttoggleclickedbutton==="second"||secondtogglehovered?"blue":"black",borderColor:starttoggleclickedbutton==="second"||secondtogglehovered?"blue":"lightgray",borderLeft: starttoggleclickedbutton==="second"||secondtogglehovered ? "1px solid blue" : "none",textTransform:"capitalize",borderRadius:"0"}}>{headers[2].secondtypeval}</ToggleButton>
//             </ToggleButtonGroup>
//           </div>
//         </div>
//         <div style={{ position: "relative",paddingLeft:"8%"}}>
//           <div style={{ display: "block" }}>
//             <span>{headers[3].secondtoggleheader}</span>
//           </div>
//           <div style={{marginLeft:"1%"}}>
//             <ToggleButtonGroup
//               color="primary"
//               exclusive
//               aria-label="Status"
//               value={statusAlignment}
//               onChange={handleStatusChange}
//               style={{ height:"40px",borderRadius:"0" }}
//             >
//               <ToggleButton onClick={thirdtoggleClick} onMouseEnter={handlethirdtoggleMouseEnter} onMouseLeave={handlethirdtoggleMouseLeave} value={headers[3].secondtogglevalue1}  style={{color:toggleclickedbutton==="third"||thirdtogglehovered?"blue":"black",borderColor:toggleclickedbutton==="third"||thirdtogglehovered?"blue":"lightgray",borderRight: toggleclickedbutton==="third"||thirdtogglehovered? "1px solid blue" : "none" , flex: "1",padding:"20px",textTransform:"capitalize",borderRadius:"0"}}>{headers[3].secondtogglevalue1}</ToggleButton>
//               <ToggleButton onClick={fourthtoggleClick} onMouseEnter={handlefourthtoggleMouseEnter} onMouseLeave={handlefourthtoggleMouseLeave} value={headers[3].secondtogglevalue2} style={{color:toggleclickedbutton==="fourth"||fourthtogglehovered?"blue":"black",borderColor:toggleclickedbutton==="fourth"||fourthtogglehovered?"blue":"lightgray",borderLeft: toggleclickedbutton==="fourth"||fourthtogglehovered? "1px solid blue" : "none" , flex: "1",padding:"20px",textTransform:"capitalize",borderRadius:"0"}}>{headers[3].secondtogglevalue2}</ToggleButton>
//             </ToggleButtonGroup>
//           </div>
//         </div>
//         <div style={{ paddingLeft:"10%" }}>
//           <div style={{ display: "block" }}>
//             <span>{headers[4].confidenceheader}</span>
//           </div>
//           < div className="dropdownn" >
//           <button
//   className="styled-button"
//   onClick={toggleDropDown}
 
//   style={{
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     backgroundColor: selectColor,
//     borderRadius: "40px",
//     height: "35px",
//     width: "230px",
//     padding: "0 10px",
//   }}
// >
//   <span className="styled-button" onClick={(event)=>{leftSelectOpton(event);event.stopPropagation();}} disabled={isLeftButtonDisabled}>{"<"}</span>
//   <span className="button-text" style={{fontSize: "15px",textAlign:"left",whiteSpace:"nowrap"}} >{selectedValue}</span>
 
//     <span
      
      
     
      
//       onClick={(event) => {
//         rightSelectOption(event);
//         event.stopPropagation(); 
        
//       }}
//       disabled={isButtonDisabled}
      
//     >
//       {">"}
//     </span>

// </button>

            
//             {isOpen && (
//                 <div className="dropdownn-container" style={{position:"absolute"}}>
//                     {headers[4].confidencelevels.map((value, index) => (
//                         <div
//                             key={index}
//                             className="dropdownn-item"
//                             onClick={() => selectOption(value)}
//                             style={{
//                               backgroundColor:"lightgray",
//                               padding: "10px 20px",
//                               marginLeft: "12%",
//                               marginRight: "2%",
//                               textAlign: "left", 
//                               width: "95%", 
//                               fontSize: "15px",
//                               paddingLeft:"-20%",
//                               cursor:"pointer",
//                               whiteSpace:"nowrap"

                              
//                             }}
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//             )}
//           </div>
//         </div>
//       </div>

      
//       <div>
//         <button
//           onClick={finalEmailSubmit}
//           style={{
//             position: "absolute",
//             top: "20px",
//             right: "10px",
//             paddingTop: "4%",
//             paddingBottom: "6%",
//             paddingLeft:"8px",
//             paddingRight:"8px",
//             backgroundColor: hovered ? plusButtonColor : "transparent",
//             border: "none",
            
//             border:hovered?"1px solid lightgray":"transparent",
//             color:hovered?"gray":"transparent",
//             bottom:"80%",
//             height:"30%",
//             marginTop:"2%",
         
          
           
//           }}
//         >
//           +
//         </button>
//       </div>
//       <div style={{ marginLeft: "3%", marginTop: "3%", marginRight: "30%" }}>
//         {headers[0].Emailsarray.map((email, index) => (
//           <div
//             key={index}
//             style={{
//               borderTop: index === 0 ? "1px solid lightgrey" : "none", 
//               borderBottom: "1px solid lightgrey", 
//               paddingTop:"3px",
//               paddingBottom:"3px"
//             }}
//           >
//             <span >{email}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Email;




// import React, { useState } from 'react';
// import { Typography, Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ToggleButton from "@mui/material/ToggleButton";

// const Taxfileupload = ({ type, status, confidenceLevel, dataFromToggleGroups }) => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [anchorElConfidence, setAnchorElConfidence] = useState(null);
//     const [confidenceValue, setConfidenceValue] = useState("Level of Confidence");
//     const [selectColor, setSelectColor] = useState("#CCCFD5");
//     const [isLeftButtonDisabled, setisLeftButtonDisabled] = useState(false);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);

//     const confidenceLevels = ["Level of Confidence", "Low Confidence", "Medium Confidence", "High Confidence", "Very High Confidence"];
//     const openConfidence = Boolean(anchorElConfidence);
//     const [typeToggle, setTypeToggle] = useState('Personal');
//     const [statusToggle, setStatusToggle] = useState('Current');

//     const handleCloseConfidence = () => {
//         setAnchorElConfidence(null);
//     };

//     const toggleDropDown = (event) => {
//         setIsOpen(!isOpen);
//         setAnchorElConfidence(event.currentTarget);
//     };

//     const handleToggleGroupChange = (type) => {
//         if (type === 'Personal' || type === 'Profesional') {
//             setTypeToggle(type);
//             // Send updated data to the parent
//             dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: confidenceValue });
//         } else if (type === 'Current' || type === 'Previous') {
//             setStatusToggle(type);
//             // Send updated data to the parent
//             dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: confidenceValue });
//         }
//     };

//     const leftSelectOption = () => {
//         const currentIndex = confidenceLevels.indexOf(confidenceValue);
//         const prevIndex = (currentIndex - 1 + confidenceLevels.length) % confidenceLevels.length;
//         if (currentIndex !== 0) {
//             const newConfidenceValue = confidenceLevels[prevIndex];
//             setConfidenceValue(newConfidenceValue);
//             setIsOpen(false);
//             // Update select color based on the selected option
//             if (newConfidenceValue === confidenceLevels[0]) {
//                 setSelectColor("lightgray");
//             } else if (newConfidenceValue === confidenceLevels[1]) {
//                 setSelectColor("#DFA2A2");
//             } else if (newConfidenceValue === confidenceLevels[2]) {
//                 setSelectColor("#F5E6BA");
//             } else if (newConfidenceValue === confidenceLevels[3]) {
//                 setSelectColor("#BFDDB3");
//             } else if (newConfidenceValue === confidenceLevels[4]) {
//                 setSelectColor("#80BB68");
//             }
//             if (prevIndex === 0) {
//                 setisLeftButtonDisabled(true);
//             } else {
//                 setisLeftButtonDisabled(false);
//             }
//             // Send updated data to the parent
//             dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: newConfidenceValue });
//         }
//     };

//     const rightSelectOption = () => {
//         const currentIndex = confidenceLevels.indexOf(confidenceValue);
//         const nextIndex = (currentIndex + 1) % confidenceLevels.length;
//         if (currentIndex !== confidenceLevels.length - 1) {
//             const newConfidenceValue = confidenceLevels[nextIndex];
//             setConfidenceValue(newConfidenceValue);
//             setIsOpen(false);
//             // Update select color based on the selected option
//             if (newConfidenceValue === confidenceLevels[0]) {
//                 setSelectColor("lightgray");
//             } else if (newConfidenceValue === confidenceLevels[1]) {
//                 setSelectColor("#DFA2A2");
//             } else if (newConfidenceValue === confidenceLevels[2]) {
//                 setSelectColor("#F5E6BA");
//             } else if (newConfidenceValue === confidenceLevels[3]) {
//                 setSelectColor("#BFDDB3");
//             } else if (newConfidenceValue === confidenceLevels[4]) {
//                 setSelectColor("#80BB68");
//             }
//             if (nextIndex === confidenceLevels.length - 1) {
//                 setIsButtonDisabled(true);
//             } else {
//                 setIsButtonDisabled(false);
//             }
//             // Send updated data to the parent
//             dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: newConfidenceValue });
//         }
//     };

//     const selectOption = (option) => {
//         setConfidenceValue(option);
//         setIsOpen(false);
//         // Update select color based on the selected option
//         if (option === confidenceLevels[0]) {
//             setSelectColor("lightgray");
//         } else if (option === confidenceLevels[1]) {
//             setSelectColor("#DFA2A2");
//         } else if(option === confidenceLevels[2]){
//             setSelectColor("#F5E6BA");
//         } else if(option === confidenceLevels[3]){
//             setSelectColor("#BFDDB3");
//         } else if(option === confidenceLevels[4]){
//             setSelectColor("#80BB68");
//         }
//         handleCloseConfidence();
//         // Send updated data to the parent
//         dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: option });
//     };

//     return (
//         <Grid item xs={12} sx={{ display: 'flex' }} p={1}>
//             { type &&
//                 <Box sx={{ display: 'flex', flexDirection: 'column'}} mr={5}>
//                     <Typography variant='caption' color='text.secondary' mb={1}>
//                         Type - optional
//                     </Typography>
//                     <ToggleButton firstButton="Personal" secondButton="Profesional" onButtonClick={(type) => handleToggleGroupChange(type)} />
//                 </Box>
//             }
//             { status &&
//                 <Box sx={{ display: 'flex', flexDirection: 'column'}}>
//                     <Typography variant='caption' color='text.secondary' mb={1}>
//                         Status - optional
//                     </Typography>
//                     <ToggleButton firstButton="Current" secondButton="Previous" onButtonClick={(status) => handleToggleGroupChange(status)} />
//                 </Box>
//             }
//             { confidenceLevel &&
//                 <Box sx={{ display: 'flex', flexDirection: 'column'}} ml={5}>
//                     <Typography variant='caption' color='text.secondary' mb={1}>
//                         Confidence Level - optional
//                     </Typography>
//                     <Box
//                         sx={{
//                             textTransform: 'capitalize',
//                             borderRadius: '2rem',
//                             backgroundColor: selectColor,
//                             minWidth: '280px',
//                             color: 'black',
//                             padding: '0px',
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                             alignItems: 'center',
//                         }}
//                         onClick={toggleDropDown}
//                     >
//                         <IconButton
//                             sx={{ marginRight: '1rem' }}
//                             onClick={(e) => {
//                                 e.stopPropagation(); // Prevent dropdown menu from appearing
//                                 leftSelectOption();
//                             }}
//                             disabled={isLeftButtonDisabled}
//                         >
//                             <ChevronLeftIcon />
//                         </IconButton>
//                         <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>{confidenceValue}</Typography>
//                         <IconButton
//                             sx={{ marginLeft: '1rem' }}
//                             onClick={(e) => {
//                                 e.stopPropagation(); // Prevent dropdown menu from appearing
//                                 rightSelectOption();
//                             }}
//                             disabled={isButtonDisabled}
//                         >
//                             <ChevronRightIcon />
//                         </IconButton>
//                     </Box>
//                     {isOpen && (
//                         <Menu
//                             id="basic-menu"
//                             anchorEl={anchorElConfidence}
//                             open={openConfidence}
//                             onClose={handleCloseConfidence}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                             }}
//                             sx={{
//                                 '.MuiMenu-list': {
//                                     padding: '0px',
//                                 },
//                                 padding: '0px',
//                             }}
//                         >
//                             {confidenceLevels.map((value, index) => (
//                                 <MenuItem
//                                     key={index}
//                                     onClick={() => selectOption(value)}
//                                     sx={{
//                                         minWidth: '280px',
//                                         padding: '5px 2rem',
//                                         backgroundColor: '#CCCFD5',
//                                         '&:hover': {
//                                             backgroundColor: 'confidenceLevelsgrey',
//                                         },
//                                     }}
//                                 >
//                                     {value}
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     )}
//                 </Box>
//             }
//         </Grid>
//     );
// };

// export default Taxfileupload;











// GRID SYSTEM
// import React, { useState } from 'react';
// import { Typography, Box, Grid, IconButton, Menu, MenuItem } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ToggleButton from "@mui/material/ToggleButton";

// const Taxfileupload = ({ type, status, confidenceLevel}) => {

//     const [isOpen, setIsOpen] = useState(false);
//     const [anchorElConfidence, setAnchorElConfidence] = useState(null);
//     const [confidenceValue, setConfidenceValue] = useState("Level of Confidence");
//     const [selectColor, setSelectColor] = useState("#CCCFD5");
//     const [isLeftButtonDisabled, setisLeftButtonDisabled] = useState(false);
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);

//     const confidenceLevels = ["Level of Confidence", "Low Confidence", "Medium Confidence", "High Confidence", "Very High Confidence"];
//     const openConfidence = Boolean(anchorElConfidence);
//     const [typeToggle, setTypeToggle] = useState('Personal');
//     const [statusToggle, setStatusToggle] = useState('Current');

//     const handleCloseConfidence = () => {
//         setAnchorElConfidence(null);
//     };

//     const toggleDropDown = (event) => {
//         setIsOpen(!isOpen);
//         setAnchorElConfidence(event.currentTarget);
//     };

//     const handleToggleGroupChange = (type) => {
//         if (type === 'Personal' || type === 'Profesional') {
//             setTypeToggle(type);
//             // Send updated data to the parent
//             // dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: confidenceValue });
//         } else if (type === 'Current' || type === 'Previous') {
//             setStatusToggle(type);
//             // Send updated data to the parent
//             // dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: confidenceValue });
//         }
//     };

//     const leftSelectOption = () => {
//         const currentIndex = confidenceLevels.indexOf(confidenceValue);
//         const prevIndex = (currentIndex - 1 + confidenceLevels.length) % confidenceLevels.length;
//         if (currentIndex !== 0) {
//             const newConfidenceValue = confidenceLevels[prevIndex];
//             setConfidenceValue(newConfidenceValue);
//             setIsOpen(false);
//             // Update select color based on the selected option
//             if (newConfidenceValue === confidenceLevels[0]) {
//                 setSelectColor("lightgray");
//             } else if (newConfidenceValue === confidenceLevels[1]) {
//                 setSelectColor("#DFA2A2");
//             } else if (newConfidenceValue === confidenceLevels[2]) {
//                 setSelectColor("#F5E6BA");
//             } else if (newConfidenceValue === confidenceLevels[3]) {
//                 setSelectColor("#BFDDB3");
//             } else if (newConfidenceValue === confidenceLevels[4]) {
//                 setSelectColor("#80BB68");
//             }
//             if (prevIndex === 0) {
//                 setisLeftButtonDisabled(true);
//             } else {
//                 setisLeftButtonDisabled(false);
//             }
//             // Send updated data to the parent
//             // dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: newConfidenceValue });
//         }
//     };

//     const rightSelectOption = () => {
//         const currentIndex = confidenceLevels.indexOf(confidenceValue);
//         const nextIndex = (currentIndex + 1) % confidenceLevels.length;
//         if (currentIndex !== confidenceLevels.length - 1) {
//             const newConfidenceValue = confidenceLevels[nextIndex];
//             setConfidenceValue(newConfidenceValue);
//             setIsOpen(false);
//             // Update select color based on the selected option
//             if (newConfidenceValue === confidenceLevels[0]) {
//                 setSelectColor("lightgray");
//             } else if (newConfidenceValue === confidenceLevels[1]) {
//                 setSelectColor("#DFA2A2");
//             } else if (newConfidenceValue === confidenceLevels[2]) {
//                 setSelectColor("#F5E6BA");
//             } else if (newConfidenceValue === confidenceLevels[3]) {
//                 setSelectColor("#BFDDB3");
//             } else if (newConfidenceValue === confidenceLevels[4]) {
//                 setSelectColor("#80BB68");
//             }
//             if (nextIndex === confidenceLevels.length - 1) {
//                 setIsButtonDisabled(true);
//             } else {
//                 setIsButtonDisabled(false);
//             }
//             // Send updated data to the parent
//             // dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: newConfidenceValue });
//         }
//     };

//     const selectOption = (option) => {
//         setConfidenceValue(option);
//         setIsOpen(false);
//         // Update select color based on the selected option
//         if (option === confidenceLevels[0]) {
//             setSelectColor("lightgray");
//         } else if (option === confidenceLevels[1]) {
//             setSelectColor("#DFA2A2");
//         } else if(option === confidenceLevels[2]){
//             setSelectColor("#F5E6BA");
//         } else if(option === confidenceLevels[3]){
//             setSelectColor("#BFDDB3");
//         } else if(option === confidenceLevels[4]){
//             setSelectColor("#80BB68");
//         }
//         handleCloseConfidence();
//         // Send updated data to the parent
//         // dataFromToggleGroups({ type: typeToggle, status: statusToggle, confidenceLevel: option });
//     };

//     return (
//         <Grid item xs={12} sx={{ display: 'flex' }} p={1}>
//             { type &&
//                 <Box sx={{ display: 'flex', flexDirection: 'column'}} mr={5}>
//                     <Typography variant='caption' color='text.secondary' mb={1}>
//                         Type - optional
//                     </Typography>
//                     <ToggleButton firstButton="Personal" secondButton="Profesional" onButtonClick={(type) => handleToggleGroupChange(type)} />
//                 </Box>
//             }
//             { status &&
//                 <Box sx={{ display: 'flex', flexDirection: 'column'}}>
//                     <Typography variant='caption' color='text.secondary' mb={1}>
//                         Status - optional
//                     </Typography>
//                     <ToggleButton firstButton="Current" secondButton="Previous" onButtonClick={(status) => handleToggleGroupChange(status)} />
//                 </Box>
//             }
//             { confidenceLevel &&
//                 <Box sx={{ display: 'flex', flexDirection: 'column'}} ml={5}>
//                     <Typography variant='caption' color='text.secondary' mb={1}>
//                         Confidence Level - optional
//                     </Typography>
//                     <Box
//                         sx={{
//                             textTransform: 'capitalize',
//                             borderRadius: '2rem',
//                             backgroundColor: selectColor,
//                             minWidth: '280px',
//                             color: 'black',
//                             padding: '0px',
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                             alignItems: 'center',
//                         }}
//                         onClick={toggleDropDown}
//                     >
//                         <IconButton
//                             sx={{ marginRight: '1rem' }}
//                             onClick={(e) => {
//                                 e.stopPropagation(); // Prevent dropdown menu from appearing
//                                 leftSelectOption();
//                             }}
//                             disabled={isLeftButtonDisabled}
//                         >
//                             <ChevronLeftIcon />
//                         </IconButton>
//                         <Typography sx={{ flexGrow: 1, textAlign: 'center' }}>{confidenceValue}</Typography>
//                         <IconButton
//                             sx={{ marginLeft: '1rem' }}
//                             onClick={(e) => {
//                                 e.stopPropagation(); // Prevent dropdown menu from appearing
//                                 rightSelectOption();
//                             }}
//                             disabled={isButtonDisabled}
//                         >
//                             <ChevronRightIcon />
//                         </IconButton>
//                     </Box>
//                     {isOpen && (
//                         <Menu
//                             id="basic-menu"
//                             anchorEl={anchorElConfidence}
//                             open={openConfidence}
//                             onClose={handleCloseConfidence}
//                             MenuListProps={{
//                                 'aria-labelledby': 'basic-button',
//                             }}
//                             sx={{
//                                 '.MuiMenu-list': {
//                                     padding: '0px',
//                                 },
//                                 padding: '0px',
//                             }}
//                         >
//                             {confidenceLevels.map((value, index) => (
//                                 <MenuItem
//                                     key={index}
//                                     onClick={() => selectOption(value)}
//                                     sx={{
//                                         minWidth: '280px',
//                                         padding: '5px 2rem',
//                                         backgroundColor: '#CCCFD5',
//                                         '&:hover': {
//                                             backgroundColor: 'confidenceLevelsgrey',
//                                         },
//                                     }}
//                                 >
//                                     {value}
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     )}
//                 </Box>
//             }
//         </Grid>
//     );
// };

// export default Taxfileupload;


















// POPUP UPWARDS
// import React, { useEffect, useState } from "react";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import { green } from "@mui/material/colors";
// import "./Login.css";
// import "./Payslip.css";

// function Email() {
//   const [hovered, setHovered] = useState(false);
//   const [typeAlignment, setTypeAlignment] = useState('');
//   const [statusAlignment, setStatusAlignment] = useState('');
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailerror, setemailerror] = useState("");
//   const [finalEmails, setFinalEmails] = useState([]);
  
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedValue, setSelectedValue] = useState("Select an option");
//   const [selectColor, setSelectColor] = useState("lightgray");

//   const handleMouseEnter = () => setHovered(true);
//   const handleMouseLeave = () => setHovered(false);

//   const handleTypeChange = (event, newAlignment) => {
//     setTypeAlignment(newAlignment);
//   };

//   const handleStatusChange = (event, newStatus) => {
//     setStatusAlignment(newStatus);
//   };

//   const handleEmailChange = (e) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     setEnteredEmail(e.target.value);
//     if (emailRegex.test(e.target.value)) {
//       setemailerror('');
//     } else {
//       setemailerror("This is not a proper email address");
//     }
//   };

//   useEffect(() => {
//     const storedEmails = JSON.parse(localStorage.getItem('finalEmails')) || [];
//     setFinalEmails(storedEmails);
//   }, []);

//   const finalEmailSubmit = () => {
//     if (enteredEmail && emailerror === "") {
//       const newEmails = [...finalEmails, enteredEmail];
//       setFinalEmails(newEmails);
//       localStorage.setItem('finalEmails', JSON.stringify(newEmails));
//       setEnteredEmail(""); // Optionally clear the input after submission
//     } else {
//       console.log("Invalid email or empty input");
//     }
//   };

//   const headers = [
//     {
//       id: 1,
//       Emails: "Emails",
//       Emailsarray: finalEmails
//     },
//     {
//       id: 2,
//       Email: "Email"
//     },
//     {
//       id: 3,
//       type: "Type-optional",
//       firsttypeval: "Personal",
//       secondtypeval: "Professional"
//     },
//     {
//       id: 4,
//       secondtoggleheader: "Status-optional",
//       secondtogglevalue1: "Current",
//       secondtogglevalue2: "Previous"
//     },
//     {
//       id: 5,
//       confidenceheader: "ConfidenceLevel-optional",
//       confidencelevels: ["selectlevel","Low Confidence", "Medium Confidence", "High Confidence", "Very High Confidence"]
//     }
//   ];

//   const plusButtonColor = enteredEmail && emailerror === "" ? green[500] : "lightgrey";
//   const toggleDropDown = () => setIsOpen(!isOpen);

//   const selectOption = (option) => {
//       setSelectedValue(option);
//       setIsOpen(false);
//       // Change color based on the selected option
//       if (option === headers[4].confidencelevels[0]) {
//           setSelectColor("blue");
//       } else if (option === headers[4].confidencelevels[1]) {
//           setSelectColor("red");
//       }
//   };
  

//   return (
//     <div
//       style={{
//         border: "0px solid black",
//         minHeight: "300px",
//         position: "relative",
//         boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
//         paddingBottom: "10px"
//       }}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div
//         style={{
//           border: hovered ? "1px solid black" : "none",
//           width: "7px",
//           minHeight: "100%",
//           position: "absolute",
//           backgroundColor: hovered ? "blue" : "white",
//           borderRadius: "10px",
//           paddingBottom: "10px"
//         }}
//       ></div>

//       {headers.map((header) => (
//         <div key={header.id}>
//           {header.Emails && (
//             <div>
//               <span style={{ marginLeft: "1%" }}>{header.Emails}</span>
//               <span style={{ marginLeft: "2%" }}>({header.Emailsarray.length})</span>
//             </div>
//           )}
//           {header.Email && (
//             <div style={{ display: 'block' }}>
//               <span style={{ marginLeft: "1%" }}>{header.Email}</span><br />
//               <input
//                 className={`email-input ${emailerror ? 'invalid' : ''}`} // Apply the class based on the error state
//                 style={{ marginLeft: "1%", marginTop: '1%' }}
//                 type="text"
//                 placeholder="Enter email"
//                 value={enteredEmail}
//                 onChange={handleEmailChange}
//               /><br />
//               {emailerror && <span style={{ color: "red", marginLeft: "2%"  }}>{emailerror}</span>}
//             </div>
//           )}
//         </div>
//       ))}

//       <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
//         <div style={{ flex: "1" }}>
//           <div style={{ display: "block" }}>
//             <span style={{ marginLeft: "2%" }}>{headers[2].type}</span>
//           </div>
//           <div>
//             <ToggleButtonGroup
//               color="primary"
//               value={typeAlignment}
//               exclusive
//               onChange={handleTypeChange}
//               aria-label="Type"
//               style={{ marginLeft: "10px" }}
//             >
//               <ToggleButton value={headers[2].firsttypeval}>{headers[2].firsttypeval}</ToggleButton>
//               <ToggleButton value={headers[2].secondtypeval}>{headers[2].secondtypeval}</ToggleButton>
//             </ToggleButtonGroup>
//           </div>
//         </div>
//         <div style={{ flex: "1" }}>
//           <div style={{ display: "block" }}>
//             <span>{headers[3].secondtoggleheader}</span>
//           </div>
//           <div>
//             <ToggleButtonGroup
//               color="primary"
//               exclusive
//               aria-label="Status"
//               value={statusAlignment}
//               onChange={handleStatusChange}
//               style={{ marginLeft: "10px" }}
//             >
//               <ToggleButton value={headers[3].secondtogglevalue1}>{headers[3].secondtogglevalue1}</ToggleButton>
//               <ToggleButton value={headers[3].secondtogglevalue2}>{headers[3].secondtogglevalue2}</ToggleButton>
//             </ToggleButtonGroup>
//           </div>
//         </div>
//         <div style={{ flex: "1", position: "relative" }}>
//           <div style={{ display: "block" }}>
//             <span>{headers[4].confidenceheader}</span>
//           </div>
//           <div className="dropdownn">
//             <button
//                 className="styled-button"
//                 onClick={toggleDropDown}
//                 style={{ backgroundColor: selectColor, width:"100%" }}
//             >
//                 <span className="styled-button"> {"<"}</span>
//                 <span className="button-text">{selectedValue}</span>
//                 <span className="bracket">{">"}</span>
//             </button>
//             {isOpen && (
//                 <div className="dropdownn-container" style={{ position: "absolute", bottom: "180%", left: 0 }}>
//                     {headers[4].confidencelevels.map((value, index) => (
//                         <div
//                             key={index}
//                             className="dropdownn-item"
//                             onClick={() => selectOption(value)}
//                         >
//                             {value}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
         
//         </div>
//       </div>

//       {/* + Button Positioned at the Top Right Corner */}
//       <div>
//         <button
//           onClick={finalEmailSubmit}
//           style={{
//             position: "absolute",
//             top: "20px",
//             right: "10px",
//             paddingTop: "6%",
//             paddingBottom: "4%",
//             backgroundColor: hovered ? plusButtonColor : "transparent",
//             border: "none",
//             color: "white",
//           }}
//         >
//           +
//         </button>
//       </div>
//       <div style={{ marginLeft: "2%", marginTop: "3%", marginRight: "30%" }}>
//         {headers[0].Emailsarray.map((email, index) => (
//           <div
//             key={index}
//             style={{
//               borderTop: index === 0 ? "1px solid lightgrey" : "none", // Apply borderTop only to the first email
//               borderBottom: "1px solid lightgrey", // Apply borderBottom to all emails
//             }}
//           >
//             <span>{email}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Email;




