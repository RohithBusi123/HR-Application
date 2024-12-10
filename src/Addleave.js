// import { useContext, useState } from 'react';
// import {useForm} from 'react-hook-form';
// import { FormContext } from './FormContext';
// import { useNavigate } from 'react-router-dom';
// import "./pointer.css";

// function Addleave(){
//     const {Leaverequest}=useContext(FormContext);
//     const {register,handleSubmit,formState:{errors}}=useForm();
//     const navigate=useNavigate();
//     const onsubmit=(data)=>{
//         Leaverequest(data);
//         navigate("/Leavelist");
//     }
//     return(
//         <div style={{backgroundColor:"lightgray",height:"650px"}}>
           
//                 <div>
//                    <h4 style={{marginLeft:"1%"}}>Adding Leaves</h4>
//                     <div style={{backgroundColor:"white",height:"90vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
//                         <div  >
//                             <form onSubmit={handleSubmit(onsubmit)}>
//                                 <label style={{marginLeft:"1%"}}>Employee Name:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="employee name" {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should included"}})}/><br></br>
//                                 {errors.employeename && <span style={{color:"red"}}>{errors.employeename.message}</span>}<br></br>
//                                 <label style={{marginLeft:"1%"}}>Employee Code:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder='employee code' {...register('employeecode',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No alphabets should be involved"}})}/><br></br>
//                                 {errors.employeecode && <span style={{color:"red"}}>{errors.employeecode.message}</span>}
//                                 <label style={{marginLeft:"1%"}}>Card No:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="card no" {...register('cardno',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
//                                 {errors.cardno && <span style={{color:"red"}}>{errors.cardno.message}</span>}
//                                 <label style={{marginLeft:"1%"}}>Department:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder='department' {...register('department',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be included"}})}/><br></br>
//                                 {errors.department && <span style={{color:"red"}}>{errors.department.message}</span>}
//                                 <label style={{marginLeft:"1%"}}>From Date:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="fromdate" {...register('fromdate',{required:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
//                                 {errors.fromdate && <span style={{color:"red"}}>{errors.fromdate.message}</span>}<br></br>
//                                 <label style={{marginLeft:"1%"}}>To Date:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="todate" {...register('todate',{reqired:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
//                                 {errors.todate && <span style={{color:"red"}}>{errors.todate.message}</span>}<br></br>
//                                 <label style={{marginLeft:"1%"}}>No of Days:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder='noofdays' {...register('noofdays',{required:"This field is required",pattern:{value:/[0-9]+$/i,message:"No characters should be involved"}})}/><br></br>
//                                 {errors.noofdays && <span style={{color:"red"}}>{errors.noofdays.message}</span>}
//                                 <label style={{marginLeft:"1%"}}>Leave Type:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="leavetype" {...register('leavetype',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
//                                 {errors.leavetype && <span style={{color:"red"}}>{errors.leavetype.message}</span>}
//                                 <label style={{marginLeft:"1%"}}>Leave Status:</label><br></br>
//                                 <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="leavestatus" {...register('leavestatus')}/><br></br>
//                                 <button style={{marginLeft:"1%",marginTop:"1%"}}type="submit">Addleave</button>
//                             </form>

//                         </div>

//                     </div>

//                 </div>
//         </div>
        
//     )
// }
// export default Addleave;





import { useContext, useState } from 'react';
import {useForm} from 'react-hook-form';
import { FormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';
import "./pointer.css";

function Addleave(){
    const {Leaverequest}=useContext(FormContext);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate();
    const onsubmit=(data)=>{
        Leaverequest(data);
        navigate("/Leavelist");
    }
    return(
        <div style={{backgroundColor:"lightgray",height:"650px"}}>
           
                <div>
                   <h4 style={{marginLeft:"1%"}}>Adding Leaves</h4>
                    <div style={{backgroundColor:"white",height:"90vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
                        <div className='container' >
                            <div className='row'>
                                <div className='col-sm-6' style={{marginTop:"2%"}}>
                                        <form onSubmit={handleSubmit(onsubmit)}>
                                        <div>
                                        <span style={{marginLeft:"1%"}}>Employee Name:</span>
                                        <span style={{color:"red"}}> *</span>
                                           
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="employee name" {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should included"}})}/><br></br>
                                        {errors.employeename && <span style={{color:"red"}}>{errors.employeename.message}</span>}<br></br>
                                        <div>
                                        <span style={{marginLeft:"1%"}}>Employee Code:</span>
                                        <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder='employee code' {...register('employeecode',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No alphabets should be involved"}})}/><br></br>
                                        {errors.employeecode && <span style={{color:"red"}}>{errors.employeecode.message}</span>}
                                        <div>
                                           <span style={{marginLeft:"1%"}}>Card No:</span>
                                           <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="card no" {...register('cardno',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
                                        {errors.cardno && <span style={{color:"red"}}>{errors.cardno.message}</span>}
                                        <div>
                                            <span style={{marginLeft:"1%"}}>Department:</span>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder='department' {...register('department',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be included"}})}/><br></br>
                                        {errors.department && <span style={{color:"red"}}>{errors.department.message}</span>}
                                        <div>
                                           <span style={{marginLeft:"1%"}}>From Date:</span>
                                           <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="fromdate" {...register('fromdate',{required:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                                        {errors.fromdate && <span style={{color:"red"}}>{errors.fromdate.message}</span>}<br></br>
                                        
                                    </form>

                                </div>
                                <div className='col-sm-6' style={{marginTop:"2%"}}>
                                    <form onSubmit={handleSubmit(onsubmit)}>
                                        <div>
                                           <span style={{marginLeft:"1%"}}>To Date:</span>
                                           <span style={{color:"rd"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="todate" {...register('todate',{reqired:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                                        {errors.todate && <span style={{color:"red"}}>{errors.todate.message}</span>}<br></br>
                                        <div>
                                             <span style={{marginLeft:"1%"}}>No of Days:</span>
                                             <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder='noofdays' {...register('noofdays',{required:"This field is required",pattern:{value:/[0-9]+$/i,message:"No characters should be involved"}})}/><br></br>
                                        {errors.noofdays && <span style={{color:"red"}}>{errors.noofdays.message}</span>}
                                        <div>
                                             <span style={{marginLeft:"1%"}}>Leave Type:</span>
                                             <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="leavetype" {...register('leavetype',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
                                        {errors.leavetype && <span style={{color:"red"}}>{errors.leavetype.message}</span>}
                                        <div>
                                            <span style={{marginLeft:"1%"}}>Leave Status:</span>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"0.5%"}} className='bottom-border-input' type="text" placeholder="leavestatus" {...register('leavestatus')}/><br></br>
                                        <button style={{marginLeft:"1%",marginTop:"3%"}}type="submit">Addleave</button>
                                    </form>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
        </div>
        
    )
}
export default Addleave;