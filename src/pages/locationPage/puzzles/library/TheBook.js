import React from 'react'

import bookImg from '../../../../images/puzzles/library/book.png'

function TheBook() {
    return (
        <div className="puzzleContainer">
            <img 
                className="puzzlePopUp_img"
                src={bookImg}
                alt='an old book with a strange rune. sub-category.'
            />
            <p className="puzzlePopUp_text">Some form of forgotten language.</p>   
        </div>
    )
}

export default TheBook