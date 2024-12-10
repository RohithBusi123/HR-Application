import { Link } from 'react-router-dom';
import { FormContext } from './FormContext';
import { useContext, useState } from 'react';

function Employeeloan() {
    const { loans = [], deleteloans, updateLoan } = useContext(FormContext);
    const [editingloan, seteditingloan] = useState(null);
    const [editedloan, seteditedloan] = useState({});

    const handleLoanDelete = (cardno) => {
        deleteloans(cardno);
    };

    const handleLoanEdit = (loan) => {
        seteditingloan(loan.cardno);
        seteditedloan(loan);
    };

    const handleInputLoanChange = (e) => {
        const { name, value } = e.target;
        seteditedloan({ ...editedloan, [name]: value });
    };

    const handleLoanUpdate = () => {
        updateLoan(editedloan);
        seteditingloan(null);
    };

    return (
        <div className="container">
            <Link style={{ marginLeft: "80%" }} to="/Addloan">Add Loan</Link>
            <div className="row">
                <div className="col-sm-12">
                    <h2>Employee Loans</h2>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Emp Name</th>
                                <th>Emp Code</th>
                                <th>Card No</th>
                                <th>Loan Name</th>
                                <th>Loan Amount</th>
                                <th>Int Rate</th>
                                <th>Emi Pay</th>
                                <th>Loan Date</th>
                                <th>Loan Type</th>
                                <th>Loan Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {Array.isArray(loans) && loans.map((loan) => (
                                <tr key={loan.cardno}>
                                    {editingloan === loan.cardno ? (
                                        <>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="employeename"
                                                    value={editedloan.employeename}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="selectempcode"
                                                    value={editedloan.selectempcode}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>{loan.cardno}</td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="loanname"
                                                    value={editedloan.loanname}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="loanamount"
                                                    value={editedloan.loanamount}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="interestrate"
                                                    value={editedloan.interestrate}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="number"
                                                    name="emipay"
                                                    value={editedloan.emipay}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="date"
                                                    name="emistartdate"
                                                    value={editedloan.emistartdate}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="selectlaontype"
                                                    value={editedloan.selectlaontype}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    name="loanstatus"
                                                    value={editedloan.loanstatus}
                                                    onChange={handleInputLoanChange}
                                                />
                                            </td>
                                            <td>
                                                <button onClick={handleLoanUpdate}>Save</button>
                                                <button onClick={() => seteditingloan(null)}>Cancel</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{loan.employeename}</td>
                                            <td>{loan.selectempcode}</td>
                                            <td>{loan.cardno}</td>
                                            <td>{loan.loanname}</td>
                                            <td>{loan.loanamount}</td>
                                            <td>{loan.interestrate}</td>
                                            <td>{loan.emipay}</td>
                                            <td>{loan.emistartdate}</td>
                                            <td>{loan.selectlaontype}</td>
                                            <td>{loan.loanstatus}</td>
                                            <td style={{ display: "flex" }}>
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/16312/16312068.png"
                                                    style={{ height: "20px", width: "25px", marginRight: "10px", cursor: "pointer" }}
                                                    alt="edit"
                                                    onClick={() => handleLoanEdit(loan)}
                                                />
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"
                                                    style={{ height: "20px", width: "25px", cursor: "pointer" }}
                                                    alt="delete"
                                                    onClick={() => handleLoanDelete(loan.cardno)}
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

export default Employeeloan;
