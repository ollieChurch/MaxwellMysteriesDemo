import TheTypewriter from './theTypewriter/TheTypewriter'
import TheBookcase from './TheBookcase'
import TheButtons from './theButtons/TheButtons'
import TheFilingCabinet from './TheFilingCabinet'
import TheTelephone from './theTelephone/TheTelephone'
import TheLockedDrawer from './TheLockedDrawer'
import TheFlags from './TheFlags'
import TheTelescope from './TheTelescope'

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
                text: 'This is Buttons clue 1',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Buttons clue 2'
            },
            {
                text: 'This is Buttons clue 3'
            },
            {
                text: 'This is Buttons solution'
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
                text: 'This is Filing Cabinet clue 1',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Filing Cabinet clue 2'
            },
            {
                text: 'This is Filing Cabinet clue 3'
            },
            {
                text: 'This is Filing Cabinet solution'
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
                text: 'Listen to the voice recording carefully. Can you use what the Professor is saying to help with the filing cabinet?'
            }
        ]
    },
    {
        name: 'The Flags',
        id: 'flags',
        sceneText: "A strange device hangs on the wall",
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
        sceneText: "A secret compartment. It needs a key.",
        specialIcon: 'fas fa-lock',
        puzzleVisible: true,
        puzzleLocked: true,
        component: <TheLockedDrawer finalPuzzle />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Locked Drawer clue 1'
            },
            {
                text: 'This is Locked Drawer clue 2'
            },
            {
                text: 'This is Locked Drawer clue 3'
            },
            {
                text: 'This is Locked Drawer solution'
            }
        ]
    }
]

export default demoData