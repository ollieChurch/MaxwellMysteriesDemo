import React from 'react'
// import lockedDrawerImg from

function TheLibrarian() {
    const placeholderImg = 'https://via.placeholder.com/600x500'    
    
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={placeholderImg} alt="the bookcase from the office" height='50%'/> 
            <p className="puzzlePopUp_text" style={{marginBottom: '2em'}}>
                In a dark and forgotten corner of the library you pull a book off the shelf. Neatly folded within the pages is some of the Professor's research.
            </p>  
        </div>
    )
}

export default TheLibrarian