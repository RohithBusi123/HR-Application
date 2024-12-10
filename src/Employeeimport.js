// import React, { useRef, useState, useEffect } from 'react';
// import { useLocation ,Link} from 'react-router-dom';

// import "./pointer.css";

// function Employeeimport() {

//   const [fileName, setFileName] = useState(null);
//   const [fileContent, setFileContent] = useState(null);
//   const [datee,setdatee]=useState("");
//   const [dateeerror,setdateeerror]=useState("");
//   const fileInputRef = useRef(null);
//   const location=useLocation();
//   console.log(location);
//   const pathnames=location.pathname.split("/").filter((x)=>x);

//   useEffect(() => {
//     // Load previously saved file data from localStorage
//     const savedFileName = localStorage.getItem('fileName');
//     const savedFileContent = localStorage.getItem('fileContent');
//     if (savedFileName && savedFileContent) {
//       setFileName(savedFileName);
//       setFileContent(savedFileContent);
//     }
//   }, []);

//   const handleButtonClick = () => {
//     fileInputRef.current.click();
//   };
//   const Resetdata = (e) => {
//     e.preventDefault();
//     setFileName("");
//     localStorage.removeItem('fileName');
//     localStorage.removeItem('fileContent');
//   }
//   const Canceldata = (savedFileName, savedFileContent) => {
//     if (savedFileName && savedFileContent) {
//       setFileName(savedFileName);
//       setFileContent(savedFileContent);
//     }
//   }

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name); // Update the state with the selected file name

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const content = e.target.result;
//         setFileContent(content);
//         // Save file name and content to localStorage
//         localStorage.setItem('fileName', file.name);
//         localStorage.setItem('fileContent', content);
//         console.log('File content:', content); // You can process the file content here
//       };
//       reader.readAsText(file); // or reader.readAsDataURL(file) for images, reader.readAsArrayBuffer(file) for binary files
//     }
//   };
//   const handledateChange=(event)=>{
//     setdatee(event.target.value);
//     const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
//     if (dateRegex.test(event.target.value)) {
//       setdateeerror('');
//     } else {
//       setdateeerror('Please enter a valid date in the format YYYY-MM-DD');
//     }
//   }
//   const handleImport=()=>{
//     if(datee){
//       console.log(datee);
//     }

//   }

//   return (
    
   
//     <div   style={{backgroundColor:"lightgrey",height:"650px"}}>
//       <div >
      
//       <div style={{display:"flex"}}>
//       <h6 style={{marginTop:"3px",marginLeft:"1%"}}>Employee Imports</h6>
//           <nav>
//           <ul className="breadcrumb">
//             <li>
//               <Link style={{color:"black",textDecoration:"none", marginLeft:"5%"}} to="/">Home</Link>
//               <Link style={{color:"black",padding:"10%",textDecoration:"none"}} to="/employees">Employees</Link>
//             </li>
//             {pathnames.map((value, index) => {
//               const to = `/${pathnames.slice(0, index + 1).join('/')}`;

//               return (
//                 <li  key={to}>
//                   <Link style={{padding:"15%",color:"black",textDecoration:"none" ,marginLeft:"20%"}} to={to}>{value}</Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </div>
//         <div style={{zIndex:"2",marginLeft:"1%",backgroundColor:"white",marginRight:"1%",height:"92vh",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:'1%',borderBottomRightRadius:"1%"}}>
//             <h6 style={{paddingLeft:"1%"}}>Employees</h6>
//             <span style={{paddingLeft:"1%"}}>Import</span>
//             <div >
//               <div style={{display:"flex"}}>
                
//                 <span style={{ display: "block", marginTop: "22px" ,paddingLeft:"1%"}}>Date</span>
//                 <span style={{color:"red",marginTop:"1.5%"}}>*</span>
                
                
//               </div>
//               <input  className="bottom-border-input" style={{ marginTop: "23px",marginLeft:"1%" }} type="text" value={datee} onChange={handledateChange} /><br></br>
//               {dateeerror && <span style={{color:"red"}}>{dateeerror}</span>}
//               <div style={{display:"flex"}}>
//                 <span style={{ display: "block", marginTop: "25px",paddingLeft:"1%" }}>Attach Excel</span>
//                 <span style={{color:"red",marginTop:"2%"}}>*</span>
                
//               </div>
//               <button onClick={handleButtonClick} style={{ display: "block", marginTop: "29px",backgroundColor:"white",text:"black",border:"1px solid black",marginLeft:"1%"}}>File</button>
//               <input 
//                 type="file"
//                 ref={fileInputRef }
//                 style={{ display: 'none'}}
//                 onChange={handleFileChange}
//               />
//               {fileName && <p style={{marginLeft:"1%"}}>Selected file: {fileName}</p>} {/* Display the selected file name */}
//               {/* {fileContent && <pre>{fileContent}</pre>} Display the file content */}
//               <button style={{ marginLeft: "3%" ,padding:"2px 24px",backgroundColor:"rgb(119, 136, 153)",color:"white"}} onClick={Canceldata}>Cancel</button>
//               <button style={{ marginTop: "10%" ,marginLeft:"10%",padding:"2px 24px",backgroundColor:"transparent"}} onClick={Resetdata}>Reset</button>
              
