// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FormContext } from './FormContext';
// import "./pointer.css";
// import {useForm} from 'react-hook-form';

// function Basicdetails() {
//   const { addBasicDetails } = useContext(FormContext);
//   const {register,handleSubmit,formState:{errors}}=useForm();

//   const [basicData, setBasicData] = useState({
//     empNo: '',
//     fullName: '',
//     fatherName: '',
//     email: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setBasicData({ ...basicData, [e.target.name]: e.target.value });
//   };

//   const navigateToEducation = () => {
//     addBasicDetails(basicData);
//     navigate('/employeescreate/education');
//   };
  

//   return (
//     <div className="container">
//       <div className="row">
//         <div className='col-sm-6'>
//         <div style={{ display: "flex", marginTop: "25px" }}>
//         <span style={{marginRight:"5px"}} >Emp No:</span>
//         <span style={{color:"red"}}>*</span>
//         </div>
//         <input className="bottom-border-input" name="empNo" style={{ marginTop: "24px" }} type="text" value={basicData.empNo} onChange={handleChange} />
//         <div style={{ display: "flex", marginTop: "30px" }}>
//         <span style={{marginRight:"5px"}} >full Name:</span>
//         <span style={{color:"red"}}>*</span>
//         </div>
//         <input className="bottom-border-input" name="fullName" style={{ marginTop: "24px" }} type="text" value={basicData.fullName} onChange={handleChange} />
        
        
          
         
          
          
//           <div style={{ display: "flex", marginTop: "35px" }}>
//           <span  style={{marginRight:"5px"}}>Father Name:</span>
//           <span style={{color:"red"}}>*</span>
//           </div>
//           <input className="bottom-border-input" name="fatherName" style={{ marginTop: "32px" }} type="text" value={basicData.fatherName} onChange={handleChange} />
//           <div style={{ display: "flex", marginTop: "40px" }}>
//           <span style={{marginRight:"5px"}} >Email:</span>
//           <span style={{color:"red"}}>*</span>
//           </div>
//           <input className="bottom-border-input" name="email" style={{ marginTop: "36px" }} type="email" value={basicData.email} onChange={handleChange} />
//         </div>
//       </div>
//       <button onClick={navigateToEducation} style={{ marginTop: "20px" }}>Proceed to Education</button>
//     </div>
//   );
// }

// export default Basicdetails;







import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';
import "./pointer.css";
import { useForm } from 'react-hook-form';

function Basicdetails() {
  const { addBasicDetails } = useContext(FormContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const [basicData, setBasicData] = useState({
    empNo: '',
    fullName: '',
    fatherName: '',
    email: ''
  });

  

  // Watch for form data changes
  const formData = watch();

  useEffect(() => {
    if (Object.values(formData).every(value => value !== '')) {
      addBasicDetails(formData);
    }
  }, [formData, addBasicDetails]);

  const handleChange = (e) => {
    setBasicData({ ...basicData, [e.target.name]: e.target.value });
  };

  const navigateToEducation = () => {
    navigate('/employeescreate/education');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(navigateToEducation)}>
        <div className="row">
          <div className='col-sm-6'>
            <div style={{ display: "flex", marginTop: "25px" }}>
              <span style={{ marginRight: "5px" }}>Emp No:</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="bottom-border-input"
              name="empNo"
              style={{ marginTop: "24px" }}
              type="text"
              {...register('empNo', { required: 'Emp No is required' })}
            />
            {errors.empNo && <p style={{ color: 'red' }}>{errors.empNo.message}</p>}

            <div style={{ display: "flex", marginTop: "30px" }}>
              <span style={{ marginRight: "5px" }}>Full Name:</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="bottom-border-input"
              name="fullName"
              style={{ marginTop: "24px" }}
              type="text"
              {...register('fullName', { required: 'Full Name is required' })}
            />
            {errors.fullName && <p style={{ color: 'red' }}>{errors.fullName.message}</p>}

            <div style={{ display: "flex", marginTop: "35px" }}>
              <span style={{ marginRight: "5px" }}>Father Name:</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="bottom-border-input"
              name="fatherName"
              style={{ marginTop: "32px" }}
              type="text"
              {...register('fatherName', { required: 'Father Name is required' })}
            />
            {errors.fatherName && <p style={{ color: 'red' }}>{errors.fatherName.message}</p>}

            <div style={{ display: "flex", marginTop: "40px" }}>
              <span style={{ marginRight: "5px" }}>Email:</span>
              <span style={{ color: "red" }}>*</span>
            </div>
            <input
              className="bottom-border-input"
              name="email"
              style={{ marginTop: "36px" }}
              type="email"
              {...register('email', { required: 'Email is required' })}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </div>
        </div>
        {/* <button type="submit" style={{ marginTop: "20px" }}>Proceed to Education</button> */}
      </form>
    </div>
  );
}

export default Basicdetails;







