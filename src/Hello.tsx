import { useState } from "react";

    interface propHello{
        name : string,
        age : number 
    }
    const Hello=({name,age}: propHello)=>{
        const[textP,setTextP]= useState<string>('')
        const[num,setNum] = useState <number>(0)
        return(
            <div>
                <h2> Hello Component</h2>
                <input type= "text" onChange={(e)=>setTextP(e.target.value)}/>
                <input type="number"  onChange={(e)=>setNum(+(e.target.value))}/>
                
            </div>
        )
    }



export default Hello