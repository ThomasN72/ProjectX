import React from 'react';
import './Background.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

let backgroundImageStyle = {
    backgroundRepeat: "no-repeat",
    height: "100vh"
}

const Background = props =>{
    // backgroundImageStyle.backgroundImage = `url(${props.imageUrl})`;
    // console.log(backgroundImageStyle)
    return (
        <div style={backgroundImageStyle} className="landing-background-image">
        </div>
    )
}

export default Background;