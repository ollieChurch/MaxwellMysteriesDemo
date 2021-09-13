import {useState, useEffect, useCallback} from 'react'

function useAnswerIndicators(answer) {
    const [numberOfIndicators] = useState(answer.length)
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [flashIndicator, setFlashIndicator] = useState(false)
    
    const setUpIndicators = useCallback(() => {
        const indicatorArr = []
        for (let i=0; i< numberOfIndicators; i++) {
            indicatorArr.push(false)
        }
        return indicatorArr
    }, [numberOfIndicators])
    
    const [indicatorFilled, setIndicatorFilled] = useState(setUpIndicators())    
    
    function updateIndicatorFilled(playerInput) {
        if (!wrongAnswer) {
            const newIndicatorArr = []
            const inputLength = playerInput.length + 1
            for (let i=0; i < inputLength; i++) {
                newIndicatorArr.push(true)
            }

            if (newIndicatorArr.length < numberOfIndicators) {
                for(let y=0; y < answer.length - (inputLength); y++) {
                    newIndicatorArr.push(false)
                }
            }
            setIndicatorFilled(newIndicatorArr)
        }
    }
    
    useEffect(() => {
        const timers = []
        if (wrongAnswer) {
            setFlashIndicator(true)
            timers.push(setTimeout(() => setFlashIndicator(false), 250))
            timers.push(setTimeout(() => setFlashIndicator(true), 500))   
            timers.push(setTimeout(() => setFlashIndicator(false), 750))
            timers.push(setTimeout(() => setFlashIndicator(true), 1000))
            timers.push(setTimeout(() => { 
                setWrongAnswer(false)
                setFlashIndicator(false)
                setIndicatorFilled(setUpIndicators())
            }, 1250))
        }
        
        return () => timers.forEach(timer => clearTimeout(timer))
    }, [wrongAnswer, setUpIndicators])
    
    return {wrongAnswer, setWrongAnswer, flashIndicator, indicatorFilled, updateIndicatorFilled}
}

export default useAnswerIndicators