import Employeeconveyance from "./Employeeconveyance";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContext } from "./FormContext";
function Addpaysetup(){
    const {handlePaysetdata}=useContext(FormContext);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate();
    const employees=["rohittesting","testing","test","testingtest"]
    const [selectempl,setselectempl]=useState("");
    const [selectsalaries,setselectsalaries]=useState("");
    const handleEmployeeChange=(event)=>{
        setselectempl(event.target.value);
        

    }
    
    const onsubmit=(data)=>{
        handlePaysetdata({...data,selectempl,selectsalaries});
        console.log(data);
        navigate("/Salarysetup");

    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <label>Select Employee:</label><br></br>
                        <select value={selectempl} onChange={handleEmployeeChange}>
                        <option><label>choose employee</label></option>
                            {employees.map((employe)=>(
                                <option>{employe}</option>
                            
                            
                            ))}
                        </select><br></br>

                        
                      
                       <label>ESINO:</label><br></br>
                       <input type="text" placeholder="esino" {...register('esino',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be involved"}})}/><br></br>
                       {errors.esino && <span style={{color:"red"}}>{errors.esino.message}</span>}<br></br>
                       <label>EmpCode</label><br></br>
                       <input type="text" placeholder="empcode" {...register('empcode',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be involved"}})}/><br></br>
                       {errors.empcode && <span style={{color:"red"}}>{errors.empcode.message}</span>}<br></br>
                       <label>Card No</label><br></br>
                       <input type="text" placeholder="cardno" {...register('cardno',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
                       {errors.cardno && <span style={{color:"red"}}>{errors.cardno.message}</span>}<br></br>
                       <label>Designation</label><br></br>
                       <input type="text" placeholder="designation" {...register('designation',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
                       {errors.designation && <span style={{color:"red"}}>{errors.designation.message}</span>}<br></br>
                       <label>comapnyname</label><br></br>
                       <input type="text" placeholder="companyname" {...register('companyname',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
                       {errors.companyname && <span>{errors.companyname.message}</span>}<br></br>
                       <label>salaryaccount</label><br></br>
                       <input type="text" placeholder="salaryaccount" {...register('salaryaccount',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
                       {errors.salaryaccount && <span style={{color:"red"}}>{errors.salaryaccount.message}</span>}<br></br>
                       <label>EffectiveDate</label><br></br>
                       <input type="text" placeholder="effectivedate" {...register('effectivedate',{reqired:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                       
                       {errors.effectivedate && <span style={{color:"red"}}>{errors.effectivedate.message}</span>}<br></br>
                       <label>Department:</label><br></br>
                       <input type="text" placeholder="department" {...register('department',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
                       {errors.department && <span style={{color:"red"}}>{errors.department.message}</span>}<br></br>
                       <button type="submit">Submitpay</button>

                       

                                        
                        
                    </form>

                </div>

            </div>

        </div>
    )
}
export default Addpaysetup;







// import Employeeconveyance from "./Employeeconveyance";
// import { useForm } from "react-hook-form";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FormContext } from "./FormContext";
// function Addpaysetup(){
//     const {handlePaysetdata}=useContext(FormContext);
//     const {register,handleSubmit,formState:{errors}}=useForm();
//     const navigate=useNavigate();
//     const employees=["rohittesting","testing","test","testingtest"]
//     const [selectempl,setselectempl]=useState("");
//     const [selectsalaries,setselectsalaries]=useState("");
//     const handleEmployeeChange=(event)=>{
//         setselectempl(event.target.value);
        

//     }
    
//     const onsubmit=(data)=>{
//         handlePaysetdata({...data,selectempl,selectsalaries});
//         console.log(data);
//         navigate("/Salarysetup");

//     }
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-8">
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <label>Select Employee:</label><br></br>
//                         <select value={selectempl} onChange={handleEmployeeChange}>
//                         <option><label>choose employee</label></option>
//                             {employees.map((employe)=>(
//                                 <option>{employe}</option>
                            
                            
//                             ))}
//                         </select><br></br>

                        
                      
//                        <label>ESINO:</label><br></br>
//                        <input type="text" placeholder="esino" {...register('esino',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be involved"}})}/><br></br>
//                        {errors.esino && <span style={{color:"red"}}>{errors.esino.message}</span>}<br></br>
//                        <label>EmpCode</label><br></br>
//                        <input type="text" placeholder="empcode" {...register('empcode',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be involved"}})}/><br></br>
//                        {errors.empcode && <span style={{color:"red"}}>{errors.empcode.message}</span>}<br></br>
//                        <label>Card No</label><br></br>
//                        <input type="text" placeholder="cardno" {...register('cardno',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
//                        {errors.cardno && <span style={{color:"red"}}>{errors.cardno.message}</span>}<br></br>
//                        <label>Designation</label><br></br>
//                        <input type="text" placeholder="designation" {...register('designation',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
//                        {errors.designation && <span style={{color:"red"}}>{errors.designation.message}</span>}<br></br>
//                        <label>comapnyname</label><br></br>
//                        <input type="text" placeholder="companyname" {...register('companyname',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
//                        {errors.companyname && <span>{errors.companyname.message}</span>}<br></br>
                       

//                        style={{marginTop:"2%"}}

                                        
                        
//                     </form>

//                 </div>
//                 <div className="col-sm-4">
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <label>salaryaccount</label><br></br>
//                         <input type="text" placeholder="salaryaccount" {...register('salaryaccount',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
//                         {errors.salaryaccount && <span style={{color:"red"}}>{errors.salaryaccount.message}</span>}<br></br>
//                         <label>EffectiveDate</label><br></br>
//                         <input type="text" placeholder="effectivedate" {...register('effectivedate',{reqired:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                        
//                         {errors.effectivedate && <span style={{color:"red"}}>{errors.effectivedate.message}</span>}<br></br>
//                         <label>Department:</label><br></br>
//                         <input type="text" placeholder="department" {...register('department',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
//                         {errors.department && <span style={{color:"red"}}>{errors.department.message}</span>}<br></br>
//                         <button type="submit">Submitpay</button>
//                     </form>


//                 </div>

//             </div>

//         </div>
//     )
// }
// export default Addpaysetup;




