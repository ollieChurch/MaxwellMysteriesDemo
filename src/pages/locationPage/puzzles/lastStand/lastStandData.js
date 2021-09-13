import TheCogs from './TheCogs'
import TheClock from './TheClock'
import TheCrates from './TheCrates'
import SwitchesPassword from './theSwitches/SwitchesPassword'
import TheSwitches from './theSwitches/TheSwitches'
import TheFlags from './theFlags/TheFlags'
import FlagsPassword from './theFlags/FlagsPassword'
import TheToolbox from './TheToolbox'
import TheLockedDoor from './TheLockedDoor'

const lastStandData = [
    {
        name: 'The Cogs',
        id: 'cogs',
        sceneText: "The wonders of modern machinery",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheCogs />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Cogs clue 1'
            },
            {
                text: 'This is Cogs clue 2'
            },
            {
                text: 'This is Cogs clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Cogs solution'
            }
        ]
    },
    {
        name: 'The Clock',
        id: 'clock',
        sceneText: "Time waits for no man",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheClock />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Clock clue 1'
            },
            {
                text: 'This is Clock clue 2'
            },
            {
                text: 'This is Clock clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Clock solution'
            }
        ]
    },
    {
        name: 'The Crates',
        id: 'crates',
        sceneText: "Precious cargo",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheCrates />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Crates clue 1'
            },
            {
                text: 'This is Crates clue 2'
            },
            {
                text: 'This is Crates clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Crates solution'
            }
        ]
    },
    {
        name: 'The Control Box',
        id: 'switchesPassword',
        sceneText: "Are you sure you want to mess with the electrics?",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <SwitchesPassword />,
        cluesAvailable: false
    },
    {
        name: 'The Switches',
        id: 'switches',
        sceneText: "A panel to get the power going",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheSwitches />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Switches clue 1'
            },
            {
                text: 'This is Switches clue 2'
            },
            {
                text: 'This is Switches clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Switches solution'
            }
        ]
    },
    {
        name: 'The Site Office',
        id: 'flagsPassword',
        sceneText: "The site office is locked",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <FlagsPassword />,
        cluesAvailable: false
    },
    {
        name: 'The Flags',
        id: 'flags',
        sceneText: "The office is open and signals are coming in",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheFlags />,
        cluesAvailable: false
    },
    {
        name: 'The Toolbox',
        id: 'toolbox',
        sceneText: "The tools in this toolbox are locked up tight",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheToolbox />,
        cluesAvailable: false
    },
    {
        name: 'The Locked Door',
        id: 'lockedDoor',
        sceneText: "The mechanism is broken, I need a wrench to crank it manually",
        specialIcon: 'fas fa-cogs',
        puzzleVisible: true,
        puzzleLocked: true,
        component: <TheLockedDoor finalPuzzle />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Locked Door clue 1'
            },
            {
                text: 'This is Locked Door clue 2'
            },
            {
                text: 'This is Locked Door clue 3',
                image: 'https://via.placeholder.com/275'
                
            },
            {
                text: 'This is Locked Door solution'
            }
        ]
    },
    
]

export default lastStandData