import {useState} from "react";
import React from "react";
function Memo(){
    const [counter,setCounter]=useState(0);
    const [number,setNumber]=useState(5);
    const Factorial=React.useMemo(()=>fact(number),[number])
    return(
        <div>
            {Factorial}<br></br>
            <button onClick={()=>setCounter(counter+1)}>counter increment</button>
            <button onClick={()=>setNumber(number+1)}>counter factorial</button>
            <h6>{counter}</h6>
        
        </div>
       
    )
    

    }
    const fact=(n)=>{
        var ans=1;
        
        for (var i=n;i>1;i--){
            var ans=ans*i
            
            
        }
        console.log('factorial is calling');
        return ans;
    }


export default Memo;