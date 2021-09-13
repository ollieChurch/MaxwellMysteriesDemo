import React, {useState, useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'

import handleImg from '../../../../../images/puzzles/laboratory/handle.png'
import pipesRecipeImg from '../../../../../images/puzzles/laboratory/pipesRecipe.png'
import liquidSFX from '../../../../../audio/audioFiles/sfx/liquidSFX.mp3'

import useAnswerIndicators from '../../../../../hooks/useAnswerIndicators'
import answerData from '../../answerData'

function PipesPuzzle({setPuzzleSolved, updateUnmount}) {
    const [answer] = useState(answerData.pipes)
    const [pipeOn, setPipeOn] = useState([false, false, false])
    const [playerInput, setPlayerInput] = useState([0, 0, 0])
    const {setWrongAnswer, flashIndicator} = useAnswerIndicators('123')
    const {play} = useAudioPlayer({
        src: liquidSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    
    function handleClick(index) {
        const newPipeArr = [...pipeOn]
        newPipeArr[index] = !newPipeArr[index]
        play()
        updateUnmount({name: 'safe', state: false})
        setPipeOn(newPipeArr)
    }
    
    function submitAnswer() {
        if (playerInput.join('') === answer) {
            setPuzzleSolved(true)
        } else {
            setWrongAnswer(true)
            setTimeout(() => resetPuzzle(), 1200)
        }
    }
    
    function resetPuzzle() {
        setPlayerInput([0, 0, 0])
    }
    
    useEffect(() => {
       const intervalTimer = setTimeout(() => {
            const newInputArr = [...playerInput]
            newInputArr.forEach((value, index) => {
                if (pipeOn[index] === true) {
                  (newInputArr[index] < 99) && (newInputArr[index] = newInputArr[index] + 1) 
                } 
            })
            setPlayerInput(newInputArr)
        }, 500)
               
        return () => clearTimeout(intervalTimer)
    }, [pipeOn, playerInput])
        
    return (
        <div className='puzzleContainer'>
            <div className='pipesContainer'>
                {
                    pipeOn.map((pipe, index) => {                        
                        return (
                            <div 
                                key={`handle-${index}`}
                                className={`
                                    pipes_handle
                                    pipes_handle-${index}
                                    ${pipeOn[index] && 'pipes_handle-on'}
                                `}
                            >
                                <img
                                    className='pipes_handleImg'
                                    src={handleImg}
                                    alt='pipe valve handle'
                                    onClick={() => handleClick(index)}
                                />
                            </div>
                        )
                    })
                }
            
                <div className='pipes_mixingControl'>
                    <div className='pipes_valueDisplays'>
                        {
                            playerInput.map((input, index) => {
                                return (
                                    <input
                                        key={`display-${index}`}
                                        type='text' 
                                        value={playerInput[index]} 
                                        size='2' 
                                        readOnly 
                                        style={{background: flashIndicator && 'firebrick'}}
                                    />
                                )
                            })
                        }
                    </div>
                    
                    <div className='pipes_buttons'>
                        <button onClick={submitAnswer}>Mix</button>
                        <button onClick={resetPuzzle}>Drain</button>
                    </div>
                </div>
            </div>
            
            <img
                className='puzzlePopUp-img'
                src={pipesRecipeImg}
                alt='1 test tube = 2 diamonds'
                style={{height: '75px', marginTop: '1em'}}
            />
        </div>
    )
}

export default PipesPuzzle