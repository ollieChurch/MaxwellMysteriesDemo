import React, {useState, useContext} from 'react'
import { useAudioPlayer } from 'react-use-audio-player'
import '../css/components/InfoPopUp.css'

import paperSFX from '../audio/sfx/paper.mp3'
import {UnmountContext} from '../context/UnmountContext'

import PaperPanel from './PaperPanel'

function InfoPopUp({children, isPopUpOpen, togglePopUp}) {
    const [playState, setPlayState] = useState(false)
    const {updateUnmount} = useContext(UnmountContext)

    const {play, volume} = useAudioPlayer({
        src: paperSFX,
        format: 'mp3',
        autoplay: false,
        onend: () => { updateUnmount({name: 'safe', state: true}) },
        onplay: () => { updateUnmount({name: 'safe', state: false}) }
    })

    volume(0.5)

    if (isPopUpOpen !== playState) {
        isPopUpOpen && play()
        setPlayState(isPopUpOpen)
    }

    return (
        <>
            {isPopUpOpen &&
                <div className="infoPopUpContainer">
                    <div className="infoPopUp_background" onClick={togglePopUp}></div>
                    <PaperPanel extraClasses="infoPopUp">
                        <button className="infoPopUp_close" onClick={togglePopUp}>X</button>
                        {children}
                    </PaperPanel>
                </div>
            }
        </>
    )
}

export default InfoPopUp