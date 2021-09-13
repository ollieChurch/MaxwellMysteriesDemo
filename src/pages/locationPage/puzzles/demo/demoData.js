import TheTypewriter from './theTypewriter/TheTypewriter'
import TheBookcase from './TheBookcase'
import TheButtons from './theButtons/TheButtons'
import TheFilingCabinet from './theFilingCabinet/TheFilingCabinet'
import TheVoiceRecorder from './TheVoiceRecorder'
import TheCertificate from './TheCertificate'
import TheTelephone from './theTelephone/TheTelephone'
import TheLockedDrawer from './TheLockedDrawer'

const demoData = [
    {
        name: 'The Typewriter',
        id: 'typewriter',
        sceneText: "A typewriter. Useful for typing",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheTypewriter />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Typewriter clue 1'
            },
            {
                text: 'This is Typewriter clue 2'
            },
            {
                text: 'This is Typewriter clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Typewriter solution'
            }
        ]
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
        sceneText: "A hidden button panel! Intriguing...",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheButtons />,
        cluesAvailable: false,
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
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheFilingCabinet />,
        cluesAvailable: false
    },
    {
        name: 'The Voice Recorder',
        id: 'voiceRecorder',
        sceneText: "The bookcase has moved to reveal a voice recorder",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheVoiceRecorder />,
        cluesAvailable: false,
        clues: [
            {
                text: 'Listen to the voice recording carefully. Can you use what the Professor is saying to help with the filing cabinet?'
            }
        ]
    },
    {
        name: 'The Certificate',
        id: 'certificate',
        sceneText: "The Professor is very clever",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheCertificate />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Certificate clue 1'
            },
            {
                text: 'This is Certificate clue 2',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Certificate clue 3'
            },
            {
                text: 'This is Certificate solution'
            }
        ]
    },
    {
        name: 'The Telephone',
        id: 'telephone',
        sceneText: "**ring-ring** **ring-ring**",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheTelephone />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Phone clue 1'
            },
            {
                text: 'This is Phone clue 2'
            },
            {
                text: 'This is Phone clue 3'
            },
            {
                text: 'This is Phone solution'
            }
        ]
    },
    {
        name: 'The Locked Drawer',
        id: 'drawer',
        sceneText: "This drawer is locked. It needs a key.",
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