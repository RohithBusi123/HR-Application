// import { Link } from "react-router-dom";
// import { FormContext } from "./FormContext";
// import { useContext, useState } from "react";

// function Manualpunching() {
//     const { manuals, deleteManual, saveEditManual } = useContext(FormContext);
//     const [editingManual, setEditingManual] = useState(null);
//     const [editedManual, setEditedManual] = useState({});

//     const deleteManualDetails = (code) => {
//         deleteManual(code);
//     };

//     const handleEditManualClick = (manual) => {
//         setEditingManual(manual.employeecode);
//         setEditedManual(manual);
//     };

//     const handleInputManualChange = (event) => {
//         const { name, value } = event.target;
//         setEditedManual({ ...editedManual, [name]: value });
//     };

//     const handleSaveManual = () => {
        
//         saveEditManual(editedManual);
//         setEditingManual(null);
        
//     };
    
//     return (
//         <div style={{backgroundColor:"lightgray",height:"650px"}}>
//             <h6 style={{marginLeft:"1%"}}>Adding Manual</h6>
//             <div>
//                 <div style={{backgroundColor:"white",height:"85vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}} >
//                     <Link style={{ marginLeft: "80%" ,textDecoration:"none",border:"1px solid black",color:"white",backgroundColor:"black",paddingBottom:"3px"}} to="/Addmanual">Add Manual</Link>
//                     <div>
//                         <h2>Manual Punching</h2>
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>Employee Name</th>
//                                     <th>Employee Code</th>
//                                     <th>Card No</th>
//                                     <th>Punch Date</th>
//                                     <th>In Time</th>
//                                     <th>Out Time</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="table-group-divider">
//                                 {manuals.map((manual,index) => (
//                                     <tr key={index}>
                                        
//                                         {editingManual === manual.employeecode ? (
//                                             <>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="employeename"
//                                                         value={editedManual.employeename}
//                                                         onChange={handleInputManualChange}
//                                                     />
//                                                 </td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="employeecode"
//                                                         value={editedManual.employeecode}
//                                                         onChange={handleInputManualChange}
//                                                     />
//                                                 </td>
                                                
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="cardno"
//                                                         value={editedManual.cardno}
//                                                         onChange={handleInputManualChange}
//                                                     />
//                                                 </td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="punchdate"
//                                                         value={editedManual.punchdate}
//                                                         onChange={handleInputManualChange}
//                                                     />
//                                                 </td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="intime"
//                                                         value={editedManual.intime}
//                                                         onChange={handleInputManualChange}
//                                                     />
//                                                 </td>
//                                                 <td>
//                                                     <input
//                                                         type="text"
//                                                         name="outtime"
//                                                         value={editedManual.outtime}
//                                                         onChange={handleInputManualChange}
//                                                     />
//                                                 </td>
//                                                 <td>
//                                                     <button onClick={handleSaveManual}>Save</button>
//                                                     <button onClick={() => setEditingManual(null)}>Cancel</button>
//                                                 </td>
//                                             </>
//                                         ) : (
//                                             <>
//                                                 <td>{manual.employeename}</td>
//                                                 <td>{manual.employeecode}</td>
//                                                 <td>{manual.cardno}</td>
//                                                 <td>{manual.punchdate}</td>
//                                                 <td>{manual.intime}</td>
//                                                 <td>{manual.outtime}</td>
//                                                 <td>
//                                                     <img
//                                                         src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
//                                                         style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
//                                                         alt="edit"
//                                                         onClick={() => handleEditManualClick(manual)}
//                                                     />
//                                                     <img
//                                                         src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
//                                                         style={{ height: "20px", width: "25px", cursor: "pointer" }}
//                                                         alt="delete"
//                                                         onClick={() => deleteManualDetails(manual.employeecode)}
//                                                     />
//                                                 </td>
//                                             </>
//                                         )}
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Manualpunching;





import { Link } from "react-router-dom";
import { FormContext } from "./FormContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";

