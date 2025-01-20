import {count} from "console"; 
import React from "react";


interface ICounter{
        count : number
    }

    class Counter extends React.Component<{},ICounter>{
        state: ICounter = {

        
        count : 0
    }
    increment=()=> this.setState({count : this.state.count  +1})
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default Counter
