import React, { useState ,useEffect} from 'react';
import { useRef } from 'react';
import './pointer.css';
import { Link, useLocation } from 'react-router-dom';

function Attendanceimport() {
  const years = [];
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  const companies=["constellaintelligence","tcs","infosys","amazon"]
  for (let year = 2020; year <= 2024; year++) {
    years.push(year);
  }

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth,setselectedMonth]=useState("");
  const [selectedCompany,setselectedCompany]=useState("");
  const [fileName,setfileName]=useState({});
  const [fileContent,setfileContent]=useState({});

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handleMonthChange=(event)=>{
    setselectedMonth(event.target.value);
  }
  const handleCompanyChange=(event)=>{
    setselectedCompany(event.target.value);
  }
  const savedFileName=localStorage.getItem('fileName');
  const savedFileContent=localStorage.getItem('fileContent');
  useEffect(()=>{
    if(savedFileName && savedFileContent) {
        setfileName(savedFileName);
        setfileContent(savedFileContent);
    
      }

  },[])
  const refContext=useRef();
//   const secondFileClick=()=>{
//     refContext.current.click();
//   }
  const secondFileChange=(event)=>{
    refContext.current.click();
    const file=event.target.files[0];
    if(file){
        setfileName(file.name);

        

    }
    const reader=new FileReader();
    reader.onload=(e)=>{
        const content=e.target.result;
        setfileContent(content);
        console.log(fileContent);


    }
    reader.readAsText(file);
    
  }
  const location=useLocation();
  // console.log(location);
  const pathnames=location.pathname.split("/").filter((x)=>x);
  return (
    <div style={{backgroundColor:"lightgray",height:"650px",marginRight:"50%"}} >
     <div style={{display:"flex"}}>
      <h6 style={{marginTop:"1%"}}>Attendance Import</h6>
      <nav>
        <ul className='breadcrumb'>
          <li  style={{marginTop:"1%"}}>
            <Link  style={{textDecoration:"none",color:"black",marginLeft:"5%"}} to="/">Home</Link>
            <Link style={{textDecoration:"none",color:"black",marginLeft:"5%"}} to="/attendance">Attendance</Link>
          </li>
          {pathnames.map((value,index)=>{
            const to=`/${pathnames.slice(0,index+1).join("/")}`;
            return(
              <li style={{marginTop:"1%"}} key={to}>
                <Link  style={{textDecoration:"none",color:"black",marginLeft:"12%"}} to={to}>{value}</Link>

              </li>
            )
          })}

        </ul>
      </nav>
     </div>
      
      <div className="container" style={{backgroundColor:"white",marginTop:"2%",height:"95vh",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%",marginLeft:"1%"}}>
      <div className="row">
        <div className="col-sm-4" style={{marginTop:"4%"}}>
          <h6>Employees</h6>
          <span>Attendance Import</span>
          <div style={{marginTop:"10%"}}>
            
            <div style={{display:"flex"}}>
              <span>Year</span><br />
              <span style={{color:"red"}}>*</span>
            </div>
            <select
              className="bottom-border-input"
              style={{ padding: "0px 200px"  }}
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="" disabled ></option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div style={{marginTop:"20%"}}>
            <div style={{display:"flex"}}>
              <span>Month</span>
              <span style={{color:"red"}}>*</span><br />
            </div>
            <select  className="bottom-border-input"
            style={{ padding: "0px 180px"  }}
            value={selectedMonth}
            onChange={handleMonthChange}
            >
                <option value="" disabled></option>
                {months.map((month)=>(
                    <option>{month}</option>
                ))}
               
            </select>
          </div>
          <div style={{marginTop:"30%"}}>
            <div style={{display:"flex"}}>
              <span>Company Name:</span>
              <span style={{color:"red"}}>*</span>
            </div>
            <select  className="bottom-border-input"
            style={{ padding: "0px 150px"  }}
            value={selectedCompany}
            onChange={handleCompanyChange}
            >
                <option value="" disabled></option>
                {companies.map((company)=>(
                    <option>{company}</option>
                ))}
               
            </select>
          </div>
          <div style={{marginTop:"35px"}}>
            <input type="file" onChange={secondFileChange} ref={refContext}></input>
            {/* <button onClick={secondFileClick}>Attach</button> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Attendanceimport;










