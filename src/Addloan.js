// import {useForm} from 'react-hook-form';
// import {useState} from 'react';
// import { FormContext } from './FormContext';
// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./pointer.css";
// function Addloan(){
//     const {Rohitloansubmit}=useContext(FormContext);
//     const navigate=useNavigate();
//     const {register,handleSubmit,formState:{errors}}=useForm();
//     const employeeCodes=["001","002","003","003","004","005"];
//     const loantypes=["carloan","homeloan","personalloan","educationallaon"];
//     const [selectempcode,setselectempcode]=useState("");
//     const [selectlaontype,setselectloantype]=useState("");

//     const handleEmpCodeChange=(event)=>{
//         setselectempcode(event.target.value);

        

//     }
//     const handlelaonChange=(event)=>{
//         setselectloantype(event.target.value);

        

//     }
    
//         const onsubmit=(data)=>{
//             Rohitloansubmit({...data,selectempcode,selectlaontype});
//             navigate("/Employeeloan");
           
            
    
//         }

    
    
    
//     return(
        
//         <div className='container'>
//             <div className='row'>
//                 <div className='col-sm-4'>
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <span>Employee Name:</span>
//                         <input className="bottom-border-input" type="text"  {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
//                         {errors.employeename && <span style={{color:"red"}}>{errors.employeename.message}</span>}
//                         <span>Loan Name or Advance Name</span><br></br>
//                         <input  className="bottom-border-input" type="text" {...register("loanname",{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
//                         {errors.loanname && <span style={{color:"red"}}>{errors.loanname.message}</span>}
//                         <span>Loan Amount</span><br></br>
//                         <input className="bottom-border-input" type="text" {...register("loanamount",{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be involved"}})}></input><br></br>
//                         {errors.loanamount && <span style={{color:"red"}}>{errors.loanamount.message}</span>}
//                         <span>CardNo</span><br></br>
//                         <input className="bottom-border-input" type="text" {...register('cardno',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}></input><br></br>
//                         {errors.cardno && <span style={{color:"red"}}>{errors.cardno.message}</span>}
//                         <span>Emi start date</span><br></br>
//                         <input className="bottom-border-input" type="text" {...register("emistartdate",{reqired:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}></input><br></br>
//                         {errors.emistartdate && <span style={{color:"red"}}>{errors.emistartdate.message}</span>}
//                         <span>Interest Rate:</span><br></br>
//                         <input className="bottom-border-input" type="text" {...register("interestrate",{required:'true',pattern:{value:/^[0-9][0-9].[0-9][0-9]%/i,message:"Incorrect format"}})}/><br></br>
//                         {errors.interestrate && <span style={{color:"red"}}>{errors.interestrate.message}</span>}
//                         <span>Emi Pay:</span><br></br>
//                         <input className="bottom-border-input" type="text" {...register("emipay",{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters are involved"}})}/><br></br>
//                         <span>{errors.emipay && <span style={{color:"red"}}>{errors.emipay.message}</span>}</span>
//                         <span>Loan Status:</span><br></br>
//                         <input className="bottom-border-input" type="text" {...register("loanstatus")}/><br></br>
//                         <span>Employee Loan</span><br></br>
                       
                        
//                         <select  className="bottom-border-input" style={{padding:"0px 50px"}} value={selectlaontype} onChange={handlelaonChange}>
//                              <option value="" disabled></option>
//                             {loantypes.map((laty)=>(
//                                 <option >
//                                     <span >{laty}</span>

//                                 </option>
                                

//                             ))}
                            
//                         </select><br></br>
//                         <span>Employee Code:</span><br></br>
//                         <select className="bottom-border-input" style={{padding:"0px 50px"}} value={selectempcode} onChange={handleEmpCodeChange}>
//                              <option value="" disabled></option>
//                             {employeeCodes.map((empcode)=>(
//                                 <option >
//                                     <span >{empcode}</span>

//                                 </option>
                                

//                             ))}
                            
//                         </select><br></br>
//                         <button type="submit">Submit</button><br></br>
//                         {/* <button>Cancel</button> */}


//                     </form>
                   
//                 </div>

//             </div>

//         </div>
//     )
// }
// export default Addloan;













