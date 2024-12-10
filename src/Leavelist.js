













import { Link } from "react-router-dom";
import { FormContext } from "./FormContext";
import { useContext, useEffect, useState } from 'react';

function Leavelist() {
    const { leaves, handleLeaveDelete, updateLeave } = useContext(FormContext);
    const [afterdeleteleaves, setafterdeleteleaves] = useState([]);
    const [editingleave, seteditingleave] = useState(null);
    const [editedleave, seteditedleave] = useState({});

    useEffect(() => {
        if (Array.isArray(leaves)) {
            setafterdeleteleaves(leaves);
        }
    }, [leaves]);

    const handleLeaveDeleteClick = (card) => {
        handleLeaveDelete(card);
    };

    const handleLeaveUpdateClick = (leave) => {
        seteditingleave(leave.employeecode);
        seteditedleave(leave);
    };

    const handleInputLeaveChange = (e) => {
        const { name, value } = e.target;
        seteditedleave((prev) => ({ ...prev, [name]: value }));
    };

    const handleLeaveSave = () => {
        updateLeave(editedleave);
        seteditingleave(null);
    };

    return (
        <div>
            
                <Link style={{ marginLeft: "80%",border:"1px solid black",backgroundColor:"black",color:"white",textDecoration:"none"}} to="/Addleave">Addleave</Link>
           
            
                
            
            <div>
                
                <div>
                    <h2>Leave list</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>EmpName</th>
                                <th>EmpCode</th>
                                <th>CardNo</th>
                                <th>Department</th>
                                <th>FromDate</th>
                                <th>ToDate</th>
                                <th>NoDaysLeave</th>
                                <th>LeaveType</th>
                                <th>LeaveStatus</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {afterdeleteleaves.map((leave, index) => (
                                <tr key={index}>
                                    {editingleave === leave.employeecode ? (
                                        <>
                                            <td>
                                                <input 
                                                    type="text"
                                                    name="employeename"
                                                    value={editedleave.employeename}
                                                    onChange={handleInputLeaveChange}
                                                />
                                            </td>
                                            <td>{leave.employeecode}</td>
                                            <td>{leave.cardno}</td>
                                            <td>{leave.department}</td>
                                            <td>{leave.fromdate}</td>
                                            <td>{leave.todate}</td>
                                            <td>{leave.noofdays}</td>
                                            <td>{leave.leavetype}</td>
                                            <td>{leave.leavestatus}</td>
                                            <td>
                                                <button onClick={handleLeaveSave}>Save</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{leave.employeename}</td>
                                            <td>{leave.employeecode}</td>
                                            <td>{leave.cardno}</td>
                                            <td>{leave.department}</td>
                                            <td>{leave.fromdate}</td>
                                            <td>{leave.todate}</td>
                                            <td>{leave.noofdays}</td>
                                            <td>{leave.leavetype}</td>
                                            <td>{leave.leavestatus}</td>
                                            <td>
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
                                                    style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
                                                    alt="edit"
                                                    onClick={() => handleLeaveUpdateClick(leave)}
                                                />
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                                                    style={{ height: "20px", width: "25px", cursor: "pointer" }}
                                                    alt="delete"
                                                    onClick={() => handleLeaveDeleteClick(leave.cardno)}
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
    );
}

export default Leavelist;
