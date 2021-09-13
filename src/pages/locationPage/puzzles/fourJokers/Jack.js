import React from 'react'
 import jackImg from '../../../../images/puzzles/fourJokers/jack.png'

function Jack() {
    
    return (
        <div className="puzzleContainer" style={{justifyContent: 'center'}}>
            <img className="puzzlePopUp_img" src={jackImg} alt='Jack, a shady criminal' /> 
            
            <p className="puzzlePopUp_text" style={{textAlign: 'left', marginBottom: '2.5em'}}>
                Jack opens the back of the camera, exposing the film & ruining the photos. You suspect someone was using those photos against Jack... well I guess not anymore.
                <br /><br />
                "Like I said. I owe you one Larry. Why don't I knock some heads together. See if I can't turn up something about your missing Professor?"
            </p>  
        </div>
    )
}

export default Jack