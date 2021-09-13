import React from 'react'
import '../css/components/GameHeader.css'
import useExtraClasses from '../hooks/useExtraClasses'

function GameHeader({children='', extraClasses='', loginPage}) {
    const classString = useExtraClasses(extraClasses)
    
    return (
        <header className={classString}>
            <h1>Maxwell Mysteries</h1>
            {children}
        </header>
    )
}

export default GameHeader