import React, {useState, useContext, useEffect} from 'react'
import {useAudioPlayer} from 'react-use-audio-player'
import '../../../../css/puzzles/office/TheVoiceRecorder.css'

import professorVoice from '../../../../audio/audioFiles/professorRecording.mp3'
//import voiceRecorderImg from 

import {UnmountContext} from '../../../../context/UnmountContext'
import {BackgroundMusicContext} from '../../../../context/BackgroundMusicContext'

function TheVoiceRecorder() {
    const voiceRecorderImg = 'https://via.placeholder.com/600x500' 
    const [showTranscript, setShowTranscript] = useState(false)
    
    const {fadeBackgroundAudio} = useContext(BackgroundMusicContext)
    const {unmount, updateUnmount} = useContext(UnmountContext)
    const {togglePlayPause, loading, playing} = useAudioPlayer({
        src: professorVoice,
        format: 'mp3',
        autoplay: false,
        onend: () => {
            fadeBackgroundAudio('UP')
            updateUnmount({name: 'safe', state: true})
        }
    })

    useEffect(() => {
        if (unmount.safe === playing) { 
            updateUnmount({name: 'safe', state: !playing}) 
        }
    }, [playing, unmount, updateUnmount])
    
    function toggleAudio() {
        const action = playing ? 'UP' : 'OUT'
        fadeBackgroundAudio(action)
        togglePlayPause()
        !showTranscript && setShowTranscript(true) 
    }
    
    return (
        <div className="puzzleContainer">
            <img className="puzzlePopUp_img" src={voiceRecorderImg} alt="a voice recorder" />
            {loading ? 
                <p>loading audio...</p> :
                <button
                    className='voiceRecorder_btn'
                    onClick={toggleAudio}
                >
                    {playing ? 'Pause' : 'Play'} Recording
                </button>
            }
            <p 
                className="puzzlePopUp_text puzzlePopUp_text-voiceRecorder"
                style={{display: showTranscript ? 'block' : 'none'}}
            >
            After hanging my hat on the coat stand I moved to water the plant. It had been a long day but I was still no closer to solving this riddle. I turned to stare at the unfinished equation on the left side of the chalkboard. That’s when inspiration struck. I sat down in my desk chair to start work, but not before retrieving my journal from the top right of my bookcase.
            </p>     
        </div>
    )
}

export default TheVoiceRecorder