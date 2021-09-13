import React, {useState, useContext, useEffect} from 'react'
import {UnmountContext} from '../../../../../context/UnmountContext'

import answerData from '../../answerData'

function AnswerFormPuzzle({setPuzzleSolved}) {
    const [answer] = useState(answerData.answerForm)
    const emptyForm = {
        category: '',
        subCategory: '',
        title: '',
        author: ''
    }
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [playerInput, setPlayerInput] = useState(emptyForm)
    const {unmount, updateUnmount} = useContext(UnmountContext)
    let timer
    
    function handleChange(event) {
        const {name, value} = event.target
        if (!wrongAnswer) {
            setPlayerInput(prevInput => {
                return {
                    ...prevInput,
                    [name]: value
                }
            })
        }
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        const {category, subCategory, title, author} = playerInput
        console.log(playerInput)
        if (
            category.toLowerCase() === answer.category &&
            subCategory.toLowerCase() === answer.subCategory &&
            title.toLowerCase().split(' ').join('') === answer.title.split(' ').join('')  &&
            author.toLowerCase().split(' ').join('') === answer.author.split(' ').join('') 
        ) {
            setPuzzleSolved(true)
        } else {
            setWrongAnswer(true)
            timer = setTimeout(() => {
                setWrongAnswer(false)
                setPlayerInput(emptyForm)
            }, 5000) 
        }
    }
   
useEffect(() => {
   if (unmount.safe === wrongAnswer) { 
        updateUnmount({name: 'safe', state: !wrongAnswer}) 
    }
}, [wrongAnswer, unmount, updateUnmount, timer])
    
    return (
        <form className="puzzleContainer" onSubmit={handleSubmit} autoComplete="off">
            <div className='answerFormContainer'>
                <h2 className='answerForm_title'>New York Public Library</h2>
                <p className='answerForm_subTitle'>Please take your filled out form to the librarian who will help find your book.</p>
                
                <div className='answerForm_form'>
                    <div className='answerForm_form_classification'>
                        Classification:
                        <div>
                            <input 
                                className='input-left' 
                                name='category' 
                                placeholder='category' 
                                value={playerInput.category}
                                onChange={handleChange}
                                size='8'
                            />.
                            <input
                                className='input-right'
                                name='subCategory'
                                placeholder='sub-category'
                                value={playerInput.subCategory}
                                onChange={handleChange}
                                size='12'
                            />
                        </div>
                    </div>
                    <div className='answerForm_form_bookDetails'>
                        <input
                            className='input-left'
                            name='title'
                            placeholder='book title'
                            value={playerInput.title}
                            onChange={handleChange}
                        />
                        <input
                            className='input-right'
                            name='author'
                            placeholder='author'
                            value={playerInput.author}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <p className='answerForm_endNote'><em>The librarian would like to remind you to remain quiet at all times.</em></p>
            </div>
            
            {wrongAnswer ? 
                <p className='puzzlePopUp_text puzzlePopUp_text-answerForm'>The librarian will not appreciate having her time wasted. Best to double check you have filled out the form correctly.</p> :
                <button className='answerForm_btn' type='submit'>Submit</button>
            }
        </form>
    )
}

export default AnswerFormPuzzle