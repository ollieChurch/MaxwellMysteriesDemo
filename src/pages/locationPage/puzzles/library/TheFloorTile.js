import React from 'react'

import floorImg from '../../../../images/puzzles/library/floor.png'

function TheFloorTile() {
    const style = {
        filter: 'sepia() drop-shadow(2px 2px 5px black)',
        opacity: '.8'
    }
    
    return (
        <div className="puzzleContainer">
            <img 
                className="puzzlePopUp_img" 
                src={floorImg} 
                alt='diamond floor tile: right 4 down 5 right 2 down 14 left 5 down 1 right 5 down 6'
                style={style}
            />
            <p className="puzzlePopUp_text">This floor tile has a message scratched into it.</p>   
        </div>
    )
}

export default TheFloorTile