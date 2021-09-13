import React from 'react'

import pokerImg from '../../../../images/puzzles/fourJokers/pokerBoard.png'
import PuzzleReward from '../../../../components/PuzzleReward'

function ThePokerBoard() {
    return (
        <PuzzleReward
            imgSrc={pokerImg}
            imgAlt='the poker championship leaderboard'
            text='The leaderboard for the last poker tournament. The winner takes it all.'
        />
    )
}

export default ThePokerBoard