import {useForm} from 'react-hook-form';
import {useState} from 'react';
import { FormContext } from './FormContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./pointer.css";
function Addloan(){
    const {Rohitloansubmit}=useContext(FormContext);
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const employeeCodes=["001","002","003","003","004","005"];
    const loantypes=["carloan","homeloan","personalloan","educationallaon"];
    const [selectempcode,setselectempcode]=useState("");
    const [selectlaontype,setselectloantype]=useState("");

    const handleEmpCodeChange=(event)=>{
        setselectempcode(event.target.value);

        

    }
    const handlelaonChange=(event)=>{
        setselectloantype(event.target.value);

        

    }
    
        const onsubmit=(data)=>{
            Rohitloansubmit({...data,selectempcode,selectlaontype});
            navigate("/Employeeloan");
           
            
    
        }

    
    
    
    return(
        
        <div className='container'>
            <div className='row'>
                <div className='col-sm-6' style={{marginTop:"2%"}}>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div>
                            <span>Employee Name:</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input className="bottom-border-input" type="text"  {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
                        {errors.employeename && <span style={{color:"red"}}>{errors.employeename.message}</span>}
                        <div>
                            <span>Loan Name or Advance Name</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input  className="bottom-border-input" type="text" {...register("loanname",{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
                        {errors.loanname && <span style={{color:"red"}}>{errors.loanname.message}</span>}
                        <div>
                            <span>Loan Amount</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input className="bottom-border-input" type="text" {...register("loanamount",{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be involved"}})}></input><br></br>
                        {errors.loanamount && <span style={{color:"red"}}>{errors.loanamount.message}</span>}
                        <div>
                            <span>CardNo</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input className="bottom-border-input" type="text" {...register('cardno',{required:"This field is required",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}></input><br></br>
                        {errors.cardno && <span style={{color:"red"}}>{errors.cardno.message}</span>}
                        <div>
                            <span>Emi start date</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input className="bottom-border-input" type="text" {...register("emistartdate",{reqired:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}></input><br></br>
                        {errors.emistartdate && <span style={{color:"red"}}>{errors.emistartdate.message}</span>}
                        <div>
                            <span>Interest Rate:</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input className="bottom-border-input" type="text" {...register("interestrate",{required:'true',pattern:{value:/^[0-9][0-9].[0-9][0-9]%/i,message:"Incorrect format"}})}/><br></br>
                        {errors.interestrate && <span style={{color:"red"}}>{errors.interestrate.message}</span>}
                        <div>
                            <span>Emi Pay:</span>
                            <span style={{color:"red"}}>*</span>
                        </div>
                        <input className="bottom-border-input" type="text" {...register("emipay",{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No characters are involved"}})}/><br></br>
                        <span>{errors.emipay && <span style={{color:"red"}}>{errors.emipay.message}</span>}</span>
                        
                        {/* <button>Cancel</button> */}


                    </form>
                   
                </div>
                <div className='col-sm-6' style={{marginTop:"2%"}}>
                    <form onSubmit={handleSubmit(onsubmit)}>
                                <div>
                                   <span>Loan Status:</span>
                                   <span style={{color:"red"}}>*</span>
                                </div>
                                <input className="bottom-border-input" type="text" {...register("loanstatus")}/><br></br>
                                <div>
                                    <span>Employee Loan</span>
                                    <span style={{color:"red"}}>*</span>
                                </div>
                            
                                
                                <select  className="bottom-border-input" style={{padding:"0px 50px"}} value={selectlaontype} onChange={handlelaonChange}>
                                    <option value="" disabled></option>
                                    {loantypes.map((laty)=>(
                                        <option >
                                            <span >{laty}</span>

                                        </option>
                                        

                                    ))}
                                    
                                </select><br></br>
                                <div>
                                  <span>Employee Code:</span>
                                  <span  style={{color:"red"}}>*</span>
                                </div>
                                <select className="bottom-border-input" style={{padding:"0px 50px"}} value={selectempcode} onChange={handleEmpCodeChange}>
                                    <option value="" disabled></option>
                                    {employeeCodes.map((empcode)=>(
                                        <option >
                                            <span >{empcode}</span>

                                        </option>
                                        

                                    ))}
                                    
                                </select><br></br>
                                <button  style={{marginTop:"2%"}} type="submit">Submit</button><br></br>
                    </form>

                </div>

            </div>

        </div>
    )
}
export default Addloan;































