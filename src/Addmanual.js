// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { FormContext } from "./FormContext";
// import { useNavigate } from "react-router-dom";
// import "./pointer.css";
// function Addmanual(){
//     const {Manualsubmit,updatePresentCount}=useContext(FormContext);
//     const {register,handleSubmit,formState:{errors}}=useForm();
//     const navigate=useNavigate();
//     const onsubmit=(data)=>{
//         Manualsubmit(data);
//         updatePresentCount();
//         // navigate("/firstdash");


//         navigate("/Manualpunching");

//     }
//     return(
//         <div style={{backgroundColor:"lightgray",height:"650px"}}>
                
//                     <div >
//                         <div >
//                             <span>Add Manual</span>
//                             <div style={{marginTop:"1%",backgroundColor:"white",height:"88vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>

//                                 <form onSubmit={handleSubmit(onsubmit)}>
//                                     <div>
//                                         <label style={{marginLeft:"1%",marginTop:"1%"}}>Employee Name</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
//                                     <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="employeename" {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits are valid"}})}/><br></br>
//                                     {errors.employeename && <span style={{color:"red",marginLeft:"1%"}}>{errors.employeename.message}</span>}
//                                     <div>
//                                         <label style={{marginLeft:"1%",marginTop:"1%"}}>Employee Code</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
//                                     <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="employeecode" {...register('employeecode',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No alphabets are required"}})}/><br></br>
//                                     {errors.employeecode && <span style={{color:"red",marginLeft:"1%"}}>{errors.employeecode.message}</span>}
//                                     <div>
//                                         <label style={{marginLeft:"1%",marginTop:"1%"}}>CardNo</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
//                                     <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="cardno" {...register('cardno',{required:"true",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
//                                     {errors.cardno && <span style={{color:"red",marginLeft:"1%"}}>{errors.cardno.message}</span>}
//                                     <div>
//                                         <label style={{marginLeft:"1%",marginTop:"1%"}}>Punch Date</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
                                    
//                                     {/* <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="punchdate" {...register('punchdate',{required:'enter valid date format',pattern:{value:/^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$/i,message:"invalid date format"}})}/><br></br> */}
//                                     <input
//                                         className="bottom-border-input"
//                                         {...register("punchdate", {
//                                             required: "This field is required",
//                                             pattern: {
//                                             value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
//                                             message: "Please enter a valid date in DD/MM/YYYY format"
//                                             }
//                                         })}
//                                         />
//                                     {errors.punchdate && <p style={{color:"red",marginLeft:"1%"}}>{errors.punchdate.message}</p>}
//                                     <div>
//                                         <label style={{marginLeft:"1%",marginTop:"1%"}}>InTime</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
//                                     <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="intime" {...register('intime',{required:'true',pattern:{value:/^[0-9][0-9]:[0-5][0-9]/i,message:"Incorrect Time Format"}})}/><br></br>
//                                     {errors.intime && <span style={{color:"red",marginLeft:"1%"}}>{errors.intime.message}</span>}
//                                     <div>
//                                         <label style={{marginLeft:"1%",marginTop:"1%"}}>OutTime</label>
//                                         <span style={{color:"red"}}>*</span>
//                                     </div>
//                                     <input style={{marginLeft:"1%"}}className="bottom-border-input" type="text" placeholder="outtime" {...register('outtime',{required:'true',pattern:{value:/^[0-9][0-9]:[0-5][0-9]/i,message:"Incorrect Time Format"}})}/><br></br>
//                                     {errors.outtime && <span style={{color:"red",marginLeft:"1%"}}>{errors.outtime.message}</span>}
//                                     <button style={{marginLeft:"1%",marginTop:"3%"}} type="submit" >Manualsubmit</button>
//                                 </form>

//                             </div>
//                         </div>

//                     </div>

                
//         </div>
//     )
// }
// export default Addmanual;











import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";
import "./pointer.css";
function Addmanual(){
    const {Manualsubmit,updatePresentCount}=useContext(FormContext);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate=useNavigate();
    const onsubmit=(data)=>{
        Manualsubmit(data);
        updatePresentCount();
        // navigate("/firstdash");


        navigate("/Manualpunching");

    }
    return(
        <div style={{backgroundColor:"lightgray",height:"650px"}}>
                
                    <div >
                        <div >
                            <span>Add Manual</span>
                            <div style={{marginTop:"1%",backgroundColor:"white",height:"88vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%",display:"flex"}}>

                                <form onSubmit={handleSubmit(onsubmit)}>
                                    <div >
                                        <div>
                                            <label style={{marginLeft:"1%",marginTop:"1%"}}>Employee Name</label>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="employeename" {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits are valid"}})}/><br></br>
                                        {errors.employeename && <span style={{color:"red",marginLeft:"1%"}}>{errors.employeename.message}</span>}
                                        <div>
                                            <label style={{marginLeft:"1%",marginTop:"1%"}}>Employee Code</label>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="employeecode" {...register('employeecode',{required:"This field is required",pattern:{value:/^[0-9]+$/i,message:"No alphabets are required"}})}/><br></br>
                                        {errors.employeecode && <span style={{color:"red",marginLeft:"1%"}}>{errors.employeecode.message}</span>}
                                        <div>
                                            <label style={{marginLeft:"1%",marginTop:"1%"}}>CardNo</label>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="cardno" {...register('cardno',{required:"true",pattern:{value:/^[a-zA-Z0-9]+$/i,message:"No special characters should be involved"}})}/><br></br>
                                        {errors.cardno && <span style={{color:"red",marginLeft:"1%"}}>{errors.cardno.message}</span>}
                                        <div>
                                            <label style={{marginLeft:"1%",marginTop:"1%"}}>Punch Date</label>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        
                                        {/* <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="punchdate" {...register('punchdate',{required:'enter valid date format',pattern:{value:/^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/[0-9]{4}$/i,message:"invalid date format"}})}/><br></br> */}
                                        <input
                                            className="bottom-border-input"
                                            {...register("punchdate", {
                                                required: "This field is required",
                                                pattern: {
                                                value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/,
                                                message: "Please enter a valid date in DD/MM/YYYY format"
                                                }
                                            })}
                                            />
                                        {errors.punchdate && <p style={{color:"red",marginLeft:"1%"}}>{errors.punchdate.message}</p>}
                                        </div>
                                    <div >
                                        <div>
                                            <label style={{marginLeft:"1%",marginTop:"1%"}}>InTime</label>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%",marginTop:"1%"}} className="bottom-border-input" type="text" placeholder="intime" {...register('intime',{required:'This field is required',pattern:{value:/^[0-9][0-9]:[0-5][0-9]/i,message:"Incorrect Time Format"}})}/><br></br>
                                        {errors.intime && <span style={{color:"red",marginLeft:"1%"}}>{errors.intime.message}</span>}
                                        <div>
                                            <label style={{marginLeft:"1%",marginTop:"1%"}}>OutTime</label>
                                            <span style={{color:"red"}}>*</span>
                                        </div>
                                        <input style={{marginLeft:"1%"}}className="bottom-border-input" type="text" placeholder="outtime" {...register('outtime',{required:'This field is required',pattern:{value:/^[0-9][0-9]:[0-5][0-9]/i,message:"Incorrect Time Format"}})}/><br></br>
                                        {errors.outtime && <span style={{color:"red",marginLeft:"1%"}}>{errors.outtime.message}</span>}
                                        <button style={{marginLeft:"1%",marginTop:"1%"}} type="submit" >Manualsubmit</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>

                
        </div>
    )
}
export default Addmanual;




