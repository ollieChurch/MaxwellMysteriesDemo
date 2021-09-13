import React, {useState, useEffect} from 'react'
import '../../../../../css/puzzles/lastStand/TheFlags.css'

import flag1 from '../../../../../images/puzzles/lastStand/flag1.png'
import flag0 from '../../../../../images/puzzles/lastStand/flag0.png'
import answerData from '../../answerData'

function TheFlags() {
    const [count, setCount] = useState(0)
    const [sequence] = useState([6, 1, 0, 7, 5, 2, 4, 3, 8])
    const [flagImages] = useState([flag0, flag1])
    const [flags] = useState(answerData.powerSwitches)
    const [selectedFlag, setSelectedFlag] = useState(false) 
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const newCount = count < (sequence.length - 1) ? count + 1 : 0
            setCount(newCount)
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [count, sequence])

    useEffect(() => {
        setSelectedFlag(false)
        const timer = setTimeout(() => setSelectedFlag(count), 250)
        return () => clearTimeout(timer)
    }, [count])
    
    return (
        <div className='puzzleContainer'>
            <div className='flagsContainer'>
                <div className='flags_indicatorContainer'>
                    {flags.map((flag, index) => {
                        const classStr = index === sequence[count] ? 'flags_indicator-lit' : ''
                        return (
                            <div key={index} className={`flags_indicator ${classStr}`}></div>
                        )
                    })}
                </div>

                <div className='flags_viewingWindow'>
                    <div className='flags_windowGlass'></div>
                    {flagImages.map((image, index) => {
                        const classStr = index.toString() === flags[sequence[selectedFlag]] ? 'flags_imageArmContainer-selected' : ''
                        return (
                            <div
                                key={index}
                                className={`
                                    flags_imageArmContainer 
                                    flags_imageArmContainer-${index}
                                    ${classStr}
                                `}
                            >
                                <div className='flags_imageArmPaddle'>
                                    <img
                                        className='flags_img'
                                        src={image}
                                        alt={`semaphore signal ${index}`} 
                                    />
                                </div>
                                <div className='flags_imageArm'></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default TheFlags