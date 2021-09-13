import React, {useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'

function SoundwaveButton({btn, powered, unmount, updateUnmount, value, handleClick}) {
    const {play, playing} = useAudioPlayer({
        src: btn.audio,
        format: 'mp3',
        autoplay: false,
        onend: () => updateUnmount({name: 'safe', state: true})
    })

    useEffect(() => {
        if (playing && unmount.safe) {
            updateUnmount({name: 'safe', state: false})
        }
    },[playing, unmount, updateUnmount])
    
    return (
        <button
            className='soundMachine_buttons-btn'
            disabled={!powered}
            onClick={(event) => {
                !playing && play()
                handleClick(value.toString())
            }}
        >
            <img src={btn.img} alt='' />
        </button>
    )
}

export default SoundwaveButton