//               <button style={{marginLeft:"15%",backgroundColor:"rgb(54, 69, 79)",padding:"2px 24px",color:"white"}} onClick={handleImport}>Import</button>
//             </div>
//         </div>
//       </div>
//       </div>
    
   
//   );
// }

// export default Employeeimport;












import React, { useRef, useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import "./pointer.css";

function Employeeimport() {
  const [fileName, setFileName] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const [datee, setDatee] = useState("");
  const [dateeError, setDateeError] = useState("");
  const fileInputRef = useRef(null);
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  useEffect(() => {
    // Load previously saved file data from localStorage
    const savedFileName = localStorage.getItem('fileName');
    const savedFileContent = localStorage.getItem('fileContent');
    if (savedFileName && savedFileContent) {
      setFileName(savedFileName);
      setFileContent(savedFileContent);
    }
  }, []);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const resetData = (e) => {
    e.preventDefault();
    setFileName("");
    setFileContent("");
    localStorage.removeItem('fileName');
    localStorage.removeItem('fileContent');
  };

  const cancelData = (savedFileName, savedFileContent) => {
    if (savedFileName && savedFileContent) {
      setFileName(savedFileName);
      setFileContent(savedFileContent);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the state with the selected file name

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        // Save file name and content to localStorage
        localStorage.setItem('fileName', file.name);
        localStorage.setItem('fileContent', content);
        console.log('File content:', content); // You can process the file content here
      };
      reader.readAsText(file); // or reader.readAsDataURL(file) for images, reader.readAsArrayBuffer(file) for binary files
    }
  };

  const handleDateChange = (event) => {
    setDatee(event.target.value);
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dateRegex.test(event.target.value)) {
      setDateeError('');
    } else {
      setDateeError('Please enter a valid date in the format YYYY-MM-DD');
    }
  };

  const handleImport = () => {
    if (datee && fileName && fileContent) {
      console.log(datee);

      // Create a Blob from the file content
      const blob = new Blob([fileContent], { type: 'text/plain' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;

      // Trigger the download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div style={{ backgroundColor: "lightgrey", height: "650px" }}>
      <div>
        <div style={{ display: "flex" }}>
          <h6 style={{ marginTop: "3px", marginLeft: "1%" }}>Employee Imports</h6>
          <nav>
            <ul className="breadcrumb">
              <li>
                <Link style={{ color: "black", textDecoration: "none", marginLeft: "5%" }} to="/">Home</Link>
                <Link style={{ color: "black", padding: "10%", textDecoration: "none" }} to="/employees">Employees</Link>
              </li>
              {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return (
                  <li key={to}>
                    <Link style={{ padding: "15%", color: "black", textDecoration: "none", marginLeft: "20%" }} to={to}>{value}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div style={{ zIndex: "2", marginLeft: "1%", backgroundColor: "white", marginRight: "1%", height: "92vh", borderTopLeftRadius: "1%", borderTopRightRadius: "1%", borderBottomLeftRadius: '1%', borderBottomRightRadius: "1%" }}>
          <h6 style={{ paddingLeft: "1%" }}>Employees</h6>
          <span style={{ paddingLeft: "1%" }}>Import</span>
          <div>
            <div style={{ display: "flex" }}>
              <span style={{ display: "block", marginTop: "22px", paddingLeft: "1%" }}>Date</span>
              <span style={{ color: "red", marginTop: "1.5%" }}>*</span>
            </div>
            <input className="bottom-border-input" style={{ marginTop: "23px", marginLeft: "1%" }} type="text" value={datee} onChange={handleDateChange} /><br />
            {dateeError && <span style={{ color: "red" }}>{dateeError}</span>}
            <div style={{ display: "flex" }}>
              <span style={{ display: "block", marginTop: "25px", paddingLeft: "1%" }}>Attach Excel</span>
              <span style={{ color: "red", marginTop: "2%" }}>*</span>
            </div>
            <button onClick={handleButtonClick} style={{ display: "block", marginTop: "29px", backgroundColor: "white", color: "black", border: "1px solid black", marginLeft: "1%" }}>File</button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {fileName && <p style={{ marginLeft: "1%" }}>Selected file: {fileName}</p>} {/* Display the selected file name */}
            {/* {fileContent && <pre>{fileContent}</pre>} Display the file content */}
            <button style={{ marginLeft: "3%", padding: "2px 24px", backgroundColor: "rgb(119, 136, 153)", color: "white" }} onClick={cancelData}>Cancel</button>
            <button style={{ marginTop: "10%", marginLeft: "10%", padding: "2px 24px", backgroundColor: "transparent" }} onClick={resetData}>Reset</button>
            <button style={{ marginLeft: "15%", backgroundColor: "rgb(54, 69, 79)", padding: "2px 24px", color: "white" }} onClick={handleImport}>Import</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employeeimport;





















