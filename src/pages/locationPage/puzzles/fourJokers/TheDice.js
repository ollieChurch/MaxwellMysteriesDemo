import React, {useState, useEffect} from 'react'
import '../../../../css/puzzles/fourJokers/TheDice.css'

import useAnswerIndicators from '../../../../hooks/useAnswerIndicators'

function TheDice() {
    const [answer] = useState([
        ['four', 'two'],
        ['one', 'four'],
        ['two', 'two'],
        ['two', 'one'],
        ['one', 'five'],
        ['three', 'two']
    ])
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    const [diceRolling, setDiceRolling] = useState(false)
    const [random, setRandom] = useState(Math.floor(Math.random() * answer.length))
    const {indicatorFilled, updateIndicatorFilled} = useAnswerIndicators(answer)
    const [dice, setDice] = useState({
        one: answer[count][0],
        two: answer[count][1]
    })
    
    useEffect(() => {
           let endRollTimeout
            const steadyTimeout = setTimeout(() => {
                setDiceRolling(true)
                endRollTimeout = setTimeout(() => {
                    const newCount = count < answer.length - 1 ? count + 1 : 0
                    setDiceRolling(false)
                    setDice({
                        one: answer[newCount][0],
                        two: answer[newCount][1]
                    })
                    setCount(newCount)

                    const indicatorArr = []
                    for (let i=0; i < newCount; i++) { 
                        i < answer.length && indicatorArr.push('1') 
                    }
                    updateIndicatorFilled(indicatorArr)
                }, 75)
            }, 1500)

            return () => {
                clearTimeout(steadyTimeout)
                clearTimeout(endRollTimeout)
            } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [diceRolling, answer, count]) 

    console.log(dice)
    
    useEffect(() => {
        if (diceRolling) {
            const rollInterval = setTimeout(() => {
                setRandom(prevRandom => prevRandom < answer.length - 1 ? prevRandom + 1 : 0)
                setDice({
                    one: answer[random][1],
                    two: answer[random][0]
                })
            }, 75)
            
            return () => {
                clearTimeout(rollInterval)
            }
        }
    }, [diceRolling, setDice, answer, random])
    
    useEffect(() => {
        if (!started) {
           updateIndicatorFilled('')
           setStarted(true)
        } 
    }, [started, updateIndicatorFilled])
    
    return (
        <div className='puzzleContainer'>
            <div className='diceContainer'>
                <div className='dice'>
                    <i className={`fas fa-dice-${dice.one}`}></i>
                </div>
                <div className='dice'>
                    <i className={`fas fa-dice-${dice.two}`}></i>
                </div>
            </div>
            
            <div className='indicatorBox'>
                {indicatorFilled.map((indicator, index) => {
                    return (
                        <div
                        key={index}
                        className={`
                            indicator 
                            ${indicator && 'indicator-filled'}
                        `}
                        ></div> 
                    )
                })}
            </div>
            
            <p className='puzzlePopUp_text'>These dice are loaded! They always come up with the same numbers.</p>
        </div>
    )
}

export default TheDice