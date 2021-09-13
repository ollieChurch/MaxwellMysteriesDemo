import React from 'react'
import globeImg from '../../../../images/puzzles/library/globe.png'

function TheGlobe() {
    const style= {
        filter: 'invert(35%) sepia(.75)'    
    }
    
    return (
        <div className="puzzleContainer">
            <img 
                className="puzzlePopUp_img puzzlePopUp_img-globe" 
                src={globeImg} 
                alt='the globe: left 5 up 11 right 6 up 1 left 6 up 12 right 17 down 2'
                style={style}
            />
            <p className="puzzlePopUp_text">A message on the globe.</p>   
        </div>
    )
}

export default TheGlobe