import React, {useState, useEffect} from 'react'
import starButton from '../../../../../images/puzzles/library/portrait/starButton.png'
import spoonsButton from '../../../../../images/puzzles/library/portrait/spoonsButton.png'
import bunnyButton from '../../../../../images/puzzles/library/portrait/bunnyButton.png'
import dogButton from '../../../../../images/puzzles/library/portrait/dogButton.png'
import fishButton from '../../../../../images/puzzles/library/portrait/fishButton.png'
import keyButton from '../../../../../images/puzzles/library/portrait/keyButton.png'


import answerData from '../../answerData'

function ThePortrait({setPuzzleSolved, play, stop}) {
    const [answer] = useState(answerData.portrait) 
    const [playerInput, setPlayerInput] = useState('')
    const buttonsArr = [
        spoonsButton,
        bunnyButton,
        dogButton,
        starButton,
        fishButton,
        keyButton
    ]
    
    function handleClick(value) {
        let isCorrect = false

        playerInput.split('').forEach((input, index) => {
            isCorrect = input === answer[index] ? true : false
        })

        if (isCorrect && value === answer[playerInput.length]) {
            setPlayerInput(prevInput => prevInput + value) 
        } else {
            setPlayerInput(value)
        }
        play()
    }
    
    useEffect(() => {
        if (playerInput.length === answer.length) {
            if (playerInput === answer) {
                setPuzzleSolved(true)
            } else {
                setPlayerInput('')
            }
        }
        
        console.log(playerInput)
    }, [playerInput, setPuzzleSolved, answer])
    
    return (
        <>
            <div className='portraitContainer'>
                {buttonsArr.map((button, index) => {
                    const indexString = index.toString()
                    return (
                        <img 
                            key={index}
                            className={`puzzlePopUp_img portrait_btn portrait_btn-${index}`}
                            src={button}
                            alt=""
                            onClick={() => handleClick(indexString)}
                        />
                    )
                })}
            </div>

            <p className="puzzlePopUp_text">
                Simply beautiful.
            </p>   
        </>
    )
}

export default ThePortrait