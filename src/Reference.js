import {useRef,useEffect} from 'react';
function Reference(){
    const data=useRef(null);
    const submitHandler=(e)=>{
        e.preventDefault();
        // console.log(data);
        console.log(data.current.value);
        // data.current.value="testtt";
        

    }
    useEffect(()=>{
        data.current.focus();

    },[]);
    return(
        <div className="container">
            <form onSubmit={submitHandler}>
                <input ref={data} type="text" placeholder="enter name"/>
                <button type="submit">Submit</button>
            </form>

        </div>

    )
}
export default Reference;