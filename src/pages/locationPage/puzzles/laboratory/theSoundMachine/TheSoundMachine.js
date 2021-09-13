import React, {useState, useContext, useEffect} from 'react'
import {AudioPlayerProvider} from 'react-use-audio-player'
import '../../../../../css/puzzles/laboratory/TheSoundMachine.css'

import {UnmountContext} from '../../../../../context/UnmountContext'
import {LocationPuzzlesContext} from '../../../../../context/LocationPuzzlesContext'

import BrassPanel from '../../../../../components/BrassPanel'
import answerData from '../../answerData'

import soundwaveData from './soundwaveData'
import SoundwaveButton from './SoundwaveButton'
import SoundMachinePower from './SoundMachinePower'

function TheSoundMachine() {
    const [answer] = useState(answerData.soundMachineButtons)
    const [powered, setPowered] = useState(false)
    const [rewardUnlocked, setRewardUnlocked] = useState(false)
    const [text, setText] = useState('')
    const {unmount, updateUnmount} = useContext(UnmountContext)
    const {updatePuzzleList} = useContext(LocationPuzzlesContext)
        
    function handleClick(value) {
        setText(value)
    }
    
    useEffect(() => {
        if (powered && !rewardUnlocked) {
            updatePuzzleList({type: 'UNLOCK_PUZZLE', id: 'prototypeTwo'})
            setRewardUnlocked(true)
        }
    }, [powered, rewardUnlocked, updatePuzzleList, answer])
    
    return (
        <div className='puzzleContainer'>
            <BrassPanel extraClasses='soundMachineContainer'>
                <div className='soundMachine_buttons'>
                    {soundwaveData.map((btn, index) => {
                        return (
                            <AudioPlayerProvider key={index}>
                                <SoundwaveButton 
                                    btn={btn}
                                    powered={powered}
                                    unmount={unmount}
                                    updateUnmount={updateUnmount}
                                    value={btn.text}
                                    handleClick={handleClick}
                                />
                            </AudioPlayerProvider>
                        )
                    })}
                </div>
                <SoundMachinePower powered={powered} setPowered={setPowered} updateUnmount={updateUnmount}/>
            </BrassPanel>
            
            <p className='puzzlePopUp_text puzzlePopUp_text-soundMachine'>
                {text ? text : "The Professor's sound gadget. Useful for something I'm sure."}
            </p>
        </div>
             
    )
}

export default TheSoundMachine