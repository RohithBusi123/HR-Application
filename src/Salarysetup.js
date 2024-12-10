import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FormContext } from './FormContext';

function Salarysetup() {
    const { paySetups, deletepaysetup, savePaySetUp } = useContext(FormContext);
    const [editingpaysetup, setEditingPaysetup] = useState(null);
    const [editedpaysetup, setEditedPaysetup] = useState({});

    const handleDeletePaysetup = (cardno) => {
        deletepaysetup(cardno);
    };

    const handleEditPaysetup = (paysetup) => {
        setEditingPaysetup(paysetup.cardno);
        setEditedPaysetup(paysetup);
    };

    const handleInputPaysetupChange = (e) => {
        const { name, value } = e.target;
        setEditedPaysetup({ ...editedpaysetup, [name]: value });
    };

    const handleSavePaySetup = () => {
        savePaySetUp(editedpaysetup);
        setEditingPaysetup(null);
    };

    const handleCancelEdit = () => {
        setEditingPaysetup(null);
    };

    return (
        <div className='container'>
            <Link style={{ marginLeft: '80%' }} to="/Addpaysetup">Add Pay Setup</Link>
            <div className="row">
                <div className='col-sm-12'>
                    <h4>Salary Setup</h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>EmpName</th>
                                <th>EmpCode</th>
                                <th>CardNo</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>CompanyName</th>
                                <th>SalaryAccount</th>
                                <th>EffectiveDate</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {Array.isArray(paySetups) && paySetups.map((paysetup) => (
                                <tr key={paysetup.cardno}>
                                    {editingpaysetup === paysetup.cardno ? (
                                        <>
                                            <td>
                                                <input
                                                    type='text'
                                                    name="selectempl"
                                                    value={editedpaysetup.selectempl}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type='text'
                                                    name="empcode"
                                                    value={editedpaysetup.empcode}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>{paysetup.cardno}</td>
                                            <td>
                                                <input
                                                    type='text'
                                                    name="department"
                                                    value={editedpaysetup.department}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type='text'
                                                    name="designation"
                                                    value={editedpaysetup.designation}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type='text'
                                                    name="companyname"
                                                    value={editedpaysetup.companyname}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type='text'
                                                    name="salaryaccount"
                                                    value={editedpaysetup.salaryaccount}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type='date'
                                                    name="effectivedate"
                                                    value={editedpaysetup.effectivedate}
                                                    onChange={handleInputPaysetupChange}
                                                />
                                            </td>
                                            <td>
                                                <button onClick={handleSavePaySetup}>Save</button>
                                                <button onClick={handleCancelEdit}>Cancel</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{paysetup.selectempl}</td>
                                            <td>{paysetup.empcode}</td>
                                            <td>{paysetup.cardno}</td>
                                            <td>{paysetup.department}</td>
                                            <td>{paysetup.designation}</td>
                                            <td>{paysetup.companyname}</td>
                                            <td>{paysetup.salaryaccount}</td>
                                            <td>{paysetup.effectivedate}</td>
                                            <td style={{ display: "flex" }}>
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
                                                    style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
                                                    alt="edit"
                                                    onClick={() => handleEditPaysetup(paysetup)}
                                                />
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                                                    style={{ height: "20px", width: "25px", cursor: "pointer" }}
                                                    alt="delete"
                                                    onClick={() => handleDeletePaysetup(paysetup.cardno)}
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

export default Salarysetup;












