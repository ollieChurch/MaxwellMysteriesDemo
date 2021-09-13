import React from 'react'
import certImg from '../../../../images/puzzles/office/certificate.png'

function TheCertificate() {
    return (
        <div className="puzzleContainer">
               <img className="puzzlePopUp_img" src={certImg} alt="the professor's phd certificate" />

            <p className="puzzlePopUp_text">
                The professor is very proud of his achievements. I'm surprised he has written on his certificate.
            </p>     
        </div>
    )
}

export default TheCertificate