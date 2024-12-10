import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';
import "./pointer.css";

function Addaward() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { AddingAward } = useContext(FormContext);
  const navigate=useNavigate();
  const onSubmit = (data) => {
    AddingAward(data);
    navigate("/Awardslist");
    
  };

  return (
    <div  style={{backgroundColor:"lightgrey",height:"650px"}}>
      <div>
        <div>
        <h6>Adding Awards:</h6>
          <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",backgroundColor:"white",height:"90vh",marginLeft:"1%",marginRight:"1%",borderTopLeftRadius:"1%",borderTopRightRadius:"1%",borderBottomLeftRadius:"1%",borderBottomRightRadius:"1%"}}>
              <form onSubmit={handleSubmit(onSubmit)}>
                
                <div>
                  <span style={{marginLeft:"1%"}}>Award Name:</span>
                  <span style={{color:"red"}}> *</span>

                </div>
                <input style={{marginLeft:"1%"}} className='bottom-border-input' type='text' placeholder='Award Name' {...register('awardname', { required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should be included"} })} /><br></br>
                
                {errors.awardname && <span style={{color:"red"}}>{errors.awardname.message}</span>}<br></br>
                <div>
                  <span style={{marginLeft:"1%"}}>Employee No:</span>
                  <span style={{color:"red"}}>*</span>
                </div>
                <input style={{marginLeft:"1%"}} className='bottom-border-input' type='text' placeholder='Award code' {...register('awardcode', { required: "This field is required",pattern:{value:/^\d+$/i,message:"No characters should included"} })} /><br></br>
                {errors.awardcode && <span style={{color:"red"}}>{errors.awardcode.message}</span>}<br></br>
                <div>
                  <label style={{marginLeft:"1%"}}>Gift:</label>
                  <span style={{color:"red"}}>*</span>
                </div>
                <input style={{marginLeft:"1%"}} className='bottom-border-input' type="text" placeholder="gift" {...register('gift',{required:"This field is required",pattern:{value:/^[a-zA-Z]+$/i,message:"No digits should included"}})}/><br></br>
                {errors.gift && <span style={{color:"red"}}>{errors.gift.message}</span>}<br></br>
                <div>
                  <label style={{marginLeft:"1%"}}>Award Date:</label>
                  <span style={{color:"red"}}>*</span>
                </div>
                <input style={{marginLeft:"1%"}} className='bottom-border-input' type="text" placeholder="awarddate" {...register('awarddate',{required:"This field is required",pattern:{value:/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,message:"Please enter valid date format"}})}/><br></br>
                {errors.awarddate && <span style={{color:"red"}}> {errors.awarddate.message}</span>}<br></br>
                
                <button  style={{marginLeft:"1%",backgroundColor:"transparent"}} type='submit'>Add Award</button>
                
                
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addaward;

