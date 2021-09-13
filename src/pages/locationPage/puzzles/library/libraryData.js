import ThePortrait from './thePortrait/ThePortrait'
import TheOpenPortrait from './thePortrait/TheOpenPortrait'
import TheBook from './TheBook'
import TheSign from './TheSign'
import TheChair from './TheChair'
import TheGlobe from './TheGlobe'
import TheFloorTile from './TheFloorTile'
import TheAnswerForm from './theAnswerForm/TheAnswerForm'
import TheLibrarian from './TheLibrarian'

const libraryData = [
    {
        name: 'The Portrait',
        id: 'portrait',
        sceneText: "A beautiful painting",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <ThePortrait />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Portrait clue 1'
            },
            {
                text: 'This is Portrait clue 2'
            },
            {
                text: 'This is Portrait clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Portrait solution'
            }
        ]
    },
    {
        name: 'The Open Portrait',
        id: 'openPortrait',
        sceneText: "This portrait was hiding something",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheOpenPortrait />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Open Portrait clue 1'
            },
            {
                text: 'This is Open Portrait clue 2'
            },
            {
                text: 'This is Open Portrait clue 3'
            },
            {
                text: 'This is Open Portrait solution',
                image: 'https://via.placeholder.com/275'
            }
        ]
    },
    {
        name: 'The Book',
        id: 'book',
        sceneText: "An ancient text. I wonder what it says",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheBook />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Book clue 1'
            },
            {
                text: 'This is Book clue 2'
            },
            {
                text: 'This is Book clue 3'
            },
            {
                text: 'This is Book solution'
            }
        ]
    },
    {
        name: 'The Sign',
        id: 'sign',
        sceneText: "If you're looking for a sign, this is it.",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheSign />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Sign clue 1'
            },
            {
                text: 'This is Sign clue 2'
            },
            {
                text: 'This is Sign clue 3'
            },
            {
                text: 'This is Sign solution'
            }
        ]
    },
    {
        name: 'The Messages',
        id: 'chair',
        sceneText: "A seat in front of the fire. Toasty",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheChair />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Messages clue 1'
            },
            {
                text: 'This is Messages clue 2'
            },
            {
                text: 'This is Messages clue 3'
            },
            {
                text: 'This is Messages solution'
            }
        ]
    },
    {
        name: 'The Globe',
        id: 'globe',
        sceneText: "Set a course for justice",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheGlobe />,
        cluesAvailable: false,
    },
    {
        name: 'The Floor Tile',
        id: 'floorTile',
        sceneText: "The floor is badly scratched",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheFloorTile />,
        cluesAvailable: false,
    },
    {
        name: 'The Answer Form',
        id: 'answerForm',
        sceneText: "Books. Books everywhere. But which one do I need?",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheAnswerForm />,
        cluesAvailable: false,
    },
    {
        name: 'The Librarian',
        id: 'librarian',
        sceneText: "The librarian gives you an icy stare. No book request form? No talking.",
        specialIcon: 'fas fa-user-lock',
        puzzleVisible: true,
        puzzleLocked: true,
        component: <TheLibrarian finalPuzzle />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Librarian clue 1'
            },
            {
                text: 'This is Librarian clue 2'
            },
            {
                text: 'This is Librarian clue 3'
            },
            {
                text: 'This is Librarian solution'
            }
        ]
    }
]

export default libraryData