import { useState, useEffect } from 'react';

export default function ship() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if(count === 0) {
            setTimeout(() => setCount(0), 20)
        }
}, [count])

return (
    <div class="shipenlarge">
        <div style={color}>
            {count}
        </div>
        <img 
            src={ship}
            alt="ship" 
            style={rotate} 
            onClick={() => {
                setCount(count + 1)
            }}/>
        </div>
    )
}