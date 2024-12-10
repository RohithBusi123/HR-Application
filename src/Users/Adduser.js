// import { useForm } from "react-hook-form";
// function Adduser(props){
//     const {add}=props;
//     const handleSubmit=(data)=>{
//         add(data);
//     }
//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text" placeholder="enter first name"/>
//             <input type="text" placeholder="enter last name"/>
//             <input type="email" placeholder="enter email"/>
//             <buuton type="submit" >Submit</buuton>
//         </form>

//     )
// }
// export default Adduser;


// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { UserContext } from "./UserContext";

// function Adduser() {
//     const { register, handleSubmit, reset } = useForm();
//     const { addUser } = useContext(UserContext);

//     const onSubmit = (data) => {
//         addUser(data);
//         reset(); // Clear the form after submission
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <input
//                 {...register("firstname")}
//                 type="text"
//                 placeholder="Enter first name"
//                 required
//             />
//             <input
//                 {...register("lastname")}
//                 type="text"
//                 placeholder="Enter last name"
//                 required
//             />
//             <input
//                 {...register("email")}
//                 type="email"
//                 placeholder="Enter email"
//                 required
//             />
//             <button type="submit">Submit</button>
//         </form>
//     );
// }

// export default Adduser;



import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "./UserContext";

function Adduser() {
  const { register, handleSubmit, reset } = useForm();
  const { addUser } = useContext(UserContext);

  const onSubmit = (data) => {
    addUser(data);
    reset(); // Clear the form after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstname")}
        type="text"
        placeholder="Enter first name"
        required
      />
      <input
        {...register("lastname")}
        type="text"
        placeholder="Enter last name"
        required
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Enter email"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Adduser;













