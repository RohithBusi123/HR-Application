// import React, { useContext, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FormContext } from "./FormContext";

// function Absentlist() {
//     const { absents, deleteAbsent } = useContext(FormContext);

//     // For debugging purposes: log the value of absents
//     useEffect(() => {
//         console.log('absents:', absents);
//     }, [absents]);

//     const deleteAbsentClick = (code) => {
//         deleteAbsent(code);
//     };

//     return (
//         <div style={{ backgroundColor: "lightgray", height: "650px" }}>
//             <h6>Absent Details</h6>
//             <div>
//                 <div
//                     style={{
//                         backgroundColor: "white",
//                         height: "85vh",
//                         marginLeft: "1%",
//                         marginRight: "1%",
//                         borderTopLeftRadius: "1%",
//                         borderTopRightRadius: "1%",
//                         borderBottomLeftRadius: "1%",
//                         borderBottomRightRadius: "1%"
//                     }}
//                 >
//                     <Link style={{ marginLeft: "80%" }} to="/Addabsent">
//                         Addabsent
//                     </Link>
//                     <div>
//                         <h2>Absentlist</h2>
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th>Employee Name</th>
//                                     <th>Employee Code</th>
//                                     <th>Absent Date</th>
//                                     <th>Description</th>
//                                     <th>Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="table-group-divider">
//                                 {Array.isArray(absents) && absents.length > 0 ? (
//                                     absents.map((absent) => (
//                                         <tr key={absent.employeecode}>
//                                             <td>{absent.employeename}</td>
//                                             <td>{absent.employeecode}</td>
//                                             <td>{absent.absentdate}</td>
//                                             <td>{absent.description}</td>
//                                             <td>
//                                                 <img
//                                                     src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
//                                                     style={{
//                                                         height: "20px",
//                                                         width: "25px",
//                                                         cursor: "pointer"
//                                                     }}
//                                                     alt="delete"
//                                                     onClick={() => deleteAbsentClick(absent.employeecode)}
//                                                 />
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan="5" style={{ textAlign: "center" }}>
//                                             There are no absent details
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Absentlist;











import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "./FormContext";
import { useLocation } from "react-router-dom";

function Absentlist() {
    const { absents, deleteAbsent } = useContext(FormContext);

    // For debugging purposes: log the value of absents
    useEffect(() => {
        console.log('absents:', absents);
    }, [absents]);

    const deleteAbsentClick = (code) => {
        deleteAbsent(code);
    };
    const location=useLocation();
    const pathnames=location.pathname.split("/").filter(x=>x);

    return (
        <div style={{ backgroundColor: "lightgray", height: "650px" }}>
            <div style={{display:"flex"}}>
                <h6 style={{marginTop:"0.4%"}}>Absent Details</h6>
                <nav>
                    <ul className="breadcrumb">
                        <li style={{marginTop:"0.4%"}}>
                            <Link style={{textDecoration:"none",color:"black",marginLeft:"5%"}} to="/">Home</Link>
                            <Link style={{textDecoration:"none",color:"black",marginLeft:"5%"}} to="/attendance">Attendance</Link>
                        </li>
                        {pathnames.map((value,index)=>{
                            const to=`/${pathnames.slice(0,index+1).join("/")}`
                            return(
                                <li key={to} style={{marginTop:"0.4%"}}>
                                    <Link style={{textDecoration:"none",color:"black",marginLeft:"20%"}} to={to}>{value}</Link>

                                </li>
                            )
                        })}

                    </ul>
                </nav>
            </div>
            <div>
                <div
                    style={{
                        backgroundColor: "white",
                        height: "85vh",
                        marginLeft: "1%",
                        marginRight: "1%",
                        borderTopLeftRadius: "1%",
                        borderTopRightRadius: "1%",
                        borderBottomLeftRadius: "1%",
                        borderBottomRightRadius: "1%"
                    }}
                >
                    <Link style={{ marginLeft: "80%" }} to="/Addabsent">
                        Addabsent
                    </Link>
                    <div>
                        <h2>Absentlist</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Employee Name</th>
                                    <th>Employee Code</th>
                                    <th>Absent Date</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {Array.isArray(absents) && absents.length > 0 ? (
                                    absents.map((absent) => (
                                        <tr key={absent.employeecode}>
                                            <td>{absent.employeename}</td>
                                            <td>{absent.employeecode}</td>
                                            <td>{absent.absentdate}</td>
                                            <td>{absent.description}</td>
                                            <td>
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                                                    style={{
                                                        height: "20px",
                                                        width: "25px",
                                                        cursor: "pointer"
                                                    }}
                                                    alt="delete"
                                                    onClick={() => deleteAbsentClick(absent.employeecode)}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" style={{ textAlign: "center" }}>
                                            There are no absent details
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Absentlist;

