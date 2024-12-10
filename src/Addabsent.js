// import { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { FormContext } from "./FormContext";
// import { useNavigate } from "react-router-dom";
// function Addabsent(){
//     const navigate=useNavigate();
//     const {register,handleSubmit,formState:{errors}}=useForm();
//     const {Absentsubmit}=useContext(FormContext);
//     const onsubmit=(data)=>{
//         Absentsubmit(data);
//         navigate("/Absentlist");
//     }
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-4">
//                     <form onSubmit={handleSubmit(onsubmit)}>
//                         <input type="text" placeholder="description" {...register('description')}/>
//                         <button type="submit">Addabsent</button>
//                     </form>

//                 </div>

//             </div>

//         </div>
        
//     )
// }
// export default Addabsent;




import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./pointer.css";
function Addabsent(){
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {Absentsubmit,updateAbsentCount}=useContext(FormContext);
    const onsubmit=(data)=>{
        Absentsubmit(data);
        updateAbsentCount();
        navigate("/firstdash");
        // navigate("/Absentlist");
    }
    const location=useLocation();
    // console.log(location);
    const to=location.pathname.split("/");
    console.log(to);
    return(
        <div style={{backgroundColor:"lightgray",height:"650px"}}>
            <h6 style={{marginLeft:"1%"}}>Add Absent</h6>
            <div>
                    <div style={{backgroundColor:"white",height:"89vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}} >
                        <div>
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <label style={{marginLeft:"1%"}}>Employee Name</label><br></br>
                                <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" placeholder="employeename" {...register('employeename',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
                                {errors.employeename && <span style={{color:"red"}}>{errors.employeename.message}</span>}
                                <label style={{marginLeft:"1%"}}>Employee Code</label><br></br>
                                <input style={{marginLeft:"1%"}}  className="bottom-border-input" type="text" placeholder="employeecode" {...register('employeecode',{required:"THis field is required",pattern:/^[0-9]+$/i,message:"No characters should be involved"})}/><br></br>
                                {errors.employeecode && <span style={{color:"red"}}>{errors.employeecode.message}</span>}
                                <label style={{marginLeft:"1%"}} >Absent Date</label><br></br>
                                <input style={{marginLeft:"1%"}}  className="bottom-border-input" type="text" palceholder="absentdate" {...register('absentdate',{required:"THis field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                                {errors.absentdate && <span style={{color:"red"}}>{errors.absentdate.message}</span>}
                                <label style={{marginLeft:"1%"}} >Description</label><br></br>
                                <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" placeholder="description" {...register('description',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be involved"}})}/><br></br>
                                {errors.description && <span style={{color:"red"}}>{errors.description.message}</span>}
                                <button style={{marginLeft:"1%",backgroundColor:"black",color:"white",marginTop:"3%"}} type="submit">Addabsent</button>
                            </form>

                        </div>

                    </div>

        </div>
        
        </div>
    )
}
export default Addabsent;


// employeename,code,absentdate