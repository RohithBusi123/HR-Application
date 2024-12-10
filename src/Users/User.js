// import { useContext } from "react";
// import { UserContext } from "./UserContext";
// function User(){
//     const details=useContext(UserContext);

//     return(
//         <div className="container">
//             <div className="row">
//                 <h2>First Name:{details.firstname}</h2>
//                 <h2>Last Name:{details.lastname}</h2>
//                 <h2>Email:{details.email}</h2>

//             </div>

//         </div>
//     )
// }
// export default User;

// import React from "react";

// function User({ user }) {
//     return (
//         <div className="container">
//             <div className="row">
//                 <h2>First Name: {user.firstname}</h2>
//                 <h2>Last Name: {user.lastname}</h2>
//                 <h2>Email: {user.email}</h2>
//             </div>
//         </div>
//     );
// }

// export default User;



// import React, { useState } from "react";
// import { UserContext } from "./UserContext";
// import Userlist from "./Userlist";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Adduser from "./Adduser";

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
//             <Router>
//                 <nav>
//                     <Link to="/">User List</Link> | <Link to="/add">Add User</Link>
//                 </nav>
                
//                     <Route exact path="/" component={Userlist} />
//                     <Route path="/add" component={Adduser} />
                
//             </Router>
//         </UserContext.Provider>
//     );
// }

// export default Users;


import React from "react";

function User({ user }) {
  return (
    <div className="container">
      <div className="row">
        <h2>First Name: {user.firstname}</h2>
        <h2>Last Name: {user.lastname}</h2>
        <h2>Email: {user.email}</h2>
      </div>
    </div>
  );
}

export default User;


