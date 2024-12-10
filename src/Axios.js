import axios from 'axios';
import { useEffect ,useState} from 'react';
function Rohitaxios(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://gmail.com").then(
            response=>setData(response)
        )
       

    },[])
    return(
        <div>
            {data.map((item)=>(
                <li>{item.title}</li>
            ))}
        </div>
       
        

    )
}
export default Rohitaxios;