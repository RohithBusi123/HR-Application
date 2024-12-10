// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { FormContext } from './FormContext';
// import './pointer.css';

// function Education() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const { addEducationDetails, updateCount } = useContext(FormContext);
//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     addEducationDetails(data);
//     updateCount(); 
    
//     navigate("/firstdash");
//     // navigate('/employeeslist');
//   };
  
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-6">
//           <form onSubmit={handleSubmit(onSubmit)}>
          
//             <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
//               <span style={{ marginRight: '5px' }}>Designation:</span>
//               <label style={{ color: 'red' }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '23px' }} 
//               type="text" 
//               {...register('designation', { required: 'This field is required' })} 
//             />
//             {errors.designation && <p style={{color:"red"}}>{errors.designation.message}</p>}
          
//             <div style={{ display: "flex", alignItems: 'center', marginTop: '30px' }}>
//               <span style={{ marginRight: "5px" }}>CGPA:</span>
//               <label style={{ color: "red" }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '28px' }} 
//               type="text" 
//               {...register('cgpa', { required: 'This field is required' })} 
//             />
//             {errors.cgpa && <p style={{color:"red"}}>{errors.cgpa.message}</p>}

//             <div style={{ display: "flex", marginTop: "35px" }}>
//               <span style={{ marginRight: "5px" }}>Join Date:</span>
//               <label style={{ color: "red" }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '32px' }} 
//               type="text" 
//               {...register('joindate', { required: 'This field is required',pattern:{value:/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/i,message:"Please enter valid date format"}})} 
//             />
//             {errors.joindate && <p style={{color:"red"}}>{errors.joindate.message}</p>}

//             <div style={{ display: "flex", marginTop: "40px" }}>
//               <span style={{ marginRight: '5px' }}>Pincode:</span>
//               <label style={{ color: "red" }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '36px' }} 
//               type="text" 
//               {...register('pincode', { required: 'This field is required' })} 
//             />
//             {errors.pincode && <p style={{color:"red"}}>{errors.pincode.message}</p>}<br />

//             <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;















// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { FormContext } from './FormContext';
// import './pointer.css';

// function Education() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const { addEducationDetails, updateCount } = useContext(FormContext);
//   const navigate = useNavigate();
//   const [validatemessage,setvalidatemessage]=useState("");

//   const onSubmit = (data) => {
//     addEducationDetails(data);
//     updateCount(); 
//     if(data.pincode.includes(Number)){
//       setvalidatemessage('please enter valid value');

//     }
    
//     navigate("/firstdash");
//     // navigate('/employeeslist');
//   };
  
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-6">
//           <form onSubmit={handleSubmit(onSubmit)}>
          
//             <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
//               <span style={{ marginRight: '5px' }}>Designation:</span>
//               <label style={{ color: 'red' }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '23px' }} 
//               type="text" 
//               {...register('designation', { required: 'This field is required' })} 
//             />
//             {errors.designation && <p style={{color:"red"}}>{errors.designation.message}</p>}
          
//             <div style={{ display: "flex", alignItems: 'center', marginTop: '30px' }}>
//               <span style={{ marginRight: "5px" }}>CGPA:</span>
//               <label style={{ color: "red" }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '28px' }} 
//               type="text" 
//               {...register('cgpa', { required: 'This field is required' })} 
//             />
//             {errors.cgpa && <p style={{color:"red"}}>{errors.cgpa.message}</p>}

//             <div style={{ display: "flex", marginTop: "35px" }}>
//               <span style={{ marginRight: "5px" }}>Join Date:</span>
//               <label style={{ color: "red" }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '32px' }} 
//               type="text" 
//               {...register('joindate', { required: 'This field is required'})} 
//             />
           

//             <div style={{ display: "flex", marginTop: "40px" }}>
//               <span style={{ marginRight: '5px' }}>Pincode:</span>
//               <label style={{ color: "red" }}>*</label>
//             </div>
//             <input 
//               className="bottom-border-input" 
//               style={{ marginTop: '36px' }} 
//               type="text" 
//               {...register('pincode', { required: 'This field is required' })} 
//             />
//             {errors.pincode && <p style={{color:"red"}}>{errors.pincode.message}</p>}<br />

//             <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Education;






import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
import './pointer.css';

function Education() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { addEducationDetails, updateCount } = useContext(FormContext);
  const navigate = useNavigate();
  const [validatemessage, setValidatemessage] = useState("");

  const onSubmit = (data) => {
    // If the pincode validation fails, prevent form submission
    // if (!/^\d+$/.test(data.pincode)) {
    //   setValidatemessage('Please enter a valid pincode');
    //   return;
    // }
    
    addEducationDetails(data);
    updateCount();
    setValidatemessage(''); // Clear validation message if form is valid
    navigate("/firstdash");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <form onSubmit={handleSubmit(onSubmit)}>
          
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '25px' }}>
              <span style={{ marginRight: '5px' }}>Designation:</span>
              <label style={{ color: 'red' }}>*</label>
            </div>
            <input 
              className="bottom-border-input" 
              style={{ marginTop: '23px' }} 
              type="text" 
              {...register('designation', { required: 'This field is required'})} 
            />
            {errors.designation && <p style={{color:"red"}}>{errors.designation.message}</p>}
          
            <div style={{ display: "flex", alignItems: 'center', marginTop: '30px' }}>
              <span style={{ marginRight: "5px" }}>CGPA:</span>
              <label style={{ color: "red" }}>*</label>
            </div>
            <input 
              className="bottom-border-input" 
              style={{ marginTop: '28px' }} 
              type="text" 
              {...register('cgpa', { required: 'This field is required',pattern:{value:/^\d+\.\d+$/i,message:"invalid format"} })} 
            />
            {errors.cgpa && <p style={{color:"red"}}>{errors.cgpa.message}</p>}

            <div style={{ display: "flex", marginTop: "35px" }}>
              <span style={{ marginRight: "5px" }}>Join Date:</span>
              <label style={{ color: "red" }}>*</label>
            </div>
            <input 
              className="bottom-border-input" 
              style={{ marginTop: '32px' }} 
              type="text" 
              {...register('joindate', { required: 'This field is required',pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})} 
              
            /><br></br>
            {errors.joindate && <span style={{color:"red"}}>{errors.joindate.message}</span>}
           
            <div style={{ display: "flex", marginTop: "40px" }}>
              <span style={{ marginRight: '5px' }}>Pincode:</span>
              <label style={{ color: "red" }}>*</label>
            </div>
            <input 
              className="bottom-border-input" 
              style={{ marginTop: '36px' }} 
              type="text" 
              {...register('pincode', { 
                required: 'This field is required', 
                pattern: {
                  value: /^\d+$/,
                  message: 'Please enter a valid pincode'
                }
              })} 
            />
            {errors.pincode && <p style={{color:"red"}}>{errors.pincode.message}</p>}
            {validatemessage && <p style={{color:"red"}}>{validatemessage}</p>}
            <br />

            <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Education;
