// import User from "../Users/User";
// function Userlist(props){
//     const details={props};

    
//     return(
//         <div className="container">
//             <div className="row">
//                 <User data={details}/>

//             </div>

//         </div>

//     )
// }
// export default Userlist;


import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./UserContext";

function Userlist() {
    const { users } = useContext(UserContext);

    return (
        <div className="container">
            <div className="row">
                {users.map((user) => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Userlist;