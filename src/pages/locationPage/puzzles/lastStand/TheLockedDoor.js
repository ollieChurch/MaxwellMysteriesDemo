import React from 'react'

function TheLockedDoor() {
    const placeholderImg = 'https://via.placeholder.com/600x500'
    
    return (
        <div className='puzzleContainer'>
            <img className='puzzlePopUp_img' src={placeholderImg} alt='' />
            <p className='puzzlePopUp_text' style={{marginBottom: '3em'}}>
                With a strong grip you force the mechanism to move, releasing the door catch. Inside you can hear raised voices, including the Professor! You creep inside and find a shadowy spot to see what's going on...
            </p>
        </div>
    )
}

export default TheLockedDoor