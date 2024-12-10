// import React, { useContext, useState } from "react";
// import { FormContext } from "./FormContext";

// function Salaryprocess() {
//     const { paySetups } = useContext(FormContext);
//     const [paysetupquery, setpaysetupquery] = useState("");
//     const [aftersearchpaysetup, setaftersearchpaysetup] = useState([]);
//     const [errorpay, seterrorpay] = useState("");
//     const [datequery, setdatequery] = useState("");
//     const [monthquery, setmonthquery] = useState("");

//     const SearchPaySetUp = () => {
//         const newsearchpaysetups = paySetups.filter((paysetup) => {
//             const matchesCardNo = paysetup.cardno.toLowerCase().includes(paysetupquery.toLowerCase());
//             const matchesYear = datequery ? paysetup.effectivedate.slice(6, 10) <= datequery : true;
//             const matchesMonth = monthquery ? paysetup.effectivedate.slice(3, 5) <= monthquery : true;
//             return matchesCardNo && matchesYear && matchesMonth;
//         });

//         if( newsearchpaysetups.length > 0 ) {
//             setaftersearchpaysetup(newsearchpaysetups);
//             seterrorpay(""); 
        
//         } else {
//             setaftersearchpaysetup([]); 
//             seterrorpay("There are no results");
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search pay setup"
//                     value={paysetupquery}
//                     onChange={(e) => setpaysetupquery(e.target.value)}
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Enter year"
//                     value={datequery}
//                     onChange={(e) => setdatequery(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter month"
//                     value={monthquery}
//                     onChange={(e) => setmonthquery(e.target.value)}
//                 />
//                 <button onClick={SearchPaySetUp}>Search pay setup</button>
//             </div>
//             <div>
//                 {aftersearchpaysetup.length > 0  ?  (
//                     aftersearchpaysetup.map((paysetup) => (
//                         <span key={paysetup.cardno}>
//                             <h2>{paysetup.companyname}</h2>
//                         </span>
//                     ))
//                 ) : (
//                     <h4>{errorpay}</h4>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Salaryprocess;





// import React, { useContext, useState } from "react";
// import { FormContext } from "./FormContext";

// function Salaryprocess() {
//     const { paySetups } = useContext(FormContext);
//     const [paysetupquery, setpaysetupquery] = useState("");
//     const [aftersearchpaysetup, setaftersearchpaysetup] = useState([]);
//     const [errorpay, seterrorpay] = useState("");
//     const [datequery, setdatequery] = useState("");
//     const [monthquery, setmonthquery] = useState("");

//     const SearchPaySetUp = () => {
//         const newsearchpaysetups = paySetups.filter((paysetup) => {
//             const matchesCardNo = paysetup.cardno.toLowerCase().includes(paysetupquery.toLowerCase());
//             const matchesYear = datequery ? paysetup.effectivedate.slice(6, 10) <= datequery : true;
//             const matchesMonth = monthquery ? paysetup.effectivedate.slice(3, 5) <= monthquery : true;
//             return matchesCardNo && matchesYear && matchesMonth;
//         });

//         if( newsearchpaysetups.length > 0 ) {
//             setaftersearchpaysetup(newsearchpaysetups);
//             seterrorpay(""); 
        
//         } else {
//             setaftersearchpaysetup([]); 
//             seterrorpay("There are no results");
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search pay setup"
//                     value={paysetupquery}
//                     onChange={(e) => setpaysetupquery(e.target.value)}
//                 />
//                 <input 
//                     type="text"
//                     placeholder="Enter year"
//                     value={datequery}
//                     onChange={(e) => setdatequery(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter month"
//                     value={monthquery}
//                     onChange={(e) => setmonthquery(e.target.value)}
//                 />
//                 <button onClick={SearchPaySetUp}>Search pay setup</button>
//             </div>
//             <div>
//                 {aftersearchpaysetup.length > 0  ?  (
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>EmpName</th>
//                                 <th>Empcode</th>
//                                 <th>CompanyName</th>
//                             </tr>

//                         </thead>
//                         <tbody>
                        
//                             {aftersearchpaysetup.map((paysetup)=>(
//                                  <tr>
//                                     <td>{paysetup.selectempl}</td>
//                                     <td>{paysetup.empcode}</td>
//                                     <td>{paysetup.companyname}</td>
//                                 </tr>
//                             ))}
                         
//                         </tbody>
//                     </table>
//                 ) : (
//                     <h4>{errorpay}</h4>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Salaryprocess;




// import React, { useContext, useState } from "react";
// import { FormContext } from "./FormContext";

// function Salaryprocess() {
//     const { paySetups } = useContext(FormContext);
//     const [paysetupquery, setpaysetupquery] = useState("");
//     const [aftersearchpaysetup, setaftersearchpaysetup] = useState([]);
//     const [errorpay, seterrorpay] = useState("");
//     const [datequery, setdatequery] = useState("");
//     const [monthquery, setmonthquery] = useState("");

//     const SearchPaySetUp = () => {
//         const newsearchpaysetups = paySetups.filter((paysetup) => {
//             const matchesCardNo = paysetup.cardno.toLowerCase().includes(paysetupquery.toLowerCase());
//             const matchesYear = datequery ? paysetup.effectivedate.slice(6, 10) <= datequery : true;
//             const matchesMonth = monthquery ? paysetup.effectivedate.slice(3, 5) <= monthquery : true;
//             return matchesCardNo && matchesYear && matchesMonth;
//         });

//         if (newsearchpaysetups.length > 0) {
//             setaftersearchpaysetup(newsearchpaysetups);
//             seterrorpay("");
//         } else {
//             setaftersearchpaysetup([]);
//             seterrorpay("There are no results");
//         }
//     };

//     return (
//         <div>
//             <div>
//                 <input
//                     type="text"
//                     placeholder="Search pay setup"
//                     value={paysetupquery}
//                     onChange={(e) => setpaysetupquery(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter year"
//                     value={datequery}
//                     onChange={(e) => setdatequery(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter month"
//                     value={monthquery}
//                     onChange={(e) => setmonthquery(e.target.value)}
//                 />
//                 <button onClick={SearchPaySetUp}>Search pay setup</button>
//             </div>
//             <div>
//                 {aftersearchpaysetup.length > 0 ? (
//                     <table className="table" style={{marginTop:'3%'}}>
//                         <thead>
//                             <tr>
//                                 <th>EmpName</th>
//                                 <th>Empcode</th>
//                                 <th>CompanyName</th>
//                             </tr>
//                         </thead>
//                         <tbody className="table-group-divider">
//                             {aftersearchpaysetup.map((paysetup) => (
//                                 <tr key={paysetup.cardno}>
//                                     <td>{paysetup.selectempl}</td>
//                                     <td>{paysetup.empcode}</td>
//                                     <td>{paysetup.companyname}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 ) : (
//                     <h4>{errorpay}</h4>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Salaryprocess;



import React from "react";
function Salaryprocess(){
    return(
        <div style={{display:"flex"}}>
            <div >
                <button>Test1</button>
            </div>
            <div style={{marginLeft:"2%"}}>
                <button>Test2</button>
            </div>

        </div>

    )
}
export default Salaryprocess;










// empname,empcode








