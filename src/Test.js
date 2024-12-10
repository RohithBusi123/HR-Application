import { useState } from "react";


function Testing(){
    const items=[
        {
            id:1,
            name:"rohit"
        },
        {
            id:2,
            name:"vijay"
        },
        {
            id:3,
            name:"vara"
        }

    ]
    const [item,setItem]=useState(items);
    const [varia,setVaria]=useState("");
    const RohitBusi=()=>{
        setItem([...item,{name:varia}])
        setVaria("");
    }
    return(
        <div className="container">
            <input  onChange={(e)=>setVaria(e.target.value)} value={varia} type="text" placeholder="enter name"/>
            <button onClick={RohitBusi} type="submit">Submit</button>
            {item.map((it)=>(
                <h2>{it.name}</h2>
            ))}
        </div>


    )
}
export default Testing;





// import React, { useState, useEffect } from "react";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import axios from 'axios'; // Axios for HTTP requests

// function Email() {
//     const [typeAlignment, setTypeAlignment] = useState('Personal');
//     const [statusAlignment, setStatusAlignment] = useState('Current');
//     const [enteredemail, setEnteredEmail] = useState("");
//     const [emailsarray, setEmailsArray] = useState([]);

//     // Fetch emails from the backend when the component mounts
//     useEffect(() => {
//         axios.get('/api/emails') // Adjust the endpoint as per your backend
//             .then(response => {
//                 setEmailsArray(response.data);
//             })
//             .catch(error => {
//                 console.error("There was an error fetching the emails!", error);
//             });
//     }, []);

//     const handleTypeChange = (event, newAlignment) => {
//         setTypeAlignment(newAlignment);
//     };

//     const handleStatusChange = (event, newAlignment) => {
//         setStatusAlignment(newAlignment);
//     };

//     const EmailSubmit = () => {
//         if (enteredemail.trim() !== "") {
//             axios.post('/api/emails', { email: enteredemail }) // Adjust the endpoint as per your backend
//                 .then(response => {
//                     setEmailsArray(response.data); // Assuming the backend returns the updated list
//                     setEnteredEmail("");
//                 })
//                 .catch(error => {
//                     console.error("There was an error submitting the email!", error);
//                 });
//         }
//     };

//     return (
//         <div style={{ border: "1px solid black", height: "300px", backgroundColor: "white" }}>
//             <div>
//                 <div style={{ display: "flex" }}>
//                     <h5 style={{ marginLeft: "2%", marginTop: "2%" }}>Emails</h5>
//                     <span style={{ marginTop: "2%", marginLeft: "2%" }}>
//                         ({emailsarray.length || 0})
//                     </span>
//                 </div>
//                 <div>
//                     <div>
//                         <span style={{ marginLeft: "2%" }}>Email</span>
//                     </div>
//                     <div>
//                         <input
//                             style={{ marginLeft: "2%", marginTop: "5px" }}
//                             type="text"
//                             placeholder="Enter email"
//                             value={enteredemail}
//                             onChange={(e) => setEnteredEmail(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "20px", marginLeft: "-30%" }}>
//                             <span style={{ marginLeft: "2%" }}>Type-optional</span>
//                             <ToggleButtonGroup
//                                 color="primary"
//                                 value={typeAlignment}
//                                 exclusive
//                                 onChange={handleTypeChange}
//                                 aria-label="Type"
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 <ToggleButton value="Personal">Personal</ToggleButton>
//                                 <ToggleButton value="Professional">Professional</ToggleButton>
//                             </ToggleButtonGroup>
//                         </div>
//                     </div>

//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "-28%" }}>
//                             <span style={{ marginLeft: "2%" }}>Status-optional</span>
//                             <ToggleButtonGroup
//                                 color="primary"
//                                 value={statusAlignment}
//                                 exclusive
//                                 onChange={handleStatusChange}
//                                 aria-label="Status"
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 <ToggleButton value="Current">Current</ToggleButton>
//                                 <ToggleButton value="Previous">Previous</ToggleButton>
//                             </ToggleButtonGroup>
//                         </div>
//                     </div>

//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "-28%" }}>
//                             <span>ConfidenceLevel-optional</span>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <div style={{ marginTop: "-2%" }}>
//                 <button
//                     onClick={EmailSubmit}
//                     style={{
//                         marginLeft: "70%",
//                         paddingTop: "6%",
//                         paddingBottom: "4.5%",
//                         paddingLeft: "10px",
//                         paddingRight: "10px",
//                         marginTop: "-80%",
//                         position: "relative",
//                         top: "-20px"
//                     }}
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Email;





















