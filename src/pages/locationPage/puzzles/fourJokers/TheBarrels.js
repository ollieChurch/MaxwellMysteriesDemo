import React from 'react'

import barrelsImg from '../../../../images/puzzles/fourJokers/barrels.png'
import PuzzleReward from '../../../../components/PuzzleReward'

function TheBarrels() {
    return (
        <PuzzleReward
            imgSrc={barrelsImg}
            imgAlt='beer barrels with markings on the sides'
            text='Barrels full of the good stuff.'
        />
    )
}

export default TheBarrels