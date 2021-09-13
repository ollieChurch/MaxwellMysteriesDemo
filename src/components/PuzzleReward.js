import React from 'react'

function PuzzleReward({imgSrc, imgAlt='', text=''}) {
    const rewardImg = 'https://via.placeholder.com/600x500'
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={imgSrc ? imgSrc : rewardImg} alt={imgAlt} />
            <p className="puzzlePopUp_text">{text}</p>     
        </div>
    )
}

export default PuzzleReward