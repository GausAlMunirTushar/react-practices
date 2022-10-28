import React from 'react';

const Header = () => {
    // eslint-disable-next-line no-undef
    const [color, setColor] = React.useState("red");
    const newGreen =()=>{
        setColor('green');
    }
    const newBlue=()=>{
        setColor('blue');
    }
    return (
        <div>
            <h1>{color}</h1>
            <button onClick={newBlue}>Change Blue</button>
            <button onClick={newGreen}>Change Green</button>
        </div>
    );
};

export default Header;