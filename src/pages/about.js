import { useState } from "react";

export default function About() {
    return (<div><Content /></div>)
}

function Content() {
    const [counter, setCounter] = useState(0);
    function incrementCounter(e) {
        e.preventDefault();
        setCounter(counter + 1);
    };
    return (
        <div>
            <form onSubmit={incrementCounter}>
                <div id="displayCounter">
                    You have clicked the counter {counter} {counter===1?"time":"times"}.
                </div>
                <button id="myFirstButton">
                    Add 1 To Counter
                </button>
            </form>
        </div>
    )
}