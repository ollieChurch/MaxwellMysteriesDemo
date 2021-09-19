import TheTypewriter from './theTypewriter/TheTypewriter'
import TheBookcase from './TheBookcase'
import TheButtons from './theButtons/TheButtons'
import TheFilingCabinet from './TheFilingCabinet'
import TheTelephone from './theTelephone/TheTelephone'
import TheLockedDrawer from './TheLockedDrawer'
import TheFlags from './TheFlags'
import TheTelescope from './TheTelescope'

import chessSolution from '../../../../images/clues/chessSolution.png'
import telescopeSolution from '../../../../images/puzzles/demo/stars.png'
import phoneSolution from '../../../../images/clues/phoneSolution.png'


const demoData = [
    {
        name: 'The Typewriter',
        id: 'typewriter',
        sceneText: "A typewriter. Useful for typing",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheTypewriter />,
        cluesAvailable: false
    },
    {
        name: 'The Bookcase',
        id: 'bookcase',
        sceneText: "Everything I learned, I read it in a book",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheBookcase />,
        cluesAvailable: false
    },
    {
        name: 'The Buttons',
        id: 'buttons',
        sceneText: "What a funny set of buttons, I wonder what they do...",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheButtons />,
        cluesAvailable: true,
        clues: [
            {
                text: 'Each button has a different chess symbol on it. Have you seen those symbols anywhere else?'
            },
            {
                text: "Check out the secret compartment in the professor's desk. Can the machine inside help you with which symbols to press?"
            },
            {
                text: 'The machine inside the desk shows you 4 chess symbols in an order indicated by the 4 lights. Press the buttons in that order. If you ask for another hint on this puzzle you will receive the solution.'
            },
            {
                text: 'Press the buttons in this order.',
                image: chessSolution
                
            }
        ]
    },
    {
        name: 'The Filing Cabinet',
        id: 'filing',
        sceneText: "Everything filed away in it's proper place",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheFilingCabinet />,
        cluesAvailable: false,
        clues: [
            {
                text: 'The page in the filing cabinet has a drawing of a typewriter in the corner. Maybe it can help us find a password to type on the typewriter.'
            },
            {
                text: "Some of the letters on the book's page seem highlighted in red. Can you use that to find a password for the typewriter?"
            },
            {
                text: 'Take the red letters in order to form a word for the typewriter. If you ask for another hint on this puzzle you will receive the solution.'
            },
            {
                text: 'The highlighted letters spell ASTROLOGY. Type this into the typewriter.'
            }
        ]
    },
    {
        name: 'The Telescope',
        id: 'telescope',
        sceneText: "Are we really alone in the universe?",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheTelescope />,
        cluesAvailable: false,
        clues: [
            {
                text: "Adjust the sliders until the telescope's image comes into focus. Can this help you find a number code for the telephone?"
            },
            {
                text: "When in focus you can see this image. Can you find something else to help you with the order?",
                image: telescopeSolution
            },
            {
                text: "To open the telephone, dial the numbers from the telescope in the order shown on the books. If you ask for another hint on this puzzle you will receive the solution."
            },
            {
                text: "Dial the numbers on the telephone in this order: 13856.",
                image: phoneSolution
            }
        ]
    },
    {
        name: 'The Flags',
        id: 'flags',
        sceneText: "A secret panel in the side of the desk",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheFlags />,
        cluesAvailable: false
    },
    {
        name: 'The Telephone',
        id: 'telephone',
        sceneText: "**ring-ring** **ring-ring**",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheTelephone />,
        cluesAvailable: false
    },
    {
        name: 'The Locked Drawer',
        id: 'drawer',
        sceneText: "This picture is fixed to the wall, and it has a small keyhole!",
        specialIcon: 'fas fa-lock',
        puzzleVisible: true,
        puzzleLocked: true,
        component: <TheLockedDrawer finalPuzzle />,
        cluesAvailable: false,
        clues: [
            {
                text: 'Click on the key in your inventory and then select the padlock to use it in the keyhole.'
            }
        ]
    }
]

export default demoData