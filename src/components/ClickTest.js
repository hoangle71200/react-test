import { useState } from "react";

function ClickTest() {
    const [count, setCount] = useState(0)
    const handleCount = (count) => {
            setCount(prev => prev + 1)
    }
    return(
        <div id="wrapper">
            <h1>{count}</h1>
            <button onClick={handleCount}>Click me</button>
        </div>
    )
}

export default ClickTest