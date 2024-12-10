import {useReducer} from 'react';
function Reducerr(){
    const initialState={count:0};
    const reducer=(state,action)=>{
        switch (action.type){
            case 'increment':
                return {count:state.count+1}
            case 'decrement':
                return {count:state.count-1}
        }

    }
    const [state,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <h4>{state.count}</h4>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type: 'decrement'})}>-</button>


        </div>
    )
}
export default Reducerr;