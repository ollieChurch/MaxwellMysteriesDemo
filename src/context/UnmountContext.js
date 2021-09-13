import React, {useState, createContext} from 'react'
import {AudioPlayerProvider} from 'react-use-audio-player'
const UnmountContext = createContext()

function UnmountContextProvider({children}) {
    const [unmount, setUnmount] = useState({
        safe: true,
        waiting: false
    })
    
    function updateUnmount(action) {
        setUnmount(prevState => {
            return {...prevState, [action.name]: action.state}
        })
    }
    
    return (
        <UnmountContext.Provider value={{unmount, updateUnmount}}>
            <AudioPlayerProvider>
                {children}
            </AudioPlayerProvider>
        </UnmountContext.Provider>
    )
}

export {UnmountContextProvider, UnmountContext}