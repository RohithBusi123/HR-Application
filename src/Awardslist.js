// import { useContext, useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FormContext } from './FormContext';
// import "./pointer.css";
// import { useLocation } from 'react-router-dom';

// function Awardslist() {
//   const { awards, deleteAward, updateAward } = useContext(FormContext);
//   const [deleteupdateAwards, setdeleteupdateAwards] = useState(awards);
//   const [editingAward, setEditingAward] = useState(null);
//   const [editedAward, setEditedAward] = useState({});
//   const [awardquery, setAwardquery] = useState("");
//   const [aftersearchresults, setaftersearchresults] = useState(awards);
//   const [pageno, setPageno] = useState(1);
//   const resultsperpage = 2;
//   const totalResults = aftersearchresults.length;
//   const totalpages = Math.ceil(totalResults / resultsperpage);

//   console.log(totalpages);
//   const location=useLocation();
//   const pathnames=location.pathname.split("/").filter((x)=>x);

  

//   useEffect(() => {
//     setdeleteupdateAwards(awards);
//     setaftersearchresults(awards);
//   }, [awards]);

//   const deleteAwarddetails = (code) => {
//     deleteAward(code);
//   };

//   const handleEditClick = (award) => {
//     setEditingAward(award.awardcode);
//     setEditedAward(award);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedAward({ ...editedAward, [name]: value });
//   };

//   const handleUpdateAward = () => {
//     updateAward(editedAward);
//     setEditingAward(null);
//   };

//   const handleSearchResults = () => {
//     const newAwards = awards.filter((award) =>
//       award.awardname.toLowerCase().includes(awardquery.toLowerCase())
//     );
//     setaftersearchresults(newAwards);
//     setPageno(1); // Reset to the first page after search
//   };

//   const handlePrevious = () => {
//     if (pageno > 1) {
//       setPageno(pageno - 1);
//     }
//   };

//   const handleNext = () => {
//     if (pageno < totalpages) {
//       setPageno(pageno + 1);
//     }
//   };

 
//   const lastIndex = pageno * resultsperpage;
//   const firstIndex = lastIndex - resultsperpage;
//   const itemsDisplay = aftersearchresults.slice(firstIndex, lastIndex);

