import Model from "./Model";
import { useState } from "react";
function Modellist(){
    const items=[
        {
            id:1,
            name:"vijay"
        },
        {
            id:2,
            name:"rohit"
        },
        {
            id:3,
            name:"vara"
        },
        {
            id:4,
            name:"busi"
        },

    ]
    return(
        <div>
            <Model data={items}/>
        </div>


    )
}
export default Modellist;