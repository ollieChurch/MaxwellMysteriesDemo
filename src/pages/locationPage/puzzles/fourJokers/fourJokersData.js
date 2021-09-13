import TheDartsGame from './theDartsGame/TheDartsGame'
import TheCellarDoor from './TheCellarDoor'
import ThePokerBoard from './ThePokerBoard'
import TheCashRegister from './theCashRegister/TheCashRegister'
import TheBarrels from './TheBarrels'
import TheDice from './TheDice'
import TheDirectionalPad from './theDirectionalPad/TheDirectionalPad'
import Jack from './Jack'
import TheSafe from './theSafe/TheSafe'

const fourJokersData = [
    {
        name: 'The Darts Game',
        id: 'darts',
        sceneText: "Jack is always playing games... today it's darts",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheDartsGame />,
        cluesAvailable: true,
        clues: [
            {
                text: "You can use the info on page 6 to work out Jack's score and where best to aim to beat him. Make sure your score is better than Jack's but under the bust limit. If you request further hints Jack's score will be lowered."
            },
            {
                text: "Jack's score has been lowered to 65."
            },
            {
                text: "Jack's score has been lowered to 60."
            },
            {
                text: "Jack's score has been lowered to 55."
            },
            {
                text: "Jack's score has been lowered to 35. If you request another hint Jack's score will be reduced to 0."
            },
            {
                text: "Jack's score has been reduced to 0. Get a score between 1 and 100 to pass Jack's game."
            }
        ]
    },
    {
        name: 'The Cellar Door',
        id: 'cellarDoor',
        sceneText: "Door to the cellar, locked up tight",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheCellarDoor />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Cellar Door clue 1'
            },
            {
                text: 'This is Cellar Door clue 2'
            },
            {
                text: 'This is Cellar Door clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Cellar Door solution'
            }
        ]
    },
    {
        name: 'The Poker Board',
        id: 'pokerBoard',
        sceneText: "The poker championship leaderboard",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <ThePokerBoard />,
        cluesAvailable: false
    },
    {
        name: 'The Cash Register',
        id: 'cashRegister',
        sceneText: "A cash register, but is there any cash inside?",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheCashRegister />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Cash Register clue 1'
            },
            {
                text: 'This is Cash Register clue 2'
            },
            {
                text: 'This is Cash Register clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Cash Register solution'
            }
        ]
    },
    {
        name: 'The Barrels',
        id: 'barrels',
        sceneText: "An open door down to the cellar",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheBarrels />,
        cluesAvailable: false
    },
    {
        name: 'The Directional Pad',
        id: 'directionalPad',
        sceneText: "A hidden panel of directional buttons",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheDirectionalPad />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Directional Pad clue 1'
            },
            {
                text: 'This is Directional Pad clue 2'
            },
            {
                text: 'This is Directional Pad clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Directional Pad solution'
            }
        ]
    },
    {
        name: 'The Dice',
        id: 'dice',
        sceneText: "Roll the dice, it's your lucky day",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheDice />,
        cluesAvailable: false
    },
    {
        name: 'The Safe',
        id: 'safe',
        sceneText: "A safe hidden behind the mirror",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheSafe />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Safe clue 1'
            },
            {
                text: 'This is Safe clue 2'
            },
            {
                text: 'This is Safe clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Safe solution'
            }
        ]
    },
    {
        name: 'Speak To Jack',
        id: 'jack',
        specialIcon: 'fas fa-user-secret',
        sceneText: "if you don't have the camera then Jack doesn't want to talk",
        puzzleVisible: false,
        puzzleLocked: true,
        component: <Jack finalPuzzle />,
        cluesAvailable: false
    },
    {
        name: 'Jack',
        id: 'cameraJack',
        specialIcon: 'fas fa-user-secret',
        sceneText: "if you don't have the camera then Jack doesn't want to talk",
        puzzleVisible: false,
        puzzleLocked: true,
        component: <Jack finalPuzzle />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Jack solution'
            }
        ]
    },
    
]

export default fourJokersData