import React from 'react'
// import lockedDrawerImg from

function TheChainedCupboard() {
    const placeholderImg = 'https://via.placeholder.com/600x500'    
    
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={placeholderImg} alt="the bookcase from the office" height='50%'/> 
            <p className="puzzlePopUp_text" style={{marginBottom: '2em'}}>
                Pouring the chemical mixture on the chain causes it to fizz and pop as the metal slowly disintegrates. Finally the cupboard door creaks open. Inside is some of the Professor's research.
            </p>  
        </div>
    )
}

export default TheChainedCupboard