import { useState } from 'react';
import {useForm} from 'react-hook-form';
import { FormContext } from './FormContext';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import "./pointer.css";
function Addconveyance(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    const companies=["constellaintelligence","amazon","tcs","wipro"];
    const employees=["rohit","vijay","test"];
    const [selectcompany,setselectcompany]=useState("");
    const [selectemployee,setselectemployee]=useState("");
    const {Rohitaddconveyance}=useContext(FormContext);
    const navigate=useNavigate();

    const selecthandlecompanyChange=(event)=>{
        setselectcompany(event.target.value);

    }
    const selecthandleemployeeChange=(event)=>{
        setselectemployee(event.target.value);


    }
    const onsubmit=(data)=>{
        Rohitaddconveyance({...data,selectcompany,selectemployee});
        navigate("/Employeeconveyance");
    }
    return(
        <div style={{backgroundColor:"lightgray",height:"654px"}}>
            <h4 style={{marginLeft:"1%"}}>Add Employee Conveyance Details</h4>
            <div>
                
                <div>
                    <div style={{backgroundColor:"white",height:"82vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <span style={{marginLeft:"1%"}}>Date:</span><br></br>
                            <input  style={{marginLeft:"1%"}} className="bottom-border-input" type="text" {...register('date',{required:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                            {errors.date && <span style={{color:"red"}}>{errors.date.message}</span>}
                            <span style={{marginLeft:"1%"}}>Amount:</span><br></br>
                            <input style={{marginLeft:"1%"}} className="bottom-border-input" type="text" {...register('amount',{required:"THis field is required",pattern:{value:/^[0-9]+$/i,message:"No characters should be included"}})}/><br></br>
                            {errors.amount && <span style={{color:"red"}}>{errors.amount.message}</span>}
                            <span style={{marginLeft:"1%"}}>comapnyname:</span><br></br>
                            <select   style={{width:"20%",backgroundColor:"transparent",marginLeft:"1%"}} className="bottom-border-input" value={selectcompany} onChange={selecthandlecompanyChange}>
                                <option value="" disabled></option>
                                {companies.map((company)=>(
                                    <option>{company}</option>
                                ))}
                            
                                
                            </select><br></br>
                            <span style={{marginLeft:"1%"}}>Employeename:</span><br></br>
                            <select style={{width:"20%",backgroundColor:"transparent",marginLeft:"1%"}} className="bottom-border-input"  value={selectemployee} onChange={selecthandleemployeeChange}>
                                <option value="" disabled></option><br></br>
                                {employees.map((employ)=>(
                                    <option>{employ}</option>
                                ))}
                            
                                
                            </select><br></br>
                            <button  style={{marginTop:"2%",marginLeft:"1%"}} type="submit">Submit</button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}
export default Addconveyance;




