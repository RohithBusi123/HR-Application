// import { useState } from "react";
// function Attendanceverify(){
//     const [selectYear,setselectYear]=useState("");
//     const [selectMonth,setselectMonth]=useState("");
//     const [selectCompany,setselectCompany]=useState("");
//     const [selecttext,setselecttext]=useState("");

//     const years=[];
//     const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
//     const companies=["constella","tcs","amazon","wipro"];
//     for (let year=2000;year<=2024;year++){
//         years.push(year);
//     }
//     const handleYearChange=(event)=>{
//         setselectYear(event.target.value);
//     }
//     const handleMonthChange=(event)=>{
//         setselectMonth(event.target.value);

//     }
//     const handleCompanyChange=(event)=>{
//         setselectCompany(event.target.value);
//     }
//     const Attendancesubmit=()=>{
//         if(selectYear==="" || selectMonth==="" || selectCompany===""){
//             setselecttext("Sorry,not generated,please select employee details..!!");
            
//         }
//     }
//     return(
//         <div style={{backgroundColor:"lightgray",height:"654px"}}>
//             <h4 style={{marginLeft:"1%"}}>Attendance verify</h4>
//             <div  style={{backgroundColor:"white",height:"82vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
//                 <div style={{display:"flex"}} >
//                     <div >
//                         <div style={{display:"block"}} >
//                         <label style={{marginLeft:"2%"}}>year</label>
//                         <select  style={{display:"flex",marginLeft:"2%"}}  value={selectYear} onChange={handleYearChange}>
//                             <option value="" disabled></option>
//                             {years.map((year)=>(
//                                 <option>{year}</option>
                                
//                             ))}

//                         </select>
//                         </div>
//                     </div>
//                     <div className="col-sm-3">
//                         <div>
//                             <label style={{marginLeft:"20%"}}>month</label>
//                             <select style={{display:"flex",marginLeft:"20%"}} value={selectMonth} onChange={handleMonthChange}>
//                                 <option value="" disabled></option>
//                                 {months.map((month)=>(
//                                     <option>{month}</option>
//                                 ))}
                            
//                             </select>
                            
//                         </div>
//                     </div>
//                     <div className="col-sm-3">
//                         <div >
//                             <label>company</label>
//                             <select style={{display:"flex"}}  value={selectCompany} onChange={handleCompanyChange}>
//                                 <option value="" disabled></option>
//                                 {companies.map((company)=>(
//                                     <option>{company}</option>
//                                 ))}
                            
//                             </select>
                            
//                         </div>
//                     </div>
//                    <div className="col-sm-3">
//                     <div >
//                             <button  style={{marginTop:"5%"}} type="submit" onClick={Attendancesubmit}>filter</button>
                            

//                         </div>
//                    </div>
//                 </div>
//                 <div><br></br>
//                 <span style={{color:"red",marginLeft:"1%"}}>{selecttext}</span>
//                 </div>
//             </div>

//         </div>
        
        

//     )
// }
// export default Attendanceverify;










import { useState } from "react";
import { useLocation,Link } from "react-router-dom";
function Attendanceverify(){
    const [selectYear,setselectYear]=useState("");
    const [selectMonth,setselectMonth]=useState("");
    const [selectCompany,setselectCompany]=useState("");
    const [selecttext,setselecttext]=useState("");

    const years=[];
    const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    const companies=["constella","tcs","amazon","wipro"];
    for (let year=2000;year<=2024;year++){
        years.push(year);
    }
    const handleYearChange=(event)=>{
        setselectYear(event.target.value);
    }
    const handleMonthChange=(event)=>{
        setselectMonth(event.target.value);

    }
    const handleCompanyChange=(event)=>{
        setselectCompany(event.target.value);
    }
    const Attendancesubmit=()=>{
        if(selectYear==="" || selectMonth==="" || selectCompany===""){
            setselecttext("Sorry,not generated,please select employee details..!!");
            
        }
    }
    const location=useLocation();
    const pathnames=location.pathname.split("/").filter((x)=>x);
    return(
        <div style={{backgroundColor:"lightgray",height:"654px"}}>
            <div style={{display:"flex"}}>
                <h4 style={{marginLeft:"1%"}}>Attendance verify</h4>
                <nav>
                    <ul className="breadcrumb">
                        <li style={{marginTop:"0.4%"}}>
                            <Link style={{textDecoration:"none",color:"black",marginLeft:"5%"}} to="/">Home</Link>
                            <Link style={{textDecoration:"none",color:"black",marginLeft:"5%"}} to="/attendance">Attendance</Link>
                        </li>
                        {pathnames.map((value,index)=>{
                            const to=`/${pathnames.slice(0,index+1).join("/")}`
                            return(
                                <li style={{marginTop:"0.4%"}} key={to}>
                                    <Link style={{textDecoration:"none",color:"black",marginLeft:"14%"}} to={to}>{value}</Link>

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
                            <label>company</label>
                            <select style={{display:"flex"}}  value={selectCompany} onChange={handleCompanyChange}>
                                <option value="" disabled></option>
                                {companies.map((company)=>(
                                    <option>{company}</option>
                                ))}
                            
                            </select>
                            
                        </div>
                    </div>
                   <div className="col-sm-3">
                    <div >
                            <button  style={{marginTop:"5%"}} type="submit" onClick={Attendancesubmit}>filter</button>
                            

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
export default Attendanceverify;