import React from 'react';
import {useEffect, useState} from "react";

function Header() {

    const [title, setTitle] = useState("Hello World!");

    useEffect(() => {
        console.log("Title changed to: " +  title);
    }, [title]);

   function handleClick(){
        setTitle("Hello State!")
    }

    return (
        <div className="header">
            <h1>{title}</h1>
            <button onClick={handleClick}>Click me to change state!</button>
        </div>
    );
}

export default Header;