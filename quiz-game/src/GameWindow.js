import React from 'react';
import {useEffect, useState} from "react";

function GameWindow() {
    const url = "https://opentdb.com/api.php?amount=10&category=20"
//something seems awfully hardcoded here, if only the user could change these settings!
useEffect(() =>{getQuestions(url);},[]);
    const getQuestions = async(url) => {
        const res = await  fetch(url);
        const data = await res.json();
        console.log(data);
        return data
    }

    return (
        <span>aligo</span>
    )
}

export default GameWindow