import React, { useRef } from 'react';

const Banner = () => {
    let userName = useRef();
    let password = useRef();
    
    const inputFrom =()=>{
        console.log(userName.current.value);
        console.log(password.current.value);
    }
    return (
        <div>
            <input ref={userName} placeholder='User Name'/>
            <input ref={password} placeholder='Password'/>
            <button onClick={inputFrom}>Submit</button>
        </div>
    );
};

export default Banner;