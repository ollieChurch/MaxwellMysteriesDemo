import puzzleData from '../pages/locationPage/puzzles/puzzleData'

function usePuzzleSetUp(location) {
    const locationPuzzles = puzzleData.[location]
    const puzzles = []
    const sceneTextDefaults = {
        demo: "The Professor's office... but where is the Professor?"
    }
    
    const defaultText = sceneTextDefaults.[location]

    class Puzzle {
        constructor({name, id, sceneText, specialIcon, puzzleVisible, puzzleLocked, component, cluesAvailable, clues}) {
            this.name = name
            this.id = id
            this.sceneText = sceneText
            this.specialIcon = specialIcon ? specialIcon : false
            this.puzzleVisible = puzzleVisible
            this.puzzleLocked = puzzleLocked
            this.component = component
            this.cluesAvailable = cluesAvailable
            this.clues = clues
            this.lastClueSent = -1
            this.isCompleted = false
        }
    }
    
    
    locationPuzzles.forEach(puzzle => {
        puzzles.push( new Puzzle(puzzle) )
    })
    
    return {puzzles, defaultText}
}

export default usePuzzleSetUp