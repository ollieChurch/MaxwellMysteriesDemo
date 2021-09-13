import React from 'react'
// import lockedDrawerImg from

function TheLockedDrawer() {
    const lockedDrawerImg = 'https://via.placeholder.com/600x500'    
    
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={lockedDrawerImg} alt="the bookcase from the office" height='50%'/> 
            <p className="puzzlePopUp_text" style={{textAlign: 'left'}}>
                Larry. <br /><br />
                If you are reading this then something has happened to me. I designed <em>The Machine</em> to help people, but in the wrong hands it could do the opposite. I am sorry to impress upon you but I need my research secured. I have marked the required locations on this map. <br /><br />
                In your debt, <br /> 
                Professor Foxworth
            </p>  
        </div>
    )
}

export default TheLockedDrawer