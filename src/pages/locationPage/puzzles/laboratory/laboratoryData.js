import TheChalkboard from './TheChalkboard'
import TheSoundMachine from './theSoundMachine/TheSoundMachine'
import TheLockBox from './TheLockBox'
import TheSimonMachine from './theSimonMachine/TheSimonMachine'
import PrototypeResults from './PrototypeResults'
import ThePipesPassword from './thePipes/ThePipesPassword'
import ThePipes from './thePipes/ThePipes'
import TheChainedCupboard from './TheChainedCupboard'

const laboratoryData = [
    {
        name: 'The TheChalkboard',
        id: 'chalkboard',
        sceneText: "A chalkboard full of notes",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheChalkboard />,
        cluesAvailable: false
    },
    {
        name: 'The Sound Machine',
        id: 'soundMachine',
        sceneText: "A strange machine with lots of buttons",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheSoundMachine />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Sound Machine clue 1'
            },
            {
                text: 'This is Sound Machine clue 2'
            },
            {
                text: 'This is Sound Machine clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Sound Machine solution'
            }
        ]
    },
    {
        name: 'The Lock Box',
        id: 'lockBox',
        sceneText: "A strong lock box with something heavy inside",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <TheLockBox />,
        cluesAvailable: true,
        clues: [
            {
                text: 'This is Lock Box clue 1'
            },
            {
                text: 'This is Lock Box clue 2'
            },
            {
                text: 'This is Lock Box clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Lock Box solution'
            }
        ] 
    },
    {
        name: 'The Simon Machine',
        id: 'simonMachine',
        sceneText: "Another of the Professor's clever contraptions",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <TheSimonMachine />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Simon Machine clue 1'
            },
            {
                text: 'This is Simon Machine clue 2'
            },
            {
                text: 'This is Simon Machine clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Simon Machine solution'
            }
        ]
    },
    {
        name: 'The Prototype Results',
        id: 'prototypeOne',
        sceneText: "A collection of important papers",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <PrototypeResults option='1'/>,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Prototype Results clue 1'
            },
            {
                text: 'This is Prototype Results clue 2'
            },
            {
                text: 'This is Prototype Results clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Prototype Results solution'
            }
        ]
    },
    {
        name: 'Prototype Results 2',
        id: 'prototypeTwo',
        sceneText: "The Professor's laboratory. A place of science.",
        puzzleVisible: true,
        puzzleLocked: true,
        component: <PrototypeResults option='2'/>,
        cluesAvailable: false
    },
    {
        name: 'The Pipes Password',
        id: 'pipesPassword',
        sceneText: "Pipes for transporting chemicals. But the pump isn't working",
        puzzleVisible: true,
        puzzleLocked: false,
        component: <ThePipesPassword />,
        cluesAvailable: false
    },
    {
        name: 'The Pipes',
        id: 'pipes',
        sceneText: "Pipes for transporting chemicals",
        puzzleVisible: false,
        puzzleLocked: false,
        component: <ThePipes />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Pipes clue 1'
            },
            {
                text: 'This is Pipes clue 2'
            },
            {
                text: 'This is Pipes clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Pipes solution'
            }
        ]
    },
    {
        name: 'The Chained Cupboard',
        id: 'chainedCupboard',
        sceneText: "This cupboard is held closed by a chain",
        specialIcon: 'fas fa-link',
        puzzleVisible: true,
        puzzleLocked: true,
        component: <TheChainedCupboard finalPuzzle />,
        cluesAvailable: false,
        clues: [
            {
                text: 'This is Chained Cupboard clue 1'
            },
            {
                text: 'This is Chained Cupboard clue 2'
            },
            {
                text: 'This is Chained Cupboard clue 3',
                image: 'https://via.placeholder.com/275'
            },
            {
                text: 'This is Chained Cupboard solution'
            }
        ]
    }
]

export default laboratoryData