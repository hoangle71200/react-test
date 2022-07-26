import { useRef, useState } from "react";


function Video40() {
    const [count, setCount] = useState(60)
    const timerID = useRef()



    const handleStart = () => {
        timerID.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        console.log('Start -->', timerID.current);
    }

    const handleStop = () => {
        clearInterval(timerID.current)
        console.log('Stop -->', timerID.current);
    }


    return(
        <div style={{padding:20}}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Video40