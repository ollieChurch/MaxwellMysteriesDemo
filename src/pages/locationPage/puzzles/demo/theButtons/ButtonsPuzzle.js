import {useState, useEffect} from 'react'
import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import answerData from '../../answerData'
import BrassPanel from '../../../../../components/BrassPanel'

function ButtonsPuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.buttons)
    const [playerInput, setPlayerInput] = useState([])
    const [buttonSymbols] = useState(["rook", "bishop", "pawn", "knight", "king", "queen"])
    const {setWrongAnswer, flashIndicator, indicatorFilled, updateIndicatorFilled} = useAnswerIndicators(answer)
    
    function handleClick(value) {
        updateIndicatorFilled(playerInput) 
        const newArr = [...playerInput, value]
        setPlayerInput(newArr)
    }
    
    useEffect(() => {
        if (playerInput.length >= answer.length) {
            if (playerInput.join() === answer.join()) {
                setPuzzleSolved(true)
            } else {
                setWrongAnswer(true)
                setPlayerInput('')
            }
        }
    }, [playerInput, setPuzzleSolved, setWrongAnswer, answer])
    
    useEffect(() => console.log(playerInput), [playerInput])
        
    return (
        <>
            <BrassPanel extraClasses='buttonsBox'>
                {buttonSymbols.map((symbol, index) => {
                    return (
                        <button 
                            key={index} 
                            className='buttons-btn' 
                            onClick={() => handleClick(symbol)}
                        >
                            <i className={`fas fa-chess-${symbol}`}></i>
                        </button>
                    )
                })}
            </BrassPanel>

            <div className='indicatorBox'>
                {indicatorFilled.map((indicator, index) => {
                    return (
                        <div
                        key={index}
                        className={`
                            indicator 
                            ${indicator && 'indicator-filled'}
                            ${flashIndicator && 'indicator-wrong'}
                        `}
                        ></div> 
                    )
                })}
            </div>

            <p className="puzzlePopUp_text">
                Human nature requires us to press buttons we know we should not.
            </p>
        </>
    )
}

export default ButtonsPuzzle