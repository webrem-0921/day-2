import { useState, useEffect } from "react";

function Timer() {

    const [count, setCount] = useState(0)

    useEffect(() => {

        const interval = setInterval(() => setCount(prevCount => prevCount + 1), 1000)
        document.title = `${count} iteraciones realizadas`

        return () => {              // => función de retorno (cleanup function): unmounting phase
            clearInterval(interval)
            document.title = `React create app`
        }

    }, [])                          // => array vacío: mounting phase


    useEffect(() => {
        document.title = `${count} iteraciones realizadas`
    }, [count])                     // => array con estado/s: updating phase de esos estado/s

    return (
        <div className="Timer">
            <h2>Timer</h2>
            <h3>{count}</h3>
        </div>
    );
}

export default Timer;