function Manualpunching() {
    const { manuals, deleteManual, saveEditManual } = useContext(FormContext);
    const [editingManual, setEditingManual] = useState(null);
    const [editedManual, setEditedManual] = useState({});

    const deleteManualDetails = (code) => {
        deleteManual(code);
    };

    const handleEditManualClick = (manual) => {
        setEditingManual(manual.employeecode);
        setEditedManual(manual);
    };

    const handleInputManualChange = (event) => {
        const { name, value } = event.target;
        setEditedManual({ ...editedManual, [name]: value });
    };

    const handleSaveManual = () => {
        
        saveEditManual(editedManual);
        setEditingManual(null);
        
    };
    const location=useLocation();
    const pathnames=location.pathname.split("/").filter((x)=>x);
    
    return (
        <div style={{backgroundColor:"lightgray",height:"650px"}}>
            <div style={{display:"flex"}}>
                <h6 style={{marginLeft:"1%",marginTop:"0.5%"}}>Adding Manual</h6>
                <nav>
                    <ul className="breadcrumb">
                        <li style={{marginTop:"0.5%"}}>
                            <Link style={{color:"black",textDecoration:"none" ,marginLeft:"5%"}} to="/">Home</Link>
                            <Link  style={{color:"black",textDecoration:"none",marginLeft:"5%"}} to="/attendance">Attendance</Link>
                            
                        </li>
                        {pathnames.map((value,index)=>{
                            const to=`/${pathnames.slice(0,index+1).join("/")}`
                            return(
                                <li key={to} style={{marginTop:"0.5%"}}>
                                    <Link style={{color:"black",textDecoration:"none",marginLeft:"12%"}} to={to}>{value}</Link>

                                </li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
            <div>
                <div style={{backgroundColor:"white",height:"85vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}} >
                    <Link style={{ marginLeft: "80%" ,textDecoration:"none",border:"1px solid black",color:"white",backgroundColor:"black",paddingBottom:"3px"}} to="/Addmanual">Add Manual</Link>
                    <div>
                        <h2>Manual Punching</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Employee Code</th>
                                    <th>Card No</th>
                                    <th>Punch Date</th>
                                    <th>In Time</th>
                                    <th>Out Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {manuals.map((manual,index) => (
                                    <tr key={index}>
                                        
                                        {editingManual === manual.employeecode ? (
                                            <>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="employeename"
                                                        value={editedManual.employeename}
                                                        onChange={handleInputManualChange}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="employeecode"
                                                        value={editedManual.employeecode}
                                                        onChange={handleInputManualChange}
                                                    />
                                                </td>
                                                
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="cardno"
                                                        value={editedManual.cardno}
                                                        onChange={handleInputManualChange}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="punchdate"
                                                        value={editedManual.punchdate}
                                                        onChange={handleInputManualChange}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="intime"
                                                        value={editedManual.intime}
                                                        onChange={handleInputManualChange}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        name="outtime"
                                                        value={editedManual.outtime}
                                                        onChange={handleInputManualChange}
                                                    />
                                                </td>
                                                <td>
                                                    <button onClick={handleSaveManual}>Save</button>
                                                    <button onClick={() => setEditingManual(null)}>Cancel</button>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td>{manual.employeename}</td>
                                                <td>{manual.employeecode}</td>
                                                <td>{manual.cardno}</td>
                                                <td>{manual.punchdate}</td>
                                                <td>{manual.intime}</td>
                                                <td>{manual.outtime}</td>
                                                <td>
                                                    <img
                                                        src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
                                                        style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
                                                        alt="edit"
                                                        onClick={() => handleEditManualClick(manual)}
                                                    />
                                                    <img
                                                        src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                                                        style={{ height: "20px", width: "25px", cursor: "pointer" }}
                                                        alt="delete"
                                                        onClick={() => deleteManualDetails(manual.employeecode)}
                                                    />
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manualpunching;




