import React, { useEffect, useState } from 'react'

const Suggestions = ({ setOpen, setMsg }) => {
    const [satisfied, setSatisfied] = useState(false)
    const [text, setText] = useState("")

    useEffect(() => {
        if (text.length > 0) {
            setSatisfied(true)
            console.log('satisfied')
        }
    }, [text]);
    const handleSubmit = () => {
        setOpen(false);
        setMsg("Thanks for your valuable suggestion!")
    }
    return (
        <div className='inputBox'>
            <p className='heading'>Share your <b>Suggestions</b> with us for a change to earn rewards!!</p>

            <label for="dropDownSelect" className='label'>Choose a Section:</label>
            <select className="form-select" aria-label="Default select example" id='dropDownSelect'>
                <option selected>select</option>
                <option value="concept-cards">concept cards</option>
                <option value="interviews">interviews</option>
                <option value="practice-questions">practice questions</option>
                <option value="quizzes">quizzes</option>
            </select>
            <label for="exampleFormControlTextarea1" className="label required">Describe The Suggestion In Detail:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>

            {
                satisfied ?
                    (<input type="submit" className='submitBtn' onClick={() => handleSubmit()} />) :
                    (<input type="submit" className='submitBtnDisabled' />)
            }
        </div>
    )
}

export default Suggestions
