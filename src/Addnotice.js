import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FormContext } from "./FormContext";
import { useNavigate } from "react-router-dom";
import "./pointer.css";
function Addnotice(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const {Rohitnotice}=useContext(FormContext);
    const navigate=useNavigate();
    const onsubmit=(data)=>{
        Rohitnotice(data);
        navigate("/noticelist")

    }
    return(
        <div style={{border:"0px solid black",backgroundColor:"lightgrey",height:"650px"}}>
            <h4 style={{marginLeft:"1%"}}>Adding Notices</h4>
            <div  >
                <div style={{border:"0px solid black",backgroundColor:"white",height:"85vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div>
                            <label style={{marginLeft:"1%",marginTop:"1%"}}>Title</label>
                            <span style={{color:"red"}}>*</span>

                        </div>
                        <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" placeholder="title" {...register('title',{required:"This field is rquired"})}/><br></br>
                        {errors.title && <span style={{color:"red"}}>{errors.title.message}</span>}
                        <div>
                            <label style={{marginLeft:"1%",}}>Description</label>
                            <span style={{color:"red"}}>*</span>

                        </div>
                        <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" placeholder="description" {...register("description",{required:"This field is rquired"})}/><br></br>
                        <div>
                            <label style={{marginLeft:"1%"}}>Status</label>
                            <span style={{color:"red"}}>*</span>

                        </div>
                        <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" placeholder="status" {...register("status",{required:"This field is rquired"})}/><br></br>
                        <div>
                            <label style={{marginLeft:"1%"}}>Created On</label>
                            <span style={{color:"red"}}>*</span>

                        </div>

                        <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" placeholder="created" {...register("createdon",{required:"This field is rquired",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/i,message:"Please enter valid date format"}})}/><br></br>
                        {errors.createdon && <span style={{color:"red"}}>{errors.createdon.message}</span>}<br></br>
                        <button style={{marginLeft:"1%",marginTop:"5%"}} type="submit" >Submit</button>
                    </form>

                </div>

            </div>

        </div>
            
            
        
       
    )
}
export default Addnotice;