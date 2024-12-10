// import React from "react";
// import { UserContext } from "./UserContext";
// import Userlist from "./Userlist";
// import Adduser from "./Adduser";
// import { useState } from "react";
// function Users(){
//     const details=[
//         {
//             id:1,
//             firstname:"rohit",
//             lastname:"busi",
//             email:"rohit@gmail.com"
//         },
//         {
//             id:2,
//             firstname:"vijay",
//             lastname:"busi",
//             email:"vijay@gmail.com"
//         },
//         {
//             id:3,
//             firstname:"vara",
//             lastname:"busi",
//             email:"vara@gmail.com"
//         },
//         {
//             id:4,
//             firstname:"bunny",
//             lastname:"busi",
//             email:"bunny@gmail.com"
//         }
//     ]
//     const [roi,setRoi]=useState("");
    
//     const add=(data)=>{
//         setRoi([...details,{...data}])
        
//     }
    
//     return(
//         <UserContext.Provider value={{details,add}}>
//             <Userlist/>
//             <Adduser/>


//         </UserContext.Provider>

//     )
// }


// export default Users;


// import React, { useState } from "react";
// import { UserContext } from "./UserContext";
// import Userlist from "./Userlist";

// function Users() {
//     const [users, setUsers] = useState([
//         { id: 1, firstname: "Rohit", lastname: "Busi", email: "rohit@gmail.com" },
//         { id: 2, firstname: "Vijay", lastname: "Busi", email: "vijay@gmail.com" },
//         { id: 3, firstname: "Vara", lastname: "Busi", email: "vara@gmail.com" },
//         { id: 4, firstname: "Bunny", lastname: "Busi", email: "bunny@gmail.com" }
//     ]);

//     const addUser = (user) => {
//         setUsers([...users, { id: users.length + 1, ...user }]);
//     };

//     return (
//         <UserContext.Provider value={{ users, addUser }}>
//             <Userlist />
//         </UserContext.Provider>
//     );
// }

// export default Users;


import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Userlist from "./Userlist";
import Adduser from "./Adduser";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, firstname: "Rohit", lastname: "Busi", email: "rohit@gmail.com" },
    { id: 2, firstname: "Vijay", lastname: "Busi", email: "vijay@gmail.com" },
    { id: 3, firstname: "Vara", lastname: "Busi", email: "vara@gmail.com" },
    { id: 4, firstname: "Bunny", lastname: "Busi", email: "bunny@gmail.com" }
  ]);

  const addUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
     <div className="container">
        <div className="row">
            <div className="col-sm-4">
            <Userlist />
           

            </div>
            <div className="col-sm-8">
                <Adduser/>

            </div>

        </div>

     </div>
    </UserContext.Provider>
  );
}

export default Users;







