import {useState, useEffect} from 'react'
import '../../../../css/puzzles/office/TheFlags.css'
import answerData from '../answerData'

function TheFlags() {
    const [count, setCount] = useState(0)
    const [flagImages] = useState(["rook", "queen", "pawn", "bishop", "knight", "king"])
    const [flags, setFlags] = useState([])

    useEffect(() => {
        const newFlagsArr = []
        answerData.buttons.forEach(ans => {
            newFlagsArr.push(flagImages.indexOf(ans))
        })
        setFlags(newFlagsArr)
    }, [flagImages])
    
    useEffect(() => {
        const timer = setTimeout(() => {
            const newCount = count < (flags.length - 1) ? count + 1 : 0
            setCount(newCount)
        }, 3000)
        
        return () => clearTimeout(timer)
    }, [count, flags])

    return (
        <div className='puzzleContainer'>
            <div className='flagsContainer'>
                <div className='flags_indicatorContainer'>
                    {flags.map((flag, index) => {
                        const classStr = index === count ? 'flags_indicator-lit' : ''
                        return (
                            <div key={index} className={`flags_indicator ${classStr}`}></div>
                        )
                    })}
                </div>

                <div className='flags_viewingWindow'>
                    <div className='flags_windowGlass'></div>
                    {flagImages.map((image, index) => {
                        const classStr = index === flags[count] ? 'flags_imageArmContainer-selected' : ''
                        return (
                            <div
                                key={index}
                                className={`
                                    flags_imageArmContainer 
                                    flags_imageArmContainer-${index % 2}
                                    ${classStr}
                                `}
                            >
                                <div className='flags_imageArmPaddle'>
                                    <i className={`fas fa-chess-${image}`}></i>
                                </div>
                                <div className='flags_imageArm'></div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <p className='puzzlePopUp_text'>Now where have I seen those symbols before?</p>
        </div>
    )
}

export default TheFlags