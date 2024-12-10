// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; 

// function Login() {

//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();

//   const handleLoginSubmit = (data) => {
//     if (data.email === "rohit@gmail.com" && data.password === "Rohit$28") {
     
//       navigate('/dashboard'); 
//     } else {
//       window.alert("Invalid email or password");
//     }
//   };

//   return (
//     <div style={{border:"1px solid black",height:"653px",backgroundColor:"lightgreen"}}>
//       <div className='container'>
//         <div className='row'>
//           <div className='col-sm-7'>
//             <div style={{ height: "500px", padding: "3px 20px", marginTop: "15%", backgroundColor: "#48A948" }}>
//               <div className='col-sm-5' style={{ textAlign: "center", marginLeft: "80%", height: "527px", backgroundColor: "white", marginTop: "-15px", width: "70%", borderRadius: "2%" }}>
//                 <h2 style={{ paddingTop: "140px" }}>Login</h2>
//                 <form onSubmit={handleSubmit(handleLoginSubmit)}>
//                   <div className="input-container">
//                     <label>Email:</label>
//                     <input 
//                       type="email" 
                      
//                       {...register('email', { required: 'Email is required', pattern:{
//                         value: /^\S+@\S+$/i,
//                         message: 'Invalid email address'
                        
//                       }})} 
//                     />
//                   </div>
//                   {errors.email && <p style={{color:"red",marginLeft:"-10%"}}>{errors.email.message}</p>}
//                   <div className="input-container">
//                     <label>Password:</label>
//                     <input 
//                       type="password" 
                      
//                       {...register('password', { required: true })} 
//                     />
//                   </div>
//                   {errors.password && <p>{errors.password.message}</p>}
//                   <button 
//                     style={{ marginTop: "28px", padding: "6px 20px", backgroundColor: "lightgreen", color: "white", border: "none", borderRadius: "40px" }} 
//                     type="submit"
//                   >
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;





import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
   

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const handleLoginSubmit = (data) => {
    if (data.email === "rohit@gmail.com" && data.password === "Rohit$28") {
     
      navigate('/dashboard'); 
    } else {
      window.alert("Invalid email or password");
    }
  };

  return (
    <div style={{border:"1px solid black",height:"653px",backgroundColor:"lightgreen"}}>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-7'>
            <div style={{ height: "500px", padding: "3px 20px", marginTop: "15%", backgroundColor: "#48A948" }}>
              <div className='col-sm-5' style={{ textAlign: "center", marginLeft: "80%", height: "527px", backgroundColor: "white", marginTop: "-15px", width: "70%", borderRadius: "2%" }}>
                <h2 style={{ paddingTop: "140px" }}>Login</h2>
                <form onSubmit={handleSubmit(handleLoginSubmit)}>
                  <div className="input-container">
                    <label>Email:</label>
                    <input 
                      type="email" 
                      
                      {...register('email', { required: 'Email is required', pattern:{
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                        
                      }})} 
                    />
                  </div>
                  {errors.email && <p style={{color:"red",marginLeft:"-10%"}}>{errors.email.message}</p>}
                  <div className="input-container">
                    <label>Password:</label>
                    <input 
                      type="password" 
                      
                      {...register('password', { required: true })} 
                    />
                  </div>
                  {errors.password && <p>{errors.password.message}</p>}
                  <button 
                    style={{ marginTop: "28px", padding: "6px 20px", backgroundColor: "lightgreen", color: "white", border: "none", borderRadius: "40px" }} 
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;









