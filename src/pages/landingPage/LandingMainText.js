import React from 'react'

import PaperPanel from '../../components/PaperPanel'
import TextParagraphs from '../../components/TextParagraphs'

function LandingMainText({gameState}) {
    let titleText = ''
    let bodyText = []
        
    if (gameState === 'winGame') {
        titleText = 'You Solved The Case!'
        bodyText = [
            'Thanks to you we know The Professor is safe! Well done on completing this demo.',

            'There are hours of fun to be had helping Larry Maxwell on his full cases; The Disappearing Diamond and The Kidnapped Professor, with many more to come.',

            'You can find out more, and purchase a game at Paradox Parlours.',

            'See you at the next mystery!'
        ]
    } else {
        titleText = 'Instructions - Read Me First'
        bodyText = [
            'Private Investigator Larry Maxwell needs your help on the latest case! Professor Foxworth has gone missing and his office turned over by underworld goons. Can you search the mess for clues?',

            "This is a playable demo for the Maxwell Mysteries play-at-home puzzle game series. Everything you need to play this mini case will be on screen, though a pencil and paper may be handy.",

            'Remember every detective needs a little help sometimes. Even Larry. If you need a nudge in the right direction, you can request a hint using the NYPD Helpdesk at each location.',

            'Good luck!'
        ]       
    }
        
    return (
        <PaperPanel extraClasses={`landing_infoPanel`}>
            <h4 className="welcome">
                {gameState === 'winGame' ? 'Congratulatons' : 'Welcome'} Detectives
            </h4>
            <h3 className={`${gameState}_title`}>{titleText}</h3>
            <TextParagraphs extraClasses={`${gameState}_text`} text={bodyText} />
        </PaperPanel>
    )
}

export default LandingMainText