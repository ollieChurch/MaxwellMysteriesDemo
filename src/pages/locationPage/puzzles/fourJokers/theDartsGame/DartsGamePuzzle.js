import React, {useState, useRef, useEffect, useContext} from 'react'
import {useAudioPlayer, useAudioPosition} from 'react-use-audio-player'

import dartImg from '../../../../../images/puzzles/fourJokers/dart.png'
import dartSFX from '../../../../../audio/audioFiles/sfx/dartSFX.mp3'

import {PuzzleChangeContext} from '../../../../../context/PuzzleChangeContext'

import dartsScoringData from './dartsScoringData'
import answerData from '../../answerData'

function DartsGamePuzzle({setPuzzleSolved, updateUnmount}) {
    const {dartsScoreThreshold} = useContext(PuzzleChangeContext)
    const [scoring] = useState(dartsScoringData)
    const [scoreThreshold, setScoreThreshold] = useState(dartsScoreThreshold)
    const [scoreBust] = useState(answerData.dartsBust)
    const [animationHorizontal, setAnimationHorizontal] = useState(false)
    const [numberOfSquares, setNumberOfSquares] = useState(0)
    const numberOfRows = Math.sqrt(numberOfSquares)
    const [gameWon, setGameWon] = useState(false)
    const [targetMoving, setTargetMoving] = useState(true)
    const [runningScore, setRunningScore] = useState(0)
    const [dartsRemaining, setDartsRemaining] = useState(3)
    const [shotsPlayed, setShotsPlayed] = useState([])
    const containerRef = useRef()
    const targetRef = useRef()
    
    const targetWidth = 25
    const gridSquares = []
    
    const {seek} = useAudioPosition()
    const {play} = useAudioPlayer({
        src: dartSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })
    
    useEffect(() => {
        setScoreThreshold(dartsScoreThreshold)
    }, [dartsScoreThreshold])
    
    useEffect(() => {
        const container = containerRef.current.getBoundingClientRect()
        setNumberOfSquares((container.width / targetWidth) * (container.height / targetWidth))
    }, [])
    
    for (let i=0; i < numberOfSquares; i++) {
        const squareHit = shotsPlayed.includes(i)
        gridSquares.push(
            <div key={i} className='dartBoard_gridSquare'>
                {squareHit && 
                    <img
                        className='dartBoard_dartImg'
                        src={dartImg}
                        alt='a dart'
                    />
                }
            </div>
        )
    }

    function handleClick() {
        dartsRemaining <= 0 ? resetGame() : targetMoving && stopTarget()
        setAnimationHorizontal(prevState => !prevState)
        updateUnmount({name: 'safe', state: false})
    }
    
    function stopTarget() {
        seek(0.78)
        play()
        
        //get grid details
        const container = containerRef.current.getBoundingClientRect()
        const squareWidth = container.width / numberOfRows
        const squareHeight = container.height / numberOfRows
        
        // get target details
        const position = targetRef.current.getBoundingClientRect()
        const currentLeft = (position.left - container.left)
        const currentTop = (position.top - container.top)
        targetRef.current.style.visibility = 'hidden'
        setTargetMoving(false)
        
        //identify targeted grid square
        const targetRow = Math.floor((currentTop + 12.5) / squareHeight)
        const targetColumn = Math.floor((currentLeft + 12.5) / squareWidth)
        const newTargetSquare = targetColumn + (targetRow * numberOfRows)
        const newArr = [...shotsPlayed, newTargetSquare]
        setShotsPlayed(newArr) 
        
        //adjust the score
        let thisScore = 0
        scoring.forEach((bracket, index) => {
            if (bracket.includes(newTargetSquare)) {
                thisScore = index <= 20 ? index : index === 21 ? 25 : 50
            }
        })
        setRunningScore(prevScore => prevScore + thisScore)
        
        setDartsRemaining(prevRemaining => prevRemaining - 1)
    }
                       
    useEffect(() => {
        let timer
        if (dartsRemaining > 0) {
            timer = setTimeout(() => {
                setTargetMoving(true)
                targetRef.current.style.visibility = 'visible' 
            }, 500)
        } else if (runningScore > scoreThreshold && runningScore <= scoreBust) {
            setGameWon(true)
            timer = setTimeout(() => setPuzzleSolved(true), 500)
        }           
        
        return () => clearTimeout(timer)
    }, [dartsRemaining, runningScore, setPuzzleSolved, scoreBust, scoreThreshold])
    
    function resetGame() {
        setRunningScore(0)
        setDartsRemaining(3)
        setShotsPlayed([])
    }
    
    return (
        <div className='puzzleContainer'>
            <div className='dartBoardContainer' ref={containerRef}>
                {gridSquares}
                
                <div 
                    className={`
                        dartBoard_target
                        ${targetMoving && 'dartBoard_target-moving'}
                        ${animationHorizontal && 'dartBoard_target-horizontal'}
                    `}
                    ref={targetRef}
                ></div>
            </div>
            <div className='dartBoard_controls'>
                <div>
                    <p className='puzzlePopUp_text'>Score: <span>{runningScore}</span></p>
                    <p className='puzzlePopUp_text'>Darts Left: <span>{dartsRemaining}</span></p>
                </div>
                <button className='dartBoard_btn' onClick={handleClick}>
                    {dartsRemaining <= 0 && !gameWon ? 'Rematch' : 'Throw'}
                </button>
            </div>
            <p className='puzzlePopUp_text'>Beat Jack's score to find out what he knows.</p>
        </div>
    )
}

export default DartsGamePuzzle