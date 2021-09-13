import React, {useState, useRef} from 'react'
import answerData from '../../answerData'

function SoundMachinePower({powered, setPowered, updateUnmount}) {
    const [answer] = useState(answerData.soundMachinePower)
    const [passwordInput, setPasswordInput] = useState('')
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const inputRef = useRef()
    const indicatorColor = {
        color: powered ? 'darkgreen' : 'firebrick'
    }
    const formVisibility = {
        visibility: powered ? 'hidden' : 'visible'
    }

    
    function handleChange(event) {
        !wrongAnswer && setPasswordInput(event.target.value)
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        if (passwordInput.toLowerCase() === answer) {
            setPowered(true)
        } else {
            updateUnmount({name: 'safe', state: false})
            setWrongAnswer(true)
            inputRef.current.style.color = 'firebrick'
            setTimeout(() => inputRef.current.style.color = 'black', 500)
            setTimeout(() => inputRef.current.style.color = 'firebrick', 1000)
            setTimeout(() => inputRef.current.style.color = 'black', 1500)
            setTimeout(() => inputRef.current.style.color = 'firebrick', 2000)
            setTimeout(() => {
                inputRef.current.style.color = 'black'
                setWrongAnswer(false)
                setPasswordInput('')
                updateUnmount({name: 'safe', state: true})
            }, 2900)
        }
    }
    
    return (
        <div className='soundMachine_power'>
            <div className='soundMachine_power_indicatorContainer'>
                <i className="fas fa-atom atomicIcon" style={indicatorColor}></i>
                <p>Power<br />{powered ? 'ON' : 'OFF'}</p>
                <i className="fas fa-atom atomicIcon" style={indicatorColor}></i>
            </div>
            <form
                className='soundMachine_power_form'
                onSubmit={handleSubmit}
                style={formVisibility}
            >
                <input
                    type='text'
                    placeholder='password'
                    value={passwordInput}
                    onChange={handleChange}
                    ref={inputRef}
                    size='10'
                />
                <button type='submit'>
                    submit
                </button>
            </form>   
        </div>
    )
}

export default SoundMachinePower