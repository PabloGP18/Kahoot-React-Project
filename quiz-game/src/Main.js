import React from 'react';
import Header from "./Header";
import GameWindow from "./GameWindow";
import Footer from "./Footer";


function Main (){
    return (
    <div className="main">
        <div className="header">
            <Header  />
        </div>
        <div className ="game-window">
            <GameWindow />
        </div>
        <div className ="footer">
            <Footer />
        </div>
    </div>
    )
}
export default Main