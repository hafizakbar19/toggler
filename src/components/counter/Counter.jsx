
import { useState } from "react";

function Counter (){
    let [ count, setCounter ] = useState(0)
    
    
    const increment = () => {
        setCounter(count + 1);
    };
    
    const decrement = () => {
        setCounter(count - 1)
    }

    const reset = () => {
        setCounter(count = 0)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;