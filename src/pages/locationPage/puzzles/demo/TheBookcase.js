import React from 'react'
import booksImg from '../../../../images/puzzles/office/books.png'

function TheBookcase() {
    return (
        <div className="puzzleContainer">
               <img className="puzzlePopUp_img" src={booksImg} alt="a collection of books in the same series" />

            <p className="puzzlePopUp_text">
                Judging by the dust on this bookcase, these books have been moved recently.
            </p>     
        </div>
    )
}

export default TheBookcase