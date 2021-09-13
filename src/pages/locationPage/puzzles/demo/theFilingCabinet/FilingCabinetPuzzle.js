import React, {useState, useEffect} from 'react'
import floorPlanImg from '../../../../../images/puzzles/office/officeFloorPlan.png'
import answerData from '../../answerData'

function FilingCabinetPuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.floorplan)
    const [playerInput, setPlayerInput] = useState([])
    const buttonArr = []
    
    for(let i=0; i < 25; i++) {
        const clickedClass = 'puzzleFloorPlan_btn-clicked'
        buttonArr.push(
            <button 
                key={i} 
                className={`
                    puzzleFloorPlan_btn 
                    ${playerInput.includes(i) ? clickedClass : ''} 
                `}
                onClick={() => handleInput(i)}
            />
        )
    }
    
    function handleInput(value) {
        setPlayerInput(prevInput => [...prevInput, value])
    }
    
    useEffect(() => {
        playerInput.join('') === answer && setPuzzleSolved(true)
    }, [playerInput, setPuzzleSolved, answer])
    
    useEffect(() => console.log(playerInput.join('')), [playerInput])
    
    return (
        <div className="puzzleContainer">
            <div className="puzzlePopUp_cntrls puzzlePopUp_cntrls-floorPlan">
                <img
                    className="floorPlan_img"
                    src={floorPlanImg}
                    alt="the office floorplan"
                />
                <div className="floorplan_grid">
                    {buttonArr}
                </div>
            </div>
            <div className="puzzlePopUp_text">
                <p>A floorplan of the professor's office.</p>
            </div>     
            <button
                className='floorPlan_resetBtn'
                onClick={() => setPlayerInput([])}
            >
                Reset
            </button>
        </div>
    )
}

export default FilingCabinetPuzzle