//   return (
//     <div style={{ backgroundColor: "lightgrey", height: "650px" }}>
//       <h4>Awards List</h4>
//       <div style={{
//         backgroundColor: "white",
//         marginLeft: "2%",
//         marginRight: "2%",
//         height: "90vh",
//         borderRadius: "1%",
//       }}>
//         <Link style={{ marginLeft: '85%', border: "1px solid black", color: "black", textDecoration: "none", paddingBottom: "5px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "-90px", backgroundColor: "black", color: "white" }} to='/Addaward'>Add Award</Link>
//         <input style={{ marginLeft: "1%" }} className="bottom-border-input" type="text" placeholder="search" value={awardquery} onChange={(e) => setAwardquery(e.target.value)} /> 
//         <button style={{ marginLeft: "2%" }} onClick={handleSearchResults}>Search</button>
//         <table className="table">
//           <thead>
//             <tr>
//               <th style={{ textAlign: "left" }}>EmpName</th>
//               <th style={{ textAlign: "left" }}>EmpNo</th>
//               <th style={{ textAlign: "left" }}>Gift</th>
//               <th style={{ textAlign: "left" }}>Awarddate</th>
//               <th style={{ textAlign: "left" }}>Actions</th>
//             </tr>
//           </thead>
//           <tbody className="table-group-divider">
//             {itemsDisplay.map((award, index) => (
//               <tr key={index}>
//                 {editingAward === award.awardcode ? (
//                   <>
//                     <td style={{ textAlign: "left" }}>
//                       <input 
//                         type="text" 
//                         name="awardname" 
//                         value={editedAward.awardname} 
//                         onChange={handleInputChange} 
//                       />
//                     </td>
//                     <td style={{ textAlign: "left" }}>
//                       <input 
//                         type="text" 
//                         name="awardcode" 
//                         value={editedAward.awardcode} 
//                         onChange={handleInputChange} 
//                       />
//                     </td>
//                     <td style={{ textAlign: "left" }}>
//                       <input 
//                         type="text" 
//                         name="gift" 
//                         value={editedAward.gift} 
//                         onChange={handleInputChange} 
//                       />
//                     </td>
//                     <td style={{ textAlign: "left" }}>
//                       <input 
//                         type="text" 
//                         name="awarddate" 
//                         value={editedAward.awarddate} 
//                         onChange={handleInputChange} 
//                       />
//                     </td>
//                     <td>
//                       <button onClick={handleUpdateAward}>Save</button>
//                     </td>
//                   </>
//                 ) : (
//                   <>
//                     <td style={{ textAlign: "left" }}>{award.awardname}</td>
//                     <td style={{ textAlign: "left" }}>{award.awardcode}</td>
//                     <td style={{ textAlign: "left" }}>{award.gift}</td>
//                     <td style={{ textAlign: "left" }}>{award.awarddate}</td>
//                     <td>
//                       <img
//                         src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
//                         style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
//                         alt="edit"
//                         onClick={() => handleEditClick(award)}
//                       />
//                       <img
//                         src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
//                         style={{ height: "20px", width: "25px", cursor: "pointer" }}
//                         alt="delete"
//                         onClick={() => deleteAwarddetails(award.awardcode)}
//                       />
//                     </td>
//                   </>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button style={{border:"none",backgroundColor:"transparent",marginLeft:"80%"}}  onClick={handlePrevious} disabled={pageno <= 1} >PREVIOUS</button>
//         <button style={{marginLeft:"1%",marginRight:"1%",borderRadius:"50%",backgroundColor:"black",color:"white"}}>{pageno}</button>
//         <button  style={{border:"none",backgroundColor:"transparent"}} onClick={handleNext} disabled={pageno >= totalpages}>NEXT</button>
//       </div>
//     </div>
//   );
// }

// export default Awardslist;








import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from './FormContext';
import "./pointer.css";
import { useLocation } from 'react-router-dom';

