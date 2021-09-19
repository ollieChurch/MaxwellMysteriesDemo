import { useState } from 'react'
import '../../../../css/puzzles/demo/TheTelescope.css'
import starsImg from '../../../../images/puzzles/demo/stars.png'
import BrassPanel from '../../../../components/BrassPanel'

function TheTelescope() {
    const [firstInput, setFirstInput] = useState(40)
    const [secondInput, setSecondInput] = useState(-57)
    const telescopeStyle = {
        filter: `blur(${firstInput - secondInput}px)`,
    }

    return (
        <div className='puzzleContainer'>
            <BrassPanel extraClasses='puzzlePopUp_cntrls puzzlePopUp_cntrls-telescope'>
                <input 
                    type='range' 
                    className='telescopeInput'
                    value={firstInput} 
                    onChange={(e) => setFirstInput(parseInt(e.target.value))}
                    min='-50'
                />

                <div className='puzzlePopUp_img telescopeContainer'>
                    <img className='telescopeImg' src={starsImg} alt='' style={telescopeStyle}/>
                </div>
                
                <input 
                    type='range' 
                    className='telescopeInput'
                    value={secondInput} 
                    onChange={(e) => setSecondInput(parseInt(e.target.value))} 
                    min='-100'
                    max='5'
                />
            </BrassPanel>
            <p className='puzzlePopUp_text'> If only I could focus...</p>
        </div>
    )
}

export default TheTelescope