// import React, { useState, useEffect } from "react";
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import axios from 'axios';

// function Email() {
//     const [typeAlignment, setTypeAlignment] = useState('Personal');
//     const [statusAlignment, setStatusAlignment] = useState('Current');
//     const [enteredemail, setEnteredEmail] = useState("");
//     const [emailsarray, setEmailsArray] = useState([]);

//     // On component mount, load emails from localStorage and then from the backend
//     useEffect(() => {
//         const storedEmails = JSON.parse(localStorage.getItem("emailsarray"));
//         if (storedEmails) {
//             setEmailsArray(storedEmails);
//         }

//         axios.get('/api/emails')
//             .then(response => {
//                 setEmailsArray(response.data);
//                 localStorage.setItem("emailsarray", JSON.stringify(response.data));
//             })
//             .catch(error => {
//                 console.error("Error fetching emails from the backend!", error);
//             });
//     }, []);

//     const handleTypeChange = (event, newAlignment) => {
//         setTypeAlignment(newAlignment);
//     };

//     const handleStatusChange = (event, newAlignment) => {
//         setStatusAlignment(newAlignment);
//     };

//     const EmailSubmit = () => {
//         if (enteredemail.trim() !== "") {
//             const updatedEmailsArray = [...emailsarray, enteredemail];
//             setEmailsArray(updatedEmailsArray);
//             setEnteredEmail("");

//             localStorage.setItem("emailsarray", JSON.stringify(updatedEmailsArray));

//             axios.post('/api/emails', { email: enteredemail })
//                 .then(response => {
//                     setEmailsArray(response.data);  // Use backend response to sync state
//                     localStorage.setItem("emailsarray", JSON.stringify(response.data));
//                 })
//                 .catch(error => {
//                     console.error("Error submitting email to the backend!", error);
//                     // Optionally, handle the error, maybe retry later or notify the user
//                 });
//         }
//     };

//     return (
//         <div style={{ border: "1px solid black", height: "300px", backgroundColor: "white" }}>
//             <div>
//                 <div style={{ display: "flex" }}>
//                     <h5 style={{ marginLeft: "2%", marginTop: "2%" }}>Emails</h5>
//                     <span style={{ marginTop: "2%", marginLeft: "2%" }}>
//                         ({emailsarray.length || 0})
//                     </span>
//                 </div>
//                 <div>
//                     <div>
//                         <span style={{ marginLeft: "2%" }}>Email</span>
//                     </div>
//                     <div>
//                         <input
//                             style={{ marginLeft: "2%", marginTop: "5px" }}
//                             type="text"
//                             placeholder="Enter email"
//                             value={enteredemail}
//                             onChange={(e) => setEnteredEmail(e.target.value)}
//                         />
//                     </div>
//                 </div>
//             </div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "20px", marginLeft: "-30%" }}>
//                             <span style={{ marginLeft: "2%" }}>Type-optional</span>
//                             <ToggleButtonGroup
//                                 color="primary"
//                                 value={typeAlignment}
//                                 exclusive
//                                 onChange={handleTypeChange}
//                                 aria-label="Type"
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 <ToggleButton value="Personal">Personal</ToggleButton>
//                                 <ToggleButton value="Professional">Professional</ToggleButton>
//                             </ToggleButtonGroup>
//                         </div>
//                     </div>

//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "-28%" }}>
//                             <span style={{ marginLeft: "2%" }}>Status-optional</span>
//                             <ToggleButtonGroup
//                                 color="primary"
//                                 value={statusAlignment}
//                                 exclusive
//                                 onChange={handleStatusChange}
//                                 aria-label="Status"
//                                 style={{ marginLeft: "10px" }}
//                             >
//                                 <ToggleButton value="Current">Current</ToggleButton>
//                                 <ToggleButton value="Previous">Previous</ToggleButton>
//                             </ToggleButtonGroup>
//                         </div>
//                     </div>

//                     <div className="col-sm-3">
//                         <div style={{ marginTop: "-28%" }}>
//                             <span>ConfidenceLevel-optional</span>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             <div style={{ marginTop: "-2%" }}>
//                 <button
//                     onClick={EmailSubmit}
//                     style={{
//                         marginLeft: "70%",
//                         paddingTop: "6%",
//                         paddingBottom: "4.5%",
//                         paddingLeft: "10px",
//                         paddingRight: "10px",
//                         marginTop: "-80%",
//                         position: "relative",
//                         top: "-20px"
//                     }}
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Email;