function Awardslist() {
  const { awards, deleteAward, updateAward } = useContext(FormContext);
  const [deleteupdateAwards, setdeleteupdateAwards] = useState(awards);
  const [editingAward, setEditingAward] = useState(null);
  const [editedAward, setEditedAward] = useState({});
  const [awardquery, setAwardquery] = useState("");
  const [aftersearchresults, setaftersearchresults] = useState(awards);
  const [pageno, setPageno] = useState(1);
  const resultsperpage = 2;
  const totalResults = aftersearchresults.length;
  const totalpages = Math.ceil(totalResults / resultsperpage);

  console.log(totalpages);
  const location=useLocation();
  const pathnames=location.pathname.split("/").filter((x)=>x);

  

  useEffect(() => {
    setdeleteupdateAwards(awards);
    setaftersearchresults(awards);
  }, [awards]);

  const deleteAwarddetails = (code) => {
    deleteAward(code);
  };

  const handleEditClick = (award) => {
    setEditingAward(award.awardcode);
    setEditedAward(award);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAward({ ...editedAward, [name]: value });
  };

  const handleUpdateAward = () => {
    updateAward(editedAward);
    setEditingAward(null);
  };

  const handleSearchResults = () => {
    const newAwards = awards.filter((award) =>
      award.awardname.toLowerCase().includes(awardquery.toLowerCase())
    );
    setaftersearchresults(newAwards);
    setPageno(1); // Reset to the first page after search
  };

  const handlePrevious = () => {
    if (pageno > 1) {
      setPageno(pageno - 1);
    }
  };

  const handleNext = () => {
    if (pageno < totalpages) {
      setPageno(pageno + 1);
    }
  };

 
  const lastIndex = pageno * resultsperpage;
  const firstIndex = lastIndex - resultsperpage;
  const itemsDisplay = aftersearchresults.slice(firstIndex, lastIndex);

  return (
    <div style={{ backgroundColor: "lightgrey", height: "650px" }}>
      <div style={{display:"flex"}}>
         <h4>Awards List</h4>
         <nav style={{marginLeft:"3%"}}>
          <ul className='breadcrumb'>
            <li>
              <Link to="/" style={{textDecoration:"none",color:"black"}}>Home</Link>
              <Link to="/employees" style={{textDecoration:"none",color:"black",marginLeft:"10%"}}>Employees</Link>
            </li>
           {pathnames.map((value,index)=>{
            const to=`/${pathnames.slice(0,index+1).join('/')}`;
            return(
              <li key={to}>
                <Link  style={{textDecoration:"none",color:"black",marginLeft:"20%"}} to={to}>{value}</Link>
  
              </li>
             )
           })}
           
           
          </ul>
         </nav>
      </div>
      
      <div style={{
        backgroundColor: "white",
        marginLeft: "2%",
        marginRight: "2%",
        height: "90vh",
        borderRadius: "1%",
      }}>
        <Link style={{ marginLeft: '85%', border: "1px solid black", color: "black", textDecoration: "none", paddingBottom: "5px", paddingLeft: "5px", paddingRight: "5px", paddingTop: "-90px", backgroundColor: "black", color: "white" }} to='/Addaward'>Add Award</Link>
        <input style={{ marginLeft: "1%" }} className="bottom-border-input" type="text" placeholder="search" value={awardquery} onChange={(e) => setAwardquery(e.target.value)} /> 
        <button style={{ marginLeft: "2%" }} onClick={handleSearchResults}>Search</button>
        <table className="table">
          <thead>
            <tr>
              <th style={{ textAlign: "left" }}>EmpName</th>
              <th style={{ textAlign: "left" }}>EmpNo</th>
              <th style={{ textAlign: "left" }}>Gift</th>
              <th style={{ textAlign: "left" }}>Awarddate</th>
              <th style={{ textAlign: "left" }}>Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {itemsDisplay.map((award, index) => (
              <tr key={index}>
                {editingAward === award.awardcode ? (
                  <>
                    <td style={{ textAlign: "left" }}>
                      <input 
                        type="text" 
                        name="awardname" 
                        value={editedAward.awardname} 
                        onChange={handleInputChange} 
                      />
                    </td>
                    <td style={{ textAlign: "left" }}>
                      <input 
                        type="text" 
                        name="awardcode" 
                        value={editedAward.awardcode} 
                        onChange={handleInputChange} 
                      />
                    </td>
                    <td style={{ textAlign: "left" }}>
                      <input 
                        type="text" 
                        name="gift" 
                        value={editedAward.gift} 
                        onChange={handleInputChange} 
                      />
                    </td>
                    <td style={{ textAlign: "left" }}>
                      <input 
                        type="text" 
                        name="awarddate" 
                        value={editedAward.awarddate} 
                        onChange={handleInputChange} 
                      />
                    </td>
                    <td>
                      <button onClick={handleUpdateAward}>Save</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={{ textAlign: "left" }}>{award.awardname}</td>
                    <td style={{ textAlign: "left" }}>{award.awardcode}</td>
                    <td style={{ textAlign: "left" }}>{award.gift}</td>
                    <td style={{ textAlign: "left" }}>{award.awarddate}</td>
                    <td>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
                        style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
                        alt="edit"
                        onClick={() => handleEditClick(award)}
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                        style={{ height: "20px", width: "25px", cursor: "pointer" }}
                        alt="delete"
                        onClick={() => deleteAwarddetails(award.awardcode)}
                      />
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <button style={{border:"none",backgroundColor:"transparent",marginLeft:"80%"}}  onClick={handlePrevious} disabled={pageno <= 1} >PREVIOUS</button>
        <button style={{marginLeft:"1%",marginRight:"1%",borderRadius:"50%",backgroundColor:"black",color:"white"}}>{pageno}</button>
        <button  style={{border:"none",backgroundColor:"transparent"}} onClick={handleNext} disabled={pageno >= totalpages}>NEXT</button>
      </div>
    </div>
  );
}

export default Awardslist;





