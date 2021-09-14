import React from 'react'
// import lockedDrawerImg from

function TheLockedDrawer() {
    const lockedDrawerImg = 'https://via.placeholder.com/600x500'    
    
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={lockedDrawerImg} alt="the bookcase from the office" height='50%'/> 
            <p className="puzzlePopUp_text" style={{textAlign: 'left'}}>
                Larry. <br /><br />
                I knew you would figure out my clues! Someone is after my research and New York is no longer safe for me. I have gone to visit my aunt for few days, until things calm down.<br /><br />
                In your debt, <br /> 
                Professor Foxworth
            </p>  
        </div>
    )
}

export default TheLockedDrawer