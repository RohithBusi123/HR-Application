import { Link } from "react-router-dom";
import { useContext ,useState } from "react";
import { FormContext } from "./FormContext";

function Employeeconveyance(){
    
    const {conveyances,deleteconveyance,updateConveyance}=useContext(FormContext);
    const [editingconveyance,seteditingconveyance]=useState(null);
    const [editedconveyance,seteditedconveyance]=useState([]);
   
    const handleConveydelete=(amount)=>{
        deleteconveyance(amount);
        


    }
    const handleConveyUpdate=(conveyance)=>{
        seteditingconveyance(conveyance.amount);
        seteditedconveyance(conveyance);
    }
    const handleInputEditConveyance=(e)=>{
        const {name,value}=e.target;
        seteditedconveyance ({...editedconveyance,[name]:value});
        
       
        
  };
  const handleSaveConveyance=()=>{
    updateConveyance(editedconveyance);
    seteditingconveyance(null);
  }
        
    
    
    return(
        <div >
            <Link  style={{marginLeft:"80%"}} to="/Addconveyance">Addconveyance</Link>
            <div >
                <div >
                    <h4>Employee Coveyance</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>EmployeeName:</th>
                                <th>CompanyName</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                           {conveyances.map((conveyance)=>(
                            <tr>
                            {editingconveyance === conveyance.amount ? (
                              <>
                                <td>
                                  <input 
                                    type="text" 
                                    name="selectemployee" 
                                    value={editedconveyance.selectemployee} 
                                    onChange={handleInputEditConveyance} 
                                  />
                                </td>
                                <td>
                                  <input 
                                    type="text" 
                                    name="selectcompany" 
                                    value={editedconveyance.selectcompany} 
                                    onChange={handleInputEditConveyance} 
                                  />
                                </td>
                                <td>
                                  <input 
                                    type="text" 
                                    name="amount" 
                                    value={editedconveyance.amount} 
                                    onChange={handleInputEditConveyance} 
                                  />
                                </td>
                                <td>
                                  <input 
                                    type="text" 
                                    name="date" 
                                    value={editedconveyance.date} 
                                    onChange={handleInputEditConveyance} 
                                  />
                                </td>
                                <td>
                                  {/* <button onClick={() => updateConveyance(editedconveyance)}>Save</button> */}
                                  <button onClick={handleSaveConveyance}>Save</button>
                                 
                                </td>
                              </>
                            ) : (
                              <>
                                <td>{conveyance.selectemployee}</td>
                                <td>{conveyance.selectcompany}</td>
                                <td>{conveyance.amount}</td>
                                <td>{conveyance.date}</td>
                                <td>
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
                                    style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
                                    alt="edit"
                                    onClick={() => handleConveyUpdate(conveyance)}
                                  />
                                  <img
                                    src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                                    style={{ height: "20px", width: "25px", cursor: "pointer" }}
                                    alt="delete"
                                    onClick={() => handleConveydelete(conveyance.amount)}
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
    )
}
export default Employeeconveyance;


